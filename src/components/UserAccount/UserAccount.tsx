import React, { useState, useRef, useEffect } from 'react';
import { UserProfile, Avatar, UserInfo } from '../Header/Header.styles';
import {
  DropdownContainer,
  DropdownHeader,
  UserName,
  UserEmail,
  DropdownMenu,
  MenuItem,
  MenuDivider,
  StatusBadge,
  AvatarWrapper
} from './UserAccount.styles';

interface UserAccountProps {
  userName: string;
  userRole: string;
  userEmail: string;
  userStatus?: 'online' | 'away' | 'busy';
}

const UserAccount: React.FC<UserAccountProps> = ({
  userName,
  userRole,
  userEmail,
  userStatus = 'online'
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuItemClick = (action: string) => {
    console.log(`Action: ${action}`);
    setIsDropdownOpen(false);
    // Here you can add actual functionality for each menu item
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <UserProfile onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <AvatarWrapper>
          <Avatar>{getInitials(userName)}</Avatar>
          <StatusBadge status={userStatus} />
        </AvatarWrapper>
        <UserInfo>
          <span>{userName}</span>
          <span>{userRole}</span>
        </UserInfo>
      </UserProfile>

      <DropdownContainer isOpen={isDropdownOpen}>
        <DropdownHeader>
          <UserName>{userName}</UserName>
          <UserEmail>{userEmail}</UserEmail>
        </DropdownHeader>

        <DropdownMenu>
          <MenuItem onClick={() => handleMenuItemClick('profile')}>
            <span>👤</span>
            <span>My Profile</span>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('settings')}>
            <span>⚙️</span>
            <span>Account Settings</span>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('billing')}>
            <span>💳</span>
            <span>Billing & Plans</span>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('support')}>
            <span>💬</span>
            <span>Help & Support</span>
          </MenuItem>

          <MenuDivider />

          <MenuItem onClick={() => handleMenuItemClick('status')}>
            <span>🟢</span>
            <span>Set Status</span>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('preferences')}>
            <span>🎨</span>
            <span>Preferences</span>
          </MenuItem>

          <MenuDivider />

          <MenuItem onClick={() => handleMenuItemClick('logout')}>
            <span>🚪</span>
            <span>Sign Out</span>
          </MenuItem>
        </DropdownMenu>
      </DropdownContainer>
    </div>
  );
};

export default UserAccount;
