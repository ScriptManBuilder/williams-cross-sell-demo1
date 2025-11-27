import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.typography.fontFamily};
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.primary};
    font-size: ${props => props.theme.typography.fontSize.base};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    line-height: 1.2;
  }

  h1 {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize.xl};
  }

  h4 {
    font-size: ${props => props.theme.typography.fontSize.lg};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.text.muted};
  }
`;
