import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    phone: string;
    request: string;
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, phone, request, email
}) => (
    <div>
        <h1>New Prayer Request</h1>
        <p><strong>From:</strong> {name}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong></p>
        <p>{request}</p>
    </div>
);