"use server";

import { createClient } from "@/lib/supabase";

export async function saveTestimony(data: {
    name: string;
    email?: string;
    phone: string;
    category: string;
    title?: string;
    testimony: string;
    canShare: string;
}) {
    try {
        const supabase = createClient();
        const { error } = await supabase
            .from('testimonies')
            .insert([
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    category: data.category,
                    title: data.title,
                    testimony: data.testimony,
                    can_share: data.canShare
                }
            ]);

        if (error) throw error;

        return { success: true };
    } catch (err) {
        console.error("Supabase Error:", err);
        return { success: false, error: "Failed to save testimony to database." };
    }
}