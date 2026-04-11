import Image from "next/image";
import { Metadata } from "next";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Pillar | Welcome from the Regional Pastor",
  description: "A personal welcome message from Pastor Debo Akande, Regional Pastor of RCCG Elim Sanctuary.",
};

export default function OurPillarPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">            
          Leadership Message
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Our Pillar as a minitry
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/assets/pastors/pastor_debo_akande.jpg"
                alt="Pastor Debo Akande"
                fill
                sizes="w-41 h-41"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-8 text-white">
                <p className="text-xl font-bold">Pastor Debo Akande</p>
                <p className="text-sm opacity-80">Regional Pastor, RCCG Elim Sanctuary</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-blue-800 font-medium italic">
                &quot;To raise a people who know God intimately, serve Him wholeheartedly, and reflect His love to the world.&quot;
              </p>
            </div>
          </div>

          {/* Letter Content */}
          <div className="w-full lg:w-7/12">
            <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed font-sans">
              <p className="text-2xl font-medium text-slate-900 mb-8">
                Beloved in Christ,
              </p>

              <p>
                It is with great joy and a heart full of gratitude that I welcome you to the online home of
                <strong> RCCG Elim Sanctuary</strong>. Whether you are a first-time visitor, a returning friend,
                or a committed member of our church family, we are honored to have you here.
              </p>

              <p>
                Our prayer is that this platform becomes more than just a website—it should be a point of
                connection, encouragement, and spiritual nourishment for you. As you explore, you will find
                information about our worship services, ministries, events, and opportunities to grow in your
                walk with God.
              </p>

              <p className="bg-slate-50 p-6 border-l-4 border-blue-600 rounded-r-lg my-10 text-slate-800 font-medium">
                At Elim Sanctuary, our mission is simple yet profound: to raise a people who know God
                intimately, serve Him wholeheartedly, and reflect His love to the world. We believe every life
                has purpose, every soul has value, and every individual can experience the transforming power
                of Jesus Christ.
              </p>

              <p>
                As you navigate through these pages, may the peace of God fill your heart, may His Word
                inspire you, and may His presence draw you closer to Him. We invite you not only to visit online
                but to join us in fellowship—where the warmth of our community and the presence of God are
                real and tangible.
              </p>

              <p>
                Thank you for taking the time to connect with us. We look forward to worshipping, growing,
                and walking this journey of faith together.
              </p>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-slate-900 font-bold text-xl mb-1">God bless you richly.</p>
                <p className="text-blue-600 font-bold font-serif text-3xl mb-4 italic">
                  Pastor Debo Akande
                </p>
                <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                  Regional Pastor, RCCG Elim Sanctuary
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-colors"
                >
                  Join us for Service
                  <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}