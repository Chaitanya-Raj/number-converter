import React, { useState } from "react";
import "./App.css";

function App() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");

  const convert = () => {
    setDec(parseInt(bin, 2));
  };

  return (
    <div className="container">
      <div className="binary">
        <label htmlFor="bin">Binary</label>
        <input
          type="text"
          name="bin"
          id="bin"
          maxLength="8"
          value={bin}
          onChange={(e) => {
            setBin(e.target.value);
          }}
        />
      </div>
      <button onClick={convert}>Convert</button>
      <div className="decimal">
        <label htmlFor="dec">Decimal</label>
        <input
          type="text"
          name="dec"
          id="dec"
          value={dec}
          onChange={(e) => {
            setDec(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
