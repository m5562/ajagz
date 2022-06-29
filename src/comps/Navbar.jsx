import React from 'react';

const Navbar = ({position, chilren}) => {
  return (
    <div className={`appbar ${position}bar`}>
      <div>
        {chidren}
      </div>
    </div>
  );
};

export default Navbar;