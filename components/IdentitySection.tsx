"use client";

import { motion } from "motion/react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { IDENTITY_CARDS } from "@/setting";

type LucideIconName = keyof typeof LucideIcons;

export function IdentitySection() {
    return (
        <section className="py-24 bg-background overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase block mb-4"
                    >
                        Our Core Identity
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-foreground text-5xl md:text-7xl font-black uppercase tracking-tighter"
                    >
                        See who <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-blue to-green-400">we are</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {IDENTITY_CARDS.map((card, index) => {
                        const IconName = card.iconName as LucideIconName;
                        const Icon = LucideIcons[IconName] as LucideIcons.LucideIcon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className={`absolute -inset-0.5 bg-linear-to-b ${card.color} rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />

                                <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden flex flex-col shadow-sm dark:shadow-none">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />

                                        <div className="absolute bottom-4 left-6 bg-brand-blue p-3 rounded-2xl text-white shadow-xl shadow-brand-blue/20">
                                            {Icon && <Icon className="w-6 h-6" />}
                                        </div>
                                    </div>

                                    <div className="p-8 pt-4 grow">
                                        <h3 className="text-card-foreground text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-brand-blue transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {card.description}
                                        </p>
                                    </div>
                                    
                                    <div className="h-1 w-0 group-hover:w-full bg-brand-blue transition-all duration-500" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}