import { Link } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/about">About</Link>
      <Link to="/gallery">Galery</Link>
      <Link to="/homepage">HomePage</Link>
      {/* Dnymic Link / URL */}
      {/* <Link to="/blog/:slug">Blog</Link> */}
      {/* <Link to="/about">About</Link> */}
    </div>
  );
};
export default Nav;
