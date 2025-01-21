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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/github.svg */ \"./src/assets/svg/github.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n/* colors */\nhtml {\n  font-size: 10px;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Merriweather\", system-ui, -apple-system, sans-serif;\n  font-weight: 400;\n  color: #111111;\n  flex-grow: 1;\n  letter-spacing: 0.1rem;\n}\n\na,\nbutton {\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  outline: none;\n  text-decoration: none;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2rem;\n  max-width: 1320px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.header {\n  align-self: stretch;\n  border-bottom: 1px solid #D1D1D1;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n\n.navigation {\n  display: flex;\n  gap: 1rem;\n}\n\n.wrapper {\n  transition: opacity 1s ease-in-out;\n  opacity: 0;\n  display: flex;\n  padding: 1rem 0;\n  flex: 1;\n  gap: 5rem;\n}\n\n.content {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.content__main {\n  flex: 1 1 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 3rem;\n}\n.content__img {\n  flex: 1 1 50%;\n}\n@media screen and (max-width: 768px) {\n  .content__img {\n    display: none;\n  }\n}\n.content__img > img {\n  width: auto;\n  height: 100%;\n  object-fit: cover;\n  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n}\n\n.footer {\n  padding: 1rem 0;\n  border-top: 1px solid #D1D1D1;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.footer__content {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n}\n\n.footer span,\n.footer .link {\n  font-weight: 700;\n  font-size: 2rem;\n}\n\n.link--github {\n  display: block;\n  width: 3.5rem;\n  height: 3.5rem;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 100%/contain no-repeat;\n}\n\n.button {\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem 2rem;\n  font-size: 2rem;\n  text-decoration: none;\n  font-weight: 700;\n  background: transparent;\n}\n.button--menu {\n  box-shadow: inset 0 -2px transparent;\n}\n.button--menu:hover, .button--menu:active {\n  box-shadow: inset 0 -2px #111111;\n}\n.button--main {\n  border-radius: 0.5rem;\n  background: #111111;\n  color: #EEEEEE;\n}\n.button--main:hover, .button--main:active {\n  background: linear-gradient(to top, transparent 50%, rgba(255, 255, 255, 0.1019607843) 100%), #222222;\n}\n\n.checked {\n  box-shadow: inset 0 -2px #111111;\n}\n\n.title {\n  font-size: 5rem;\n  color: #111111;\n}\n\n.logo {\n  width: 10rem;\n  height: 10rem;\n}\n\n.email-link {\n  color: #767676;\n  transition: color 0.5s ease-out;\n}\n.email-link:hover, .email-link:active {\n  color: #111111;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/scss/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/scss/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _modules_Contacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Contacts */ \"./src/modules/Contacts.js\");\n/* harmony import */ var _modules_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Home */ \"./src/modules/Home.js\");\n/* harmony import */ var _modules_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Menu */ \"./src/modules/Menu.js\");\n/* harmony import */ var _modules_ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ready */ \"./src/modules/ready.js\");\n// index.js\n\n\n\n\n\n\n\nconst navigation = document.getElementById(\"navigation\");\nconst content = document.getElementById(\"content\");\nconst buttonHome = document.getElementById(\"button-home\");\nconst buttonMenu = document.getElementById(\"button-menu\");\nconst buttonContactUs = document.getElementById(\"button-contacts\");\n\nlet currentName = \"home\";\n\nfunction clearCheckedTab() {\n  [...navigation.querySelectorAll(\".button\")].forEach((element) => {\n    if (element.classList.contains(\"checked\")) {\n      element.classList.remove(\"checked\");\n    }\n  });\n}\n\nfunction updateTab(node) {\n  const name = node.dataset.name;\n  if (name === currentName) {\n    return;\n  }\n  currentName = name;\n  clearCheckedTab();\n  node.classList.add(\"checked\");\n}\n\nfunction runApp() {\n  (0,_modules_ready__WEBPACK_IMPORTED_MODULE_4__.ready)(content);\n\n  buttonHome.addEventListener(\"click\", function () {\n    content.innerHTML = \"\";\n    updateTab(this);\n    (0,_modules_Home__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)(content);\n  });\n\n  buttonMenu.addEventListener(\"click\", function () {\n    content.innerHTML = \"\";\n    updateTab(this);\n    (0,_modules_Menu__WEBPACK_IMPORTED_MODULE_3__.renderMenuPage)(content);\n  });\n\n  buttonContactUs.addEventListener(\"click\", function () {\n    content.innerHTML = \"\";\n    updateTab(this);\n    (0,_modules_Contacts__WEBPACK_IMPORTED_MODULE_1__.renderContactsPage)(content);\n  });\n}\n\nrunApp();\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/index.js?");

