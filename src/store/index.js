import { Model } from "../base/model/index.js";
import { getWeatherData } from "../services/getWeatherData.js";

export class Store extends Model {
  weatherData = {};

  set(value) {
    this.weatherData = value;
    this.emitChanges("data:changed");
  }

  get() {
    return this.weatherData;
  }

  setCity = (value) => {
    this.fetch(value);
  };

  fetch = async (city) => {
    if (!city) {
      return;
    }
    const data = await getWeatherData(
      city,
      () => this.emitChanges("data:fetch-error"),
      () => this.emitChanges("data:loading"),
      () => this.emitChanges("data:finish-loading")
    );

    this.set(data);
  };
}
