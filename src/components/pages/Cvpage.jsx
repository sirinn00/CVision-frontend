import React from 'react';
import { Row, Col, Layout } from 'antd';
import CvForm from '../organisms/CvForm';
import CvPreview from '../organisms/CvPreview';
import './CvPage.css';

const { Content } = Layout;

const CvPage = () => {
  return (
    <Layout className="cv-page-layout">
      <Content style={{ padding: '40px 5vw' }}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <CvForm />
          </Col>
          <Col xs={24} md={12}>
            <CvPreview />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CvPage;
