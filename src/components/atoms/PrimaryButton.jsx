import React from 'react';
import { Button } from 'antd';

const PrimaryButton = ({ children, ...props }) => (
  <Button type="primary" {...props}>
    {children}
  </Button>
);

export default PrimaryButton;
