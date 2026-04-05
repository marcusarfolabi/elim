"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "motion/react";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import { AsymmetricGallery } from "@/components/Gallery";
import { IdentitySection } from "@/components/IdentitySection";
import { ModernFooter } from "@/components/Footer";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"  
    }
  },
}; 

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />

      {/* Welcome Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4"
            >
              A Message from the Pastor
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-6xl font-bold text-brand-blue dark:text-white mb-8 tracking-tight"
            >
              WELCOME TO <br className="hidden md:block" /> ELIM SANCTUARY
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
            >
              We are honored to welcome you to our online home. Whether you are a
              first-time visitor or a returning friend, we invite you to experience
              the joy and grace of our church family as we spread God&apos;s love and
              salvation to all.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="cursor-pointer border-brand-blue text-brand-blue dark:border-brand-gold dark:text-brand-gold hover:bg-brand-blue hover:text-white rounded-full px-10 h-14 font-bold group transition-all"
              >
                READ FULL MESSAGE
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ResourcesGrid />
      <AsymmetricGallery />
      <IdentitySection />
    </main>
  );
}