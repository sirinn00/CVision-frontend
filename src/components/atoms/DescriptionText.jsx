import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const DescriptionText = ({ children }) => (
  <Paragraph style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
    {children}
  </Paragraph>
);

export default DescriptionText;
