import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Hamburg" />
      </div>
      <footer className="coded">
        <a
          href="https://github.com/Agathe2109/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        <a
          href="https://github.com/Agathe2109/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />{" "}
        <a
          href="https://github.com/Agathe2109/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open Source code
        </a>{" "}
        by Agathe Pinsard
      </footer>
    </div>
  );
}
