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

const CookiePolicy: React.FC = () => {
  return (
    <Layout pageTitle="Cookie Policy">
      <LegalPageContainer>
      <LegalHeader>
        <LegalTitle>Cookie Policy</LegalTitle>
        <LegalSubtitle>
          This Cookie Policy explains how Williams Revenue Recovery uses cookies and similar tracking technologies.
        </LegalSubtitle>
        <LastUpdated>Last Updated: November 27, 2025</LastUpdated>
      </LegalHeader>

      <LegalSection>
        <SectionTitle>1. What Are Cookies?</SectionTitle>
        <Paragraph>
          Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
        </Paragraph>
        <Paragraph>
          Cookies can be "persistent" (remain on your device until deleted) or "session" (deleted when you close your browser).
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>2. How We Use Cookies</SectionTitle>
        <Paragraph>
          Williams Revenue Recovery uses cookies for the following purposes:
        </Paragraph>

        <SubsectionTitle>Essential Cookies</SubsectionTitle>
        <Paragraph>
          These cookies are necessary for the website to function and cannot be disabled:
        </Paragraph>
        <List>
          <ListItem><strong>Authentication:</strong> Keep you logged in to your account</ListItem>
          <ListItem><strong>Security:</strong> Protect against fraudulent activity and maintain security</ListItem>
          <ListItem><strong>Session Management:</strong> Remember your preferences during your visit</ListItem>
        </List>

        <SubsectionTitle>Performance Cookies</SubsectionTitle>
        <Paragraph>
          These cookies help us understand how visitors interact with our website:
        </Paragraph>
        <List>
          <ListItem><strong>Analytics:</strong> Collect information about page visits and user behavior</ListItem>
          <ListItem><strong>Error Tracking:</strong> Identify and diagnose technical issues</ListItem>
          <ListItem><strong>Load Balancing:</strong> Distribute traffic efficiently across our servers</ListItem>
        </List>

        <SubsectionTitle>Functional Cookies</SubsectionTitle>
        <Paragraph>
          These cookies enable enhanced functionality and personalization:
        </Paragraph>
        <List>
          <ListItem><strong>Preferences:</strong> Remember your settings and preferences</ListItem>
          <ListItem><strong>Language:</strong> Store your language preference</ListItem>
          <ListItem><strong>UI State:</strong> Remember dashboard layout and filter selections</ListItem>
        </List>

        <SubsectionTitle>Marketing Cookies</SubsectionTitle>
        <Paragraph>
          These cookies are used to deliver relevant advertising:
        </Paragraph>
        <List>
          <ListItem><strong>Targeting:</strong> Track your visits across websites to deliver relevant ads</ListItem>
          <ListItem><strong>Conversion Tracking:</strong> Measure the effectiveness of marketing campaigns</ListItem>
          <ListItem><strong>Retargeting:</strong> Show you relevant ads based on your interests</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>3. Specific Cookies We Use</SectionTitle>
        
        <SubsectionTitle>First-Party Cookies</SubsectionTitle>
        <List>
          <ListItem>
            <strong>wrr_session</strong> - Session authentication cookie (expires when you close browser)
          </ListItem>
          <ListItem>
            <strong>wrr_token</strong> - Authentication token (persistent, 30 days)
          </ListItem>
          <ListItem>
            <strong>wrr_preferences</strong> - User preferences and settings (persistent, 1 year)
          </ListItem>
          <ListItem>
            <strong>wrr_consent</strong> - Cookie consent choices (persistent, 1 year)
          </ListItem>
        </List>

        <SubsectionTitle>Third-Party Cookies</SubsectionTitle>
        <List>
          <ListItem>
            <strong>Google Analytics (_ga, _gid)</strong> - Website analytics and performance tracking
          </ListItem>
          <ListItem>
            <strong>Stripe</strong> - Payment processing and fraud prevention
          </ListItem>
          <ListItem>
            <strong>Cloudflare (__cfduid)</strong> - Security and performance optimization
          </ListItem>
          <ListItem>
            <strong>Intercom</strong> - Customer support chat functionality
          </ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>4. Other Tracking Technologies</SectionTitle>
        
        <SubsectionTitle>Web Beacons</SubsectionTitle>
        <Paragraph>
          Small graphic images (also known as "pixel tags") embedded in web pages and emails to track page views and email opens.
        </Paragraph>

        <SubsectionTitle>Local Storage</SubsectionTitle>
        <Paragraph>
          Browser storage that allows websites to store data locally on your device for improved performance and functionality.
        </Paragraph>

        <SubsectionTitle>Session Storage</SubsectionTitle>
        <Paragraph>
          Temporary storage that is cleared when you close your browser tab.
        </Paragraph>

        <SubsectionTitle>Device Fingerprinting</SubsectionTitle>
        <Paragraph>
          Collection of device and browser characteristics to create a unique identifier for security and fraud prevention purposes.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>5. Managing Cookies</SectionTitle>
        
        <SubsectionTitle>Browser Settings</SubsectionTitle>
        <Paragraph>
          Most web browsers allow you to control cookies through their settings:
        </Paragraph>
        <List>
          <ListItem><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</ListItem>
          <ListItem><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</ListItem>
          <ListItem><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</ListItem>
          <ListItem><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</ListItem>
        </List>

        <SubsectionTitle>Our Cookie Consent Tool</SubsectionTitle>
        <Paragraph>
          When you first visit our website, you'll see a cookie consent banner allowing you to:
        </Paragraph>
        <List>
          <ListItem>Accept all cookies</ListItem>
          <ListItem>Reject non-essential cookies</ListItem>
          <ListItem>Customize your cookie preferences</ListItem>
        </List>
        <Paragraph>
          You can change your cookie preferences at any time through the cookie settings in your account dashboard.
        </Paragraph>

        <SubsectionTitle>Impact of Disabling Cookies</SubsectionTitle>
        <Paragraph>
          If you disable cookies, certain features of our website may not function properly:
        </Paragraph>
        <List>
          <ListItem>You may need to log in more frequently</ListItem>
          <ListItem>Your preferences and settings may not be saved</ListItem>
          <ListItem>Some features may not work as intended</ListItem>
          <ListItem>You may experience degraded performance</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>6. Third-Party Cookie Policies</SectionTitle>
        <Paragraph>
          We use services from third-party providers who may set their own cookies. We recommend reviewing their cookie policies:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Google Analytics:</strong> <EmailLink href="https://policies.google.com/technologies/cookies" target="_blank">policies.google.com/technologies/cookies</EmailLink>
          </ListItem>
          <ListItem>
            <strong>Stripe:</strong> <EmailLink href="https://stripe.com/cookies-policy/legal" target="_blank">stripe.com/cookies-policy/legal</EmailLink>
          </ListItem>
          <ListItem>
            <strong>Cloudflare:</strong> <EmailLink href="https://www.cloudflare.com/cookie-policy/" target="_blank">cloudflare.com/cookie-policy</EmailLink>
          </ListItem>
          <ListItem>
            <strong>Intercom:</strong> <EmailLink href="https://www.intercom.com/legal/cookie-policy" target="_blank">intercom.com/legal/cookie-policy</EmailLink>
          </ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>7. Do Not Track</SectionTitle>
        <Paragraph>
          Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you don't want to have your online activity tracked. Currently, there is no uniform standard for recognizing and implementing DNT signals. We do not respond to DNT signals at this time.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>8. Updates to This Cookie Policy</SectionTitle>
        <Paragraph>
          We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by updating the "Last Updated" date at the top of this policy.
        </Paragraph>
      </LegalSection>

      <ContactInfo>
        <ContactTitle>Questions About Cookies?</ContactTitle>
        <ContactText>
          If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;
