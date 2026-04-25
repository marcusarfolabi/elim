
import { Hero } from "@/components/Hero";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import { AsymmetricGallery } from "@/components/Gallery";
import { IdentitySection } from "@/components/IdentitySection";
import TestimonySection from "@/components/TestimonySection";
import { WelcomeSection } from "@/components/WelcomeSection";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <WelcomeSection />
      <ResourcesGrid limit={4} />
      <AsymmetricGallery limit={5} />
      <TestimonySection />
      <IdentitySection />
    </main>
  );
}