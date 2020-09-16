import React, { useState } from 'react';
import './App.js';
import RandomizedHex from './RandomizedHex';

const RequestHueAndLuminosityform = ({ hue }, { luminosity }) => {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(hue);
    // console.log(luminosity);
    AddHue(hue);
    AddLuminosity(luminosity);
    // // addHueAndLuminosity(hue, luminosity);
    setHue('');
    setLuminosity('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>What hue are you searching for?: </label>
        <input
          type="text"
          value={hue}
          required
          onChange={(e) => setHue(e.target.value)}
        ></input>
        <input type="submit" value="add hue"></input>

        <label>What luminosity are you searching for?:</label>
        <input
          type="text"
          value={luminosity}
          required
          onChange={(e) => setLuminosity(e.target.value)}
        ></input>
        <input type="submit" value="add hue"></input>
      </form>
    </>
  );
};

export default RequestHueAndLuminosityform;
