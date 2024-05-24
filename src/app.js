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
  });

  events.on("data:fetch-error", () => {
    alert("Data fetch error");
  });

  events.on("data:loading", () => {
    page.showLoading();
  });
  events.on("data:finish-loading", () => {
    page.finishLoading();
  });
  store.fetch("");
}
