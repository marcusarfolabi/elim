"use client";

import * as React from "react";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroupTextarea } from "@/components/ui/input-group";

const salvationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    address: z.string().min(5, "Address is required"),
    phone: z.string().min(10, "Valid phone number required"),
    request: z.string().min(1, "Please enter your request"),
});

type SalvationValues = z.infer<typeof salvationSchema>;

export function SalvationForm() {
    const form = useForm<SalvationValues>({
        resolver: zodResolver(salvationSchema),
        defaultValues: { name: "", address: "", phone: "", request: "" },
    });

    const onSubmit = (data: SalvationValues) => {
        console.log("Salvation Form Data:", data);
    };

    return (
        <form id="salvation-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
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

                {/* Phone Field */}
                <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Phone Number</FieldLabel>
                            <Input {...field} placeholder="080..." className="bg-muted/50" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                {/* Prayer Request Field */}
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

            <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-6 uppercase tracking-widest">
                Submit Request
            </Button>
        </form>
    );
}