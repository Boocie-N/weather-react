import React, { useState, useEffect } from "react";
import ShowForecast from "./ShowForecast";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [filled, setFilled] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setFilled(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setFilled(true);
  }

  if (filled) {
    return (
      <div className="WeatherForecast row">
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ShowForecast data={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "33b2dd0bdtf63faf92eoc3485e96bfca";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
