"use client";

import { useState } from "react";
import { Copy, CheckCircle2, CreditCard, Heart } from "lucide-react";
import { Metadata } from "next";

// Note: Metadata must be in a Server Component or a separate file if using "use client"
// I have included the logic here, but you should move the metadata export 
// to a layout.tsx or a parent server component for SEO.

export const donationAccounts = [
    {
        id: "offering",
        title: "OFFERING",
        accountName: "Elim Sanctuary Offering",
        accountNumber: "0696726770",
        bank: "ACCESS BANK",
        // Using brand variables from globals.css
        className: "bg-brand-green text-white",
        badge: "bg-white text-brand-green",
    },
    {
        id: "tithe",
        title: "TITHE",
        accountName: "Elim Sanctuary Tithe",
        accountNumber: "0036423024",
        bank: "ACCESS BANK",
        className: "bg-card text-card-foreground border border-border",
        badge: "bg-brand-green text-white",
    },
];

export default function DonationPage() {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <main className="min-h-screen bg-background py-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex p-4 rounded-3xl bg-brand-gold/10 mb-6">
                        <Heart className="w-10 h-10 text-brand-gold" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground">
                        Giving & <span className="text-brand-red">Donations</span>
                    </h1>
                    <p className="text-muted-foreground mt-6 max-w-xl mx-auto text-lg leading-relaxed">
                        Support the ministry and missions of RCCG Elim Sanctuary.
                        Your generosity helps us reach more lives for Christ.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {donationAccounts.map((acc) => (
                        <div
                            key={acc.id}
                            className={`relative overflow-hidden rounded-[2.5rem] p-10 shadow-2xl transition-all duration-500 hover:-translate-y-2 ${acc.className}`}
                        >
                            {/* Badge */}
                            <div className={`inline-block px-5 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-10 ${acc.badge}`}>
                                {acc.title}
                            </div>

                            {/* Account Details */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest opacity-70 font-bold mb-1">Account Number</p>
                                        <p className="text-3xl md:text-4xl font-mono font-black tracking-tighter">
                                            {acc.accountNumber}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(acc.accountNumber, acc.id)}
                                        className="p-4 rounded-2xl bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-all active:scale-90"
                                        title="Copy Account Number"
                                    >
                                        {copiedId === acc.id ? (
                                            <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                                        ) : (
                                            <Copy className="w-6 h-6" />
                                        )}
                                    </button>
                                </div>

                                <div className="pt-6 border-t border-current/10">
                                    <p className="text-xl font-bold tracking-tight">{acc.accountName}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <div className="w-8 h-8 rounded-lg bg-brand-gold flex items-center justify-center">
                                            <CreditCard className="w-4 h-4 text-brand-blue" />
                                        </div>
                                        <p className="font-black tracking-widest text-xs uppercase opacity-90">{acc.bank}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background shape */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-current opacity-5 rounded-full" />
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="max-w-4xl mx-auto p-12 mt-32 border-2 border-dashed border-border rounded-[3rem] bg-brand-accent/30 relative">
                    {/* Decorative Quote Mark */}
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-background px-4 text-brand-red text-4xl font-serif">
                        &ldquo;
                    </span>

                    <p className="text-xl md:text-2xl text-muted-foreground  leading-relaxed">
                        &quot;Each of you should give what you have decided in your heart to give,
                        not reluctantly or under compulsion, for God loves a cheerful giver.&quot;                        </p>
                    <p className="mt-6 font-black text-brand-blue dark:text-brand-gold uppercase tracking-widest text-sm">
                        — 2 Corinthians 9:7
                    </p>
                </div>
            </div>
        </main>
    );
}