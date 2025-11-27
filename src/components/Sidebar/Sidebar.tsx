import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarContainer, Logo, Nav, NavItem } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Overview', icon: '📊' },
    { path: '/failed-payments', label: 'Failed Payments', icon: '❌' },
    { path: '/analytics', label: 'Recovery Analytics', icon: '📈' },
    { path: '/settings', label: 'Retry Settings', icon: '⚙️' },
    { path: '/integrations', label: 'Integrations', icon: '🔗' }
  ];

  return (
    <SidebarContainer>
      <Logo>
        <h1>Williams</h1>
        <p>Revenue Recovery</p>
      </Logo>
      <Nav>
        {navItems.map(item => (
          <NavItem
            key={item.path}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <span>{item.icon}</span>
            {item.label}
          </NavItem>
        ))}
      </Nav>
    </SidebarContainer>
  );
};

export default Sidebar;
