import React from 'react';

const Navbar = ({ position, children, tab }) => {
  return (
    <nav className="navbar">
      {children}
    </nav>
  );
};

export default Navbar;
