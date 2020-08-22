import React, { useState } from "react";
import "./App.css";
import { CSSTransition } from "react-transition-group";
import Map from "./Map";
import logo from "./logo.svg";

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
      <CSSTransition
        in={visibleMap}
        timeout={300}
        classNames={"my-node"}
        unmountOnExit
      >
        <Map setVisibleMap={setVisibleMap} />
      </CSSTransition>
    </>
  );
}

export default App;
