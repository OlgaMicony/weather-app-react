import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css"



export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city},{props.data.country}</h1>
        <ul>
          <li className="date">
            <CurrentDate date={props.data.date}/>
            </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>

                <div className="float-left">
                  <WeatherTemperature celsius={props.data.temperature} />               
                </div>
              
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: <span>{Math.round(props.data.precipitation)}℃</span></li>
              <li>Humidity: <span>{props.data.humidity}%</span></li>
              <li>Wind: <span>{Math.round(props.data.wind)}km/h</span></li>
            </ul>
          </div>
        </div> 
        </div>      
    );
}
