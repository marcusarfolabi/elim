"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { sendMensFellowshipEmail } from "@/app/actions/send-mens-fellowship";
import toast from "react-hot-toast";

const mensSchema = z.object({
    name: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    maritalStatus: z.string().min(1, "Please specify marital status"),
    anniversary: z.string().optional(),
    occupation: z.string().min(2, "Please share your skills or occupation"),
    serviceArea: z.string().min(2, "How would you like to serve?"),
});

type MensValues = z.infer<typeof mensSchema>;

export function MensFellowshipForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<MensValues>({
        resolver: zodResolver(mensSchema),
        defaultValues: { name: "", email: "", phone: "", maritalStatus: "", anniversary: "", occupation: "", serviceArea: "" },
    });

    const onSubmit = async (values: MensValues) => {
        setIsSubmitting(true);
        const result = await sendMensFellowshipEmail(values);
        setIsSubmitting(false);

        if (result.success) {
            toast.success("Welcome to the Fellowship! Your details have been sent.");
            form.reset();
        } else {
            toast.error(`Error: ${result.error}`);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="email"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Email</FieldLabel>
                                <Input {...field} type="email" placeholder="email@example.com" className="bg-muted/50" />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}   </Field>
                        )}
                    />
                    <Controller
                        name="phone"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Phone/WhatsApp</FieldLabel>
                                <Input {...field} placeholder="080..." className="bg-muted/50" />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="maritalStatus"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Marital Status</FieldLabel>
                                <Input {...field} placeholder="Single, Married, etc." className="bg-muted/50" />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Controller
                        name="anniversary"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Wedding Ann. (Optional)</FieldLabel>
                                <Input {...field} placeholder="DD/MM/YYYY" className="bg-muted/50" />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </div>

                <Controller
                    name="occupation"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Occupation / Professional Skills</FieldLabel>
                            <Input {...field} placeholder="e.g. Engineer, Accountant, Carpenter" className="bg-muted/50" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="serviceArea"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Preferred Area of Service</FieldLabel>
                            <Input {...field} placeholder="Ushering, Music, Welfare, etc." className="bg-muted/50" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
            </FieldGroup>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-blue cursor-pointer hover:bg-brand-blue/90 text-white font-bold py-6 uppercase tracking-widest">
                {isSubmitting ? "Processing..." : "Join Fellowship"}
            </Button>
        </form>
    );
}