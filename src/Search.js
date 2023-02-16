import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormattedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5acb752426cd8188485c35694980e3a&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  let form = (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        type="search"
        placeholder="Search for a city.. "
        onChange={updateCity}
        className="search"
      />
      <input type="submit" value="Search" className="submit" />
    </form>
  );

  if (weather) {
    return (
      <div>
        <div className="title">{weather.city}</div>
        {form}
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col md={3}>
              <FormattedDate date={weather.date} />
            </Col>
            <Col md={3}>
              <img src={weather.icon} alt="icon" className="icon" />
            </Col>
            <Col md={3}>
              <WeatherTemperature celsius={weather.temperature} />
            </Col>
            <Col md={3} className="clear">
              {weather.description}
              <br />
              Wind : {Math.round(weather.wind)} km/h
              <br />
              Humidity : {Math.round(weather.humidity)}%
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
