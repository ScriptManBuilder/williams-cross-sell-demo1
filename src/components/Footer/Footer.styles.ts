import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.background.secondary};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.xl};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const FooterLogo = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  
  h3 {
    font-size: ${props => props.theme.typography.fontSize.xl};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.xs};
  }
  
  p {
    font-size: ${props => props.theme.typography.fontSize.sm};
    color: ${props => props.theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: ${props => props.theme.spacing.md};
    max-width: 600px;
  }
`;

export const TrustBadges = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

export const TrustBadge = styled.div`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.background.hover};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  
  &::before {
    content: '🔒';
    font-size: 12px;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  
  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.muted};
  margin: 0;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  flex-wrap: wrap;
  
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const FooterLink = styled.a`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
