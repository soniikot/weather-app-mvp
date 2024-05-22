import { apiKey } from "../app.js";

export const getWeatherData = async (value, fetchError) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=3&aqi=no`
    );

    if (response.status !== 200) {
      throw new Error("Request error");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
