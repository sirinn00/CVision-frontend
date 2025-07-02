import React from 'react';
import { Typography } from 'antd';
import StepCircle from '../atoms/StepCircle';

const { Title, Text } = Typography;

const StepCard = ({ number, title, description }) => (
  <div style={{ textAlign: 'center', padding: 8 }}>
    <div style={{ marginBottom: 16 }}>
      <StepCircle number={number} />
    </div>
    <Title level={4}>{title}</Title>
    <Text>{description}</Text>
  </div>
);

export default StepCard;
