import React from 'react';
import logo from '../image/Vector.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Лого'/>
    </header>
  )
};

export default Header;