import React from 'react';
import styles from './HeroSection.css';
import TitleText from '../../atoms/TitleText';
import DescriptionText from '../../atoms/DescriptionText';
import HeroButtons from '../../molecules/HeroButtons';

const HeroSection = () => (
  <section className={styles.heroSection}>
    <TitleText>
      CVision’a <span style={{ color: '#1677ff' }}>Hoş Geldiniz</span>
    </TitleText>

    <DescriptionText>
      Bu platformda, yüklediğiniz CV üzerinden akademik başarılarınızı, iş geçmişinizi ve teknik becerilerinizi değerlendirebilirsiniz.
    </DescriptionText>

    <div className={styles.buttonWrapper}>
      <HeroButtons />
    </div>
  </section>
);

export default HeroSection;
