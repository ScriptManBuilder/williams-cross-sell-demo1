import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Overview from './pages/Overview/Overview';
import FailedPayments from './pages/FailedPayments/FailedPayments';
import Analytics from './pages/Analytics/Analytics';
import Settings from './pages/Settings/Settings';
import Integrations from './pages/Integrations/Integrations';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';
import CookiePolicy from './pages/Legal/CookiePolicy';
import Security from './pages/Legal/Security';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/failed-payments" element={<FailedPayments />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
