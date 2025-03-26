import axios from "axios";

const API_KEY = "fc9e2431d2c395aa59fbad92138c8958"
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// Api to get the weather data
export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// API to get the forecast data
export const getForecastData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};
