import React from 'react';
import { Layout } from 'antd';
import Logo from '../../atoms/Logo';
import Navbar from '../../molecules/Navbar';
import './HeaderSection.css';

const { Header } = Layout;

const HeaderSection = () => {
  return (
    <Header className="custom-header">
      <Logo />
      <Navbar />
    </Header>
  );
};

export default HeaderSection;
