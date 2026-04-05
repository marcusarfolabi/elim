import { Html, Body, Container, Text, Heading, Hr, Section } from "@react-email/components";
import * as React from "react";

interface MensFellowshipProps {
    name: string;
    email: string;
    phone: string;
    maritalStatus: string;
    anniversary?: string;
    occupation: string;
    serviceArea: string;
}

export const MensFellowshipEmail = ({
    name, email, phone, maritalStatus, anniversary, occupation, serviceArea
}: MensFellowshipProps) => (
    <Html>
        <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f4f4f4", padding: "20px" }}>
            <Container style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "8px" }}>
                <Heading style={{ color: "#1e3a8a", fontSize: "22px" }}>New Men&apos;s Fellowship Member</Heading>
                <Text>A new brother has expressed interest in joining the fellowship.</Text>
                <Hr />
                <Section>
                    <Text><strong>Name:</strong> {name}</Text>
                    <Text><strong>Email:</strong> {email}</Text>
                    <Text><strong>Phone/WhatsApp:</strong> {phone}</Text>
                    <Text><strong>Marital Status:</strong> {maritalStatus}</Text>
                    {anniversary && <Text><strong>Wedding Anniversary:</strong> {anniversary}</Text>}
                    <Text><strong>Occupation/Skills:</strong> {occupation}</Text>
                    <Text><strong>Preferred Area of Service:</strong> {serviceArea}</Text>
                </Section>
            </Container>
        </Body>
    </Html>
);