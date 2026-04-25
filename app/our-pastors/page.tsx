import Image from "next/image";
import { Metadata } from "next";
import { mainPastors, ministers } from "@/setting";
import { SectionHeader } from "@/components/SectionHeader"; // Using your reusable header

export const metadata: Metadata = {
  title: "Our Pastors | RCCG Elim Sanctuary",
  description: "Meet the leadership of RCCG Prevailers Region 61.",
};

export default function OurPastorsPage() {
  return (
    <main className="bg-background min-h-screen pb-20">
      {/* Hero Section - Using theme variables */}
      <section className="bg-brand-blue text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          Our Leadership
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-medium">
          Meet the shepherds God has placed over the Prevailers Region 61 and Elim Sanctuary family.
        </p>
      </section>

      {/* Main Pastors Section */}
      <section className="max-w-6xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-1 gap-12">
          {mainPastors.map((pastor, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row bg-card text-card-foreground rounded-[2rem] shadow-xl overflow-hidden border border-border"
            >
              <div className="lg:w-1/3 relative h-100 lg:h-auto overflow-hidden">
                <Image
                  src={pastor.image}
                  alt={pastor.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white tracking-tight">
                  {pastor.name}
                </h2>
                <p className="text-brand-red font-black uppercase tracking-[0.2em] text-xs mt-2 mb-6">
                  {pastor.role}
                </p>
                <div className="space-y-4 text-muted-foreground italic text-lg leading-relaxed">
                  {pastor.message.map((para, i) => <p key={i}>&quot;{para}&quot;</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Ministers Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <SectionHeader
          overline="The Team"
          title="Our"
          accent="Ministers"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministers.map((minister, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 bg-card rounded-3xl shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="shrink-0">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-brand-blue/10">
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-brand-blue dark:text-white text-lg leading-tight">
                  {minister.name}
                </h3>
                <span className="text-brand-red text-[10px] font-black uppercase tracking-widest mt-1 mb-2">
                  {minister.role}
                </span>
                <p className="text-muted-foreground text-sm leading-snug">
                  {minister.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> 

      <section className="mt-32 text-center px-6">
        <div className="max-w-4xl mx-auto p-12 border-2 border-dashed border-border rounded-[3rem] bg-brand-accent/30 relative">
          {/* Decorative Quote Mark */}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background px-4 text-brand-red text-4xl font-serif">
            &ldquo;
          </span>

          <p className="text-xl md:text-2xl text-muted-foreground  leading-relaxed">
            &quot;And I will give you shepherds after my own heart, who will feed you with knowledge and understanding.&quot;
          </p>
          <p className="mt-6 font-black text-brand-blue dark:text-brand-gold uppercase tracking-widest text-sm">
            — Jeremiah 3:15
          </p>
        </div>
      </section>
    </main>
  );
}