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
              <h2>
                <div className="row update">
                  <div
                    className="col-"
                    class="current-time"
                    id="current-time"
                  ></div>
                </div>
              </h2>
              <div className="weather-forecast" id="weather-forecast"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
