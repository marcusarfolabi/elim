"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { saveStudioBooking } from "@/app/actions/save-studio-booking";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
  const [service, setService] = useState("");
  const [duration, setDuration] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;
    const booking = {
      service,
      duration,
      date: String(formData.get("date") ?? ""),
      time: String(formData.get("time") ?? ""),
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: `+234${phoneDigits}`,
      details: String(formData.get("details") ?? ""),
    };
    setIsSubmitting(true);
    setErrorMessage("");
    setIsSubmitted(false);
    setSuccessMessage("");

    let result: Awaited<ReturnType<typeof saveStudioBooking>>;
    try {
      result = await saveStudioBooking(booking);
    } catch (error) {
      console.error("Studio booking submission failed:", error);
      setErrorMessage(
        "We couldn’t submit your request. Please try again or contact the studio.",
      );
      return;
    } finally {
      setIsSubmitting(false);
    }

    if (!result.success) {
      setErrorMessage(result.error);
      return;
    }

    form.reset();
    setService("");
    setDuration("");
    setPhoneDigits("");
    setIsSubmitted(true);
    setSuccessMessage(
      result.emailWarning ??
        "A receipt was emailed to you and the studio team was notified. Your session is pending studio confirmation.",
    );

    const whatsappMessage = [
      "*ELIM STUDIO | BOOKING REQUEST*",
      "",
      "Hello Elim Studio, I’ve submitted a booking request through the website.",
      "",
      "*SESSION DETAILS*",
      `• Service: ${booking.service}`,
      `• Preferred date: ${booking.date}`,
      `• Preferred time: ${booking.time || "Flexible"}`,
      `• Session duration: ${booking.duration}`,
      "",
      "*CONTACT DETAILS*",
      `• Name: ${booking.name}`,
      `• Email: ${booking.email}`,
      `• Phone / WhatsApp: ${booking.phone}`,
      "",
      "*PROJECT DETAILS*",
      booking.details,
      "",
      "Please confirm availability and share the next steps. Thank you.",
    ].join("\n");

    try {
      window.location.assign(
        `https://wa.me/2348029556990?text=${encodeURIComponent(whatsappMessage)}`,
      );
    } catch (error) {
      console.error("Could not open WhatsApp after saving the booking:", error);
      setErrorMessage(
        "Your booking request was saved, but WhatsApp could not be opened. Please contact the studio directly.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field>
        <FieldLabel id="studio-service-label">Service</FieldLabel>
        <Select
          name="service"
          required
          value={service}
          onValueChange={setService}
        >
          <SelectTrigger
            aria-labelledby="studio-service-label"
            className="bg-muted/50"
          >
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
          {services.map((service) => (
            <SelectItem key={service} value={service}>
              {service}
            </SelectItem>
          ))}
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <FieldLabel id="studio-duration-label">Session duration</FieldLabel>
        <Select
          name="duration"
          required
          value={duration}
          onValueChange={setDuration}
        >
          <SelectTrigger
            aria-labelledby="studio-duration-label"
            className="bg-muted/50"
          >
            <SelectValue placeholder="Choose a time block" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Hourly">Hourly</SelectItem>
            <SelectItem value="Half-Day">Half-Day</SelectItem>
            <SelectItem value="Full-Day">Full-Day</SelectItem>
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <FieldLabel htmlFor="studio-date">Preferred date</FieldLabel>
        <Input
          id="studio-date"
          name="date"
          type="date"
          required
          className="mt-0 bg-muted/50"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="studio-time">Preferred time</FieldLabel>
        <Input
          id="studio-time"
          name="time"
          type="time"
          className="mt-0 bg-muted/50"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="studio-name">Full name</FieldLabel>
        <Input
          id="studio-name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          className="mt-0 bg-muted/50"
          placeholder="Your name"
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="studio-email">Email address</FieldLabel>
        <Input
          id="studio-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-0 bg-muted/50"
          placeholder="you@example.com"
        />
      </Field>

      <Field className="sm:col-span-2">
        <FieldLabel htmlFor="studio-phone">Phone / WhatsApp</FieldLabel>
        <InputGroup className="flex-row items-center overflow-hidden rounded-lg border border-input bg-muted/50 focus-within:ring-3 focus-within:ring-ring/50">
          <span
            aria-hidden="true"
            className="flex h-12 shrink-0 items-center border-r border-input px-3 text-sm text-muted-foreground"
          >
            +234
          </span>
          <Input
            id="studio-phone"
          name="phone"
          type="tel"
          autoComplete="tel-national"
          inputMode="numeric"
          required
          pattern="[0-9]{10}"
          minLength={10}
          maxLength={10}
          value={phoneDigits}
          onChange={(event) =>
            setPhoneDigits(event.currentTarget.value.replace(/\D/g, "").slice(0, 10))
          }
          aria-describedby="studio-phone-hint"
          className="mt-0 h-12 flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:border-0 focus-visible:ring-0 dark:bg-transparent"
          placeholder="9035155129"
        />
        </InputGroup>
        <p id="studio-phone-hint" className="text-xs text-muted-foreground">
          Enter your 10-digit number without the country code.
        </p>
      </Field>

      <Field className="sm:col-span-2">
        <FieldLabel htmlFor="studio-details">Project details</FieldLabel>
        <Textarea
          id="studio-details"
          name="details"
          required
          minLength={10}
          rows={4}
          className="mt-0 min-h-32 resize-y bg-muted/50"
          placeholder="Tell us what you’re creating and anything we should know."
        />
      </Field>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="h-13 w-full rounded-full bg-brand-red px-7 font-semibold text-white hover:bg-red-700 sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit & Continue on WhatsApp"}
          <ArrowRight className="h-4 w-4" />
        </Button>
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
            Your request is saved and emailed first. WhatsApp then opens with
            the details ready for you to send. Your session remains pending
            until the studio confirms availability.
          </p>
        )}
      </div>
    </form>
  );
}
