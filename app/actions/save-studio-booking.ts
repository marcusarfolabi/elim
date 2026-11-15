"use server";

import { Resend } from "resend";
import { z } from "zod";
import { createClient } from "@/lib/supabase";

const studioBookingSchema = z.object({
  service: z.enum([
    "Podcast Studio Setup",
    "Audio & Voice Recording",
    "Photography Sessions",
    "Videography & Video Production",
    "Content Creation & Social Media",
    "Editing & Post-Production",
    "Other",
  ]),
  duration: z.enum(["Hourly", "Half-Day", "Full-Day"]),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine((value) => {
      const parsed = new Date(`${value}T00:00:00.000Z`);
      return (
        Number.isFinite(parsed.getTime()) &&
        parsed.toISOString().slice(0, 10) === value
      );
    }),
  time: z.union([
    z.literal(""),
    z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  ]),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().regex(/^\+234\d{10}$/),
  details: z.string().trim().min(10).max(3000),
});

type SaveStudioBookingResult =
  | { success: true; emailWarning?: string }
  | { success: false; error: string };

export async function saveStudioBooking(
  input: unknown,
): Promise<SaveStudioBookingResult> {
  const parsed = studioBookingSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: "Please review your details and try again.",
    };
  }

  const booking = parsed.data;
  const supabase = createClient();
  const { error } = await supabase.from("studio_bookings").insert({
    service: booking.service,
    session_duration: booking.duration,
    preferred_date: booking.date,
    preferred_time: booking.time || null,
    name: booking.name,
    email: booking.email,
    phone: booking.phone,
    project_details: booking.details,
  });

  if (error) {
    console.error("Failed to save Elim Studio booking:", error);
    return {
      success: false,
      error: "We couldn’t save your request. Please try again or contact the studio.",
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const studioManagerEmail = process.env.STUDIO_MANAGER_EMAIL;
  if (!resendApiKey || !studioManagerEmail) {
    console.error(
      "Studio booking email notifications require RESEND_API_KEY and STUDIO_MANAGER_EMAIL.",
    );
    return {
      success: true,
      emailWarning:
        "Your booking request was saved, but email notifications could not be sent. Please contact the studio to follow up.",
    };
  }

  const resend = new Resend(resendApiKey);
  const preferredTime = booking.time || "Flexible";
  const bookingDetails = [
    `Service: ${booking.service}`,
    `Preferred date: ${booking.date}`,
    `Preferred time: ${preferredTime}`,
    `Session duration: ${booking.duration}`,
    `Name: ${booking.name}`,
    `Email: ${booking.email}`,
    `Phone: ${booking.phone}`,
    `Project details: ${booking.details}`,
  ].join("\n");

  const notifications = await Promise.allSettled([
    resend.emails.send({
      from: "Elim Studio <elim-sanctuary@vaspayment.us>",
      to: [booking.email],
      subject: "We received your Elim Studio booking request",
      text: [
        `Hello ${booking.name},`,
        "",
        "We’ve received your booking request. Your session is not confirmed until the studio checks availability and contacts you.",
        "",
        "Your request:",
        bookingDetails,
        "",
        "Thank you,",
        "Elim Studio",
      ].join("\n"),
    }),
    resend.emails.send({
      from: "Elim Studio <elim-sanctuary@vaspayment.us>",
      to: [studioManagerEmail],
      replyTo: booking.email,
      subject: `New Elim Studio booking request: ${booking.name}`,
      text: [
        "A new booking request was submitted.",
        "",
        bookingDetails,
      ].join("\n"),
    }),
  ]);

  const emailLabels = ["customer receipt", "studio manager notification"];
  const failedNotifications: string[] = [];
  notifications.forEach((notification, index) => {
    if (notification.status === "rejected") {
      console.error(
        `Failed to send studio booking ${emailLabels[index]}:`,
        notification.reason,
      );
      failedNotifications.push(emailLabels[index]);
    } else if (notification.value.error) {
      console.error(
        `Failed to send studio booking ${emailLabels[index]}:`,
        notification.value.error,
      );
      failedNotifications.push(emailLabels[index]);
    }
  });

  if (failedNotifications.length > 0) {
    return {
      success: true,
      emailWarning:
        "Your booking request was saved, but one or more email notifications could not be sent. Please contact the studio to follow up.",
    };
  }

  return { success: true };
}
