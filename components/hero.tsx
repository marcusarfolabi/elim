"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MapPin, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/hero-placeholder.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>

            {/* 2. Background Video */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                className={`absolute inset-0 z-10 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"
                    }`}
            >
                <source src="/assets/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* 3. Dark Overlay (Ensures text is readable) */}
            <div className="absolute inset-0 z-20 bg-black/50 dark:bg-black/60" />

            <div className="relative z-30 text-center px-4 max-w-5xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-4"
                >
                    A Place of Rest & Comfort
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight"
                >
                    PREVAILERS REGION
                </motion.h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="cursor-pointer bg-brand-red hover:bg-red-700 text-white rounded-full px-8 h-14 text-lg font-bold shadow-xl hover:scale-105 transition-transform"
                    >
                        <MapPin className="mr-2 h-5 w-5" />
                        LOCATE US
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className={cn(
                            "border-2 rounded-full px-8 h-14 text-lg font-bold transition-all cursor-pointer",
                            "border-white text-black hover:bg-white hover:text-brand-blue", // Light/Video styles
                            "dark:border-brand-gold dark:text-brand-gold dark:hover:bg-brand-gold dark:hover:text-black" // Dark mode specific
                        )}
                    >
                        <PlayCircle className="mr-2 h-5 w-5" />
                        WATCH ONLINE
                    </Button>
                </div>
            </div>
        </section>
    );
}