import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props){
    function showDay(){
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[new Date(props.data.dt * 1000).getDay()];        

        return day
  }
    return (
     <div className="WeatherForecastPrev col">
       {showDay()}
       <WeatherIcon code={props.data.weather[0].icon}/>
           <span className="temperatures"><strong>{Math.round(props.data.temp.min)}</strong>°{" "}|{" "}{Math.round(props.data.temp.max)}° </span>
      </div>
    );  
}