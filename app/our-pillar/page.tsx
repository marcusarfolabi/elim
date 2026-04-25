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
    <main className="min-h-screen bg-background">
      {/* Hero Section - Using official brand blue */}
      <section className="bg-brand-blue text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
          Leadership Message
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-medium">
          The heart and vision behind our ministry
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Sidebar: Pastor's Photo & Vision Quote */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-24">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-border">
              <Image
                src="/assets/pastors/pastor_debo_akande.jpg"
                alt="Pastor Debo Akande"
                fill
                sizes="(max-w-768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Gradient overlay for name legibility */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-10 text-white">
                <p className="text-2xl font-bold">Pastor Debo Akande</p>
                <p className="text-sm opacity-80 uppercase tracking-widest font-semibold mt-1">
                  Regional Pastor, RCCG Elim Sanctuary
                </p>
              </div>
            </div>

            {/* Mission Quote Box */}
            <div className="mt-8 p-8 bg-brand-blue/5 dark:bg-brand-gold/5 rounded-[2rem] border border-brand-blue/10 dark:border-brand-gold/20">
              <p className="text-brand-blue dark:text-brand-gold font-bold italic leading-relaxed">
                &quot;To raise a people who know God intimately, serve Him wholeheartedly, and reflect His love to the world.&quot;
              </p>
            </div>
          </div>

          {/* Letter Content */}
          <div className="w-full lg:w-7/12">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed font-sans">
              <p className="text-3xl font-black text-brand-blue dark:text-white uppercase tracking-tighter mb-8">
                Beloved in Christ,
              </p>

              <p>
                It is with great joy and a heart full of gratitude that I welcome you to the online home of
                <strong className="text-foreground"> RCCG Elim Sanctuary</strong>. Whether you are a first-time visitor, a returning friend,
                or a committed member of our church family, we are honored to have you here.
              </p>

              <p>
                Our prayer is that this platform becomes more than just a website—it should be a point of
                connection, encouragement, and spiritual nourishment for you. As you explore, you will find
                information about our worship services, ministries, events, and opportunities to grow in your
                walk with God.
              </p>

              {/* Callout Quote */}
              <div className="bg-brand-accent/50 p-8 border-l-4 border-brand-red rounded-r-[2rem] my-12 text-foreground font-medium italic text-xl shadow-sm">
                At Elim Sanctuary, our mission is simple yet profound: to raise a people who know God
                intimately, serve Him wholeheartedly, and reflect His love to the world. We believe every life
                has purpose, every soul has value, and every individual can experience the transforming power
                of Jesus Christ.
              </div>

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

              {/* Signature Area */}
              <div className="mt-16 pt-10 border-t border-border">
                <p className="text-foreground font-bold text-xl mb-2">God bless you richly.</p>
                <p className="text-brand-blue dark:text-brand-gold font-serif text-4xl mb-4 italic">
                  Pastor Debo Akande
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-black">
                  Regional Pastor, RCCG Elim Sanctuary
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-12">
                <Link
                  href="/#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-full font-bold hover:bg-brand-red transition-all duration-300 shadow-lg hover:shadow-brand-red/20 active:scale-95"
                >
                  Join us for Service
                  <MoveRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}