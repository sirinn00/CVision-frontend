import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const DescriptionText = ({ children }) => (
  <Paragraph style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: 800 }}>
    Bu platformda,
    yüklediğiniz CV üzerinden akademik başarılarınızı, iş geçmişinizi ve teknik becerilerinizi değerlendirebilirsiniz.
  </Paragraph>
);
export default DescriptionText;
