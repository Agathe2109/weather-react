import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <Container>
        <Row>
          <Col md={3}>
            <FormattedDate date={props.data.date} />
          </Col>
          <Col md={3}>
            <img src={props.data.icon} alt="icon" className="icon" />
          </Col>
          <Col md={3}>
            <WeatherTemperature celsius={props.data.temperature} />
          </Col>
          <Col md={3} className="clear">
            {props.data.description}
            <br />
            Wind : {Math.round(props.data.wind)} km/h
            <br />
            Humidity : {Math.round(props.data.humidity)}%
          </Col>
        </Row>
      </Container>
    </div>
  );
}
