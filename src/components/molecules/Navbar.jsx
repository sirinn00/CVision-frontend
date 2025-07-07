import React from 'react';
import NavigationMenu from '../atoms/NavigationMenu';
import PrimaryButton from '../atoms/PrimaryButton';

const Navbar = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
    }}
  >
    <NavigationMenu />
    <PrimaryButton>CV Oluştur</PrimaryButton>
  </div>
);

export default Navbar;
