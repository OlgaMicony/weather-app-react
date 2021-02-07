import React from "react";
import "./Weather.css"

export default function Weather (){
    return(
        
        <div className="weather-container">
          <div className="card">
            <div className="card-body">
              <form className="search-form">
                <div className="row">
                 <div className="col-6">
                <input 
                type="search" 
                placeholder="Enter your city" 
                autofocus="on"
                autocomplete="off"
                id="city-input"
                className="form-control shadow sm" />
              </div>
                <div className="col-3">
                    <input 
                        type="submit"
                        value="Search"
                        className="form-control btn btn-outline-primary w-100 shadow sm"
                        id="search"
                    />
                </div>
                <div className="col-3">
                    <button 
                        type="button" 
                        className="btn btn-outline-success w-100 shadow sm" 
                        id="current">
                        Current
                    </button>
              </div>
              </div>
              </form>
              <h1 id="city">Prague</h1>
                <ul>
                  <li className="date">Monday 14:26</li>              
                  <li id="current-weather">Cloudly</li>
                </ul>       
              <div className="row" id="display-weather">
                <div className="col-7" >
                  <div className="display-weather"> 
                  <div className="img-temp">                              
                      <img src="" alt="cloud" id="icon"/>
                      <strong className="temp">10</strong> 
                      <span className="units">
                        <a href="#" id="celsius-link" className="active">℃</a> | 
                        <a href="#" id="fahrenheit-link"> ℉ </a></span> 
                    </div>
                  </div>           
                </div>
                <div className="col-5" > 
                  <ul>
                  <li>             
                  Precipitation: <span id="precipitation">1%</span>
                </li>
                <li>
                  Humidity: <span id="humidity">56%</span>
                </li>
                <li>
                  Wind: <span id="wind">14km/h</span>
                </li>
              </ul>
                </div>
                </div>
                  
                  <div className="row weather-forecast" id="forecast"></div>             
                </div>
              </div>          
          <div className="link">
            <a href="https://github.com/OlgaMicony/weather-app-react" target="_blank">Open-source code </a>by Olga Micony 
          </div>
        </div>
         
    )
}