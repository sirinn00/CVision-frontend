import React from 'react';
import NavigationMenu from '../atoms/NavigationMenu';
import PrimaryButton from '../atoms/PrimaryButton';

const NavMenu = () => (
  <div
    style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center',
    }}
  >
    <NavigationMenu />
    <PrimaryButton>CV Tara</PrimaryButton>
  </div>
);

export default NavMenu;
