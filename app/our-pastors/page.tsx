import Image from "next/image";
import { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Our Pastors | RCCG Elim Sanctuary",
  description: "Meet the leadership of RCCG Prevailers Region 61.",
};

const mainPastors = [
  {
    name: "Pastor Debo Akande",
    role: "Regional Pastor, Prevailers Region 61",
    credentials: "Lawyer by Profession",
    image: "/assets/pastors/pastor_debo_akande.jpg",
    message: [
      "Greetings, beloved! I'm Pastor Debo Akande, your Regional Pastor, Prevailers Region 61.",
      "As a lawyer by profession, I'd chase justice... but Jesus called me to preach GRACE.",
      "God's best is for Region 61!"
    ],
    accent: "border-blue-600"
  },
  {
    name: "Pastor Kemisola Debo Akande",
    role: "Regional Pastor, Prevailers Region 61",
    credentials: "Lawyer by Profession",
    image: "/assets/pastors/pastor_kemisola_akande.jpg",
    message: [
      " Hello, dear Elim Sanctuary family! I'm Pastor Kemisola Debo Akande, your Regional Pastor, Prevailers Region 61.",
      "As a lawyer by profession, I was trained to advocate... but Jesus called me to intercede.",
      "Let's impact Region 61 for Christ!"
    ],
    accent: "border-pink-600"
  },
  {
    name: "Pastor Abayomi Akintan",
    role: "Pastor-in-Charge, Elim Sanctuary",
    credentials: "MSc. Facility Management",
    image: "/assets/pastors/pastor_abayomi_akintan.jpg",
    message: [
      "Wow, dear Elim Sanctuary family! I'm humbled, I'm grateful, I'm blessed!",
      "Jesus manages hearts... and I'm grateful He uses me!",
      "Let's impact Region 61 for Christ!"
    ],
    accent: "border-green-600"
  }
];

const ministers = [
  {
    name: "A/P Tunde Ogunyemi",
    role: "Workers Leader",
    description: "Dedicated to coordinating the engine room of the church and empowering every worker for excellence.",
    image: "/assets/pastors/tunde_ogunyemi.jpg"
  },
  {
    name: "A/P Julius Oladiran",
    role: "Minister in Charge of SOD",
    description: "Leading the SOD ministry with a heart for discipleship and spiritual growth within the sanctuary.",
    image: "/assets/pastors/abayomi_akintan_zonal.jpg"
  },
  {

    name: "Pastor Femi Majekodunmi",
    role: "Minister in Charge of Youth",
    description: "Leading the local assembly with a passion for the Word and community transformation.",
    image: "/assets/pastors/tunde_balogun.jpg"
  },
  {
    name: "Pastor Tunde Balogun",
    role: "Assistant Pastor",
    description: "Committed to supporting the vision and ensuring the spiritual well-being of the flock.",
    image: "/assets/pastors/julius_oladiran.jpg"
  },
  {
    name: "Pastor Mrs. Akintan",
    role: "Zonal Mummy",
    description: "A mother in Israel, providing spiritual guidance and support to the women and families in the zone.",
    image: "/assets/pastors/mrs_akintan.jpg"
  },
  {
    name: "Pastor Abayomi Akintan",
    role: "Parish Pastor",
    description: "Empowering the next generation to take their place in the kingdom and the marketplace.",
    image: "/assets/pastors/femi_majekodunmi.jpg"
  },
  {
    name: "Bro. Jegede",
    role: "Minister",
    description: "Serving with humility and strength in the advancement of God's kingdom within the sanctuary.",
    image: "/assets/pastors/bro_jegede.jpg"
  },
  {
    name: "Deacon Felix",
    role: "Church Administrator",
    description: "Ensuring the smooth running of church operations and administrative excellence.",
    image: "/assets/pastors/deacon_felix.jpg"
  },
  {
    name: "Bro. Samson Oladele",
    role: "Minister",
    description: "Dedicated to service and contributing to the spiritual vibrancy of the church family.",
    image: "/assets/pastors/samson_oladele.jpg"
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

      {/* Main Pastors Section */}
      <section className="max-w-6xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 gap-12">
          {mainPastors.map((pastor, index) => (
            <div key={index} className={`flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 ${pastor.accent}`}>
              <div className="lg:w-1/3 relative h-100 lg:h-auto overflow-hidden">
                <Image src={pastor.image} sizes="h-33 w-33" alt={pastor.name} fill className="object-cover" priority={index === 0} />
              </div>
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-900">{pastor.name}</h2>
                <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">{pastor.role}</p>
                <div className="space-y-4 text-slate-700 italic">
                  {pastor.message.map((para, i) => <p key={i}>{para}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Ministers Section (Twitter Card Style) */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Our Ministers</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministers.map((minister, index) => (
            <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              {/* Card Image */}
              <div className="shrink-0">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-slate-50">
                  <Image
                    src={minister.image}
                    alt={minister.name}
                    fill
                    sizes="w-32 h-32"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col">
                <div className="flex flex-col mb-1">
                  <h3 className="font-bold text-slate-900 text-base leading-tight">
                    {minister.name}
                  </h3>
                  <span className="text-blue-600 text-xs font-semibold">
                    {minister.role}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-snug">
                  {minister.description}
                </p>
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