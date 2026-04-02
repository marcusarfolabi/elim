"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MapPin, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')", // Replace with your sanctuary image
                }}
            >
                <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-4"
                >
                    Your Place of Comfort
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight"
                >
                    ELIM SANCTUARY
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Button
                        size="lg"
                        className="bg-brand-red hover:bg-red-700 text-white rounded-full px-8 h-14 text-lg font-bold shadow-xl transition-all hover:scale-105"
                    >
                        <MapPin className="mr-2 h-5 w-5" />
                        LOCATE US
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-brand-red hover:bg-red-700 text-white border-none rounded-full px-8 h-14 text-lg font-bold shadow-xl transition-all hover:scale-105"
                    >
                        <PlayCircle className="mr-2 h-5 w-5" />
                        WATCH ONLINE
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
            </motion.div>
        </section>
    );
}