import React from 'react';

const Navbar = ({position, children}) => {
  return (
    <div className={`appbar ${position}bar`}>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Navbar;