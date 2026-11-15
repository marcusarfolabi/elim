"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { saveStudioBooking } from "@/app/actions/save-studio-booking";

const services = [
  "Podcast Studio Setup",
  "Audio & Voice Recording",
  "Photography Sessions",
  "Videography & Video Production",
  "Content Creation & Social Media",
  "Editing & Post-Production",
  "Other",
];

export function StudioBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSubmitted(false);
    setSuccessMessage("");

    try {
      const result = await saveStudioBooking({
        service: formData.get("service"),
        duration: formData.get("duration"),
        date: formData.get("date"),
        time: formData.get("time"),
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        details: formData.get("details"),
      });

      if (!result.success) {
        setErrorMessage(result.error);
        return;
      }

      form.reset();
      setIsSubmitted(true);
      setSuccessMessage(
        result.emailWarning ??
          "A receipt was emailed to you and the studio team was notified. Your session is pending studio confirmation.",
      );
    } catch (error) {
      console.error("Studio booking submission failed:", error);
      setErrorMessage(
        "We couldn’t submit your request. Please try again or contact the studio.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-foreground">
        Service
        <select
          name="service"
          required
          defaultValue=""
          className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label className="text-sm font-semibold text-foreground">
        Session duration
        <select
          name="duration"
          required
          defaultValue=""
          className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <option value="" disabled>
            Choose a time block
          </option>
          <option>Hourly</option>
          <option>Half-Day</option>
          <option>Full-Day</option>
        </select>
      </label>

      <label className="text-sm font-semibold text-foreground">
        Preferred date
        <input
          name="date"
          type="date"
          required
          className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </label>

      <label className="text-sm font-semibold text-foreground">
        Preferred time
        <input
          name="time"
          type="time"
          className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </label>

      <label className="text-sm font-semibold text-foreground">
        Full name
        <input
          name="name"
          autoComplete="name"
          required
          minLength={2}
          className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          placeholder="Your name"
        />
      </label>

      <label className="text-sm font-semibold text-foreground">
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          placeholder="you@example.com"
        />
      </label>

      <label className="text-sm font-semibold text-foreground sm:col-span-2">
        Phone / WhatsApp
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          minLength={10}
          className="mt-2 h-12 w-full rounded-lg border border-input bg-background px-3 text-base font-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          placeholder="+234..."
        />
      </label>

      <label className="text-sm font-semibold text-foreground sm:col-span-2">
        Project details
        <textarea
          name="details"
          required
          minLength={10}
          rows={4}
          className="mt-2 w-full resize-y rounded-lg border border-input bg-background p-3 text-base font-normal text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          placeholder="Tell us what you’re creating and anything we should know."
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-brand-red px-7 font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          <ArrowRight className="h-4 w-4" />
        </button>
        {errorMessage && (
          <p role="alert" className="mt-3 text-sm text-destructive">
            {errorMessage}
          </p>
        )}
        {isSubmitted && (
          <p role="status" className="mt-3 text-sm text-brand-green">
            {successMessage}
          </p>
        )}
        {!isSubmitted && !errorMessage && (
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Submitting saves your request. Your session is reserved after the
            studio confirms availability.
          </p>
        )}
      </div>
    </form>
  );
}
