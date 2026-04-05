"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { sendAppointmentEmail } from "@/app/actions/send-appointment";
import toast from "react-hot-toast";

const appointmentSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone required"),
    purpose: z.string().min(1, "Please select a purpose"),
    dateTime: z.string().min(1, "Preferred date/time is required"),
    source: z.string().min(1, "Please tell us how you heard about us"),
});

type AppointmentValues = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<AppointmentValues>({
        resolver: zodResolver(appointmentSchema),
        defaultValues: { name: "", email: "", phone: "", purpose: "", dateTime: "", source: "" },
    });

    const onSubmit = async (values: AppointmentValues) => {
        setIsSubmitting(true);
        const result = await sendAppointmentEmail(values);
        setIsSubmitting(false);

        if (result.success) {
            toast.success("Appointment request sent!");
            form.reset();
        } else {
            toast.error(`Error: ${result.error}`);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <FieldGroup>
                {/* Name Field */}
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input {...field} placeholder="Enter your name" className="bg-muted/50" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Email</FieldLabel>
                                <Input {...field} type="email" placeholder="email@example.com" className="bg-muted/50" />
                            </Field>
                        )}
                    />
                    <Controller
                        name="phone"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Phone/WhatsApp</FieldLabel>
                                <Input {...field} placeholder="080..." className="bg-muted/50" />
                            </Field>
                        )}
                    />
                </div>

                {/* Purpose & DateTime */}
                <Controller
                    name="purpose"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Purpose of Meeting (e.g., Counseling, Prayer)</FieldLabel>
                            <Input {...field} placeholder="Counseling, Prayer, etc." className="bg-muted/50" />
                        </Field>
                    )}
                />

                <Controller
                    name="dateTime"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Preferred Date & Time</FieldLabel>
                            <Input {...field} type="text" placeholder="e.g. Next Monday at 10am" className="bg-muted/50" />
                        </Field>
                    )}
                />

                <Controller
                    name="source"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>How did you hear about Pastor Debo?</FieldLabel>
                            <Input {...field} placeholder="Social media, friend, church..." className="bg-muted/50" />
                        </Field>
                    )}
                />
            </FieldGroup>

            <Button type="submit" disabled={isSubmitting} 
                className="w-full bg-brand-blue cursor-pointer hover:bg-brand-blue/90 text-white font-bold py-6 uppercase tracking-widest"
            >
                {isSubmitting ? "Sending..." : "Book Appointment"}
            </Button>
        </form>
    );
}