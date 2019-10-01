import React from 'react';
import '../scss/NavBar.scss';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <a href="#home">Home</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default NavBar;
