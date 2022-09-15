import axios from "axios";
import { api } from "../constants/api";
// hooks
import { useState } from "react";
// styles
import "../assets/css/Cities.css";

export const Cities = () => {
  const [weather, setWeater] = useState();
  const [city, setCity] = useState("");

  const mode = "json";

  const searchWeather = () => {
    axios
      .get(
        `${api.base}/weather?q=${city}&mode=${mode}&units=metric&appid=${api.key}`
      )
      .then((res) => {
        setWeater(res.data);
      });
  };

  return (
    <div
      className={
        weather
          ? weather.main.temp > 15
            ? "cities warm"
            : "cities cold"
          : "cities"
      }
    >
      <div className="search-box">
        <input
          type="text"
          placeholder="Search cities"
          className="search-bar"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchWeather();
            }
          }}
        />
        <button onClick={searchWeather} className="search-button">
          Search
        </button>
      </div>

      {weather && (
        <div className="location-container">
          <div className="location-box">
            <div className="location">
              {weather.name},{weather.sys.count}
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}&#8451;</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
