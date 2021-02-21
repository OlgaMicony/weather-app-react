import React, {useState} from "react";
import "./WeatherTemperature.css"


export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius") 

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
      }

    if (unit==="celsius"){
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <strong className="unit">℃ |{" "}<a href="/" onClick={showFahrenheit}> ℉ </a></strong>
            </div>
            );
    } else {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit())}</span>
                <span className="unit"><a href="/" onClick={showCelsius}>℃</a>{" "}| ℉ </span>
            </div>
            );
    }
    
}