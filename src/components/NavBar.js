import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/NavBar.scss';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default NavBar;
