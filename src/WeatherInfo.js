import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="row">
          <div className="col-7">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>

                <div className="float-left">
                  <WeatherTemperature celsius={props.data.temperature} />               
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