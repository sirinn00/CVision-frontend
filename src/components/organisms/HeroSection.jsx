import React from 'react';
import { Row, Col } from 'antd';
import TitleText from '../atoms/TitleText';
import DescriptionText from '../atoms/DescriptionText';
import HeroButtons from '../molecules/HeroButtons';

const HeroSection = () => (
  <section
    style={{
      height: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 24px',
      background: 'linear-gradient(to bottom right, #e6f0ff, #ffffff)',
    }}
  >
    <TitleText />
    <DescriptionText />
    <HeroButtons />
  </section>
);

export default HeroSection;
