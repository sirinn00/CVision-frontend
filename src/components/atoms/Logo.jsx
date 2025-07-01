import React from 'react';
import { FileSearchOutlined } from '@ant-design/icons';

const Logo = () => (
  <div style={{
    fontWeight: 'bold',
    fontSize: 22,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  }}>
    <FileSearchOutlined style={{ fontSize: 24, color: '#1677ff' }} />
    <span style={{ color: '#1677ff' }}>CVision</span>
  </div>
);

export default Logo;
