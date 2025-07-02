import React from 'react';
import { Layout } from 'antd';
import HeaderSection from '../organisms/HeaderSection/HeaderSection';
import HeroSection from '../organisms/HeroSection';
import HowItWorksSection from '../organisms/HowItWorksSection';
import UploadSection from '../organisms/UploadSection';

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
    <UploadSection />
  </Layout>
);

export default HomePage;
