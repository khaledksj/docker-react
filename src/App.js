import React from 'react';
import logo from './logo.svg';
import joury from './joury-zainah.jpg';
import jawad from './jawad.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>joury & zainah</p>
        <img src={joury} alt="Italian Trulli" width="1000" height="700"/>
        <p>jawad</p>
        <img src={jawad} alt="Italian Trulli" width="1000" height="700"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
