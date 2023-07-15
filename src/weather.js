import React, { useState } from "react";
import WeatherContent from "./WeatherContent";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "33b2dd0bdtf63faf92eoc3485e96bfca";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                onChange={handleChangeCity}
              />
            </div>
            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherContent data={weatherData} />
        <br />
        <br />
        <h3>This week's weather</h3>
        <WeatherForecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />

        <footer class="mt-5">
          <div class="footer-header">
            <h3>Get in Touch.</h3>
          </div>
          <div class="icon">
            <a
              href="mailto:1234@yahoo.com"
              target="_blank"
              rel="noreferrer"
              class="email-icon"
            >
              Email me
            </a>
          </div>
          <div>
            <p>
              Made with ❣️ by Boocie <br />
              Designed in Figma,
              <a
                href="https://github.com/Boocie-N/weather-react"
                target="_blank"
                rel="noreferrer"
              >
                open-source
              </a>{" "}
              and{" "}
              <a
                href="https://statuesque-dolphin-0ef486.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                hosted on Netlify
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  } else {
    search();
    return `Loading ${city} Weather Forecast...`;
  }
}
