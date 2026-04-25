"use server";

import { Resend } from "resend";
import { ReactElement } from "react";
import { ChoirEmail } from "@/components/templates/choir-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendChoirEmail(data: {
    name: string;
    email: string;
    phone: string;
    vocalPart: string;
    experience: string;
    canReadMusic: string;
    availability: string;
}) {
    try {
        const { error } = await resend.emails.send({
            from: "Elim Choir Ministry <choir@vaspayment.us>",
            to: [process.env.CHOIR_LEADER_EMAIL || "elimsanctuarypayment2020@gmail.com"],
            subject: `[Choir App] ${data.vocalPart} - ${data.name}`,
            react: (<ChoirEmail {...data} />) as ReactElement,
        });

        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch (err) {
        console.error("Choir Action Error:", err);
        return { success: false, error: "Submission failed." };
    }
}