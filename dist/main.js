/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/img/sunny.jpg */ \"./src/img/sunny.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  line-height: 1.5;\n}\n\n.container {\n  width: 100%;\n  max-width: 600px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10rem;\n  text-align: center;\n}\n\n.showforecast {\n  display: flex;\n  align-items: stretch;\n  height: 100px;\n}\n\n.showforecast > .forecastDiv {\n  flex: 1;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather_app_mvp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_events_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/events/index.js */ \"./src/base/events/index.js\");\n/* harmony import */ var _components_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Page.js */ \"./src/components/Page.js\");\n/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index.js */ \"./src/store/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", initApp);\n\nfunction initApp() {\n  const events = new _base_events_index_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();\n\n  const store = new _store_index_js__WEBPACK_IMPORTED_MODULE_2__.Store(events);\n\n  const page = new _components_Page_js__WEBPACK_IMPORTED_MODULE_1__.Page();\n\n  page.submitFrom(store.setCity);\n\n  events.on(\"data:changed\", () => {\n    page.updateCurrentWeather(store.weatherData);\n  });\n\n  events.on(\"data:fetch-error\", () => {\n    alert(\"Data fetch error\");\n  });\n\n  events.on(\"data:loading\", () => {\n    alert(\"loading\");\n  });\n  events.on(\"data:finish-loading\", () => {});\n  store.fetch(\"\");\n}\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/app.js?");

/***/ }),

/***/ "./src/base/events/index.js":
/*!**********************************!*\
  !*** ./src/base/events/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EventEmitter: () => (/* binding */ EventEmitter)\n/* harmony export */ });\nclass EventEmitter {\n  constructor() {\n    this._events = new Map();\n  }\n\n  on(eventName, callback) {\n    if (!this._events.has(eventName)) {\n      this._events.set(eventName, new Set());\n    }\n    this._events.get(eventName).add(callback);\n  }\n\n  // off(eventName, callback) {\n  //   if (this._events.has(eventName)) {\n  //     this._events.get(eventName).delete(callback);\n  //     if (this._events.get(eventName).size === 0) {\n  //       this._events.delete(eventName);\n  //     }\n  //   }\n  // }\n\n  emit(eventName, data) {\n    this._events.forEach((subscribers, name) => {\n      if (name === eventName) {\n        subscribers.forEach((callback) => callback(data));\n      }\n    });\n  }\n\n  // onAll(callback) {\n  //   this.on(\"*\", callback);\n  // }\n\n  offAll() {\n    this._events = new Map();\n  }\n\n  // trigger(eventName, context = {}) {\n  //   return (event = {}) => {\n  //     this.emit(eventName, { ...event, ...context });\n  //   };\n  // }\n}\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/base/events/index.js?");

/***/ }),

/***/ "./src/base/model/index.js":
/*!*********************************!*\
  !*** ./src/base/model/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Model: () => (/* binding */ Model)\n/* harmony export */ });\nclass Model {\n  constructor(events) {\n    this.events = events;\n  }\n\n  emitChanges(event, payload) {\n    //what is payload\n    this.events.emit(event, payload ?? {});\n  }\n}\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/base/model/index.js?");

/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Page: () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var _helpers_changeBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/changeBackground */ \"./src/helpers/changeBackground.js\");\n\n\nclass Page {\n  constructor() {\n    this.form = document.getElementById(\"form\");\n    this.location = document.getElementById(\"location\");\n    this.cityInput = document.getElementById(\"cityInput\");\n    this.temperature = document.getElementById(\"temperature\");\n    this.windDirection = document.getElementById(\"windDirection\");\n    this.precipitation = document.getElementById(\"precipitation\");\n    this.icon = document.getElementById(\"icon\");\n    this.forecast = document.getElementById(\"forecast\");\n  }\n\n  submitFrom(callback) {\n    this.form.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n\n      const formData = new FormData(event.target);\n      const cityName = formData.get(\"cityName\");\n    });\n  }\n\n  showLoading() {\n    const loadingSign = document.getElementsByClassName(\"loading\");\n    loadingSign.textContent = \"loading\";\n  }\n\n  updateCurrentWeather(data) {\n    const { current, location } = data;\n    const { condition, temp_f, wind_dir, precip_in } = current;\n    const { name, region, country } = location;\n\n    this.icon.innerHTML = `<img src=\"${condition.icon}\"  alt=\"Weather icon\">`;\n    this.location.textContent = `${name}, ${region}, ${country}`;\n    this.temperature.textContent = `Temperature: ${temp_f}°F`;\n    this.windDirection.textContent = `Wind Direction: ${wind_dir}`;\n    this.precipitation.textContent = `Precipitation: ${precip_in}%`;\n\n    this.updateForecast(data);\n    (0,_helpers_changeBackground__WEBPACK_IMPORTED_MODULE_0__.changeBackground)(data);\n  }\n\n  updateForecast(data) {\n    this.forecast.innerHTML = \"\";\n    const forecastDays = data.forecast.forecastday;\n\n    forecastDays.forEach((forecastDay) => {\n      const {\n        date,\n        day: {\n          condition: { icon },\n          maxtemp_f,\n          mintemp_f,\n          daily_chance_of_rain,\n        },\n      } = forecastDay;\n      const forecastElement = document.createElement(\"div\");\n      forecastElement.classList.add(\"forecastDiv\");\n      forecastElement.innerHTML = `\n      <p>${date}<br>\n      <img class=\"condition-icon\" src=\"${icon}\" alt=\"Weather icon\"><br>\n    Max: ${maxtemp_f} °F<br>\n      Min: ${mintemp_f} °F<br>\n     Chance of rain: ${daily_chance_of_rain}%</p>\n    `;\n\n      this.forecast.appendChild(forecastElement);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/components/Page.js?");

/***/ }),

