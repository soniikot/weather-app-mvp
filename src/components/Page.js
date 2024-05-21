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

      const formData = new FormData(event.target); //what is target
      const cityName = formData.get("cityName");

      callback(cityName);
    });
  }

  updateCurrentWeather(data) {
    this.icon.innerHTML = `<img src="${data.current.condition.icon}"  alt="Weather icon">`;
    this.location.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    this.temperature.textContent = `Temperature: ${data.current.temp_f}°F`;
    this.windDirection.textContent = `Wind Direction: ${data.current.wind_dir}`;
    this.precipitation.textContent = `Precipitation: ${data.current.precip_in}%`;
  }

  updateForecast(data) {
    this.icon.innerHTML = `<img src="${data.current.condition.icon}"  alt="Weather icon">`;
    this.location.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    this.temperature.textContent = `Temperature: ${data.current.temp_f}°F`;
    this.windDirection.textContent = `Wind Direction: ${data.current.wind_dir}`;
    this.precipitation.textContent = `Precipitation: ${data.current.precip_in}%`;

    this.forecast.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const forecastDay = data.forecast.forecastday[i];
      const forecastElement = document.createElement("div");

      forecastElement.innerHTML = `
      <p>${forecastDay.date}<br>
      <img class="condition-icon" src="${forecastDay.day.condition.icon}" alt="Weather icon"><br>
    Max: ${forecastDay.day.maxtemp_f} °F<br>
      Min: ${forecastDay.day.mintemp_f} °F<br>
     Chance of rain: ${forecastDay.day.daily_chance_of_rain}%</p>
    `;

      this.forecast.appendChild(forecastElement);
    }
  }

  changeBackground(data) {
    switch (data.current.condition.text.toLowerCase()) {
      case "sunny":
        document.body.style.backgroundImage = "url(../img/sunny.jpg)";
        console.log("Sunny");
        break;
      case "cloudy":
        document.body.style.backgroundImage = "url(../img/cloudy.jpg)";
        console.log("Cloudy");
        break;
      case "rainy":
        console.log("Rainy");
        break;
      case "snow":
        console.log("Snow");
        break;
      default:
        console.log("Default");
        break;
    }
  }
}
