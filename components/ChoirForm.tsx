"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroupTextarea } from "@/components/ui/input-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendChoirEmail } from "@/app/actions/send-choir-form";
import toast from "react-hot-toast";

const choirSchema = z.object({
    name: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    vocalPart: z.string().min(1, "Please select your vocal part"),
    experience: z.string().min(10, "Please describe your musical background"),
    canReadMusic: z.string().min(1, "Please select an option"),
    availability: z.string().min(1, "Please confirm rehearsal attendance"),
});

type ChoirValues = z.infer<typeof choirSchema>;

const VOCAL_PARTS = [
    { value: "Soprano", label: "Soprano (High Female)" },
    { value: "Mezzo-Soprano", label: "Mezzo-Soprano (Mid Female)" },
    { value: "Alto", label: "Alto (Low Female)" },
    { value: "Tenor", label: "Tenor (High Male)" },
    { value: "Baritone", label: "Baritone (Mid Male)" },
    { value: "Bass", label: "Bass (Low Male)" },
    { value: "Other", label: "Other / Not Sure" },
];

export function ChoirForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<ChoirValues>({
        resolver: zodResolver(choirSchema),
        defaultValues: { name: "", email: "", phone: "", vocalPart: "", experience: "", canReadMusic: "", availability: "" },
    });

    const onSubmit = async (values: ChoirValues) => {
        setIsSubmitting(true);
        const result = await sendChoirEmail(values);
        setIsSubmitting(false);

        if (result.success) {
            toast.success("Application Sent! The Choir Leader will contact you.");
            form.reset();
        } else {
            toast.error(`Error: ${result.error}`);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
            <FieldGroup>
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input {...field} placeholder="John Doe" className="bg-muted/50" />
                            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                        </Field>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="vocalPart"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Vocal Part</FieldLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="bg-muted/50">
                                        <SelectValue placeholder="Select your part" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {VOCAL_PARTS.map((part) => (
                                            <SelectItem key={part.value} value={part.value}>
                                                {part.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                            </Field>
                        )}
                    />
                    <Controller
                        name="canReadMusic"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Can you read music?</FieldLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger className="bg-muted/50">
                                        <SelectValue placeholder="Select option" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Yes">Yes, fluently</SelectItem>
                                        <SelectItem value="Basic">Basic understanding</SelectItem>
                                        <SelectItem value="No">No, I sing by ear</SelectItem>
                                    </SelectContent>
                                </Select>
                                {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                            </Field>
                        )}
                    />
                </div>

                <Controller
                    name="experience"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Previous Musical Experience</FieldLabel>
                            <InputGroupTextarea
                                {...field}
                                rows={3}
                                placeholder="Mention any previous choirs or instruments you play..."
                                className="bg-muted/50"
                            />
                            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                        </Field>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="phone"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Phone Number</FieldLabel>
                                <Input {...field} placeholder="080..." className="bg-muted/50" />
                                {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                            </Field>
                        )}
                    />
                    <Controller
                        name="availability"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Rehearsal Availability</FieldLabel>
                                <Input {...field} placeholder="e.g. Saturdays at 4pm" className="bg-muted/50" />
                                {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                            </Field>
                        )}
                    />
                </div>

                {/* Adding Email for completeness */}
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Email Address</FieldLabel>
                            <Input {...field} type="email" placeholder="email@example.com" className="bg-muted/50" />
                            {fieldState.error && <FieldError>{fieldState.error.message}</FieldError>}
                        </Field>
                    )}
                />
            </FieldGroup>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-blue cursor-pointer hover:bg-brand-blue/90 text-white font-bold py-6 uppercase tracking-widest">
                {isSubmitting ? "Sending..." : "Request Audition"}
            </Button>
        </form>
    );
}