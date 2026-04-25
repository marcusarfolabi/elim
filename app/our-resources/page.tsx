import { ResourcesGrid } from "@/components/ResourcesGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Growth Resources | RCCG Elim Sanctuary",
    description: "Equipping the Prevailers Region 61 family with spiritual tools, study materials, and manuals for Christian maturity.",
    openGraph: {
        title: "Spiritual Growth Resources | RCCG Elim Sanctuary",
        description: "Download study manuals and resources to aid your spiritual walk.",
    },
};

export default function OurResourcesPage() {
    return (
        <main className="bg-background min-h-screen pb-20">
            {/* Hero Section - Themed to match the rest of the site */}
            <section className="bg-brand-blue text-white py-24 px-6 text-center">
                <div className="max-w-7xl mx-auto">
                    <span className="text-brand-gold font-black tracking-[0.3em] text-[10px] md:text-xs uppercase block mb-4">
                        Equipping the Saints
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        Growth Resources
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
                        Equipping the Prevailers Region 61 and Elim Sanctuary family
                        with the tools and materials needed for spiritual maturity.
                    </p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="container mx-auto">
                <div className="text-card-foreground rounded-[2.5rem]">
                    <ResourcesGrid /> 
                </div>
            </section>

            {/* Optional: Simple Footer Quote */}
            <section className="mt-20 text-center px-6">
                <p className="text-muted-foreground italic text-sm">
                    &quot;Study to shew thyself approved unto God, a workman that needeth not to be ashamed...&quot;
                    <span className="block mt-1 font-bold text-brand-blue dark:text-brand-gold uppercase tracking-widest text-[10px]">
                        — 2 Timothy 2:15
                    </span>
                </p>
            </section>
        </main>
    );
}