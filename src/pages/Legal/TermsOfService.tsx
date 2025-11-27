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

const TermsOfService: React.FC = () => {
  return (
    <Layout pageTitle="Terms of Service">
      <LegalPageContainer>
      <LegalHeader>
        <LegalTitle>Terms of Service</LegalTitle>
        <LegalSubtitle>
          Please read these Terms of Service carefully before using Williams Revenue Recovery services.
        </LegalSubtitle>
        <LastUpdated>Last Updated: November 27, 2025</LastUpdated>
      </LegalHeader>

      <LegalSection>
        <SectionTitle>1. Acceptance of Terms</SectionTitle>
        <Paragraph>
          By accessing or using Williams Revenue Recovery services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>2. Description of Services</SectionTitle>
        <Paragraph>
          Williams Revenue Recovery provides payment recovery solutions for eCommerce businesses, including:
        </Paragraph>
        <List>
          <ListItem>Automated retry logic for failed payment transactions</ListItem>
          <ListItem>Integration with major eCommerce platforms (Shopify, WooCommerce, Magento)</ListItem>
          <ListItem>Payment gateway integrations (Stripe, PayPal, Square)</ListItem>
          <ListItem>Analytics and reporting on payment recovery performance</ListItem>
          <ListItem>Customer communication for payment updates</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>3. Account Registration</SectionTitle>
        <SubsectionTitle>Account Requirements</SubsectionTitle>
        <Paragraph>
          To use our services, you must:
        </Paragraph>
        <List>
          <ListItem>Provide accurate, current, and complete information during registration</ListItem>
          <ListItem>Maintain and promptly update your account information</ListItem>
          <ListItem>Maintain the security of your account credentials</ListItem>
          <ListItem>Be at least 18 years old or the age of majority in your jurisdiction</ListItem>
          <ListItem>Operate a legitimate business with appropriate licenses</ListItem>
        </List>

        <SubsectionTitle>Account Security</SubsectionTitle>
        <Paragraph>
          You are responsible for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>4. Payment Terms</SectionTitle>
        <SubsectionTitle>Service Fees</SubsectionTitle>
        <Paragraph>
          Our pricing is based on a performance model:
        </Paragraph>
        <List>
          <ListItem>Commission-based pricing: You pay a percentage of successfully recovered payments</ListItem>
          <ListItem>No upfront fees or monthly subscriptions</ListItem>
          <ListItem>Fees are automatically deducted from recovered amounts</ListItem>
          <ListItem>Detailed invoicing and transaction reporting provided monthly</ListItem>
        </List>

        <SubsectionTitle>Billing and Invoicing</SubsectionTitle>
        <Paragraph>
          Invoices are issued monthly and include detailed breakdowns of all recovered transactions and applicable fees. Payment is due within 15 days of invoice date.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>5. Acceptable Use Policy</SectionTitle>
        <Paragraph>
          You agree not to use our services to:
        </Paragraph>
        <List>
          <ListItem>Engage in fraudulent or illegal activities</ListItem>
          <ListItem>Process transactions for prohibited goods or services</ListItem>
          <ListItem>Violate any applicable laws or regulations</ListItem>
          <ListItem>Interfere with or disrupt the integrity or performance of our services</ListItem>
          <ListItem>Attempt to gain unauthorized access to our systems</ListItem>
          <ListItem>Harass, abuse, or harm customers during payment recovery</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>6. Data Processing and Privacy</SectionTitle>
        <Paragraph>
          We process customer payment data on your behalf in accordance with:
        </Paragraph>
        <List>
          <ListItem>Our Privacy Policy</ListItem>
          <ListItem>PCI DSS compliance standards</ListItem>
          <ListItem>GDPR and other applicable data protection regulations</ListItem>
          <ListItem>Industry best practices for data security</ListItem>
        </List>
        <Paragraph>
          You are responsible for ensuring you have appropriate consent from your customers to share their data with us for payment recovery purposes.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>7. Service Level Agreement</SectionTitle>
        <Paragraph>
          We strive to maintain 99.9% uptime for our services. In the event of service disruptions:
        </Paragraph>
        <List>
          <ListItem>We will provide timely notifications of planned maintenance</ListItem>
          <ListItem>Critical issues are addressed within 2 hours</ListItem>
          <ListItem>Service credits may be available for extended outages</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>8. Intellectual Property</SectionTitle>
        <Paragraph>
          All content, features, and functionality of Williams Revenue Recovery services, including but not limited to software, text, graphics, logos, and images, are owned by Williams Revenue Recovery and protected by intellectual property laws.
        </Paragraph>
        <Paragraph>
          You are granted a limited, non-exclusive, non-transferable license to access and use our services for your business purposes only.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>9. Limitation of Liability</SectionTitle>
        <Paragraph>
          To the maximum extent permitted by law, Williams Revenue Recovery shall not be liable for:
        </Paragraph>
        <List>
          <ListItem>Indirect, incidental, special, consequential, or punitive damages</ListItem>
          <ListItem>Loss of profits, revenue, data, or business opportunities</ListItem>
          <ListItem>Service interruptions or data loss</ListItem>
          <ListItem>Third-party actions or integrations</ListItem>
        </List>
        <Paragraph>
          Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>10. Indemnification</SectionTitle>
        <Paragraph>
          You agree to indemnify and hold harmless Williams Revenue Recovery from any claims, damages, losses, liabilities, and expenses arising from:
        </Paragraph>
        <List>
          <ListItem>Your use of our services</ListItem>
          <ListItem>Your violation of these Terms of Service</ListItem>
          <ListItem>Your violation of any rights of third parties</ListItem>
          <ListItem>Your business practices or products/services sold</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>11. Termination</SectionTitle>
        <SubsectionTitle>Termination by You</SubsectionTitle>
        <Paragraph>
          You may terminate your account at any time by contacting our support team. Upon termination, you remain responsible for any outstanding fees.
        </Paragraph>

        <SubsectionTitle>Termination by Us</SubsectionTitle>
        <Paragraph>
          We may suspend or terminate your account if:
        </Paragraph>
        <List>
          <ListItem>You violate these Terms of Service</ListItem>
          <ListItem>You fail to pay fees when due</ListItem>
          <ListItem>Your account shows suspicious or fraudulent activity</ListItem>
          <ListItem>Required by law or regulatory authority</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>12. Changes to Terms</SectionTitle>
        <Paragraph>
          We reserve the right to modify these Terms of Service at any time. We will notify you of material changes via email or through our platform. Your continued use of our services after changes take effect constitutes acceptance of the modified terms.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>13. Governing Law and Dispute Resolution</SectionTitle>
        <Paragraph>
          These Terms of Service are governed by the laws of the State of California, United States. Any disputes shall be resolved through binding arbitration in San Francisco, California, except that either party may seek injunctive relief in court.
        </Paragraph>
      </LegalSection>

      <ContactInfo>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactText>
          If you have any questions about these Terms of Service, please contact us:
        </ContactText>
        <ContactText>
          Email: <EmailLink href="mailto:legal@williamsrr.com">legal@williamsrr.com</EmailLink>
        </ContactText>
        <ContactText>
          Williams Revenue Recovery<br />
          Legal Department<br />
          123 Commerce Street, Suite 500<br />
          San Francisco, CA 94105
        </ContactText>
      </ContactInfo>
      </LegalPageContainer>
    </Layout>
  );
};

export default TermsOfService;
