import React from 'react';
import { Layout } from 'antd';
import HeaderSection from '../organisms/HeaderSection';
import HeroSection from '../organisms/HeroSection';

const HomePage = () => (
  <Layout style={{ background: '#f0f2f5' }}>
    <HeaderSection />
    <HeroSection />
  </Layout>
);

export default HomePage;
