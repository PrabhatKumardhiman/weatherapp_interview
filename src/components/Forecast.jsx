import React from "react";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="forecast-container">
      <h3>🌦️ 5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.slice(0, 5).map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{getFormattedDate(day.dt)}</p>
            <p>🌡️ {day.main.temp}°C</p>
            <p>{day.weather[0].description.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
