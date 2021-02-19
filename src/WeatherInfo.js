import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li className="date">
            <CurrentDate date={props.data.date}/>
            </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row" id="display-weather">
          <div className="col-7">
            <div className="display-weather">
              <div className="img-temp">
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  id="icon"
                />
                <strong>{Math.round(props.data.temperatute)}</strong>
                <span className="units">
                  <a href="/" className="active">
                    ℃
                  </a>{" "}
                  |<a href="/"> ℉ </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-5">
            <ul>
              <li>Precipitation: {props.data.precipitation}%</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div> 
        </div>      
    );
}