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
    <Menu.Item key="1">Ana Sayfa</Menu.Item>
    <Menu.Item key="2">Nasıl Çalışır?</Menu.Item>
  </Menu>
);

export default NavigationMenu;
