import axios from "axios";
import { useState } from "react";
import { api } from "../constants/api";

// styles
import "../assets/css/Weather.css";

export const Weather = () => {
  const city = "Skopje";
  const [weather, setWeater] = useState(undefined);
  const getWeatherInfo = () => {
    axios({
      url: `${api.base}/forecast?q=${city}&units=metric&appid=${api.key}`,
      method: "GET",
    })
      .then((res) => {
        setWeater(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="local-weather">
      <br />
      <div className="header_buttons">
        <button onClick={() => getWeatherInfo("Skopje")} className="cityButton">
          Skopje
        </button>

        <button onClick={() => getWeatherInfo("Bitola")} className="cityButton">
          Bitola
        </button>

        <button onClick={() => getWeatherInfo("Shtip")} className="cityButton">
          Stip
        </button>

        <button
          onClick={() => getWeatherInfo("Kratovo")}
          className="cityButton"
        >
          Kratovo
        </button>

        <div className="local-container">
          {weather &&
            weather.list.map((w) => {
              return (
                <div key={w.dt} className="card">
                  <div className="location-box">
                    <div className="location">
                      {weather.city.name},{weather.city.country}
                    </div>
                    <div className="date">{w.dt_txt}</div>
                  </div>
                  <div className="weather-box">
                    <div className="temp">{Math.round(w.main.temp)}℃</div>
                    <div className="weather">{w.weather[0].main}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
