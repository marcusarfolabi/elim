"use client";

import { motion, Variants } from "motion/react";
import { CheckCircle2, Download, FileText, Loader2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Resource, RESOURCES } from "@/setting";
import { useState } from "react";
import Link from "next/link";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    },
};

export function ResourcesGrid({ limit }: { limit?: number }) {
    // Determine which items to show
    const displayResources = limit ? RESOURCES.slice(0, limit) : RESOURCES;
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                {limit && RESOURCES.length > limit && (<div className="text-center mb-16">
                    <h2 className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-3">Digital Library</h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white tracking-tight">
                        GROWTH RESOURCES
                    </h3>
                </div>
                )}


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayResources.map((item) => (
                        <Dialog key={item.slug}>
                            <motion.div
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group relative bg-card rounded-[2rem] overflow-hidden border border-border/50 shadow-xl"
                            >
                                <div className="relative h-72 w-full overflow-hidden">
                                    {/* Age Group Badge */}
                                    {item.ageGroup && (
                                        <span className="absolute top-4 right-4 z-30 bg-white/20 backdrop-blur-md border border-white/30 text-[10px] text-white px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
                                            {item.ageGroup}
                                        </span>
                                    )}

                                    {/* Dark Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80" />


                                    {/* STUNNING AVATAR FALLBACK */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${item.color} flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-105`}>

                                        {/* Large Background Initial for Texture */}
                                        <span className="absolute text-white/10 text-[12rem] font-black select-none pointer-events-none tracking-tighter">
                                            {item.title.charAt(0)}
                                        </span>

                                        {/* Center Icon with subtle glow */}
                                        <div className="relative z-20 flex flex-col items-center">
                                            <FileText className="text-white/60 w-16 h-16 mb-4 drop-shadow-2xl" />
                                            <div className="h-1 w-12 bg-white/20 rounded-full blur-sm animate-pulse" />
                                        </div>
                                    </div>

                                    {/* Text Content Overlay */}
                                    <div className="absolute bottom-4 left-6 z-20">
                                        <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                                            {item.category}
                                        </p>
                                        <h4 className="text-white text-xl font-bold leading-tight group-hover:text-brand-gold transition-colors">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <DialogTrigger asChild>
                                        <Button className="cursor-pointer w-full bg-brand-blue dark:bg-brand-gold hover:opacity-90 text-white dark:text-black rounded-2xl h-12 font-bold transition-all">
                                            VIEW DETAILS
                                        </Button>
                                    </DialogTrigger>
                                </div>
                            </motion.div>

                            <DialogContent className="sm:max-w-150 rounded-[2.5rem] border-none bg-background/80 backdrop-blur-xl p-0 overflow-hidden shadow-2xl">
                                <div className="grid md:grid-cols-2">
                                    <div className="relative h-64 md:h-full min-h-75 overflow-hidden">

                                        <div className={`absolute inset-0 bg-linear-to-br ${item.color} flex items-center justify-center p-8`}>
                                            <span className="absolute text-white/10 text-[15rem] font-black select-none pointer-events-none">
                                                {item.title.charAt(0)}
                                            </span>

                                            <div className="relative z-20 flex flex-col items-center">
                                                <FileText className="text-white/60 w-24 h-24 mb-4 drop-shadow-2xl" />
                                                <div className="h-1.5 w-16 bg-white/20 rounded-full blur-md animate-pulse" />
                                            </div>
                                        </div>

                                    </div>

                                    {/* RIGHT SIDE: CONTENT */}
                                    <div className="p-8 flex flex-col justify-center">
                                        <DialogHeader>
                                            <span className="text-brand-red font-bold text-xs tracking-widest uppercase mb-2">
                                                {item.category}
                                            </span>
                                            <DialogTitle className="text-3xl font-bold text-brand-blue dark:text-white mb-4">
                                                {item.title}
                                            </DialogTitle>
                                            <DialogDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                                                {item.description} </DialogDescription>
                                        </DialogHeader>

                                        <div className="flex flex-col gap-3 mt-auto">
                                            <ResourceDownloadButton item={item} />
                                            <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase font-medium">
                                                <FileText size={12} />
                                                Format: {item.format} • Size: {item.size}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
                {limit && RESOURCES.length > limit && (
                    <div className="mt-7 text-center">
                        <Button asChild className="rounded-2xl px-8 h-14 font-bold bg-brand-blue hover:opacity-90">
                            <Link href="/our-resources">
                                SEE ALL RESOURCES
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

export function ResourceDownloadButton({ item }: { item: Resource }) {
    const [downloading, setDownloading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleDownload = async () => {
        setDownloading(true);
        setProgress(0);

        // 1. Simulate Progress for UI/UX feel
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 95 ? 95 : prev + 5));
        }, 100);

        try {
            // 2. Trigger the actual browser download
            const link = document.createElement("a");
            link.href = item.file; // Uses the path from your Resource object
            link.download = `${item.slug}.${item.format?.toLowerCase() || 'pdf'}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // 3. Complete the progress bar
            setProgress(100);
            setTimeout(() => {
                setDownloading(false);
                setIsCompleted(true);
                clearInterval(interval);
            }, 500);

        } catch (error) {
            console.error("Download failed", error);
            setDownloading(false);
            clearInterval(interval);
        }

        // Reset success state after 3 seconds
        setTimeout(() => setIsCompleted(false), 3000);
    };

    return (
        <div className="w-full space-y-2">
            <Button
                onClick={handleDownload}
                disabled={downloading}
                className={`relative w-full h-14 rounded-2xl text-lg font-bold shadow-lg transition-all active:scale-95 overflow-hidden
          ${isCompleted ? 'bg-green-600' : 'bg-brand-red hover:bg-red-700'} 
          text-white border-none cursor-pointer`}
            >
                {/* Progress Fill */}
                {downloading && (
                    <div
                        className="absolute inset-0 bg-black/20"
                        style={{ width: `${progress}%` }}
                    />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2">
                    {downloading ? (
                        <>
                            <Loader2 className="animate-spin h-5 w-5" />
                            {progress}%
                        </>
                    ) : isCompleted ? (
                        <>
                            <CheckCircle2 className="h-5 w-5" />
                            READY
                        </>
                    ) : (
                        <>
                            <Download className="h-5 w-5" />
                            GET {item.format || 'PDF'}
                        </>
                    )}
                </span>
            </Button>
        </div>
    );
}