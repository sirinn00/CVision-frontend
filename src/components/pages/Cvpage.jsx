import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import HeaderSection from '../organisms/HeaderSection/HeaderSection';
import FooterSection from '../organisms/FooterSection/FooterSection';
import CvForm from '../organisms/CvForm';
import CvPreview from '../organisms/CvPreview';
import './CvPage.css'; // buraya ekstra stil eklersen daha iyi görünür

const { Content } = Layout;

const CvPage = () => {
  const [formData, setFormData] = useState({
    givenName: '',
    familyName: '',
    headline: '',
    email: '',
    phone: '',
    city: '',
    linkedin: '',
    github: '',
    skills: [],
    languages: [],
    photo: null,
  });

  return (
    <Layout
      style={{
        background: 'linear-gradient(to bottom right, #e6f0ff, #ffffff)',
        minHeight: '100vh',
      }}
    >
      <HeaderSection />
<Content style={{ padding: '40px 80px' }}>
  <div className="cv-page-container">
    <Row gutter={32}>
      <Col xs={24} md={12}>
        <div className="cv-form-box">
          <CvForm formData={formData} setFormData={setFormData} />
        </div>
      </Col>
      <Col xs={24} md={12}>
        <div className="cv-preview-box">
          <CvPreview formData={formData} />
        </div>
      </Col>
    </Row>
  </div>
</Content>

      <FooterSection />
    </Layout>
  );
};

export default CvPage;
