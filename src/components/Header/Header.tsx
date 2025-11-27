import React from 'react';
import { HeaderContainer, PageTitle, HeaderRight, NotificationBadge, UserProfile, Avatar, UserInfo } from './Header.styles';

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
        <UserProfile>
          <Avatar>SM</Avatar>
          <UserInfo>
            <span>Sarah Mitchell</span>
            <span>Account Manager</span>
          </UserInfo>
        </UserProfile>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
