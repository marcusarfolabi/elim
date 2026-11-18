"use client";

import { useState, useCallback, useRef, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "motion/react";
import { ChevronLeft, ChevronRight, X, Maximize2, ZoomIn, ZoomOut } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { GALLERY_IMAGES } from "@/setting";
import { SectionHeader } from "./SectionHeader";

// Define the Props interface
interface GalleryProps {
    limit?: number;
}

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

export function AsymmetricGallery({ limit }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [[page, direction], setPage] = useState([0, 0]);
    const [scale, setScale] = useState(1);
    const swipeStart = useRef<{ x: number; y: number } | null>(null);

    // Slice the images based on the limit prop
    const displayImages = limit ? GALLERY_IMAGES.slice(0, limit) : GALLERY_IMAGES;

    const activeIndex = selectedIndex !== null ? (selectedIndex + page + displayImages.length) % displayImages.length : 0;
    const activeImage = displayImages[activeIndex];

    const paginate = useCallback((newDirection: number) => {
        setScale(1);
        setPage([page + newDirection, newDirection]);
    }, [page]);

    const toggleZoom = () => setScale((prev) => (prev === 1 ? 2 : 1));

    const handleSwipeStart = (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "touch" && scale === 1) {
            swipeStart.current = { x: event.clientX, y: event.clientY };
            event.currentTarget.setPointerCapture(event.pointerId);
        }
    };

    const handleSwipeEnd = (event: PointerEvent<HTMLDivElement>) => {
        const start = swipeStart.current;
        swipeStart.current = null;
        if (!start || scale !== 1) return;

        const deltaX = event.clientX - start.x;
        const deltaY = event.clientY - start.y;
        if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) {
            return;
        }

        paginate(deltaX < 0 ? 1 : -1);
    };

    return (
        <section className="overflow-hidden bg-black py-16 sm:py-24">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
                <SectionHeader
                    overline="Visual Journey"
                    title="Faith in"
                    accent="Focus"
                    align="center"
                    className="[&_h2]:text-white"
                />
                <div className="grid auto-rows-[clamp(7.5rem,40vw,15rem)] grid-cols-2 gap-3 sm:auto-rows-[clamp(9rem,27vw,18rem)] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[clamp(11rem,22vw,21rem)] lg:grid-cols-4">
                    {displayImages.map((image, index) => {
                        const isMoreTile =
                            displayImages.length < GALLERY_IMAGES.length &&
                            index === displayImages.length - 1;
                        const isFeatured = index % 7 === 0;
                        const imageSizes = isFeatured
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                            : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw";

                        if (isMoreTile) {
                            return (
                                <Link
                                    key={image.id}
                                    href="/our-gallery"
                                    aria-label="More gallery photos"
                                    className={`group relative block w-full overflow-hidden rounded-[1.25rem] bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
                                        isFeatured ? "col-span-2 row-span-2" : ""
                                    }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes={imageSizes}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 flex items-center justify-center gap-2 bg-black/55 text-lg font-semibold text-white transition-colors group-hover:bg-black/70">
                                        More <ChevronRight aria-hidden="true" className="size-5" />
                                    </span>
                                </Link>
                            );
                        }

                        return (
                            <Dialog key={image.id} onOpenChange={(open) => !open && setScale(1)}>
                                <DialogTrigger asChild>
                                    <motion.button
                                        type="button"
                                        aria-label={`View ${image.alt}`}
                                        variants={gridItemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-100px" }}
                                        onClick={() => {
                                            setSelectedIndex(index);
                                            setPage([0, 0]);
                                            setScale(1);
                                        }}
                                        className={`group relative w-full overflow-hidden rounded-[1.25rem] bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold ${
                                            isFeatured ? "col-span-2 row-span-2" : ""
                                        }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes={imageSizes}
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                                            <Maximize2 aria-hidden="true" className="size-6 text-white" />
                                        </div>
                                    </motion.button>
                                </DialogTrigger>

                                <DialogContent
                                    showCloseButton={false}
                                    className="!max-w-none w-screen h-dvh p-0 bg-black border-none shadow-none focus:outline-none overflow-hidden flex items-center justify-center"
                                >
                                    {/* UI LAYER */}
                                    <div className="absolute inset-0 z-50 flex flex-col justify-between pointer-events-none">
                                        <div className="w-full flex items-center justify-between p-6 pointer-events-auto">
                                            <p className="text-white/40 font-mono text-[10px] tracking-[0.5em] hidden md:block uppercase">
                                                VIEW // {activeImage?.id}
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

                                        <div className="w-full p-8 md:p-12 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-auto">
                                            <h4 className="text-white text-xl md:text-3xl font-black capitalize tracking-tighter">
                                                {activeImage?.alt}
                                            </h4>
                                            <p className="mt-2 text-sm text-white/55 sm:hidden">
                                                Swipe to browse
                                            </p>
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
                                                onPointerDown={handleSwipeStart}
                                                onPointerUp={handleSwipeEnd}
                                                onPointerCancel={() => {
                                                    swipeStart.current = null;
                                                }}
                                                className="relative h-full w-full touch-pan-y"
                                            >
                                                {activeImage && (
                                                    <Image
                                                        src={activeImage.src}
                                                        alt={activeImage.alt}
                                                        fill
                                                        unoptimized
                                                        className="object-contain select-none p-2"
                                                    />
                                                )}
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