/***/ "./src/helpers/changeBackground.js":
/*!*****************************************!*\
  !*** ./src/helpers/changeBackground.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeBackground: () => (/* binding */ changeBackground)\n/* harmony export */ });\n/* harmony import */ var _img_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/sunny.jpg */ \"./src/img/sunny.jpg\");\n/* harmony import */ var _img_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/cloudy.jpg */ \"./src/img/cloudy.jpg\");\n/* harmony import */ var _img_clear_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/clear.jpg */ \"./src/img/clear.jpg\");\n/* harmony import */ var _img_fog_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/fog.jpg */ \"./src/img/fog.jpg\");\n/* harmony import */ var _img_snow_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/snow.jpg */ \"./src/img/snow.jpg\");\n/* harmony import */ var _img_thunder_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/thunder.jpg */ \"./src/img/thunder.jpg\");\n/* harmony import */ var _img_rain_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/rain.jpg */ \"./src/img/rain.jpg\");\n\n\n\n\n\n\n\n\nfunction changeBackground(data) {\n  function getBackground(condition) {\n    switch (condition) {\n      case \"sunny\":\n        return { bg: `url(${_img_sunny_jpg__WEBPACK_IMPORTED_MODULE_0__})`, color: \"white\" };\n      case \"cloudy\":\n      case \"partly cloudy\":\n      case \"overcast\":\n      case \"mist\":\n      case \"patchy rain possible\":\n      case \"patchy snow possible\":\n      case \"patchy sleet possible\":\n      case \"patchy freezing drizzle possible\":\n      case \"thundery outbreaks possible\":\n        return { bg: `url(${_img_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__})`, color: \"black\" };\n      case \"clear\":\n        return { bg: `url(${_img_clear_jpg__WEBPACK_IMPORTED_MODULE_2__})`, color: \"white\" };\n      case \"rainy\":\n      case \"patchy light drizzle\":\n      case \"light drizzle\":\n      case \"freezing drizzle\":\n      case \"heavy freezing drizzle\":\n      case \"patchy light rain\":\n      case \"light rain\":\n      case \"moderate rain at times\":\n      case \"moderate rain\":\n      case \"heavy rain at times\":\n      case \"light freezing rain\":\n      case \"moderate or heavy freezing rain\":\n      case \"light rain shower\":\n      case \"moderate or heavy rain shower\":\n      case \"torrential rain shower\":\n      case \"light sleet showers\":\n      case \"moderate or heavy sleet showers\":\n      case \"heavy rain\":\n        return { bg: `url(${_img_rain_jpg__WEBPACK_IMPORTED_MODULE_6__})`, color: \"white\" };\n      case \"blowing snow\":\n      case \"light sleet\":\n      case \"moderate or heavy sleet\":\n      case \"light snow\":\n      case \"patchy moderate snow\":\n      case \"moderate snow\":\n      case \"patchy heavy snow\":\n      case \"heavy snow\":\n      case \"ice pellets\":\n      case \"light snow showers\":\n      case \"moderate or heavy snow showers\":\n      case \"light showers of ice pellets\":\n      case \"moderate or heavy showers of ice pellets\":\n        return { bg: `url(${_img_snow_jpg__WEBPACK_IMPORTED_MODULE_4__})`, color: \"black\" };\n      case \"fog\":\n      case \"freezing fog\":\n        return { bg: `url(${_img_fog_jpg__WEBPACK_IMPORTED_MODULE_3__})`, color: \"black\" };\n      case \"moderate or heavy rain with thunder\":\n      case \"patchy light rain with thunder\":\n      case \"patchy light snow with thunder\":\n      case \"moderate or heavy snow with thunder\":\n        return { bg: `url(${_img_thunder_jpg__WEBPACK_IMPORTED_MODULE_5__})`, color: \"white\" };\n    }\n  }\n\n  const { bg, color } = getBackground(\n    data.current.condition.text.toLowerCase()\n  );\n\n  document.body.style.backgroundImage = bg;\n  document.body.style.color = color;\n}\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/helpers/changeBackground.js?");

