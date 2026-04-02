"use client";

import {  useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";
import { ChevronLeft, ChevronRight, X, Maximize2, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { GALLERY_IMAGES } from "@/setting";

const gridItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
};

const lightboxVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "10%" : "-10%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "10%" : "-10%",
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" },
    }),
};

export function AsymmetricGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [[page, direction], setPage] = useState([0, 0]);
    const [scale, setScale] = useState(1);

    const activeIndex = selectedIndex !== null ? (selectedIndex + page + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0;
    const activeImage = GALLERY_IMAGES[activeIndex];

    const paginate = useCallback((newDirection: number) => {
        setScale(1);
        setPage([page + newDirection, newDirection]);
    }, [page]);

    const toggleZoom = () => setScale((prev) => (prev === 1 ? 2 : 1));

    // Updated sequence for 1 Big + 4 Small layout
    const getColSpan = (index: number) => {
        const sequence = [2, 1, 1, 1, 1, 1, 2, 1];
        return sequence[index % sequence.length];
    };

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-3">Snapshots</h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-brand-blue dark:text-white tracking-tight">
                        ELIM LIFE IN MOTION
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {GALLERY_IMAGES.map((image, index) => {
                        const span = getColSpan(index);
                        return (
                            <Dialog key={image.id} onOpenChange={(open) => !open && setScale(1)}>
                                <DialogTrigger asChild>
                                    <motion.div
                                        variants={gridItemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        whileHover={{ y: -5 }}
                                        onClick={() => setSelectedIndex(index)}
                                        className={`relative group overflow-hidden rounded-3xl cursor-pointer 
                                            ${span === 2 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'col-span-1 aspect-square'}
                                        `}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                                            <Maximize2 className="text-white w-8 h-8 opacity-60" />
                                        </div>
                                    </motion.div>
                                </DialogTrigger>

                                <DialogContent className="max-w-none w-screen h-screen p-0 bg-black border-none shadow-none focus:outline-none overflow-hidden flex items-center justify-center">

                                    {/* UI LAYER */}
                                    <div className="absolute inset-0 z-50 flex flex-col justify-between pointer-events-none">
                                        <div className="w-full flex items-center justify-between p-6 pointer-events-auto">
                                            <p className="text-white/40 font-mono text-[10px] tracking-[0.5em] hidden md:block uppercase">
                                                VIEW // {activeImage.id}
                                            </p>
                                            <div className="flex gap-3 ml-auto">
                                                <button onClick={toggleZoom} className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all backdrop-blur-md">
                                                    {scale > 1 ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                                                </button>
                                                <DialogClose className="bg-brand-blue hover:bg-brand-blue/80 p-2 rounded-full text-white transition-all outline-none">
                                                    <X size={16} />
                                                </DialogClose>
                                            </div>
                                        </div>

                                        {scale === 1 && (
                                            <div className="w-full px-4 flex justify-between items-center pointer-events-none">
                                                <button onClick={() => paginate(-1)} className="pointer-events-auto bg-white/5 hover:bg-brand-blue p-2 rounded-full text-white transition-all">
                                                    <ChevronLeft size={18} />
                                                </button>
                                                <button onClick={() => paginate(1)} className="pointer-events-auto bg-white/5 hover:bg-brand-blue p-2 rounded-full text-white transition-all">
                                                    <ChevronRight size={18} />
                                                </button>
                                            </div>
                                        )}

                                        <div className="w-full p-8 md:p-12 bg-linear-to-t from-black via-black/60 to-transparent pointer-events-auto">
                                            <h4 className="text-white text-xl md:text-3xl font-black capitalize tracking-tighter">
                                                {activeImage.alt}
                                            </h4>
                                        </div>
                                    </div>

                                    {/* IMAGE LAYER */}
                                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                                            <motion.div
                                                key={page}
                                                custom={direction}
                                                variants={lightboxVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                style={{ scale }}
                                                drag={scale > 1}
                                                dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
                                                className="relative w-full h-full"
                                            >
                                                <Image
                                                    src={activeImage.src}
                                                    alt={activeImage.alt}
                                                    fill
                                                    priority
                                                    className="object-contain select-none p-4"
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}