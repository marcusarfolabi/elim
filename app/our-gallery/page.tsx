import { AsymmetricGallery } from "@/components/Gallery";

export default function OurGallery() {
    return (
    <>
        <div className="container mx-auto px-4 py-8">

            <AsymmetricGallery limit={100} />
        </div>
    </>

    );
}