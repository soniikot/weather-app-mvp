import sunnyImage from "../img/sunny.jpg";
import cloudyImage from "../img/cloudy.jpg";
import clearImage from "../img/clear.jpg";
import fogImage from "../img/fog.jpg";
import snowImage from "../img/snow.jpg";
import thunderImage from "../img/thunder.jpg";
import rainImage from "../img/rain.jpg";

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
    console.log(data.current.condition.text);
    switch (data.current.condition.text.toLowerCase()) {
      case "sunny":
        document.body.style.backgroundImage = `url(${sunnyImage})`;
        break;
      case "cloudy":
      case "partly cloudy":
      case "overcast":
      case "mist":
      case "patchy rain possible":
      case "patchy snow possible":
      case "patchy sleet possible":
      case "patchy freezing drizzle possible":
      case "thundery outbreaks possible":
        document.body.style.backgroundImage = `url(${cloudyImage})`;
        document.body.style.color = `black`;
        console.log("Cloudy");
        break;
      case "clear":
        document.body.style.backgroundImage = `url(${clearImage})`;
        document.body.style.color = `white`;
        break;
      case "rainy":
      case "patchy light drizzle":
      case "light drizzle":
      case "freezing drizzle":
      case "heavy freezing drizzle":
      case "patchy light rain":
      case "light rain":
      case "moderate rain at times":
      case "moderate rain":
      case "heavy rain at times":
      case "light freezing rain":
      case "moderate or heavy freezing rain":
      case "patchy light rain":
      case "light rain":
      case "moderate rain at times":
      case "moderate rain":
      case "heavy rain at times":
      case "light rain shower":
      case "moderate or heavy rain shower":
      case "torrential rain shower":
      case "light sleet showers":
      case "moderate or heavy rain shower":
      case "torrential rain shower":
      case "light sleet showers":
      case "moderate or heavy sleet showers":
      case "heavy rain":
        document.body.style.backgroundImage = `url(${rainImage})`;
        document.body.style.color = `white`;
        break;
      case "blowing snow":
      case "light sleet":
      case "moderate or heavy sleet":
      case "moderate or heavy sleet":
      case "light snow":
      case "patchy moderate snowt":
      case "moderate snow":
      case "blowing snow":
      case "patchy heavy snow":
      case "heavy snow":
      case "ice pellets":
      case "light snow showers":
      case "moderate or heavy snow showers":
      case "light showers of ice pellets":
      case "moderate or heavy showers of ice pellets":
        document.body.style.backgroundImage = `url(${snowImage})`;
        document.body.style.color = `black`;
        break;
      case "fog":
      case "freezing fog":
        document.body.style.backgroundImage = `url(${fogImage})`;
        document.body.style.color = `black`;
        break;
      case "moderate or heavy rain with thunder":
      case "patchy light rain with thunder":
      case "patchy light snow with thunder":
      case "moderate or heavy snow with thunder":
        document.body.style.backgroundImage = `url(${thunderImage})`;
        document.body.style.color = `white`;
        break;
      default:
        console.log("Default");
        break;
    }
  }
}
