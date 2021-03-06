import React, { useState } from "react";
import "./App.css";

function App() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");
  const [oct, setOct] = useState("");
  const [hex, setHex] = useState("");

  const convert = (value, n) => {
    if (
      (!isNaN(parseInt(value)) || value.match("^[A-Fa-f]*$")) &&
      value !== ""
    ) {
      console.log(value);
      if (n !== 2) {
        setBin(parseInt(value, n).toString(2));
      }
      if (n !== 8) {
        setOct(parseInt(value, n).toString(8));
      }
      if (n !== 10) {
        setDec(parseInt(value, n).toString(10));
      }
      if (n !== 16) {
        setHex(parseInt(value, n).toString(16));
      }
    } else {
      console.log("no");
      if (n !== 2) {
        setBin("");
      }
      if (n !== 8) {
        setOct("");
      }
      if (n !== 10) {
        setDec("");
      }
      if (n !== 16) {
        setHex("");
      }
    }
  };

  return (
    <div className="container">
      <div className="decimal">
        <label htmlFor="dec">Decimal</label>
        <input
          type="text"
          name="dec"
          id="dec"
          value={dec}
          onChange={(e) => {
            if (e.target.value.match("^[0-9]*$")) {
              setDec(e.target.value);
              convert(e.target.value, 10);
            }
          }}
        />
      </div>
      <div className="binary">
        <label htmlFor="bin">Binary</label>
        <input
          type="text"
          name="bin"
          id="bin"
          value={bin}
          onChange={(e) => {
            if (e.target.value.match("^[0-1]*$")) {
              setBin(e.target.value);
              convert(e.target.value, 2);
            }
          }}
        />
      </div>
      <div className="octal">
        <label htmlFor="oct">Octal</label>
        <input
          type="text"
          name="oct"
          id="oct"
          value={oct}
          onChange={(e) => {
            if (e.target.value.match("^[0-7]*$")) {
              setOct(e.target.value);
              convert(e.target.value, 8);
            }
          }}
        />
      </div>
      <div className="hexadecimal">
        <label htmlFor="hex">Hexadecimal</label>
        <input
          type="text"
          name="hex"
          id="hex"
          value={hex}
          onChange={(e) => {
            if (e.target.value.match("^[a-fA-F0-9]*$")) {
              setHex(e.target.value);
              convert(e.target.value, 16);
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
