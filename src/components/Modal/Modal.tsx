import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  ModalBody,
  ModalMessage,
  ModalFooter,
  ModalButton
} from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  showCancel?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'info',
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  showCancel = false
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return 'ℹ';
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ThemeProvider theme={theme}>
      <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
        <ModalContent>
          <ModalHeader>
            <ModalIcon type={type}>{getIcon()}</ModalIcon>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <ModalMessage>{message}</ModalMessage>
          </ModalBody>
          <ModalFooter>
            {showCancel && (
              <ModalButton variant="secondary" onClick={onClose}>
                {cancelText}
              </ModalButton>
            )}
            <ModalButton 
              variant={type === 'error' || type === 'warning' ? 'danger' : 'primary'} 
              onClick={handleConfirm}
            >
              {confirmText}
            </ModalButton>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </ThemeProvider>,
    document.body
  );
};

export default Modal;
