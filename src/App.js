import React, {useState, useEffect, useRef} from 'react'
import Navbar from './comps/Navbar'


const BAG = window.localStorage

export default function App() {

  
  return (
    <div className="app">
      <Navbar icons={['search','logo','humberger']}/>
    </div>
  );
}
