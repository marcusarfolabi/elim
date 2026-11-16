"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroupTextarea } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { saveTestimony } from "@/app/actions/send-testimony";
import toast from "react-hot-toast";

const createTestimonySchema = (expectedSum: number) =>
  z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email").optional().or(z.literal("")),
    phone: z.string().min(10, "Valid phone number is required"),
    category: z.string().min(1, "Category is required"),
    title: z.string().optional(),
    testimony: z.string().min(20, "Please share a bit more detail"),
    canShare: z.enum(["yes", "no"], {
      message: "Please select a sharing preference",
    }),
    captcha: z.string().refine((val) => parseInt(val, 10) === expectedSum, {
      message: "Incorrect answer",
    }),
  });

type TestimonyValues = {
  name: string;
  email?: string;
  phone: string;
  category: string;
  title?: string;
  testimony: string;
  canShare: "yes" | "no";
  captcha: string;
};

export function TestimonyForm({
  onSubmitted,
}: {
  onSubmitted?: () => void;
} = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mathProblem, setMathProblem] = useState({
    num1: 0,
    num2: 0,
    answer: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setMathProblem({ num1, num2, answer: num1 + num2 });
  }, []);

  const testimonySchema = createTestimonySchema(mathProblem.answer);

  const form = useForm<TestimonyValues>({
    resolver: zodResolver(testimonySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: "",
      title: "",
      testimony: "",
      captcha: "",
    },
  });

  const onSubmit = async (values: TestimonyValues) => {
    setIsSubmitting(true);
    const { captcha, ...payload } = values;
    const result = await saveTestimony(payload);
    setIsSubmitting(false);

    if (result.success) {
      toast.success(
        values.canShare === "yes"
          ? "Hallelujah! Your testimony is now on the website."
          : "Thank you. Your testimony was received privately.",
      );
      if (result.emailWarning) {
        toast.error(result.emailWarning);
      }
      form.reset();
      onSubmitted?.();
      if (values.canShare === "yes") {
        router.push("/testimonies");
      }
    } else {
      toast.error(`Error: ${result.error}`);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="pt-2 w-full max-w-3xl mx-auto"
    >
      {/* Scrollable fields container with defined height */}
      <div className="max-h-[65vh] overflow-y-auto pr-2 space-y-4">
        <FieldGroup>
          <div className="grid grid-cols-1 gap-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm sm:text-base">
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    className="bg-muted/50 text-sm sm:text-base"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm sm:text-base">
                    Phone Number
                  </FieldLabel>
                  <div className="flex rounded-xl border border-input bg-muted/50 overflow-hidden focus-within:ring-2 focus-within:ring-brand-blue">
                    <div className="flex items-center gap-1.5 px-3 bg-muted/80 border-r border-input text-sm sm:text-base font-medium text-foreground select-none">
                      <span role="img" aria-label="Nigeria flag">
                        🇳🇬
                      </span>
                      <span>+234</span>
                    </div>
                    <Input
                      {...field}
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="8012345678"
                      className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base"
                      onChange={(e) => {
                        let digits = e.target.value.replace(/\D/g, "");
                        if (digits.startsWith("0")) {
                          digits = digits.slice(1);
                        }
                        field.onChange(digits.slice(0, 10));
                      }}
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Controller
              name="category"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm sm:text-base">
                    Category
                  </FieldLabel>
                  <Input
                    {...field}
                    placeholder="e.g. Healing, Finance, Provision"
                    className="bg-muted/50 text-sm sm:text-base"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="canShare"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-sm sm:text-base">
                    Share Publicly?
                  </FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-muted/50 text-sm sm:text-base">
                      <SelectValue placeholder="Choose visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">
                        Yes, publish on website
                      </SelectItem>
                      <SelectItem value="no">No, keep private</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-sm sm:text-base">
                  Title (Optional)
                </FieldLabel>
                <Input
                  {...field}
                  placeholder="e.g. Marriage restoration"
                  className="bg-muted/50 text-sm sm:text-base"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="testimony"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-sm sm:text-base">
                  Testimony
                </FieldLabel>
                <InputGroupTextarea
                  {...field}
                  rows={5}
                  placeholder="Share what the Lord has done..."
                  className="bg-muted/50 resize-none min-h-[130px] text-sm sm:text-base"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="captcha"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-sm sm:text-base">
                  Solve: {mathProblem.num1} + {mathProblem.num2} = ?
                </FieldLabel>
                <Input
                  {...field}
                  placeholder="Answer"
                  className="bg-muted/50 text-sm sm:text-base"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </div>

      {/* Pinned submit button below the scroll area */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-blue cursor-pointer hover:bg-brand-blue/90 text-white font-bold py-5 sm:py-6 uppercase tracking-widest transition-all active:scale-[0.98] text-sm sm:text-base"
        >
          {isSubmitting ? "Submitting..." : "Submit Testimony"}
        </Button>
      </div>
    </form>
  );
}
