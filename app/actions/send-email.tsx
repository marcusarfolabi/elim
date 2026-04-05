"use server";

import { EmailTemplate } from "@/components/templates/email";
import { Resend } from "resend";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSalvationEmail(data: {
  name: string;
  email: string;
  phone: string;
  request: string;
}) {
  try {
    const { error } = await resend.emails.send({
      from: "RCCG - Elim Sanctuary <elim-sanctuary@vaspayment.us>",
      to: [process.env.PASTOR_EMAIL || process.env.SYSTEM_EMAIL || "edgevarsity0605@gmail.com"],
      subject: `New Salvation From ${data.name}`,
      react: (
        <EmailTemplate
          name={data.name}
          email={data.email}
          phone={data.phone}
          request={data.request}
        />
      ) as ReactElement,
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}