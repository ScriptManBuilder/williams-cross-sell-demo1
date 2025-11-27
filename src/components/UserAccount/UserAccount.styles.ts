import styled from 'styled-components';

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${props => props.theme.colors.background.secondary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.xl};
  min-width: 280px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
  overflow: hidden;
`;

export const DropdownHeader = styled.div`
  padding: ${props => props.theme.spacing.lg};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const UserName = styled.div`
  font-size: ${props => props.theme.typography.fontSize.base};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: ${props => props.theme.spacing.xs};
`;

export const UserEmail = styled.div`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
`;

export const DropdownMenu = styled.div`
  padding: ${props => props.theme.spacing.sm} 0;
`;

export const MenuItem = styled.button`
  width: 100%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text.primary};
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: left;

  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }

  span:first-child {
    font-size: 18px;
  }
`;

export const MenuDivider = styled.div`
  height: 1px;
  background-color: ${props => props.theme.colors.border};
  margin: ${props => props.theme.spacing.sm} 0;
`;

export const StatusBadge = styled.div<{ status: 'online' | 'away' | 'busy' }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: ${props => props.theme.borderRadius.full};
  border: 2px solid ${props => props.theme.colors.background.secondary};
  
  ${props => {
    switch (props.status) {
      case 'online':
        return `background-color: ${props.theme.colors.success};`;
      case 'away':
        return `background-color: ${props.theme.colors.warning};`;
      case 'busy':
        return `background-color: ${props.theme.colors.danger};`;
    }
  }}
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;
