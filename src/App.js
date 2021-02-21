import React from "react";
import Weather from "./Weather";
import "./App.css"


function App() {
  return (
    <div className="App">   
    <div className="conteiner">    
        <Weather defaultCity="Prague"/>
      </div>
          <footer className="link">
            <a href="https://github.com/OlgaMicony/weather-app-react" target="_blank" rel="noreferrer">Open-source code </a>by Olga Micony 
          </footer>             
   </div>       
      );
}

export default App;
