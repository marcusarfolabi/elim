"use server";

import { revalidatePath } from "next/cache";
import type { ReactElement } from "react";
import { Resend } from "resend";
import { z } from "zod";
import { TestimonyEmail } from "@/components/templates/testimony-email";
import { createClient } from "@/lib/supabase";

const testimonyInputSchema = z.object({
    name: z.string().trim().min(2),
    email: z.string().trim().email().optional().or(z.literal("")),
    phone: z.string().trim().min(10),
    category: z.string().trim().min(1),
    title: z.string().trim().optional(),
    testimony: z.string().trim().min(20),
    canShare: z.enum(["yes", "no"]),
});

type SaveTestimonyResult =
    | { success: true; emailWarning?: string }
    | { success: false; error: string };

export async function saveTestimony(input: unknown): Promise<SaveTestimonyResult> {
    const parsed = testimonyInputSchema.safeParse(input);
    if (!parsed.success) {
        return {
            success: false,
            error: "Please review your details and sharing preference.",
        };
    }
    const data = parsed.data;

    try {
        const supabase = createClient();
        const { error } = await supabase
            .from("testimonies")
            .insert({
                name: data.name,
                email: data.email,
                phone: data.phone,
                category: data.category,
                title: data.title,
                testimony: data.testimony,
                can_share: data.canShare,
            });

        if (error) {
            console.error("Failed to save testimony to Supabase:", error);
            return {
                success: false,
                error: "Failed to save testimony to database.",
            };
        }
    } catch (err) {
        console.error("Failed to save testimony to Supabase:", err);
        return {
            success: false,
            error: "Failed to save testimony to database.",
        };
    }

    if (data.canShare === "yes") {
        revalidatePath("/", "page");
        revalidatePath("/testimonies", "page");
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const systemEmail = process.env.SYSTEM_EMAIL;
    if (!resendApiKey || !systemEmail) {
        console.error(
            "Testimony email notifications require RESEND_API_KEY and SYSTEM_EMAIL.",
        );
        return {
            success: true,
            emailWarning:
                "Your testimony was saved, but the system administrator email could not be sent.",
        };
    }

    try {
        const resend = new Resend(resendApiKey);
        const { error } = await resend.emails.send({
            from: "Elim Sanctuary <elim-sanctuary@vaspayment.us>",
            to: [systemEmail],
            ...(data.email ? { replyTo: data.email } : {}),
            subject: `New testimony submission: ${data.category}`,
            react: (
                <TestimonyEmail
                    name={data.name}
                    email={data.email}
                    phone={data.phone}
                    category={data.category}
                    title={data.title}
                    testimony={data.testimony}
                    canShare={data.canShare}
                />
            ) as ReactElement,
        });

        if (error) {
            console.error("Failed to send testimony notification:", error);
            return {
                success: true,
                emailWarning:
                    "Your testimony was saved, but the system administrator email could not be sent.",
            };
        }
    } catch (err) {
        console.error("Failed to send testimony notification:", err);
        return {
            success: true,
            emailWarning:
                "Your testimony was saved, but the system administrator email could not be sent.",
        };
    }

    return { success: true };
}