import React from "react";
import "./Map.css";
const Map = ({ setVisibleMap }) => {
  return (
    <div className={"map"}>
      <div>Map Component</div>
      <button onClick={() => setVisibleMap(false)}>close</button>
    </div>
  );
};

export default Map;
