import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const HeroButtons = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <Button type="primary" size="large" onClick={() => navigate('/cv-olustur')}>
        CV OLUŞTUR
      </Button>
      <Button size="large">Daha Fazla Bilgi</Button>
    </div>
  );
};

export default HeroButtons;
