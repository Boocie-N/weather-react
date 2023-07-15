import React from "react";
import Dates from "./Dates";
import WeatherIcon from "./WeatherIcon";
import "./WeatherContent.css";

export default function WeatherContent(props) {
  return (
    <div className="WeatherContent">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <Dates date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-start">
            <WeatherIcon code={props.data.icon} size={50} />
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
