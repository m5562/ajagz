import React, {useState, useEffect, useRef, useContext} from 'react'
import Navbar from './comps/Navbar'
import Bag from './Bag'


export default function App() {
  return (
    <div className="app">
      <Navbar position={"bottom"}>
        <span className="fa fa-bars"></span>
        <span className="logo">Ajagz</span>
        <span className="fa fa-user"></span>
      </Navbar>
    </div>
  );
}
