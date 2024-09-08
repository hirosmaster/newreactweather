import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temp, setTemp] = useState(null);
  function handleSearch(response) {
    setTemp(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-4">
              <input
                type="search"
                placeholder="Enter a city"
                className="search-form"
                autoFocus="on"
              />
            </div>
            <div className="col-8">
              <input type="submit" value="Search" className="button" />
            </div>
          </div>
        </form>
        <h1>Rome</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Monday 15:30</li>
              <li>Mostly cloudy</li>
            </ul>
            <div className="currentTemp">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="very sunny"
                className="float-start"
              />
              <span className="temp">{Math.round(temp)}</span>
              <span className="tempUnit">°C</span>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: 37%</li>
              <li>Wind: 16km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7284tb793b63a4fb3a7aacc794o38a02";
    let city = "Rome";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSearch);

    return "Loading...";
  }
}
