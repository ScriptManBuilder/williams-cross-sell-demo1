import styled from 'styled-components';

export const IntegrationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

export const IntegrationCard = styled.div`
  background-color: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.md};
  border: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const IntegrationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

export const IntegrationLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.background.hover};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const IntegrationInfo = styled.div`
  flex: 1;
`;

export const IntegrationName = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const IntegrationType = styled.span`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ConnectionStatus = styled.div<{ connected: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.connected 
    ? 'rgba(16, 185, 129, 0.2)' 
    : 'rgba(100, 116, 139, 0.2)'};
  color: ${props => props.connected 
    ? props.theme.colors.success 
    : props.theme.colors.text.muted};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  width: fit-content;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: ${props => props.theme.borderRadius.full};
    background-color: currentColor;
  }
`;

export const ApiKeySection = styled.div`
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.background.hover};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const ApiKeyLabel = styled.div`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
`;

export const ApiKeyDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.sm};
`;

export const ApiKeyValue = styled.code`
  font-family: 'Courier New', monospace;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.primary};
  word-break: break-all;
`;

export const CopyButton = styled.button`
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.background.secondary};
  color: ${props => props.theme.colors.text.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.typography.fontSize.xs};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.border};
    color: ${props => props.theme.colors.text.primary};
  }
`;

export const ConnectedDate = styled.div`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.text.muted};
`;

export const IntegrationActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.sm};
`;
