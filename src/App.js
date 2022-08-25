import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This App was Coded by Deanna Roney and is
          <a
            href="https://github.com/dot-1915/react-weather-2.0"
            target="_blank"
            rel="noreferrer"
          >
            Open Sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
