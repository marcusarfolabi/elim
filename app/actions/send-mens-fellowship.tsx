"use server";

import { Resend } from "resend";
import { ReactElement } from "react";
import { MensFellowshipEmail } from "@/components/templates/mens-fellowship-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMensFellowshipEmail(data: {
    name: string;
    email: string;
    phone: string;
    maritalStatus: string;
    anniversary?: string;
    occupation: string;
    serviceArea: string;
}) {
    try {
        const { error } = await resend.emails.send({
            from: "Men's Fellowship <fellowship@vaspayment.us>",
            to: [process.env.MENS_PRESIDENT_EMAIL || "edgevarsity0605@gmail.com"],
            subject: `New Member Interest: ${data.name}`,
            react: (
                <MensFellowshipEmail {...data} />
            ) as ReactElement,
        });

        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false, error: "Failed to process request." };
    }
}