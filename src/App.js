import React, { useState } from "react";
import Map from "./Map";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [visibleMap, setVisibleMap] = useState(false);
  const onClick = () => {
    setVisibleMap(true);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={onClick}>open map</button>
        </header>
      </div>
      {visibleMap && <Map setVisibleMap={setVisibleMap} />}
    </>
  );
}

export default App;
