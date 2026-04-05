import Image from "next/image";
import { Metadata } from "next";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Pastors | RCCG Elim Sanctuary",
  description: "Meet the leadership of RCCG Prevailers Region 61.",
};

const pastors = [
  {
    name: "Pastor Debo Akande",
    role: "Regional Pastor, Prevailers Region 61",
    credentials: "Lawyer by Profession",
    image: "/assets/pastors/pastor-debo.jpg",  
    message: [
      "Greetings, beloved! I'm Pastor Debo Akande, your Regional Pastor, Prevailers Region 61.",
      "As a lawyer by profession, I'd chase justice... but Jesus called me to preach GRACE. I'm a counselor, guiding hearts and a teacher, unlocking God's Word.",
      "'Compassionate' describes me - for God's things, for you. With God's Word, let's prevail!",
      "Married, family man, and passionate about God's Kingdom... Let's journey together, Prevailers!",
      "God's promises are 'yes' in Jesus (2 Cor 1:20). Let's walk in that yes! Join me, let's prevail in prayer, in love, in service. God's best is for Region 61!"
    ],
    accent: "border-blue-600"
  },
  {
    name: "Pastor Abayomi Akintan",
    role: "Pastor-in-Charge, Elim Sanctuary",
    credentials: "MSc. Facility Management",
    image: "/assets/pastors/pastor-abayomi.jpg",  
    message: [
      "Wow, dear Elim Sanctuary family! I'm humbled, I'm grateful, I'm blessed! To serve God and shepherd this amazing Region 61 family... I don't take it for granted.",
      "With a Master's in Facility Management, I manage spaces... but Jesus manages hearts... and I'm grateful He uses me!",
      "To you, dear saints, THANK YOU for partnering with me! Let's keep building, let's keep loving, let's keep pointing to Jesus!",
      "'The fear of the Lord is the beginning of wisdom' (Proverbs 9:10). I'm trusting God with every step!",
      "Let's impact Region 61 for Christ!"
    ],
    accent: "border-gold-600" 
  }
];

export default function OurPastorsPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Meet the shepherds God has placed over the Prevailers Region 61 and Elim Sanctuary family.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 gap-12">
          {pastors.map((pastor, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 ${pastor.accent}`}
            >
              {/* Image Container */}
              <div className="lg:w-1/3 relative h-100 lg:h-auto overflow-hidden">
                <Image
                  src={pastor.image}
                  alt={pastor.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Content Container */}
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-slate-900">{pastor.name}</h2>
                  <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                    {pastor.role}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                    {pastor.credentials}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="absolute -left-6 -top-4 w-10 h-10 text-slate-100 -z-10" />
                  <div className="space-y-4 text-slate-700 leading-relaxed italic">
                    {pastor.message.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scripture Footer */}
      <section className="mt-20 text-center px-6">
        <div className="max-w-3xl mx-auto p-8 border border-dashed border-slate-300 rounded-xl">
          <p className="text-xl text-slate-600 italic">
            &quot;And I will give you shepherds after my own heart, who will feed you with knowledge and understanding.&quot;
          </p>
          <p className="mt-2 font-bold text-slate-900">— Jeremiah 3:15</p>
        </div>
      </section>
    </main>
  );
}