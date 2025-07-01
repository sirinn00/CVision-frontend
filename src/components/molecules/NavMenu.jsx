import React from 'react';
import { Menu, Button } from 'antd';

const NavMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center',
      }}
    >
      <Menu
        mode="horizontal"
        style={{
          background: 'transparent',
          flex: '1 1 auto',
          minWidth: 200,
        }}
      >
        <Menu.Item key="1">Ana Sayfa</Menu.Item>
        <Menu.Item key="2">Nasıl Çalışır?</Menu.Item>
      </Menu>

      <Button type="primary">CV Tara</Button>
    </div>
  );
};

export default NavMenu;
