import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../scss/NavBar.scss';

const NavBar = ({ lightMode, setLightMode }) => {
  return (
    <nav className={`NavBar ${lightMode ? 'lightMode' : ''}`} role="navigation">
      <Link exact to="/">
        Home
      </Link>
      <Link to="/Projects">Projects</Link>

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
      <Link to="/ToyBox">ToyBox</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
