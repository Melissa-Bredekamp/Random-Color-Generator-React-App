import React, { useState } from 'react';
import './App.css';
import RandomizedHex from './RandomizedHex';
// import RequestHueAndLuminosityform from './RequestHueAndLuminosityform';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  // const [AddHue, setHue] = useState('');
  // const [AddLuminosity, SetLuminosity] = useState('');

  // const AddHue = (hue) => {
  //   setHue(hue);
  // };

  // const AddLuminosity = (luminosity) => {
  //   setLuminosity(luminosity);
  // };
  const RandomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${hex}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: 4,
      }}
    >
      <h1>{hex}</h1>
      <button onClick={RandomizedHex}>Randomize</button>
      {/* <RequestHueAndLuminosityform value={AddHue} value={AddLuminosity} /> */}
    </div>
  );
};

export default App;
