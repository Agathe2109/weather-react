import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    <div>
      <div id="root">
        <div className="App">
          <div className="weather-app">
            <div className="container">
              <div className="title">
                <em>
                  <strong> Weather App</strong>
                </em>
              </div>
              <Search />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