/***/ }),

/***/ "./src/services/getWeatherData.js":
/*!****************************************!*\
  !*** ./src/services/getWeatherData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\nconst apiKey = \"9dec8c3e4630440ab7c01538242105\";\n\nconst getWeatherData = async (\n  value,\n  fetchError,\n  loading,\n  finishLoading\n) => {\n  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${value}&days=3&aqi=no`;\n  try {\n    const response = await fetch(API_URL);\n    loading();\n\n    if (response.status !== 200) {\n      fetchError();\n      throw new Error(\"Request error\");\n    }\n\n    const data = await response.json();\n\n    return data;\n  } catch (error) {\n    alert(error);\n  } finally {\n    finishLoading();\n  }\n};\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/services/getWeatherData.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _base_model_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/model/index.js */ \"./src/base/model/index.js\");\n/* harmony import */ var _services_getWeatherData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/getWeatherData.js */ \"./src/services/getWeatherData.js\");\n\n\n\nclass Store extends _base_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Model {\n  weatherData = {};\n\n  set(value) {\n    this.weatherData = value;\n    this.emitChanges(\"data:changed\");\n    // this.emitChanges(\"*\");\n  }\n\n  get() {\n    return this.weatherData;\n  }\n\n  setCity = (value) => {\n    this.fetch(value);\n  };\n\n  fetch = async (city) => {\n    if (!city) {\n      return;\n    }\n    const data = await (0,_services_getWeatherData_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherData)(\n      city,\n      () => this.emitChanges(\"data:fetch-error\"),\n      () => this.emitChanges(\"data:loading\"),\n      () => this.emitChanges(\"data:finish-loading\")\n    );\n\n    this.set(data);\n  };\n}\n\n\n//# sourceURL=webpack://weather_app_mvp/./src/store/index.js?");

/***/ }),

/***/ "./src/img/clear.jpg":
/*!***************************!*\
  !*** ./src/img/clear.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10e613a7b22458ae780d.jpg\";\n\n//# sourceURL=webpack://weather_app_mvp/./src/img/clear.jpg?");

/***/ }),

/***/ "./src/img/cloudy.jpg":
/*!****************************!*\
  !*** ./src/img/cloudy.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd677505817edfc18a11.jpg\";\n\n//# sourceURL=webpack://weather_app_mvp/./src/img/cloudy.jpg?");

/***/ }),

/***/ "./src/img/fog.jpg":
/*!*************************!*\
  !*** ./src/img/fog.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04300a472f1d846bfb40.jpg\";\n\n//# sourceURL=webpack://weather_app_mvp/./src/img/fog.jpg?");

/***/ }),

/***/ "./src/img/rain.jpg":
/*!**************************!*\
  !*** ./src/img/rain.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d21463b5e95d5b311c1.jpg\";\n\n//# sourceURL=webpack://weather_app_mvp/./src/img/rain.jpg?");

/***/ }),

/***/ "./src/img/snow.jpg":
/*!**************************!*\
  !*** ./src/img/snow.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4b67f2c9e891c8247bd.jpg\";\n\n//# sourceURL=webpack://weather_app_mvp/./src/img/snow.jpg?");

/***/ }),

/***/ "./src/img/sunny.jpg":
/*!***************************!*\
  !*** ./src/img/sunny.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43f2e2908d810c4a45c8.jpg\";\n\n//# sourceURL=webpack://weather_app_mvp/./src/img/sunny.jpg?");

/***/ }),

/***/ "./src/img/thunder.jpg":
/*!*****************************!*\
  !*** ./src/img/thunder.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f17eefe7d9771f8f82d0.jpg\";\n\n//# sourceURL=webpack://weather_app_mvp/./src/img/thunder.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;