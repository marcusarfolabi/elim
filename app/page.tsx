import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-6">
            WELCOME TO ELIM SANCTUARY
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            We are a church that is open to all ages and social classes and we
            believe in spreading God&apos;s love, grace, mercy, goodness and
            salvation to mankind through our Lord Jesus Christ.
          </p>
        </div>
      </section>
    </main>
  );
}