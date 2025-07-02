import React from 'react';
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
    }}
  >
    <TitleText>
    CVision’a <span style={{ color: '#1677ff' }}>Hoş Geldiniz</span>
    </TitleText>
    <DescriptionText>
    Bu platformda, yüklediğiniz CV üzerinden akademik başarılarınızı, iş geçmişinizi ve teknik becerilerinizi değerlendirebilirsiniz.
    </DescriptionText>
    <HeroButtons />
  </section>
);

export default HeroSection;
