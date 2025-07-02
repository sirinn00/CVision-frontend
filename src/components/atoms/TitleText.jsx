import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const TitleText = ({ children, level = 1, style = {} }) => (
  <Title level={level} style={{ fontSize: '3.2rem', textAlign: 'center', fontWeight: 800, ...style }}>
    {children}
  </Title>
);


export default TitleText;
