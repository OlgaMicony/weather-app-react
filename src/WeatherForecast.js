import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview"


export default function WeatherForecast(props) {
    const [loaded, setLoaded]= useState(false);
    const [forecast, setForecast]= useState(null);

    function handleForecastResponse(response){ 
         console.log(response.data);      
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.lat === forecast.lat){        
        return(
            <div className="WeatherForecast row">                         
                <WeatherForecastPreview data={forecast.daily[0]} />                
                <WeatherForecastPreview data={forecast.daily[1]} />                
                <WeatherForecastPreview data={forecast.daily[2]} />                
                <WeatherForecastPreview data={forecast.daily[3]} />                
                <WeatherForecastPreview data={forecast.daily[4]} />                
                <WeatherForecastPreview data={forecast.daily[5]} />                
                <WeatherForecastPreview data={forecast.daily[6]} />                
           </div> 
        ) ;
    } else {
        let apiKey = `8523a767c3431da4f8f46d212dafc72a`;          
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleForecastResponse);

      return null;
    }
    
}