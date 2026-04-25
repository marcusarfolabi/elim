import { AsymmetricGallery } from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Gallery | RCCG Elim Sanctuary",
    description: "A visual journey of worship, community, and service at RCCG Elim Sanctuary.",
};

export default function OurGallery() {
    return (
        <main className="min-h-screen bg-background pb-20">


            <div className="container mx-auto px-4 mt-8 md:mt-12">

                <AsymmetricGallery limit={100} />
            </div>
        </main>
    );
}