import styled from 'styled-components';

export const LegalPageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const LegalHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

export const LegalTitle = styled.h1`
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const LegalSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
`;

export const LastUpdated = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.muted};
  margin-top: ${props => props.theme.spacing.sm};
`;

export const LegalSection = styled.section`
  margin-bottom: ${props => props.theme.spacing['2xl']};
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const SubsectionTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const List = styled.ul`
  margin-left: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const ListItem = styled.li`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.background.card};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing['2xl']};
`;

export const ContactTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const ContactText = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const EmailLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
