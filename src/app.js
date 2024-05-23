import { EventEmitter } from "./base/events/index.js";
import { Page } from "./components/Page.js";
import { Store } from "./store/index.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const events = new EventEmitter();

  const store = new Store(events);

  const page = new Page();

  page.submitFrom(store.setCity);

  events.on("data:changed", () => {
    page.updateCurrentWeather(store.weatherData);
    // page.updateForecast(store.weatherData);
    // page.changeBackground(store.weatherData);
  });

  // events.on("city:changed", () => {});

  events.on("data:fetch-error", () => {
    alert("Data fetch alert");
  });

  store.fetch("");
}
