import React from 'react';

const Navbar = ({ position, children, tab }) => {
  if (position === 'bottom') {
  }
  return (
    <nav
      className={
        position === 'bottom' ? 'navbar navbar-fixed-bottom' : 'navbar'
      }
    >
      {children}
    </nav>
  );
};

export default Navbar;
