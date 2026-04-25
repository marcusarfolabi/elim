"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimony {
    id: string;
    category: string;
    title: string;
    testimony: string;
    name: string;
}

export function TestimonyCarousel({ testimonies }: { testimonies: Testimony[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Track scroll position to update dots
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, clientWidth } = scrollRef.current;
                // Calculate which card is most visible
                const index = Math.round(scrollLeft / (clientWidth * 0.85));
                setActiveIndex(index);
            }
        };

        const currentRef = scrollRef.current;
        currentRef?.addEventListener("scroll", handleScroll, { passive: true });
        return () => currentRef?.removeEventListener("scroll", handleScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 512;

            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative group">
            {/* Navigation Buttons (Desktop) */}
            <div className="absolute top-1/2 -translate-y-1/2 left-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
                <button onClick={() => scroll("left")} className="bg-background/80 backdrop-blur-md p-4 rounded-full shadow-2xl border border-border hover:bg-brand-blue hover:text-white transition-all active:scale-95">
                    <ChevronLeft size={28} />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
                <button onClick={() => scroll("right")} className="bg-background/80 backdrop-blur-md p-4 rounded-full shadow-2xl border border-border hover:bg-brand-blue hover:text-white transition-all active:scale-95">
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* The Row */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto pb-8 pt-4 px-[5vw] md:px-[10vw] gap-8 snap-x snap-mandatory scrollbar-hide"
            >
                {testimonies.map((item) => (
                    <div key={item.id} className="flex-none w-[85vw] md:w-[480px] snap-center">
                        <div className="relative h-full p-10 rounded-[3rem] bg-card text-card-foreground border border-border shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col min-h-[450px]">
                            <Quote className="absolute top-8 right-10 text-brand-blue/10 dark:text-brand-gold/10 w-20 h-20" />
                            <div className="relative z-10 flex flex-col h-full flex-grow">
                                <span className="px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-[10px] font-black tracking-[0.2em] uppercase mb-8 w-fit">{item.category}</span>
                                <h4 className="text-2xl font-bold text-brand-blue dark:text-white mb-6 leading-tight">{item.title}</h4>
                                <p className="text-muted-foreground italic text-lg md:text-xl mb-10 flex-grow leading-relaxed">&quot;{item.testimony}&quot;</p>
                                <div className="flex items-center gap-4 pt-8 border-t border-border mt-auto">
                                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-red text-white flex items-center justify-center font-bold text-xl shadow-lg shrink-0">
                                        {item.name?.charAt(0) || "E"}
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-blue dark:text-white text-lg leading-none">{item.name}</p>
                                        <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">Faithful Heart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Indicators (Dots) */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
                {testimonies.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === index
                                ? "w-8 bg-brand-red"
                                : "w-2 bg-brand-red/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}