import React from 'react';
import { Button } from 'antd';

const HeroButtons = () => (
  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
    <Button type="primary" size="large">
      CV OLUŞTUR
    </Button>
    <Button size="large">
      Daha Fazla Bilgi
    </Button>
  </div>
);

export default HeroButtons;
