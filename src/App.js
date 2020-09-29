import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [hex, setHex] = useState('#ffffff');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setHue(hue);
  };

  const RandomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };

  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor: `${hex}`,
          minHeight: '33.34vh',
          overflow: 'hidden',
          zoom: 4,
        }}
      >
        <h1>
          Random Color Generator
          <br />
          {hex}
        </h1>
        <button onClick={RandomizedHex}>Randomize</button>

        <form onClick={handleSubmit}>
          <input
            type="text"
            value={hue}
            required
            onChange={(e) => setHue(e.target.value)}
          ></input>
          <button className="color" type="submit" onClick={() => hue}>
            Add hue
          </button>
          <input
            type="text"
            value={luminosity}
            required
            onChange={(e) => setLuminosity(e.target.value)}
          ></input>
          <button className="color" type="submit" onClick={() => luminosity}>
            Add luminosity
          </button>
        </form>
      </div>
    </>
    // );{ hue: hue, luminosity: luminosity }
  );
};

export default App;
