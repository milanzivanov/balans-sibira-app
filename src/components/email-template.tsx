import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  email,
  message
}) => (
  <div>
    <h1>Nova poruka sa kontakt forme</h1>
    <p>
      <strong>Ime:</strong> {firstName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Poruka:</strong>
    </p>
    <p>{message}</p>
  </div>
);
