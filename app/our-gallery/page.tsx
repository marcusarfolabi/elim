import { AsymmetricGallery } from "@/components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Gallery | RCCG Elim Sanctuary",
    description: "A visual journey of worship, community, and service at RCCG Elim Sanctuary.",
};

export default function OurGallery() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <AsymmetricGallery limit={100} />
        </main>
    );
}