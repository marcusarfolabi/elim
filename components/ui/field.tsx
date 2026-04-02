"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const FieldGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("grid gap-6", className)} {...props} />
  )
);
FieldGroup.displayName = "FieldGroup";

const Field = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
  )
);
Field.displayName = "Field";

const FieldLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize tracking-wider",
      className
    )}
    {...props}
  />
));
FieldLabel.displayName = "FieldLabel";

interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: (string | undefined | any)[];  
}

const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, errors, children, ...props }, ref) => {
    const errorMessages = errors?.filter(Boolean);
    if (!errorMessages?.length && !children) return null;

    return (
      <p
        ref={ref}
        className={cn("text-xs font-medium text-destructive mt-1", className)}
        {...props}
      >
        {children || errorMessages?.[0]?.message || errorMessages?.[0]}
      </p>
    );
  }
);
FieldError.displayName = "FieldError";

export { Field, FieldGroup, FieldLabel, FieldError };