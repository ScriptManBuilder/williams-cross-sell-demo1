import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 70px;
  background-color: ${props => props.theme.colors.background.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${props => props.theme.spacing.xl};
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const PageTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.lg};
`;

export const NotificationBadge = styled.div`
  position: relative;
  cursor: pointer;
  
  span {
    font-size: 24px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    background-color: ${props => props.theme.colors.danger};
    border-radius: ${props => props.theme.borderRadius.full};
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  cursor: pointer;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.success});
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-weight: ${props => props.theme.typography.fontWeight.semibold};
    color: ${props => props.theme.colors.text.primary};
    font-size: ${props => props.theme.typography.fontSize.sm};
  }
  
  span:last-child {
    font-size: ${props => props.theme.typography.fontSize.xs};
    color: ${props => props.theme.colors.text.secondary};
  }
`;
