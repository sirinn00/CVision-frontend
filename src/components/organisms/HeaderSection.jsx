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
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'transparent',
        position: 'sticky',
        height: '64px',
        width: '100%',
      }}
    >
      <Logo />
      <NavMenu />
    </Header>
  );
};

export default HeaderSection;
