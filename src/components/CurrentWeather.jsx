import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>{data.weather[0].description.toUpperCase()}</p>
      <p>🌡️ Temp: {data.main.temp}°C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>💨 Wind: {data.wind.speed} m/s</p>
    </div>
  );
};

export default CurrentWeather;
