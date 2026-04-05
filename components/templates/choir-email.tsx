import { Html, Body, Container, Text, Heading, Hr, Section } from "@react-email/components";
import * as React from "react";

interface ChoirProps {
    name: string;
    email: string;
    phone: string;
    vocalPart: string;
    experience: string;
    canReadMusic: string;
    availability: string;
}

export const ChoirEmail = ({
    name, email, phone, vocalPart, experience, canReadMusic, availability
}: ChoirProps) => (
    <Html>
        <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f8fafc", padding: "20px" }}>
            <Container style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <Heading style={{ color: "#0f172a", fontSize: "24px", marginBottom: "10px" }}>New Choir Application</Heading>
                <Text style={{ color: "#64748b", fontSize: "14px" }}>A new member is requesting a vocal interview.</Text>
                <Hr />

                <Section>
                    <Text><strong>Candidate:</strong> {name}</Text>
                    <Text><strong>Vocal Part:</strong> <span style={{ color: "#2563eb", fontWeight: "bold" }}>{vocalPart}</span></Text>
                    <Text><strong>Can Read Music:</strong> {canReadMusic}</Text>
                </Section>

                <Hr />

                <Section>
                    <Heading style={{ fontSize: "16px", color: "#0f172a" }}>Experience & Commitment</Heading>
                    <Text style={{ fontStyle: "italic", backgroundColor: "#f1f5f9", padding: "10px", borderRadius: "4px" }}>
                        {experience}
                    </Text>
                    <Text><strong>Rehearsal Availability:</strong> {availability}</Text>
                </Section>

                <Hr />

                <Section>
                    <Text style={{ fontSize: "12px", color: "#94a3b8" }}>
                        Contact: {email} | {phone}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);