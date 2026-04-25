"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils"; // Standard shadcn utility

interface SectionHeaderProps {
    overline: string;
    title: string;
    accent?: string;
    align?: "left" | "center" | "right";
    className?: string;
}

export function SectionHeader({
    overline,
    title,
    accent,
    align = "left",
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "max-w-7xl mx-auto px-4 mb-12 md:mb-16",
                align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left",
                className
            )}
        >
            {/* Small Overline Text */}
            <motion.span
                initial={{ opacity: 0, x: align === "center" ? 0 : -20, y: align === "center" ? 10 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-brand-red font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-3 md:mb-4"
            >
                {overline}
            </motion.span>

            {/* Main Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-foreground text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
            >
                {title}{" "}
                {accent && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-red dark:from-brand-blue dark:to-brand-gold">
                        {accent}
                    </span>
                )}
            </motion.h2>
        </div>
    );
}