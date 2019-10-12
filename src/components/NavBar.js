import React from 'react';
import '../scss/NavBar.scss';

const NavBar = ({ lightMode, setLightMode }) => {
  return (
    <nav className="NavBar" role="navigation">
      <a href="/">Home</a>
      <a href="/#projects">Projects</a>
      {lightMode ? (
        <span
          aria-label="sun with face"
          className="globe"
          role="img"
          onClick={() => setLightMode(false)}
        >
          🌞
        </span>
      ) : (
        <span
          aria-label="full moon face"
          className="globe"
          role="img"
          onClick={() => setLightMode(true)}
        >
          🌝
        </span>
      )}
      <a href="/toybox">ToyBox</a>
      <a href="/#contact">Contact</a>
    </nav>
  );
};

export default NavBar;
