import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <div className="row" id="header">
        <div className="col-6">
          <h1>Rome</h1>
        </div>
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="very sunny"
          />
          <span className="temp">36</span>
          <span className="tempUnit">°C</span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Monday 15:30</li>
            <li>Mostly cloudy</li>
          </ul>
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
