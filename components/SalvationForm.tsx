"use client";

import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroupTextarea } from "@/components/ui/input-group";
import { useState } from "react";
import { sendSalvationEmail } from "@/app/actions/send-email";
import toast from "react-hot-toast";

const salvationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone number required"),
    request: z.string().min(1, "Please enter your prayer request"),
});

type SalvationValues = z.infer<typeof salvationSchema>;

export function SalvationForm() {
    const form = useForm<SalvationValues>({
        resolver: zodResolver(salvationSchema),
        defaultValues: { name: "", email: "",  phone: "", request: "" },
    });

    
    const [isSubmitting, setIsSubmitting] = useState(false);

    
    const onSubmit = async (data: SalvationValues) => {
        setIsSubmitting(true);

        const result = await sendSalvationEmail(data);

        setIsSubmitting(false);

        if (result.success) {
            toast.success("Email sent!");
            form.reset();
        } else {
            toast.error(`Error: ${result.error}`);
        }
    };

    return (
        <form id="salvation-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
            <FieldGroup>
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

                <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Phone Number</FieldLabel>
                            <Input {...field} maxLength={11} placeholder="080..." className="bg-muted/50" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Email</FieldLabel>
                            <Input {...field} type="email" placeholder="your.email@example.com" className="bg-muted/50" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="request"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Prayer Request</FieldLabel>
                            <InputGroupTextarea
                                {...field}
                                placeholder="How can we pray for you?"
                                rows={4}
                                className="min-h-25 resize-none bg-muted/50"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
            </FieldGroup>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-blue cursor-pointer hover:bg-brand-blue/90 text-white font-bold py-6 uppercase tracking-widest"
            >
                {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>
        </form>
    );
}