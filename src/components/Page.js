import { changeBackground } from "../helpers/changeBackground";

export class Page {
  constructor() {
    this.form = document.getElementById("form");
    this.location = document.getElementById("location");
    this.cityInput = document.getElementById("cityInput");
    this.temperature = document.getElementById("temperature");
    this.windDirection = document.getElementById("windDirection");
    this.precipitation = document.getElementById("precipitation");
    this.icon = document.getElementById("icon");
    this.forecast = document.getElementById("forecast");
  }

  submitFrom(callback) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const cityName = formData.get("cityName");

      callback(cityName);
    });
  }

  updateCurrentWeather(data) {
    const { current, location } = data;
    const { condition, temp_f, wind_dir, precip_in } = current;
    const { name, region, country } = location;

    this.icon.innerHTML = `<img src="${condition.icon}"  alt="Weather icon">`;
    this.location.textContent = `${name}, ${region}, ${country}`;
    this.temperature.textContent = `Temperature: ${temp_f}°F`;
    this.windDirection.textContent = `Wind Direction: ${wind_dir}`;
    this.precipitation.textContent = `Precipitation: ${precip_in}%`;

    this.updateForecast(data);
    changeBackground(data);
  }

  updateForecast(data) {
    this.forecast.innerHTML = "";
    const forecastDays = data.forecast.forecastday;

    forecastDays.forEach((forecastDay) => {
      const {
        date,
        day: {
          condition: { icon },
          maxtemp_f,
          mintemp_f,
          daily_chance_of_rain,
        },
      } = forecastDay;
      const forecastElement = document.createElement("div");
      forecastElement.classList.add("forecastDiv");
      forecastElement.innerHTML = `
      <p>${date}<br>
      <img class="condition-icon" src="${icon}" alt="Weather icon"><br>
    Max: ${maxtemp_f} °F<br>
      Min: ${mintemp_f} °F<br>
     Chance of rain: ${daily_chance_of_rain}%</p>
    `;

      this.forecast.appendChild(forecastElement);
    });
  }
}
