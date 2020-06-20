import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");

  useEffect(() => {
    setDec(String(parseInt(bin, 2)));
  }, [bin]);

  useEffect(() => {
    setBin((dec >>> 0).toString(2));
  }, [dec]);

  return (
    <div className="container">
      <div className="binary">
        <label htmlFor="bin">Binary</label>
        <input
          type="text"
          name="bin"
          id="bin"
          value={bin}
          onChange={(e) => {
            setBin(e.target.value);
          }}
        />
      </div>
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
