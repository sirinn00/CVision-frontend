import React from 'react';
import TitleText from '../atoms/TitleText';
import DescriptionText from '../atoms/DescriptionText';
import UploadBox from '../molecules/UploadBox';

const UploadSection = () => (
  <section style={{ padding: '200px', textAlign: 'center' }}>

    <TitleText level={3} style={{ fontSize: '1.8rem', textAlign: 'center' }}>
    CV'nizi Yükleyin
    </TitleText>

    <DescriptionText>
      Sürükleyip bırakın ya da tıklayarak seçin. WORD formatı desteklenmektedir.
    </DescriptionText>

    <div style={{ marginTop: 40, maxWidth: 600, margin: '0 auto' }}>
      <UploadBox />
    </div>

    </section>
);

export default UploadSection;
