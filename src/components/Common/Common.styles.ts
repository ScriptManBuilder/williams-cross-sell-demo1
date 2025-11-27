import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.colors.background.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.md};
  border: 1px solid ${props => props.theme.colors.border};
`;

export const MetricCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MetricTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const MetricIcon = styled.div`
  font-size: 24px;
`;

export const MetricValue = styled.div`
  font-size: ${props => props.theme.typography.fontSize['3xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
`;

export const MetricChange = styled.div<{ type: 'increase' | 'decrease' }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.type === 'increase' ? props.theme.colors.success : props.theme.colors.danger};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  
  &::before {
    content: '${props => props.type === 'increase' ? '↑' : '↓'}';
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

export const TableHeader = styled.th`
  padding: ${props => props.theme.spacing.md};
  text-align: left;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TableCell = styled.td`
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.primary};
`;

export const StatusBadge = styled.span<{ status: 'recovered' | 'pending' | 'failed' | 'in-progress' }>`
  display: inline-block;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  
  ${props => {
    switch (props.status) {
      case 'recovered':
        return `
          background-color: rgba(16, 185, 129, 0.2);
          color: ${props.theme.colors.success};
        `;
      case 'pending':
        return `
          background-color: rgba(245, 158, 11, 0.2);
          color: ${props.theme.colors.warning};
        `;
      case 'failed':
        return `
          background-color: rgba(239, 68, 68, 0.2);
          color: ${props.theme.colors.danger};
        `;
      case 'in-progress':
        return `
          background-color: rgba(0, 102, 204, 0.2);
          color: ${props.theme.colors.primary};
        `;
      default:
        return '';
    }
  }}
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  transition: all 0.2s ease;
  
  ${props => {
    switch (props.variant) {
      case 'primary':
        return `
          background-color: ${props.theme.colors.primary};
          color: ${props.theme.colors.text.primary};
          
          &:hover {
            background-color: #0052a3;
          }
        `;
      case 'danger':
        return `
          background-color: ${props.theme.colors.danger};
          color: ${props.theme.colors.text.primary};
          
          &:hover {
            background-color: #dc2626;
          }
        `;
      default:
        return `
          background-color: ${props.theme.colors.background.hover};
          color: ${props.theme.colors.text.primary};
          border: 1px solid ${props.theme.colors.border};
          
          &:hover {
            background-color: ${props.theme.colors.border};
          }
        `;
    }
  }}
`;
