const apiKey = process.env.WEATHER_API_KEY;

export const getWeatherData = async (value, fetchError) => {
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=3&aqi=no`;
  try {
    const response = await fetch(API_URL);

    // event data:loading()

    if (response.status !== 200) {
      fetchError();
      throw new Error("Request error");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    alert(error);
  } finally {
    // event data:finish-loading
  }
};

// EventBus
// Шина событий
