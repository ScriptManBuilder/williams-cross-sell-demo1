import React from 'react';
import { HeaderContainer, PageTitle, HeaderRight, NotificationBadge } from './Header.styles';
import UserAccount from '../UserAccount/UserAccount';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <PageTitle>{title}</PageTitle>
      <HeaderRight>
        <NotificationBadge>
          <span>🔔</span>
        </NotificationBadge>
        <UserAccount
          userName="Sarah Mitchell"
          userRole="Account Manager"
          userEmail="sarah.mitchell@williamsrr.com"
          userStatus="online"
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
