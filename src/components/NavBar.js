import React from 'react';
import '../scss/NavBar.scss';

const NavBar = () => {
  return (
    <nav className="NavBar" role="navigation">
      <a href="/">Home</a>
      <a href="/#projects">Projects</a>
      <span role="img" className="globe" aria-label="full moon face">
        🌝
      </span>
      <a href="/toybox">ToyBox</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
};

export default NavBar;
