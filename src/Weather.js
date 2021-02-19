import React, {useState} from "react";
import axios from 'axios';
import "./Weather.css";


export default function Weather(props) {
  
  const[weatherData, setWeatherData]= useState({ready:false}); 
  function handleResponse(response){
      console.log(response.data);
      setWeatherData({
          ready: true,
          temperatute: response.data.main.temp,
          city: response.data.name,
          precipitation: 1,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          iconUrl:"https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
          description: response.data.weather[0].description,
          date: "Friday 12:30"
      })
         
    }

    if(weatherData.ready){
      return (
        <div className="Weather">
            <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter your city"
                autoFocus="on"
                autoComplete="off"
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
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row" id="display-weather">
          <div className="col-7">
            <div className="display-weather">
              <div className="img-temp">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                />
                <strong>{Math.round(weatherData.temperatute)}</strong>
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
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>       
      </div>        
    );

    } else{
      const apiKey = `8523a767c3431da4f8f46d212dafc72a`;          
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return "The Weather App is loading...";     
    } 

}