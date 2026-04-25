"use server";

import { Resend } from "resend";
import { AppointmentEmail } from "@/components/templates/appointment-email";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAppointmentEmail(data: {
    name: string;
    email: string;
    phone: string;
    purpose: string;
    dateTime: string;
    source: string;
}) {
    try {
        const { error } = await resend.emails.send({
            from: "RCCG - Elim Sanctuary <appointments@vaspayment.us>",
            to: [process.env.PASTOR_EMAIL || "elimsanctuarypayment2020@gmail.com"],
            subject: `Appointment Request: ${data.name}`,
            react: (
                <AppointmentEmail
                    name={data.name}
                    email={data.email}
                    phone={data.phone}
                    purpose={data.purpose}
                    dateTime={data.dateTime}
                    source={data.source}
                />
            ) as ReactElement,
        });

        if (error) return { success: false, error: error.message };
        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
    }
}