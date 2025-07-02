import React from 'react';
import { Space } from 'antd';
import UploadIcon from '../atoms/UploadIcon';
import PrimaryButton from '../atoms/PrimaryButton';

const UploadBox = () => (
  <div style={boxStyle}>
    <Space direction="vertical" size="middle" align="center">
      <UploadIcon />
      <div style={{ fontWeight: 600, fontSize: 18 }}>Sürükle & Bırak</div>
      <div>veya</div>

      <PrimaryButton>Dosya Seç</PrimaryButton>
      
      <div style={{ fontSize: 12, color: 'gray' }}>Max. dosya boyutu: 5MB | Sadece PDF desteklenir</div>
    </Space>
  </div>
);

const boxStyle = {
  border: '2px dashed #d9d9d9',
  padding: 40,
  borderRadius: 3,
  background: '#fff',
};

export default UploadBox;
