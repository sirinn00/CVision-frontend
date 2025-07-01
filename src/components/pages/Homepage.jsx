import React from 'react';
import { Layout } from 'antd';
import HeaderSection from '../organisms/HeaderSection';

const HomePage = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <HeaderSection />
    </Layout>
  );
};

export default HomePage;

