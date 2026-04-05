import { Html, Body, Container, Text, Heading, Hr, Section } from "@react-email/components";
import * as React from "react";

interface TestimonyProps {
    name: string;
    email?: string;
    phone: string;
    category: string;
    title?: string;
    testimony: string;
    canShare: string;
}

export const TestimonyEmail = ({
    name, email, phone, category, title, testimony, canShare
}: TestimonyProps) => {
    const isPrivate = canShare.toLowerCase().includes("private");

    return (
        <Html>
            <Body style={{ fontFamily: "sans-serif", backgroundColor: "#fefefe", padding: "20px" }}>
                <Container style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "8px", border: `2px solid ${isPrivate ? "#dc2626" : "#16a34a"}` }}>
                    <Section style={{ textAlign: "center", marginBottom: "20px" }}>
                        <Text style={{ color: isPrivate ? "#dc2626" : "#16a34a", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase" }}>
                            {isPrivate ? "🔴 Private to Pastor Only" : "🟢 Permission to Share with Church"}
                        </Text>
                    </Section>

                    <Heading style={{ color: "#1e3a8a", fontSize: "22px", margin: "0" }}>
                        Testimony: {category}
                    </Heading>
                    {title && <Text style={{ fontSize: "18px", color: "#444", fontWeight: "600" }}>{title}</Text>}

                    <Hr />

                    <Section>
                        <Text><strong>From:</strong> {name}</Text>
                        <Text><strong>Phone:</strong> {phone}</Text>
                        {email && <Text><strong>Email:</strong> {email}</Text>}
                    </Section>

                    <Hr />

                    <Section>
                        <Text style={{ lineHeight: "1.6", color: "#333", whiteSpace: "pre-wrap" }}>
                            {testimony}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};