import React, { useState } from "react";
import "./Weather.css";

const api = {
  key: "738db9a1a87bf2fc869038b8644f984d",
  base: "https://api.openweathermap.org/data/2.5/",
};
const Weather = () => {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState("");
  function press() {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }

  return (
    <div className="weatherBody">
      <center>
        <header className="weather">
          <div>
            <input onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={press}>Search</button>
          </div>

          <br/>
          {typeof weather.main !== "undefined" ? (
            <div>
              <p>Place : {weather.name}</p>
              <p>Temp : {weather.main.temp}</p>
              <p>Cloud/Rain : {weather.weather[0].main}</p>
              <p>Description : {weather.weather[0].description}</p>
            </div>
          ) : (
            "Search by City Name"
          )}
        </header>
      </center>
    </div>
  );
};

export default Weather;
