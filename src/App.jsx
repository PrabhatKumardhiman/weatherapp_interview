import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { getForecastData, getWeatherData } from "./weather.api";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async (city) => {
    try {
      const weatherData = await getWeatherData(city);
      const forecastData = await getForecastData(city);
      
      // Filter forecast to get 1 data point per day
      const dailyForecast = forecastData.list.filter((item, index) =>
        item.dt_txt.includes("12:00:00")
      );

      setWeather(weatherData);
      setForecast(dailyForecast);
    } catch (error) {
      alert("City not found! Please try again.");
    }
  };

  return (
    <div className="app-container">
      <h1>🌤️ Weather Forecast App</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
