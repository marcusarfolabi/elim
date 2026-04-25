"use server";

import { Resend } from "resend";
import { TestimonyEmail } from "@/components/templates/testimony-email";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendTestimonyEmail(data: {
    name: string;
    email?: string;
    phone: string;
    category: string;
    title?: string;
    testimony: string;
    canShare: string;
}) {
    try {
        const { error } = await resend.emails.send({
            from: "Church Testimonies <testimonies@vaspayment.us>",
            to: [process.env.PASTOR_EMAIL || "elimsanctuarypayment2020@gmail.com"],
            subject: `[Testimony - ${data.category}] ${data.name}`,
            react: (
                <TestimonyEmail {...data} />
            ) as ReactElement,
        });

        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch (err) {
        console.error("Testimony Submission Error:", err);
        return { success: false, error: "Unable to submit testimony at this time." };
    }
}