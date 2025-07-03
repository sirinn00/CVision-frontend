import React from 'react';
import './HeroSection.css'; // CSS module değil, klasik import
import TitleText from '../../atoms/TitleText';
import DescriptionText from '../../atoms/DescriptionText';
import HeroButtons from '../../molecules/HeroButtons';

const HeroSection = () => (
  <section className="heroSection">
    <TitleText>
      CVision’a <span style={{ color: '#1677ff' }}>Hoş Geldiniz</span>
    </TitleText>

    <DescriptionText>
      Bu platformda, yüklediğiniz CV üzerinden akademik başarılarınızı,
      iş geçmişinizi ve teknik becerilerinizi değerlendirebilirsiniz.
    </DescriptionText>

    <div className="buttonWrapper">
      <HeroButtons />
    </div>
  </section>
);

export default HeroSection;
