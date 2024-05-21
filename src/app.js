export const apiKey = "9dec8c3e4630440ab7c01538242105";
//import * as css from "../src/style.css";

import { EventEmitter } from "./base/events/index.js";
import { Page } from "./components/Page.js";
import { Store } from "./store/index.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const events = new EventEmitter();

  const store = new Store(events);

  const page = new Page();

  page.submitFrom(store.setCity);

  events.on("data:changed", () => {
    page.updateCurrentWeather(store.weatherData);
    page.updateForecast(store.weatherData);
    page.changeBackground(store.weatherData);
  });

  events.on("city:changed", () => {});

  events.on("data:fetch-error", () => {});

  store.fetch("");
}

//getWeatherData.js:3
//GET https://api.weatherapi.com/v1/forecast.json?key=0910fad3532b4e7ea20153318240905&q=undefined&days=3&aqi=no 400 (Bad Request)
//Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'condition')at
//Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received
