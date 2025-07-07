import React, { useState } from 'react';
import { Form, Input, Row, Col, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './CvPage.css';
import HeaderSection from '../organisms/HeaderSection/HeaderSection';
import FooterSection from '../organisms/FooterSection/FooterSection';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';

const { Title, Text } = Typography;

const CvPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    email: '',
    phone: '',
    city: '',
    linkedin: '',
    github: '',
    education: '',
    gpa: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const downloadWord = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: `${formData.firstName} ${formData.lastName}`, bold: true, size: 32 }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({ text: formData.headline, italics: true, size: 24 }),
              ],
            }),
            new Paragraph(''),
            new Paragraph({
              children: [
                new TextRun({ text: `Email: ${formData.email}` }),
                new TextRun({ text: ` | Phone: ${formData.phone}` }),
                new TextRun({ text: ` | City: ${formData.city}` }),
              ],
            }),
            new Paragraph(''),
            new Paragraph({
              children: [
                new TextRun({ text: 'Education', bold: true })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({ text: formData.education })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `GPA: ${formData.gpa}` })
              ]
            }),
            new Paragraph(''),
            new Paragraph({
              children: [
                new TextRun({ text: 'Skills', bold: true })
              ]
            }),
            ...formData.skills.split(',').map(skill => new Paragraph({ children: [ new TextRun({ text: skill.trim() }) ] })),
            new Paragraph(''),
            new Paragraph({
              children: [
                new TextRun({ text: 'Languages', bold: true })
              ]
            }),
            new Paragraph({
              children: [
                new TextRun({ text: formData.languages })
              ]
            }),
          ],
        },
      ],
    });
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'CV.docx');
    });
  };

  return (
    <>
      <HeaderSection />
      <div className="cv-container">
        <Row gutter={24} >
          {/* Sol Panel */}
          <Col xs={24} md={12} className="cv-form-section">
            <Form layout="vertical">
              <Title level={4}>CV Bilgileri</Title>
              <Form.Item label="Ad">
                <Input name="firstName" value={formData.firstName} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Soyad">
                <Input name="lastName" value={formData.lastName} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Ünvan">
                <Input name="headline" value={formData.headline} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="E-posta">
                <Input name="email" value={formData.email} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Telefon">
                <Input name="phone" value={formData.phone} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Şehir">
                <Input name="city" value={formData.city} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="LinkedIn">
                <Input name="linkedin" value={formData.linkedin} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="GitHub">
                <Input name="github" value={formData.github} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Eğitim">
                <Input name="education" value={formData.education} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="GPA">
                <Input name="gpa" value={formData.gpa} onChange={handleChange} />
              </Form.Item>
              <Form.Item label="Yetenekler (virgülle ayırın)">
                <Input name="skills" value={formData.skills} onChange={handleChange} />
              </Form.Item>
            </Form>
          </Col>

          {/* Sağ Panel */}
          <Col xs={24} md={12} className="cv-preview-section">
            <Title level={3}>{formData.firstName} {formData.lastName}</Title>
            <Text type="secondary">{formData.headline}</Text>
            <div style={{ marginTop: 16 }}>
              <p className="info-line"><MailOutlined /> {formData.email}</p>
              <p className="info-line"><PhoneOutlined /> {formData.phone}</p>
              <p className="info-line"><EnvironmentOutlined /> {formData.city}</p>
              <p className="info-line"><LinkedinOutlined /> {formData.linkedin}</p>
              <p className="info-line"><GithubOutlined /> {formData.github}</p>
            </div>
            <div style={{ marginTop: 24 }}>
              <Title level={5}>Eğitim</Title>
              <Text strong>{formData.education}</Text>
              <p>GPA: {formData.gpa}</p>
            </div>
            <div style={{ marginTop: 24 }}>
              <Title level={5}>Yetenekler</Title>
              <ul>
                {formData.skills.split(',').map((skill, index) => (
                  <li key={index}>{skill.trim()}</li>
                ))}
              </ul>
            </div>
            <button className="cv-word-download-btn" onClick={downloadWord}>Word olarak indir</button>
          </Col>
        </Row>
      </div>
      <FooterSection />
    </>
  );
};

export default CvPage;
