import React from 'react';
import { Form, Input } from 'antd';

const CvForm = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="Ad Soyad">
        <Input placeholder="Adınızı girin" />
      </Form.Item>
      <Form.Item label="Doğum Tarihi">
        <Input placeholder="GG/AA/YYYY" />
      </Form.Item>
    </Form>
  );
};

export default CvForm;
