import React from 'react';
import { Layout } from 'antd';
import HeaderSection from '../organisms/HeaderSection';
import HeroSection from '../organisms/HeroSection';
import HowItWorksSection from '../organisms/HowItWorksSection';

const HomePage = () => (
  <Layout
    style={{
      background: 'linear-gradient(to bottom right, #e6f0ff, #ffffff)',
      minHeight: '100vh',
    }}
  >
    <HeaderSection />
    <HeroSection />
    <HowItWorksSection />
  </Layout>
);

export default HomePage;
