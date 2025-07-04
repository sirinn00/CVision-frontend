import React from 'react';
import { Input, Form, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const CvForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpload = (info) => {
    const file = info.file.originFileObj;
    const reader = new FileReader();
    reader.onload = e => {
      setFormData(prev => ({ ...prev, photo: e.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSkillsChange = (value) => {
    setFormData(prev => ({ ...prev, skills: value }));
  };

  const handleLanguagesChange = (value) => {
    setFormData(prev => ({ ...prev, languages: value }));
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Photo">
        <Upload
          beforeUpload={() => false}
          onChange={handleUpload}
          showUploadList={false}
        >
          <Button icon={<UploadOutlined />}>Upload Photo</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Given Name">
        <Input name="givenName" value={formData.givenName} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Family Name">
        <Input name="familyName" value={formData.familyName} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Headline">
        <Input name="headline" value={formData.headline} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Email">
        <Input name="email" value={formData.email} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Phone">
        <Input name="phone" value={formData.phone} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="City">
        <Input name="city" value={formData.city} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="LinkedIn">
        <Input name="linkedin" value={formData.linkedin} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="GitHub">
        <Input name="github" value={formData.github} onChange={handleChange} />
      </Form.Item>

      <Form.Item label="Skills">
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Add skills"
          onChange={handleSkillsChange}
          value={formData.skills}
        />
      </Form.Item>

      <Form.Item label="Languages">
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Add languages"
          onChange={handleLanguagesChange}
          value={formData.languages}
        />
      </Form.Item>
    </Form>
  );
};

export default CvForm;
