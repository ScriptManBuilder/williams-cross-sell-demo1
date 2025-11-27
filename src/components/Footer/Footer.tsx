import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  TrustBadges,
  TrustBadge,
  FooterBottom,
  Copyright,
  FooterLinks,
  FooterLink
} from './Footer.styles';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <h3>Williams Revenue Recovery</h3>
          <p>
            Leading payment recovery solutions for eCommerce businesses. 
            We help merchants recover failed payments and maximize revenue 
            through intelligent retry strategies.
          </p>
        </FooterLogo>
        <TrustBadges>
          <TrustBadge>SSL Secured</TrustBadge>
          <TrustBadge>PCI Compliant</TrustBadge>
        </TrustBadges>
      </FooterContent>
      <FooterBottom>
        <Copyright>
          © {currentYear} Williams Revenue Recovery. All rights reserved.
        </Copyright>
        <FooterLinks>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
          <FooterLink href="/cookie-policy">Cookie Policy</FooterLink>
          <FooterLink href="/security">Security</FooterLink>
        </FooterLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
