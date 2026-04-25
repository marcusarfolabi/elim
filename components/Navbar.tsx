"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun, Heart } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { NAVLINKS } from "@/setting";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-background/70 backdrop-blur-md border-b shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12">
              <Image
                src="/favicon-96x96.png"
                alt="RCCG Logo"
                fill
                sizes="w-96 h-96"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-brand-blue dark:text-white">
                ELIM SANCTUARY
              </span>
              <span className="text-[10px] uppercase tracking-widest text-brand-red font-semibold">
                REGION 61
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAVLINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors flex items-center gap-2 text-foreground/80 hover:text-brand-red dark:text-white/80 dark:hover:text-brand-red"
              >
                <link.icon className="w-4 h-4 text-brand-blue dark:text-white/80" />
                {link.name}
              </Link>
            ))}

            <div className="h-6 w-px bg-border mx-2" />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400 transition-all cursor-pointer" />
                ) : (
                  <Moon className="h-5 w-5 text-brand-blue transition-all cursor-pointer" />
                )
              ) : (
                <div className="h-5 w-5 cursor-pointer" />
              )}
            </Button>

            {/* Donation CTA */}
            {/* route to donation page route */}

            <Link href="/donation" passHref legacyBehavior>
              <Button className="bg-brand-red cursor-pointer hover:bg-red-700 text-white rounded-full px-6 shadow-lg shadow-red-500/20 transition-transform hover:scale-105">
                <Heart className="mr-2 h-4 w-4 fill-current" />
                DONATION
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAVLINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-brand-accent transition-colors"
                >
                  <link.icon className="w-5 h-5 text-brand-blue dark:text-white" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/donation" passHref legacyBehavior>
                  <Button
                    className="w-full bg-brand-red py-6 text-lg rounded-xl"
                    onClick={() => setIsOpen(false)} // ADD THIS LINE HERE
                  >
                    <Heart className="mr-2 h-4 w-4 fill-current" />
                    DONATION
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}