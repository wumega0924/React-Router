import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue" style={{ marginLeft: '10px' }}>Blue</Link>
      <Link to="/red" style={{ marginLeft: '10px' }}>Red</Link>
    </nav>
  );
};

export default Navbar;