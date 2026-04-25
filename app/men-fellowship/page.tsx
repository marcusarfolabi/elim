import Image from "next/image";
import { Metadata } from "next"; 
import { menFellowship } from "@/setting";

export const metadata: Metadata = {
  title: "Men Fellowship | RCCG Elim Sanctuary",
  description: "Meet the men of RCCG Prevailers Region 61.",
};

export default function MenFellowshipPage() {
  return (
    <main className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          Men of Valor
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-medium">
          Building strong men of integrity, faith, and leadership within the Elim Sanctuary family.
        </p>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {menFellowship.map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-card text-card-foreground rounded-[2.5rem] shadow-xl overflow-hidden border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 3}
                />
                {/* Subtle Brand Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div> 
            </div>
          ))}
        </div>
      </section>

      {/* Scripture Footer - Using Brand Colors */}
      <section className="mt-32 text-center px-6">
        <div className="max-w-4xl mx-auto p-12 border-2 border-dashed border-border rounded-[3rem] bg-brand-accent/30 relative">
          {/* Decorative Quote Mark */}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background px-4 text-brand-red text-4xl font-serif">
            &ldquo;
          </span>
          
          <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            &quot;Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.&quot;
          </p>
          <p className="mt-6 font-black text-brand-blue dark:text-brand-gold uppercase tracking-widest text-sm">
            — Ecclesiastes 4:12
          </p>
        </div>
      </section>
    </main>
  );
}