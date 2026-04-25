import Image from "next/image";
import { Metadata } from "next";
import { Quote } from "lucide-react";
import { menFellowship } from "@/setting";

export const metadata: Metadata = {
  title: "Men Fellowship | RCCG Elim Sanctuary",
  description: "Meet the men of RCCG Prevailers Region 61.",
};


export default function OurPastorsPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Men Fellowship</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Meet the men fellowship God has placed over the Prevailers Region 61 and Elim Sanctuary family.
        </p>
      </section>

      {/* Main Men Section */}
      <section className="max-w-6xl mx-auto px-6 -mt-10"> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menFellowship.map((member, index) => (
            <div key={index} className={`flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 ${member.accent}`}>
              <div className="lg:w-full relative h-96 lg:h-auto lg:min-h-96 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scripture Footer */}
      <section className="mt-20 text-center px-6">
        <div className="max-w-3xl mx-auto p-8 border border-dashed border-slate-300 rounded-xl">
          <p className="text-xl text-slate-600 italic">
            &quot;Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.&quot;
          </p>
          <p className="mt-2 font-bold text-slate-900">— Ecclesiastes 4:12</p>
        </div>
      </section>
    </main>
  );
}