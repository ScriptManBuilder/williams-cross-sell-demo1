import styled from 'styled-components';

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  max-width: 450px;
  width: 90%;
  box-shadow: ${props => props.theme.shadows.xl};
  border: 1px solid ${props => props.theme.colors.border};
  animation: slideUp 0.3s ease-out;
  
  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const ModalIcon = styled.div<{ type: 'success' | 'error' | 'warning' | 'info' }>`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  
  ${props => {
    switch (props.type) {
      case 'success':
        return `
          background-color: rgba(16, 185, 129, 0.2);
          color: ${props.theme.colors.success};
        `;
      case 'error':
        return `
          background-color: rgba(239, 68, 68, 0.2);
          color: ${props.theme.colors.danger};
        `;
      case 'warning':
        return `
          background-color: rgba(245, 158, 11, 0.2);
          color: ${props.theme.colors.warning};
        `;
      case 'info':
        return `
          background-color: rgba(0, 102, 204, 0.2);
          color: ${props.theme.colors.primary};
        `;
    }
  }}
`;

export const ModalTitle = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.xl};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
`;

export const ModalBody = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const ModalMessage = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: flex-end;
`;

export const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  transition: all 0.2s ease;
  min-width: 100px;
  
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