/***/ }),

/***/ "./src/modules/Contacts.js":
/*!*********************************!*\
  !*** ./src/modules/Contacts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderContactsPage: () => (/* binding */ renderContactsPage)\n/* harmony export */ });\n/* harmony import */ var _assets_img_map_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/map.jpg */ \"./src/assets/img/map.jpg\");\n\n\nfunction renderContactsPage(content) {\n  const wrapper = document.createElement(\"div\");\n  wrapper.classList.add(\"wrapper\");\n\n  const contentMain = document.createElement(\"div\");\n  contentMain.classList.add(\"content__main\");\n\n  const contentImg = document.createElement(\"div\");\n  contentImg.classList.add(\"content__img\");\n\n  const img = document.createElement(\"img\");\n  img.src = _assets_img_map_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  img.setAttribute(\"alt\", \"map image\");\n\n  const subTitle = document.createElement(\"h2\");\n  subTitle.classList.add(\"sub-title\");\n  subTitle.textContent = \"Write to us:\";\n\n  const tel = document.createElement(\"p\");\n  tel.classList.add(\"tel\");\n  tel.textContent = \"+7-(999)-777-77-77\";\n\n  const email = document.createElement(\"a\");\n  email.classList.add(\"email-link\");\n  email.setAttribute(\"href\", \"mailto:pav_nk@vk.com\");\n  email.setAttribute(\"target\", \"_blank\");\n  email.textContent = \"pav_nk@vk.com\";\n\n  contentMain.append(subTitle);\n  contentMain.append(tel);\n  contentMain.append(email);\n\n  contentImg.append(img);\n\n  wrapper.append(contentMain);\n  wrapper.append(contentImg);\n\n  content.append(wrapper);\n\n  setTimeout(() => {\n    wrapper.style.opacity = \"1\";\n  }, 0);\n}\n\n\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/modules/Contacts.js?");

/***/ }),

/***/ "./src/modules/Home.js":
/*!*****************************!*\
  !*** ./src/modules/Home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_img_home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/home.jpg */ \"./src/assets/img/home.jpg\");\n/* harmony import */ var _assets_svg_pizza_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/svg/pizza.svg */ \"./src/assets/svg/pizza.svg\");\n\n\n\nfunction renderWrapper() {\n  const wrapper = document.createElement(\"div\");\n  wrapper.classList.add(\"wrapper\");\n\n  const contentMain = document.createElement(\"div\");\n  contentMain.classList.add(\"content__main\");\n\n  const contentImg = document.createElement(\"div\");\n  contentImg.classList.add(\"content__img\");\n\n  const imgLogo = document.createElement(\"img\");\n  imgLogo.classList.add(\"logo\");\n  imgLogo.src = _assets_svg_pizza_svg__WEBPACK_IMPORTED_MODULE_1__;\n  imgLogo.setAttribute(\"alt\", \"pizza logo\");\n\n  const h1 = document.createElement(\"h1\");\n  h1.classList.add(\"title\");\n  h1.textContent = \"Try our pizza!\";\n\n  const img = document.createElement(\"img\");\n  img.src = _assets_img_home_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  img.setAttribute(\"alt\", \"home pizza\");\n\n  contentMain.append(imgLogo);\n  contentMain.append(h1);\n\n  contentImg.append(img);\n\n  wrapper.append(contentMain);\n  wrapper.append(contentImg);\n\n  return wrapper;\n}\n\nfunction renderHomePage(content) {\n  const wrapper = renderWrapper();\n  content.append(wrapper);\n  setTimeout(() => {\n    wrapper.style.opacity = \"1\";\n  }, 0);\n}\n\n\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/modules/Home.js?");

