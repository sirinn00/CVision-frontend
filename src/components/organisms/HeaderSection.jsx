import React from 'react';
import { Layout } from 'antd';
import Logo from '../atoms/Logo';
import NavMenu from '../molecules/NavMenu';

const { Header } = Layout;

const HeaderSection = () => {
  return (
    <Header
      style={{
        display: 'flex',
        top: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        height: '64px',
        width: '100%',
        padding: '0 5vw',
        zIndex: 1000,
        boxShadow: '0 1px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Logo />
      <NavMenu />
    </Header>
  );
};

export default HeaderSection;
