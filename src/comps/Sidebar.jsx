import React, { useState, useEffect, useRef } from 'react';

const Sidebar = () => {
  const [isOpened, setisOpened] = useState(true);
  const style = {
    position: 'absolute',
    top: '0',
    minWidth: '100vh',
    background: 'hsl(44°, 0%, 95%)',
  };
  return (
    <>
      <div className="Sidebar" style={style}>
        <div>
          <div className="input-space">
            <input type="text" className="text-input" />
            <button>
              <span className="material-icons-round">search</span>
            </button>
          </div>
        </div>
        <div></div>
        <div>
          {/* footer */}
          <img src="https://picsum.photos/200" alt="user profile" />
        </div>
      </div>
    </>
  );
};
export default Sidebar;