/***/ }),

/***/ "./src/modules/Menu.js":
/*!*****************************!*\
  !*** ./src/modules/Menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/menu.jpg */ \"./src/assets/img/menu.jpg\");\n\n\nconst dataItems = [\n  {\n    name: \"Colorato\",\n    description: \"Tomato sauce, Mozarella, Chilli flakes, Olives, Basil\",\n    price: \"10$\",\n  },\n  {\n    name: \"Carne\",\n    description:\n      \"Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli\",\n    price: \"12$\",\n  },\n  {\n    name: \"Gamberi\",\n    description: \"Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil\",\n    price: \"11$\",\n  },\n  {\n    name: \"Salsiccia\",\n    description:\n      \"Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil\",\n    price: \"12$\",\n  },\n  {\n    name: \"Pomodoro\",\n    description: \"Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli\",\n    price: \"10$\",\n  },\n];\n\nfunction createMenuItem(dataItem) {\n  const { name, description, price } = dataItem;\n\n  const item = document.createElement(\"div\");\n  item.classList.add(\"item\");\n\n  const subTitle = document.createElement(\"h2\");\n  subTitle.classList.add(\"sub-title\");\n  subTitle.textContent = name;\n\n  const descNode = document.createElement(\"p\");\n  descNode.classList.add(\"item-desc\");\n  descNode.textContent = description;\n\n  const priceNode = document.createElement(\"strong\");\n  priceNode.textContent = ` - ${price}`;\n\n  item.append(subTitle);\n  subTitle.append(priceNode);\n  item.append(descNode);\n\n  return item;\n}\n\nfunction renderMenuPage(content) {\n  const wrapper = document.createElement(\"div\");\n  wrapper.classList.add(\"wrapper\");\n\n  const contentMain = document.createElement(\"div\");\n  contentMain.classList.add(\"content__main\");\n\n  const contentImg = document.createElement(\"div\");\n  contentImg.classList.add(\"content__img\");\n\n  const img = document.createElement(\"img\");\n  img.src = _assets_img_menu_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  img.setAttribute(\"alt\", \"menu pizza\");\n\n  dataItems.forEach((item) => {\n    const nodeItem = createMenuItem(item);\n    contentMain.append(nodeItem);\n  });\n\n  contentImg.append(img);\n  wrapper.append(contentMain);\n  wrapper.append(contentImg);\n\n  content.append(wrapper);\n\n  setTimeout(() => {\n    wrapper.style.opacity = \"1\";\n  }, 0);\n}\n\n\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/modules/Menu.js?");

/***/ }),

/***/ "./src/modules/ready.js":
/*!******************************!*\
  !*** ./src/modules/ready.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ready: () => (/* binding */ ready)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/modules/Home.js\");\n\n\nfunction ready(content) {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    (0,_Home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)(content);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/modules/ready.js?");

/***/ }),

/***/ "./src/assets/img/home.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/home.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d95e878f2066e9a8e2b5.jpg\";\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/assets/img/home.jpg?");

/***/ }),

/***/ "./src/assets/img/map.jpg":
/*!********************************!*\
  !*** ./src/assets/img/map.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db72c6a5a33cd0d53216.jpg\";\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/assets/img/map.jpg?");

/***/ }),

/***/ "./src/assets/img/menu.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/menu.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5134972064d7d3caf43a.jpg\";\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/assets/img/menu.jpg?");

/***/ }),

/***/ "./src/assets/svg/github.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/github.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"efee3ccba01104a502ca.svg\";\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/assets/svg/github.svg?");

/***/ }),

/***/ "./src/assets/svg/pizza.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/pizza.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a7d700b12e2bed06083.svg\";\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/assets/svg/pizza.svg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;