import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  margin-left: 260px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.background.primary};
  overflow-y: auto;
`;
