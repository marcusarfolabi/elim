import { createClient } from "@/lib/supabase";
import { TestimonyCarousel } from "./TestimonyCarousel";
import { SectionHeader } from "./SectionHeader";

export default async function TestimonySection() {
    const supabase = createClient();

    const { data: testimonies } = await supabase
        .from('testimonies')
        .select('*')
        .eq('can_share', 'yes')
        .order('created_at', { ascending: false });

    if (!testimonies || testimonies.length === 0) {
        return <p className="text-center py-10">No shared testimonies found in database.</p>;
    }
    
    return (
        <section className="py-10 bg-background overflow-hidden border-t border-border">

            <SectionHeader
                overline="Snapshots of Grace"
                title="Stories of"
                accent="Faith"
            />
            <TestimonyCarousel testimonies={testimonies} />
        </section>
    );
}