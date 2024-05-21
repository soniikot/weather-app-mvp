/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/app.js":
      /*!********************!*\
  !*** ./src/app.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiKey: () => (/* binding */ apiKey)\n/* harmony export */ });\n/* harmony import */ var _base_events_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/events/index.js */ "./src/base/events/index.js");\n/* harmony import */ var _components_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Page.js */ "./src/components/Page.js");\n/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index.js */ "./src/store/index.js");\nconst apiKey = process.env.WEATHER_API_KEY;\n\n\n\n\n\ndocument.addEventListener("DOMContentLoaded", initApp);\n\nfunction initApp() {\n  const events = new _base_events_index_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();\n\n  const store = new _store_index_js__WEBPACK_IMPORTED_MODULE_2__.Store(events);\n\n  const page = new _components_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page();\n\n  page.submitFrom(store.setCity);\n\n  events.onAll((data) => {});\n\n  events.on("data:changed", () => {\n    page.updateCurrentWeather(store.weatherData);\n    page.updateForecast(store.weatherData);\n    //changeBackground(data);\n  });\n\n  events.on("city:changed", () => {});\n\n  store.fetch();\n}\n\n//getWeatherData.js:3\n//GET https://api.weatherapi.com/v1/forecast.json?key=0910fad3532b4e7ea20153318240905&q=undefined&days=3&aqi=no 400 (Bad Request)\n//Uncaught (in promise) TypeError: Cannot read properties of undefined (reading \'condition\')at\n//Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received\n\n\n//# sourceURL=webpack://weather-app-with-patterns/./src/app.js?'
        );

        /***/
      },

    /***/ "./src/base/events/index.js":
      /*!**********************************!*\
  !*** ./src/base/events/index.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventEmitter: () => (/* binding */ EventEmitter)\n/* harmony export */ });\nclass EventEmitter {\n  constructor() {\n    this._events = new Map(); //what is map?\n  }\n\n  on(eventName, callback) {\n    if (!this._events.has(eventName)) {\n      this._events.set(eventName, new Set()); //what is set\n    }\n    this._events.get(eventName).add(callback);\n  }\n\n  off(eventName, callback) {\n    if (this._events.has(eventName)) {\n      this._events.get(eventName).delete(callback);\n      if (this._events.get(eventName).size === 0) {\n        this._events.delete(eventName);\n      }\n    }\n  }\n\n  emit(eventName, data) {\n    this._events.forEach((subscribers, name) => {\n      if (name === eventName) {\n        subscribers.forEach((callback) => callback(data));\n      }\n    });\n  }\n\n  onAll(callback) {\n    this.on("*", callback);\n  }\n\n  offAll() {\n    this._events = new Map();\n  }\n\n  trigger(eventName, context = {}) {\n    return (event = {}) => {\n      this.emit(eventName, { ...event, ...context });\n    };\n  }\n}\n\n\n//# sourceURL=webpack://weather-app-with-patterns/./src/base/events/index.js?'
        );

        /***/
      },

    /***/ "./src/base/model/index.js":
      /*!*********************************!*\
  !*** ./src/base/model/index.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Model: () => (/* binding */ Model)\n/* harmony export */ });\nclass Model {\n  constructor(events) {\n    this.events = events;\n  }\n\n  emitChanges(event, payload) {\n    //what is payload\n    this.events.emit(event, payload ?? {});\n  }\n}\n\n\n//# sourceURL=webpack://weather-app-with-patterns/./src/base/model/index.js?"
        );

        /***/
      },

    /***/ "./src/components/Page.js":
      /*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Page: () => (/* binding */ Page)\n/* harmony export */ });\nclass Page {\n  constructor() {\n    this.form = document.getElementById("form");\n    this.location = document.getElementById("location");\n    this.cityInput = document.getElementById("cityInput");\n    this.temperature = document.getElementById("temperature");\n    this.windDirection = document.getElementById("windDirection");\n    this.precipitation = document.getElementById("precipitation");\n    this.icon = document.getElementById("icon");\n    this.forecast = document.getElementById("forecast");\n  }\n\n  submitFrom(callback) {\n    this.form.addEventListener("submit", (event) => {\n      event.preventDefault();\n\n      const formData = new FormData(event.target); //what is target\n      const cityName = formData.get("cityName");\n\n      callback(cityName);\n    });\n  }\n\n  updateCurrentWeather(data) {\n    this.icon.innerHTML = `<img src="${data.current.condition.icon}"  alt="Weather icon">`;\n    this.location.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;\n    this.temperature.textContent = `Temperature: ${data.current.temp_f}°F`;\n    this.windDirection.textContent = `Wind Direction: ${data.current.wind_dir}`;\n    this.precipitation.textContent = `Precipitation: ${data.current.precip_in}%`;\n  }\n\n  updateForecast(data) {\n    this.icon.innerHTML = `<img src="${data.current.condition.icon}"  alt="Weather icon">`;\n    this.location.textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`;\n    this.temperature.textContent = `Temperature: ${data.current.temp_f}°F`;\n    this.windDirection.textContent = `Wind Direction: ${data.current.wind_dir}`;\n    this.precipitation.textContent = `Precipitation: ${data.current.precip_in}%`;\n\n    this.forecast.innerHTML = "";\n\n    for (let i = 0; i < 3; i++) {\n      const forecastDay = data.forecast.forecastday[i];\n      const forecastElement = document.createElement("div");\n\n      forecastElement.innerHTML = `\n      <p>${forecastDay.date}<br>\n      <img class="condition-icon" src="${forecastDay.day.condition.icon}" alt="Weather icon"><br>\n    Max: ${forecastDay.day.maxtemp_f} °F<br>\n      Min: ${forecastDay.day.mintemp_f} °F<br>\n     Chance of rain: ${forecastDay.day.daily_chance_of_rain}%</p>\n    `;\n\n      this.forecast.appendChild(forecastElement);\n    }\n  }\n\n  changeBackground(data) {\n    switch (data.current.condition.text.toLowerCase()) {\n      case "sunny":\n        document.body.style.backgroundImage = "url(../img/sunny.jpg)";\n        console.log("Sunny");\n        break;\n      case "cloudy":\n        document.body.style.backgroundImage = "url(../img/cloudy.jpg)";\n        console.log("Cloudy");\n        break;\n      case "rainy":\n        console.log("Rainy");\n        break;\n      case "snow":\n        console.log("Snow");\n        break;\n      default:\n        console.log("Default");\n        break;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://weather-app-with-patterns/./src/components/Page.js?'
        );

        /***/
      },

    /***/ "./src/services/getWeatherData.js":
      /*!****************************************!*\
  !*** ./src/services/getWeatherData.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.js */ "./src/app.js");\n\n\nconst getWeatherData = (value) => {\n  return new Promise((resolve, reject) => {\n    fetch(\n      `https://api.weatherapi.com/v1/forecast.json?key=${_app_js__WEBPACK_IMPORTED_MODULE_0__.apiKey}&q=${value}&days=3&aqi=no`\n    )\n      .then((response) => response.json())\n      .then((data) => resolve(data))\n      .catch((error) => {\n        console.error("Error fetching weather data:", error);\n        reject(error);\n      });\n  });\n};\n\n\n//# sourceURL=webpack://weather-app-with-patterns/./src/services/getWeatherData.js?'
        );

        /***/
      },

    /***/ "./src/store/index.js":
      /*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _base_model_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/model/index.js */ \"./src/base/model/index.js\");\n/* harmony import */ var _services_getWeatherData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/getWeatherData.js */ \"./src/services/getWeatherData.js\");\n\n\n\nclass Store extends _base_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Model{\n  weatherData = {};\n\n  set(value) {\n    this.weatherData = value\n    this.emitChanges( 'data:changed' )\n    this.emitChanges('*')\n  }\n\n  get () {\n    return this.weatherData\n  }\n\n  setCity = (value) => {\n    this.fetch(value)\n  }\n\n  fetch = async (city) => {\n    const data = await (0,_services_getWeatherData_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(city)\n    this.set( data )\n    console.log('fetch', this.get());\n  }\n}\n\n//# sourceURL=webpack://weather-app-with-patterns/./src/store/index.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./src/app.js");
  /******/
  /******/
})();
