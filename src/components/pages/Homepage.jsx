import React from 'react';
import { Layout } from 'antd';
import Logo from '../atoms/Logo';

const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
        <Logo />
      </Content>
    </Layout>
  );
};

export default HomePage;
