import React from 'react';
import { Menu } from 'antd';

const NavigationMenu = () => (
  <Menu
    mode="horizontal"
    style={{
      background: 'transparent',
      flex: '1 1 auto',
      minWidth: 200,
    }}
    selectable={false}
  >
    <Menu.Item key="1">
      <a href="#hero-section" style={{ color: 'inherit' }}>Ana Sayfa</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="#how-it-works" style={{ color: 'inherit' }}>Nasıl Çalışır?</a>
    </Menu.Item>
  </Menu>
);

export default NavigationMenu;
