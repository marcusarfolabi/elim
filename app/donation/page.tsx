"use client";

import { useState } from "react";
import { Copy, CheckCircle2, CreditCard, Heart } from "lucide-react";

const donationAccounts = [
    {
        id: "offering",
        title: "OFFERING",
        accountName: "Elim Sanctuary Offering",
        accountNumber: "0696726770",
        bank: "ACCESS BANK",
        bgColor: "bg-[#004d3d]", // Dark green from flyer
        textColor: "text-white",
    },
    {
        id: "tithe",
        title: "TITHE",
        accountName: "Elim Sanctuary Tithe",
        accountNumber: "0036423024",
        bank: "ACCESS BANK",
        bgColor: "bg-white",
        textColor: "text-[#004d3d]",
        border: "border border-slate-200",
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
        <main className="min-h-screen bg-slate-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Heart className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-slate-900">Giving & Donations</h1>
                    <p className="text-slate-600 mt-4 max-w-xl mx-auto">
                        Support the ministry and missions of RCCG Elim Sanctuary.
                        Your generosity helps us reach more lives for Christ.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {donationAccounts.map((acc) => (
                        <div
                            key={acc.id}
                            className={`relative overflow-hidden rounded-3xl p-8 shadow-2xl transition-transform hover:scale-[1.02] ${acc.bgColor} ${acc.textColor} ${acc.border || ""}`}
                        >
                            {/* Badge */}
                            <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6 ${acc.id === "offering" ? "bg-white text-[#004d3d]" : "bg-[#004d3d] text-white"
                                }`}>
                                {acc.title}
                            </div>

                            {/* Account Details */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm opacity-80 font-medium">Account Number</p>
                                        <p className="text-3xl md:text-4xl font-mono font-bold tracking-tighter">
                                            {acc.accountNumber}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard(acc.accountNumber, acc.id)}
                                        className="p-3 rounded-xl bg-black/10 hover:bg-black/20 transition-colors"
                                        title="Copy Account Number"
                                    >
                                        {copiedId === acc.id ? (
                                            <CheckCircle2 className="w-6 h-6 text-green-400" />
                                        ) : (
                                            <Copy className="w-6 h-6" />
                                        )}
                                    </button>
                                </div>

                                <div className="pt-4 border-t border-current/10">
                                    <p className="text-lg font-semibold">{acc.accountName}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="w-8 h-8 rounded bg-[#d4af37] flex items-center justify-center">
                                            <CreditCard className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="font-bold tracking-wider text-sm">{acc.bank}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative background shapes similar to flier */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-current opacity-5 rounded-full" />
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <p className="text-slate-500 text-sm italic">
                            &quot;Each of you should give what you have decided in your heart to give,
                            not reluctantly or under compulsion, for God loves a cheerful giver.&quot;
                        </p>
                        <p className="text-slate-900 font-bold mt-2">— 2 Corinthians 9:7</p>
                    </div>
                </div>
            </div>
        </main>
    );
}