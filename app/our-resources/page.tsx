import { ResourcesGrid } from "@/components/ResourcesGrid";

export default function OurResourcesPage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-brand-blue text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Growth Resources
                </h1>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    Equipping the Prevailers Region 61 and Elim Sanctuary family
                    with the tools and materials needed for spiritual maturity.
                </p>
            </section>

            <ResourcesGrid />
        </main>
    );
}