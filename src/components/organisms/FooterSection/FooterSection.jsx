import React from 'react';
import { Layout, Typography } from 'antd';
import './FooterSection.css';

const { Footer } = Layout;
const { Text } = Typography;

const FooterSection = () => (
  <Footer className="footer">
    <Text className="footer-text">CVision ©2025 - Tüm Hakları Saklıdır</Text>
  </Footer>
);

export default FooterSection;
