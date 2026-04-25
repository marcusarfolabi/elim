"use client";

import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { FOOTER_DATA } from "@/setting";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons";
import { SalvationForm } from "./SalvationForm";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AppointmentForm } from "./AppointmentForm";
import { MensFellowshipForm } from "./MensFellowshipForm";
import { TestimonyForm } from "./TestimonyForm";
import { ChoirForm } from "./ChoirForm";

export function ModernFooter() {
    return (
        <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border transition-colors duration-500">
            <div className="absolute top-0 right-0 w-125 h-125 bg-brand-blue/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-foreground text-4xl md:text-6xl font-black capitalize tracking-tighter mb-8">
                            Our <span className="text-brand-green">Location</span>
                        </h3>

                        <div className="space-y-6 mb-10">
                            <div className="flex gap-4">
                                <LucideIcons.MapPin className="text-brand-blue w-6 h-6 shrink-0" />
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                    {FOOTER_DATA.address}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-8">
                                <a href={`tel:${FOOTER_DATA.phone}`} className="flex items-center gap-3 group">
                                    <div className="bg-muted p-3 rounded-xl group-hover:bg-brand-blue transition-colors">
                                        <LucideIcons.Phone size={20} className="text-foreground group-hover:text-white" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-muted-foreground uppercase font-mono block">Call Pastor</span>
                                        <span className="text-foreground font-bold">{FOOTER_DATA.phone}</span>
                                    </div>
                                </a>

                                <a href={`mailto:${FOOTER_DATA.email}`} className="flex items-center gap-3 group">
                                    <div className="bg-muted p-3 rounded-xl group-hover:bg-brand-blue transition-colors">
                                        <LucideIcons.Mail size={20} className="text-foreground group-hover:text-white" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-muted-foreground uppercase font-mono block">Send Mail</span>
                                        <span className="text-foreground font-bold">{FOOTER_DATA.email}</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="relative w-full h-75 rounded-3xl overflow-hidden border border-border group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2756881541923!2d3.2972644739941215!3d6.612628493381405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9100358f2d9d%3A0x4777fd9872983b97!2s34%20Alimosho%20Rd%2C%20Lagos%2C%20Ikeja%20102213%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2ske!4v1777104970069!5m2!1sen!2ske"
                                className="w-full h-full dark:invert group-hover:opacity-100 transition-opacity duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
                        </div>
                    </motion.div>

                    {/* RIGHT: FORMS & SOCIALS */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-foreground text-4xl md:text-6xl font-black capitalize tracking-tighter mb-8 text-right">
                            Elim <span className="text-brand-gold">Forms</span>
                        </h3>

                        <div className="grid grid-cols-1 gap-4 mb-12">
                            {FOOTER_DATA.forms.map((form, i) => (
                                <Dialog key={i}>
                                    <DialogTrigger asChild>
                                        <motion.div
                                            whileHover={{ x: 10 }}
                                            className="group relative cursor-pointer"
                                        >
                                            <div className="flex items-center justify-between p-6 bg-muted/50 border border-border rounded-2xl hover:border-brand-blue/50 transition-all backdrop-blur-sm">
                                                <span className="text-foreground font-black capitalize tracking-wider group-hover:text-brand-blue text-left">
                                                    {form.name}
                                                </span>
                                                <LucideIcons.ChevronRight size={18} className="text-muted-foreground group-hover:text-brand-blue" />
                                            </div>
                                        </motion.div>
                                    </DialogTrigger>

                                    <DialogContent className="sm:max-w-106.25 bg-background border-border">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-black uppercase tracking-tighter text-foreground">
                                                {form.name}
                                            </DialogTitle>
                                        </DialogHeader>

                                        {form.name === "SALVATION FORM" && <SalvationForm />}
                                        {form.name === "APPOINTMENT FORM" && <AppointmentForm />}
                                        {form.name === "MENS FELLOWSHIP FORM" && <MensFellowshipForm />}
                                        {form.name === "TESTIMONY FORM" && <TestimonyForm />}
                                        {form.name === "CHOIR APPLICATION" && <ChoirForm />}  
 
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>

                        {/* Social Connect */}
                        <div className="flex flex-col items-end">
                            <span className="text-muted-foreground font-mono text-[10px] tracking-[0.5em] uppercase mb-6">
                                Connect with us on
                            </span>
                            <div className="flex gap-4">
                                {FOOTER_DATA.socials.map((social, i) => {
                                    const BrandIcons: Record<string, IconType> = {
                                        Facebook: FaFacebookF,
                                        Twitter: FaTwitter,
                                        Instagram: FaInstagram,
                                        Youtube: FaYoutube,
                                    };

                                    const Icon = BrandIcons[social.icon];

                                    return (
                                        <Link
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center bg-muted rounded-full text-foreground hover:bg-brand-blue hover:text-white transition-all duration-300 group"
                                        >
                                            {Icon ? (
                                                <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                                            ) : (
                                                <span className="text-[10px] font-bold">{social.name}</span>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM COPYRIGHT */}
                <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase">
                        © {new Date().getFullYear()} Elim Sanctuary Region 61. All Rights Reserved.
                    </p> 
                </div>
            </div>
        </footer>
    );
}