"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroupTextarea } from "@/components/ui/input-group";
// Assuming you have a Select component in your UI library
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { saveTestimony } from "@/app/actions/send-testimony";
import toast from "react-hot-toast";

const testimonySchema = z.object({
    name: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email").optional().or(z.literal("")),
    phone: z.string().min(10, "Valid phone number is required"),
    category: z.string().min(1, "Please select a category"),
    title: z.string().optional(),
    testimony: z.string().min(20, "Please share a bit more detail"),
    canShare: z.enum(["yes", "no"], {
        message: "Please indicate your sharing preference",
    }),
});

type TestimonyValues = z.infer<typeof testimonySchema>;

export function TestimonyForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<TestimonyValues>({
        resolver: zodResolver(testimonySchema),
        defaultValues: { name: "", email: "", phone: "", category: "", title: "", testimony: "", canShare: "yes" },
    });

    const onSubmit = async (values: TestimonyValues) => {
        setIsSubmitting(true);
        const result = await saveTestimony(values);
        setIsSubmitting(false);

        if (result.success) {
            toast.success("Hallelujah! Your testimony has been shared.");
            form.reset();
        } else {
            toast.error(`Error: ${result.error}`);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-4">
            <FieldGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="name"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Full Name</FieldLabel>
                                <Input {...field} placeholder="John Doe" className="bg-muted/50" />
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
                                <Input {...field} placeholder="080..." className="bg-muted/50" />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        name="category"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Category (Healing, Finance, etc.)</FieldLabel>
                                <Input {...field} placeholder="e.g. Divine Provision" className="bg-muted/50" />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    {/* Updated canShare to use a Select dropdown */}
                    <Controller
                        name="canShare"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel>Can we share this with the church?</FieldLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="bg-muted/50">
                                        <SelectValue placeholder="Select preference" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes, share to inspire others</SelectItem>
                                        <SelectItem value="no">No, keep this private</SelectItem>
                                    </SelectContent>
                                </Select>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </div>

                <Controller
                    name="title"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Testimony Title (Optional)</FieldLabel>
                            <Input {...field} placeholder="Marriage restoration after 10 years divorce" className="bg-muted/50" />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Controller
                    name="testimony"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Your Testimony</FieldLabel>
                            <InputGroupTextarea
                                {...field}
                                rows={6}
                                placeholder="Describe what the Lord has done for you..."
                                className="bg-muted/50 resize-none min-h-37.5"
                            />
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />
            </FieldGroup>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-blue cursor-pointer hover:bg-brand-blue/90 text-white font-bold py-6 uppercase tracking-widest transition-all active:scale-[0.98]">
                {isSubmitting ? "Submitting..." : "Submit Testimony"}
            </Button>
        </form>
    );
}