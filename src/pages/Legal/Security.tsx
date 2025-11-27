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

const Security: React.FC = () => {
  return (
    <Layout pageTitle="Security">
      <LegalPageContainer>
      <LegalHeader>
        <LegalTitle>Security</LegalTitle>
        <LegalSubtitle>
          At Williams Revenue Recovery, security is our top priority. We implement industry-leading security measures to protect your data and transactions.
        </LegalSubtitle>
        <LastUpdated>Last Updated: November 27, 2025</LastUpdated>
      </LegalHeader>

      <LegalSection>
        <SectionTitle>1. Our Security Commitment</SectionTitle>
        <Paragraph>
          We are committed to maintaining the highest standards of security to protect your business and customer data. Our security program is built on industry best practices and compliance with major security frameworks.
        </Paragraph>
      </LegalSection>

      <LegalSection>
        <SectionTitle>2. Compliance and Certifications</SectionTitle>
        
        <SubsectionTitle>PCI DSS Compliance</SubsectionTitle>
        <Paragraph>
          Williams Revenue Recovery is PCI DSS Level 1 compliant, the highest level of compliance in the payment card industry:
        </Paragraph>
        <List>
          <ListItem>Annual on-site security assessments by qualified security assessors</ListItem>
          <ListItem>Quarterly network vulnerability scans by approved scanning vendors</ListItem>
          <ListItem>Strict cardholder data protection and handling procedures</ListItem>
          <ListItem>Regular security policy reviews and updates</ListItem>
        </List>

        <SubsectionTitle>SOC 2 Type II</SubsectionTitle>
        <Paragraph>
          We maintain SOC 2 Type II certification, demonstrating our commitment to:
        </Paragraph>
        <List>
          <ListItem>Security: Protection against unauthorized access</ListItem>
          <ListItem>Availability: System uptime and reliability</ListItem>
          <ListItem>Confidentiality: Protection of sensitive information</ListItem>
          <ListItem>Processing Integrity: Accurate and complete data processing</ListItem>
          <ListItem>Privacy: Collection, use, and disposal of personal information</ListItem>
        </List>

        <SubsectionTitle>GDPR Compliance</SubsectionTitle>
        <Paragraph>
          We comply with the General Data Protection Regulation (GDPR) requirements:
        </Paragraph>
        <List>
          <ListItem>Data processing agreements with all customers</ListItem>
          <ListItem>Right to access, rectification, and deletion of personal data</ListItem>
          <ListItem>Data portability and breach notification procedures</ListItem>
          <ListItem>Privacy by design and data minimization principles</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>3. Data Encryption</SectionTitle>
        
        <SubsectionTitle>In Transit</SubsectionTitle>
        <Paragraph>
          All data transmitted to and from our services is encrypted using:
        </Paragraph>
        <List>
          <ListItem>TLS 1.3 encryption for all HTTPS connections</ListItem>
          <ListItem>Perfect Forward Secrecy (PFS) for enhanced protection</ListItem>
          <ListItem>Strong cipher suites with 256-bit encryption</ListItem>
          <ListItem>HSTS (HTTP Strict Transport Security) enforcement</ListItem>
        </List>

        <SubsectionTitle>At Rest</SubsectionTitle>
        <Paragraph>
          All stored data is encrypted using:
        </Paragraph>
        <List>
          <ListItem>AES-256 encryption for database storage</ListItem>
          <ListItem>Encrypted file storage with automatic key rotation</ListItem>
          <ListItem>Separate encryption keys for different data types</ListItem>
          <ListItem>Hardware security modules (HSMs) for key management</ListItem>
        </List>

        <SubsectionTitle>Sensitive Data</SubsectionTitle>
        <Paragraph>
          Payment card data receives additional protection:
        </Paragraph>
        <List>
          <ListItem>Tokenization of card numbers - we never store full card details</ListItem>
          <ListItem>Point-to-point encryption (P2PE) for card data transmission</ListItem>
          <ListItem>CVV/CVC codes are never stored</ListItem>
          <ListItem>Limited access to tokenized data on need-to-know basis</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>4. Infrastructure Security</SectionTitle>
        
        <SubsectionTitle>Cloud Infrastructure</SubsectionTitle>
        <Paragraph>
          Our services are hosted on enterprise-grade cloud infrastructure:
        </Paragraph>
        <List>
          <ListItem>Multi-region deployment for high availability</ListItem>
          <ListItem>Automated failover and disaster recovery</ListItem>
          <ListItem>Regular backups with encrypted storage</ListItem>
          <ListItem>Isolated network segments and VPC configuration</ListItem>
        </List>

        <SubsectionTitle>Network Security</SubsectionTitle>
        <List>
          <ListItem>Web Application Firewall (WAF) protection against common attacks</ListItem>
          <ListItem>DDoS mitigation with real-time threat detection</ListItem>
          <ListItem>Intrusion detection and prevention systems (IDS/IPS)</ListItem>
          <ListItem>Network traffic monitoring and logging</ListItem>
          <ListItem>Rate limiting and IP reputation filtering</ListItem>
        </List>

        <SubsectionTitle>Application Security</SubsectionTitle>
        <List>
          <ListItem>Secure software development lifecycle (SDLC)</ListItem>
          <ListItem>Code reviews and security testing for all releases</ListItem>
          <ListItem>Automated vulnerability scanning</ListItem>
          <ListItem>Dependency monitoring and security patching</ListItem>
          <ListItem>Input validation and output encoding</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>5. Access Control</SectionTitle>
        
        <SubsectionTitle>Authentication</SubsectionTitle>
        <List>
          <ListItem>Multi-factor authentication (MFA) required for all accounts</ListItem>
          <ListItem>Strong password requirements with complexity rules</ListItem>
          <ListItem>Account lockout after failed login attempts</ListItem>
          <ListItem>Session timeout and automatic logout</ListItem>
          <ListItem>Single Sign-On (SSO) support for enterprise customers</ListItem>
        </List>

        <SubsectionTitle>Authorization</SubsectionTitle>
        <List>
          <ListItem>Role-based access control (RBAC) with least privilege principle</ListItem>
          <ListItem>Granular permissions for different user types</ListItem>
          <ListItem>API key authentication with scoped permissions</ListItem>
          <ListItem>Audit logging of all access and actions</ListItem>
        </List>

        <SubsectionTitle>Internal Access</SubsectionTitle>
        <List>
          <ListItem>Background checks for all employees with data access</ListItem>
          <ListItem>Mandatory security training and awareness programs</ListItem>
          <ListItem>Privileged access management (PAM) for administrative accounts</ListItem>
          <ListItem>Just-in-time (JIT) access for production systems</ListItem>
          <ListItem>Regular access reviews and deprovisioning</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>6. Monitoring and Incident Response</SectionTitle>
        
        <SubsectionTitle>Security Monitoring</SubsectionTitle>
        <List>
          <ListItem>24/7 security operations center (SOC) monitoring</ListItem>
          <ListItem>Real-time alerting for suspicious activity</ListItem>
          <ListItem>Automated threat detection and response</ListItem>
          <ListItem>Comprehensive logging and audit trails</ListItem>
          <ListItem>Regular security metrics and reporting</ListItem>
        </List>

        <SubsectionTitle>Incident Response</SubsectionTitle>
        <Paragraph>
          We maintain a formal incident response plan:
        </Paragraph>
        <List>
          <ListItem>Dedicated security incident response team</ListItem>
          <ListItem>Defined escalation procedures and communication protocols</ListItem>
          <ListItem>Forensic analysis and root cause investigation</ListItem>
          <ListItem>Customer notification within 72 hours of confirmed breach</ListItem>
          <ListItem>Post-incident reviews and corrective actions</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>7. Vulnerability Management</SectionTitle>
        
        <SubsectionTitle>Security Testing</SubsectionTitle>
        <List>
          <ListItem>Annual penetration testing by independent security firms</ListItem>
          <ListItem>Quarterly vulnerability assessments</ListItem>
          <ListItem>Continuous automated security scanning</ListItem>
          <ListItem>Bug bounty program for responsible disclosure</ListItem>
        </List>

        <SubsectionTitle>Patch Management</SubsectionTitle>
        <List>
          <ListItem>Rapid patching of critical vulnerabilities (within 24 hours)</ListItem>
          <ListItem>Regular security updates for all systems and dependencies</ListItem>
          <ListItem>Automated patch deployment with rollback capabilities</ListItem>
          <ListItem>Vulnerability tracking and remediation workflows</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>8. Business Continuity</SectionTitle>
        
        <SubsectionTitle>Backup and Recovery</SubsectionTitle>
        <List>
          <ListItem>Automated daily backups with 30-day retention</ListItem>
          <ListItem>Encrypted backup storage in geographically distributed locations</ListItem>
          <ListItem>Regular backup testing and restoration drills</ListItem>
          <ListItem>Recovery Time Objective (RTO) of 4 hours</ListItem>
          <ListItem>Recovery Point Objective (RPO) of 1 hour</ListItem>
        </List>

        <SubsectionTitle>Disaster Recovery</SubsectionTitle>
        <List>
          <ListItem>Documented disaster recovery plan with annual testing</ListItem>
          <ListItem>Redundant infrastructure across multiple availability zones</ListItem>
          <ListItem>Automated failover with minimal downtime</ListItem>
          <ListItem>Emergency communication procedures</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>9. Vendor Security</SectionTitle>
        <Paragraph>
          We carefully vet all third-party vendors and service providers:
        </Paragraph>
        <List>
          <ListItem>Security assessments before vendor onboarding</ListItem>
          <ListItem>Contractual security requirements and SLAs</ListItem>
          <ListItem>Regular vendor security reviews</ListItem>
          <ListItem>Data processing agreements (DPAs) with all processors</ListItem>
          <ListItem>Vendor risk monitoring and management</ListItem>
        </List>
      </LegalSection>

      <LegalSection>
        <SectionTitle>10. Security Best Practices for Customers</SectionTitle>
        <Paragraph>
          Help us protect your account by following these best practices:
        </Paragraph>
        <List>
          <ListItem>Enable multi-factor authentication (MFA) on your account</ListItem>
          <ListItem>Use strong, unique passwords and change them regularly</ListItem>
          <ListItem>Keep your API keys secure and rotate them periodically</ListItem>
          <ListItem>Monitor your account for suspicious activity</ListItem>
          <ListItem>Restrict user access based on job requirements</ListItem>
          <ListItem>Keep your integration code and dependencies up to date</ListItem>
          <ListItem>Report any security concerns immediately</ListItem>
        </List>
      </LegalSection>

      <ContactInfo>
        <ContactTitle>Report a Security Issue</ContactTitle>
        <ContactText>
          If you discover a security vulnerability or have security concerns, please contact us immediately:
        </ContactText>
        <ContactText>
          Security Team: <EmailLink href="mailto:security@williamsrr.com">security@williamsrr.com</EmailLink>
        </ContactText>
        <ContactText>
          PGP Key: Available at <EmailLink href="https://app.williamsrevenuerecovery.com/pgp-key" target="_blank">williamsrevenuerecovery.com/pgp-key</EmailLink>
        </ContactText>
        <ContactText>
          Williams Revenue Recovery<br />
          Security Operations Center<br />
          123 Commerce Street, Suite 500<br />
          San Francisco, CA 94105
        </ContactText>
        <ContactText style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          We take all security reports seriously and will respond within 24 hours.
        </ContactText>
      </ContactInfo>
      </LegalPageContainer>
    </Layout>
  );
};

export default Security;
