import React from 'react';
import '../scss/NavBar.scss';

const NavBar = ({ lightMode, setLightMode }) => {
  return (
    <nav className={`NavBar ${lightMode ? 'lightMode' : ''}`} role="navigation">
      <a href="/">Home</a>
      <a href="/#projects">Projects</a>
      {lightMode ? (
        <span
          aria-label="yin yang"
          className="yin-yang"
          role="button"
          onClick={() => setLightMode(false)}
        >
          ☯
        </span>
      ) : (
        <span
          aria-label="yin yang"
          className="yin-yang"
          role="button"
          onClick={() => setLightMode(true)}
        >
          ☯
        </span>
      )}
      <a href="/toybox">ToyBox</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
};

export default NavBar;
