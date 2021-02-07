import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
      city: "Prague",
      date: "Monday 14:26",
      description: "Cloudly",
      temperatute: 10,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      precipitation: 1,
      humidity: 56,
      wind: 14
    };
  
    return (
        <div className="Weather">
            <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter your city"
                autofocus="on"
                autocomplete="off"
                className="form-control shadow sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-outline-primary w-100 shadow sm"
              />
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-outline-success w-100 shadow sm"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li className="date">{weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row" id="display-weather">
          <div className="col-7">
            <div className="display-weather">
              <div className="img-temp">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  id="icon"
                />
                <strong>{weatherData.temperatute}</strong>
                <span className="units">
                  <a href="/" class="active">
                    ℃
                  </a>{" "}
                  |<a href="/"> ℉ </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-5">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="link">
            <a href="https://github.com/OlgaMicony/weather-app-react" target="_blank" rel="noreferrer">Open-source code </a>by Olga Micony 
          </div>
      </div>          
           
    );
  }

