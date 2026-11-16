import Link from "next/link";
import { createClient } from "@/lib/supabase";
import { TestimonyCarousel } from "./TestimonyCarousel";
import { SectionHeader } from "./SectionHeader";

export default async function TestimonySection({
    showArchiveLink = true,
}: {
    showArchiveLink?: boolean;
} = {}) {
    const supabase = createClient();

    const { data: testimonies, error } = await supabase
        .from("testimonies")
        .select("id, name, category, title, testimony, can_share, created_at")
        .eq("can_share", "yes")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Failed to load public testimonies:", error.message);
    }

    const publicTestimonies = (testimonies ?? []).map((item) => ({
        id: String(item.id),
        name: item.name || "Elim Sanctuary member",
        category: item.category || "Testimony",
        title: item.title || "A testimony of faith",
        testimony: item.testimony || "",
    }));

    return (
        <section className="py-10 bg-background overflow-hidden border-t border-border">
            <SectionHeader
                overline="Snapshots of Grace"
                title="Stories of"
                accent="Faith"
            />
            {error ? (
                <p className="text-center py-10 text-muted-foreground">
                    Testimonies are temporarily unavailable. Please try again later.
                </p>
            ) : publicTestimonies.length > 0 ? (
                <TestimonyCarousel testimonies={publicTestimonies} />
            ) : (
                <p className="text-center py-10 text-muted-foreground">
                    No public testimonies have been shared yet.
                </p>
            )}
            {showArchiveLink && (
                <div className="mt-8 text-center">
                    <Link
                        href="/testimonies"
                        className="inline-flex items-center rounded-full bg-brand-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-red"
                    >
                        Read all testimonies
                    </Link>
                </div>
            )}
        </section>
    );
}