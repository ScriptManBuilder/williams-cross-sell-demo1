import React from 'react';
import Layout from '../../components/Layout/Layout';
import {
  LegalPageContainer,
  LegalHeader,
  LegalTitle,
  LegalSubtitle,
  LastUpdated,
  LegalSection,
  SectionTitle,
  SubsectionTitle,
  Paragraph,
  List,
  ListItem,
  ContactInfo,
  ContactTitle,
  ContactText,
  EmailLink
} from './Legal.styles';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout pageTitle="Privacy Policy">
      <LegalPageContainer>
      <LegalHeader>
        <LegalTitle>Privacy Policy</LegalTitle>
        <LegalSubtitle>
          Your privacy is important to us. This Privacy Policy explains how Williams Revenue Recovery collects, uses, and protects your personal information.
        </LegalSubtitle>
        <LastUpdated>Last Updated: November 27, 2025</LastUpdated>
      </LegalHeader>

      <LegalSection>
        <SectionTitle>1. Information We Collect</SectionTitle>
        <Paragraph>
          We collect information that you provide directly to us, including:
        </Paragraph>
        <List>
          <ListItem>Account information (name, email address, password)</ListItem>
          <ListItem>Business information (company name, website, tax ID)</ListItem>
          <ListItem>Payment information (processed securely through our payment providers)</ListItem>
          <ListItem>Transaction data related to payment recovery services</ListItem>
          <ListItem>Communication preferences and support inquiries</ListItem>
        </List>

        <SubsectionTitle>Automatically Collected Information</SubsectionTitle>
        <Paragraph>
          When you use our services, we automatically collect certain information, including:
        </Paragraph>
        <List>
          <ListItem>Device information (IP address, browser type, operating system)</ListItem>
          <ListItem>Usage data (pages visited, features used, time spent)</ListItem>
          <ListItem>Cookies and similar tracking technologies</ListItem>
          <ListItem>Log data (access times, error logs, performance metrics)</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>2. How We Use Your Information</SectionTitle>
        <Paragraph>
          We use the information we collect to:
        </Paragraph>
        <List>
          <ListItem>Provide, maintain, and improve our payment recovery services</ListItem>
          <ListItem>Process transactions and send transaction notifications</ListItem>
          <ListItem>Respond to your comments, questions, and customer service requests</ListItem>
          <ListItem>Send technical notices, updates, security alerts, and support messages</ListItem>
          <ListItem>Monitor and analyze trends, usage, and activities in connection with our services</ListItem>
          <ListItem>Detect, investigate, and prevent fraudulent transactions and other illegal activities</ListItem>
          <ListItem>Comply with legal obligations and enforce our terms of service</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>3. Information Sharing and Disclosure</SectionTitle>
        <Paragraph>
          We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, data analysis, email delivery)
          </ListItem>
          <ListItem>
            <strong>Business Partners:</strong> With integrated platforms (Shopify, WooCommerce, Stripe) as necessary to provide our services
          </ListItem>
          <ListItem>
            <strong>Legal Requirements:</strong> When required by law or to respond to legal process
          </ListItem>
          <ListItem>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
          </ListItem>
          <ListItem>
            <strong>With Your Consent:</strong> When you explicitly authorize us to share information
          </ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>4. Data Security</SectionTitle>
        <Paragraph>
          We implement appropriate technical and organizational measures to protect your personal information, including:
        </Paragraph>
        <List>
          <ListItem>Encryption of data in transit and at rest using industry-standard protocols</ListItem>
          <ListItem>Regular security assessments and penetration testing</ListItem>
          <ListItem>Access controls and authentication mechanisms</ListItem>
          <ListItem>Employee training on data protection and security practices</ListItem>
          <ListItem>PCI DSS compliance for payment card data</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>5. Data Retention</SectionTitle>
        <Paragraph>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Transaction data is typically retained for 7 years to comply with financial regulations.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>6. Your Rights and Choices</SectionTitle>
        <Paragraph>
          Depending on your location, you may have certain rights regarding your personal information:
        </Paragraph>
        <List>
          <ListItem><strong>Access:</strong> Request a copy of the personal information we hold about you</ListItem>
          <ListItem><strong>Correction:</strong> Request correction of inaccurate or incomplete information</ListItem>
          <ListItem><strong>Deletion:</strong> Request deletion of your personal information</ListItem>
          <ListItem><strong>Portability:</strong> Request transfer of your data to another service provider</ListItem>
          <ListItem><strong>Objection:</strong> Object to processing of your personal information</ListItem>
          <ListItem><strong>Opt-out:</strong> Unsubscribe from marketing communications</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>7. Cookies and Tracking Technologies</SectionTitle>
        <Paragraph>
          We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our services.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>8. International Data Transfers</SectionTitle>
        <Paragraph>
          Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>9. Children's Privacy</SectionTitle>
        <Paragraph>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete such information.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>10. Changes to This Privacy Policy</SectionTitle>
        <Paragraph>
          We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </Paragraph>
      </LegalSection>

      <ContactInfo>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactText>
          If you have any questions about this Privacy Policy, please contact us:
        </ContactText>
        <ContactText>
          Email: <EmailLink href="mailto:privacy@williamsrr.com">privacy@williamsrr.com</EmailLink>
        </ContactText>
        <ContactText>
          Williams Revenue Recovery<br />
          Data Protection Officer<br />
          123 Commerce Street, Suite 500<br />
          San Francisco, CA 94105
        </ContactText>
      </ContactInfo>
      </LegalPageContainer>
    </Layout>
  );
};

export default PrivacyPolicy;
