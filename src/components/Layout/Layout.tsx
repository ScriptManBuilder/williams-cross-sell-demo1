import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutContainer, MainContent, ContentArea } from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Header title={pageTitle} />
        <ContentArea>
          {children}
        </ContentArea>
        <Footer />
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
