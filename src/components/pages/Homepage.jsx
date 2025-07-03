import React from 'react';
import { Layout } from 'antd';
import HeaderSection from '../organisms/HeaderSection/HeaderSection';
import HeroSection from '../organisms/HeroSection/HeroSection';
import HowItWorksSection from '../organisms/HowItWorksSection/HowItWorksSection';
import UploadSection from '../organisms/UploadSection/UploadSection';
import FooterSection from '../organisms/FooterSection/FooterSection';

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
    <FooterSection /> 
  </Layout>
);

export default HomePage;
