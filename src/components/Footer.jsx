import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/blue" style={{ marginLeft: '10px' }}>Blue</Link>
      <Link to="/red" style={{ marginLeft: '10px' }}>Red</Link>
    </footer>
  );
};

export default Footer;