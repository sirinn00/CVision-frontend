import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const TitleText = () => (
  <Title level={1} style={{ fontSize: '3.2rem', textAlign: 'center', fontWeight: 800 }}>
    CVision’a <span style={{ color: '#1677ff' }}>Hoş Geldiniz</span>
  </Title>
);

export default TitleText;
