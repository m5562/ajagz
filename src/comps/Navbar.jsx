import React from 'react';

const Navbar = ({position, children, tab}) => {
  return (
    <div className={`appbar ${position}bar`}>
      <div className={tab?"tabs":"bar"}>
        {children}
      </div>
    </div>
  );
};


export default Navbar;