// app/giving/page.tsx (Server Component)

import DonationPage from "@/components/Donation";

export const metadata = {
    title: "Giving & Donations | RCCG Elim Sanctuary",
    description: "Support the missions of RCCG Elim Sanctuary. Securely give your tithes and offerings online via bank transfer.",
    openGraph: {
        title: "Support Our Ministry | RCCG Elim Sanctuary",
        description: "Your generosity helps us reach more lives for Christ.",
    },
};

export default function Page() {
    return <DonationPage />;
}