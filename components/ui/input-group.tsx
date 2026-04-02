"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("relative flex flex-col w-full", className)} {...props} />
    )
);
InputGroup.displayName = "InputGroup";

const InputGroupTextarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
    <textarea
        ref={ref}
        className={cn(
            "flex min-h-22.5 w-full rounded-xl border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    />
));
InputGroupTextarea.displayName = "InputGroupTextarea";

const InputGroupAddon = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { align?: "block-start" | "block-end" }
>(({ className, align = "block-end", ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "absolute right-3 text-[10px] font-mono text-muted-foreground pointer-events-none",
            align === "block-end" ? "bottom-2" : "top-2",
            className
        )}
        {...props}
    />
));
InputGroupAddon.displayName = "InputGroupAddon";

export { InputGroup, InputGroupTextarea, InputGroupAddon };