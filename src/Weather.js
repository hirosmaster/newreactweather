import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="search-form"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="button" />
          </div>
        </div>
      </form>
      <h1>Rome</h1>
      <ul>
        <li>Monday 15:30</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="very sunny"
          />
          36°C
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
}
