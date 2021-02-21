import React, {useState} from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


export default function Weather(props) {
  
  const[weatherData, setWeatherData]= useState({ready:false}); 
  const[city, setCity]=useState(props.defaultCity)
  function handleResponse(response){
      
      setWeatherData({
          ready: true,
          temperature: response.data.main.temp,
          city: response.data.name,
          precipitation: 1,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon:response.data.weather[0].icon,
          description: response.data.weather[0].description,
          date: new Date(response.data.dt*1000)
      })
         
    }

    function search(){
      const apiKey = `8523a767c3431da4f8f46d212dafc72a`;          
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
      event.preventDefault();
      search();
    }

    function handleCityChange(event){
      setCity(event.target.value)
    }

    if(weatherData.ready){
      return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter your city"
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow sm"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-primary w-100 shadow sm"
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
        <WeatherInfo data={weatherData} /> 
        <hr />
        <WeatherForecast city={weatherData.city} />
        
      </div>        
    );

    } else{
      search();

      return "The Weather App is loading...";     
    } 

}