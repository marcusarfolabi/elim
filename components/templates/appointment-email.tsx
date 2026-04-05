import { Html, Body, Container, Text, Heading, Hr } from "@react-email/components";
import * as React from "react";

interface AppointmentProps {
    name: string;
    email: string;
    phone: string;
    purpose: string;
    dateTime: string;
    source: string;
}

export const AppointmentEmail = ({ name, email, phone, purpose, dateTime, source }: AppointmentProps) => (
    <Html>
        <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f9f9f9", padding: "20px" }}>
            <Container style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "8px", border: "1px solid #eee" }}>
                <Heading style={{ color: "#1a365d", fontSize: "20px" }}>New Appointment Request</Heading>
                <Text><strong>With:</strong> Pastor Debo Akande</Text>
                <Hr />
                <Text><strong>Full Name:</strong> {name}</Text>
                <Text><strong>Email:</strong> {email}</Text>
                <Text><strong>Phone/WhatsApp:</strong> {phone}</Text>
                <Text><strong>Purpose:</strong> {purpose}</Text>
                <Text><strong>Preferred Date/Time:</strong> {dateTime}</Text>
                <Text><strong>Referral Source:</strong> {source}</Text>
            </Container>
        </Body>
    </Html>
);