import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Weather defaultCity="Hamburg" />
      </div>
      <footer className="coded">
        {" "}
        <a href="https://github.com/Agathe2109/weather-react" target="_blank">
          Open Source code
        </a>{" "}
        by Agathe Pinsard
      </footer>
    </div>
  );
}
