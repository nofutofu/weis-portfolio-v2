import React from 'react';
import { useState } from 'react';

const NavBar = () => {
  return (
    <nav id="navbar">
      <div id="navLogo">
        <Link to=""></Link>
        <NavLink to="/about"></NavLink>
        <NavLink to="/projects"></NavLink>
        <NavLink to="/contact"></NavLink>
      </div>
    </nav>
  );
};
