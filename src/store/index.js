import { Model } from "../base/model/index.js";
import { getWeatherData } from "../services/getWeatherData.js";

export class Store extends Model {
  weatherData = {};

  set(value) {
    this.weatherData = value;
    this.emitChanges("data:changed");
    // this.emitChanges("*");
  }

  get() {
    return this.weatherData;
  }

  setCity = (value) => {
    this.fetch(value);
  };

  fetch = async (city) => {
    // debugger;
    if (!city) {
      return;
    }
    const data = await getWeatherData(city, () =>
      this.emitChanges("data:fetch-error")
    );

    console.log("fetch", this.get());

    this.set(data);
  };
}
