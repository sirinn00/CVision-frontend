import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const TitleText = ({ children }) => (
  <Title level={1} style={{ fontSize: '3.2rem', textAlign: 'center', fontWeight: 800 }}>
    {children}
  </Title>
);

export default TitleText;
