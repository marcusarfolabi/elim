"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background p-6">
            <div className="max-w-2xl w-full text-center space-y-8">
                {/* Animated 404 Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[12rem] font-black leading-none tracking-tighter text-muted/30 select-none">
                        404
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight -mt-12 text-foreground">
                        Lost in the <span className="text-brand-blue">Sanctuary?</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
                        The page you are looking for doesn`t exist or has been moved.
                        Let`s get you back on the right path.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto border-border rounded-2xl py-6 px-8 font-bold hover:bg-muted"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <MoveLeft size={18} />
                            GO BACK
                        </Link>
                    </Button>

                    <Button
                        asChild
                        className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl py-6 px-8 font-bold shadow-lg shadow-brand-blue/20"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Home size={18} />
                            RETURN HOME
                        </Link>
                    </Button>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]"
                />
            </div>
        </div>
    );
}