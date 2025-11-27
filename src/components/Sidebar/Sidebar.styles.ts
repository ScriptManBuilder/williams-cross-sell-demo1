import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: ${props => props.theme.colors.background.secondary};
  border-right: 1px solid ${props => props.theme.colors.border};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

export const Logo = styled.div`
  padding: ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  h1 {
    font-size: ${props => props.theme.typography.fontSize.xl};
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }
  
  p {
    font-size: ${props => props.theme.typography.fontSize.xs};
    color: ${props => props.theme.colors.text.secondary};
    margin-top: ${props => props.theme.spacing.xs};
  }
`;

export const Nav = styled.nav`
  flex: 1;
  padding: ${props => props.theme.spacing.lg} 0;
  overflow-y: auto;
`;

export const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text.secondary};
  background-color: ${props => props.active ? props.theme.colors.background.hover : 'transparent'};
  border-left: 3px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${props => props.active ? props.theme.typography.fontWeight.semibold : props.theme.typography.fontWeight.normal};
  
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
    color: ${props => props.theme.colors.text.primary};
  }
  
  svg {
    margin-right: ${props => props.theme.spacing.md};
    width: 20px;
    height: 20px;
  }
`;
