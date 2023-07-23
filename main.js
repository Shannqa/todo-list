/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background: #fff;\n  /* --background2: ;\n--background3: ; */\n  --accent: rgb(94, 137, 255);\n  /* --accent2: ;\n--accent3: ; */\n\n  --font: #000;\n  --font2: rgb(58, 110, 255);\n  --font3: #fff;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"footer footer\";\n}\n\n.header {\n  grid-area: header;\n}\n\n.navigation {\n  grid-area: nav;\n}\n\n.navigation li:hover {\n  color: orange;\n  cursor: pointer;\n}\n\n.navigation li:active {\n  color: red;\n  cursor: pointer;\n}\n\n.main {\n  grid-area: main;\n}\n\n#form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput {\n  width: 200px;\n}\n\nbutton {\n  width: 200px;\n}\n\n.add-button {\n  border-radius: 50%;\n  border: none;\n  width: 50px;\n  height: 50px;\n  background-color: var(--accent);\n  color: var(--font3);\n}\n\n/* Task table */\n\n.tablelabel {\n  margin-bottom: 0.8rem;\n  font-size: large;\n}\n\ntable {\n  border: 1px var(--accent) solid;\n  border-collapse: collapse;\n  color: var(--font2);\n}\n\nth {\n  border: 1px var(--accent) solid;\n  padding: 3px;\n}\ntd {\n  border: 1px var(--accent) solid;\n  padding: 4px 5px;\n}\n\ntable .taskcheck {\n  width: 1rem;\n}\n\ntable .tasktitle {\n  width: 600px;\n}\n\n.tdedit img {\n  width: 1rem;\n}\n\n.tddelete img {\n  width: 1rem;\n}\n\n/* Modal window */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 30%;\n  top: 20%;\n  border: 1px black solid;\n  padding: 10px;\n  background-color: #fff;\n  flex-direction: column;\n}\n\n.modal label {\n  margin-top: 8px;\n  margin-bottom: 3px;\n}\n\n.modal button {\n  margin: 0 auto;\n  margin-top: 8px;\n}\n\n.close-btn {\n  height: 20px;\n  width: 20px;\n  background-color: red;\n  margin-right: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB;kBACgB;EAChB,2BAA2B;EAC3B;cACY;;EAEZ,YAAY;EACZ,0BAA0B;EAC1B,aAAa;AACf;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb;;;mBAGiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA,eAAe;;AAEf;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;AACA;EACE,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,QAAQ;EACR,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":[":root {\n  --background: #fff;\n  /* --background2: ;\n--background3: ; */\n  --accent: rgb(94, 137, 255);\n  /* --accent2: ;\n--accent3: ; */\n\n  --font: #000;\n  --font2: rgb(58, 110, 255);\n  --font3: #fff;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\"\n    \"footer footer\";\n}\n\n.header {\n  grid-area: header;\n}\n\n.navigation {\n  grid-area: nav;\n}\n\n.navigation li:hover {\n  color: orange;\n  cursor: pointer;\n}\n\n.navigation li:active {\n  color: red;\n  cursor: pointer;\n}\n\n.main {\n  grid-area: main;\n}\n\n#form {\n  display: flex;\n  flex-direction: column;\n}\n\ninput {\n  width: 200px;\n}\n\nbutton {\n  width: 200px;\n}\n\n.add-button {\n  border-radius: 50%;\n  border: none;\n  width: 50px;\n  height: 50px;\n  background-color: var(--accent);\n  color: var(--font3);\n}\n\n/* Task table */\n\n.tablelabel {\n  margin-bottom: 0.8rem;\n  font-size: large;\n}\n\ntable {\n  border: 1px var(--accent) solid;\n  border-collapse: collapse;\n  color: var(--font2);\n}\n\nth {\n  border: 1px var(--accent) solid;\n  padding: 3px;\n}\ntd {\n  border: 1px var(--accent) solid;\n  padding: 4px 5px;\n}\n\ntable .taskcheck {\n  width: 1rem;\n}\n\ntable .tasktitle {\n  width: 600px;\n}\n\n.tdedit img {\n  width: 1rem;\n}\n\n.tddelete img {\n  width: 1rem;\n}\n\n/* Modal window */\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 30%;\n  top: 20%;\n  border: 1px black solid;\n  padding: 10px;\n  background-color: #fff;\n  flex-direction: column;\n}\n\n.modal label {\n  margin-top: 8px;\n  margin-bottom: 3px;\n}\n\n.modal button {\n  margin: 0 auto;\n  margin-top: 8px;\n}\n\n.close-btn {\n  height: 20px;\n  width: 20px;\n  background-color: red;\n  margin-right: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (/* binding */ createDom),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_icon.svg */ "./src/edit_icon.svg");
/* harmony import */ var _delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete_icon.svg */ "./src/delete_icon.svg");






const elements = [
  { short: "title", full: "Title" },
  { short: "description", full: "Description" },
  { short: "dueDate", full: "Due date" },
  { short: "priority", full: "Priority" },
  { short: "checklist", full: "Done?" },
  { short: "notes", full: "Notes" },
  { short: "project", full: "Project" },
];

const body = document.querySelector("body");

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");
  header.textContent = "To Do List";
  body.appendChild(header);
}
function renderOpen() {
  renderTasks(___WEBPACK_IMPORTED_MODULE_0__.openTasks);
}
function renderAll() {
  renderTasks(___WEBPACK_IMPORTED_MODULE_0__.allTasks);
}
function renderFinished() {
  renderTasks(___WEBPACK_IMPORTED_MODULE_0__.finishedTasks);
}
function createNav() {
  const nav = document.createElement("div");
  const navUl = document.createElement("ul");
  const navOpen = document.createElement("li");
  const navAll = document.createElement("li");
  const navFinished = document.createElement("li");
  const projectsDiv = document.createElement("div");
  const projectsUl = document.createElement("ul");

  nav.classList.add("navigation");
  navOpen.textContent = "Open tasks";
  navOpen.addEventListener("click", renderOpen);
  navAll.textContent = "All tasks";
  navAll.addEventListener("click", renderAll);
  navFinished.textContent = "Finished tasks";
  navFinished.addEventListener("click", renderFinished);

  projectsDiv.textContent = "Projects";
  projectsUl.classList.add("projects-nav");

  nav.appendChild(navUl);
  navUl.appendChild(navOpen);
  navUl.appendChild(navAll);
  navUl.appendChild(navFinished);
  projectsDiv.appendChild(projectsUl);
  nav.appendChild(projectsDiv);

  body.appendChild(nav);
}

function createDom() {
  createHeader();
  createNav();
  renderProjNav();

  /* Main */

  const main = document.createElement("div");

  /* Modal window for creating a new task */
  const modalWind = document.createElement("div");
  
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", closeModal);
  modalWind.appendChild(closeBtn);

  const form = document.createElement("form");
  main.classList.add("main");
  form.setAttribute("id", "form");
  modalWind.classList.add("modal");

  elements.forEach((item) => {
    if (item.short === "priority") {
    const select = document.createElement("select");
    select.setAttribute("id", `${item.short}`);
    ___WEBPACK_IMPORTED_MODULE_0__.priorities.forEach ((elem) => {
      let option = document.createElement("option");
      option.value = elem;
      option.textContent = elem;
      select.appendChild(option);
    });
    const label = document.createElement("label");
    label.setAttribute("for", `${item.short}`);
    label.textContent = `${item.full}`;
    form.appendChild(label);

    form.appendChild(select);

    } else if (item.short === "project") {
      const selectProject = document.createElement("select");
      selectProject.setAttribute("id", `${item.short}`);
      ___WEBPACK_IMPORTED_MODULE_0__.projects.forEach ((elem) => {
      let projOption = document.createElement("option");
      projOption.value = elem.name;
      projOption.textContent = elem.name
      selectProject.appendChild(projOption);
    });
    const label = document.createElement("label");
    label.setAttribute("for", `${item.short}`);
    label.textContent = `${item.full}`;
    form.appendChild(label);

    form.appendChild(selectProject);
    } else {

    const input = document.createElement("input");
    input.setAttribute("id", `${item.short}`);
    if (item.short === "checklist") {
      input.setAttribute("type", "checkbox");
      input.setAttribute("value", "done");
    }

    const label = document.createElement("label");
    label.setAttribute("for", `${item.short}`);
    label.textContent = `${item.full}`;
    form.appendChild(label);
    form.appendChild(input);
  }});


  const submitBtn = document.createElement("button");
  submitBtn.addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.addTask);
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  modalWind.appendChild(form);

  body.appendChild(modalWind);

  const tableDiv = document.createElement("div");
  tableDiv.classList.add("tableDiv");

  const addTaskBtn = document.createElement("button");
  addTaskBtn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex";
  });
  addTaskBtn.classList.add("add-button");
  addTaskBtn.textContent = "+";

  main.appendChild(addTaskBtn);
  main.appendChild(tableDiv);
  body.appendChild(main);
  renderTasks();
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

/* List of tasks */
function removeTable() {
  const tableDiv = document.querySelector(".tableDiv");
  while (tableDiv.lastChild) {
    tableDiv.removeChild(tableDiv.lastChild);
  }
}

function renderTasks(tasklist = ___WEBPACK_IMPORTED_MODULE_0__.openTasks) {
  const tableDiv = document.querySelector(".tableDiv");
  removeTable();
  const tableLabel = document.createElement("div");
  tableLabel.setAttribute("class", "tablelabel");

  if (tasklist == ___WEBPACK_IMPORTED_MODULE_0__.allTasks) {
    tableLabel.textContent = "All tasks";
  } else if (tasklist == ___WEBPACK_IMPORTED_MODULE_0__.finishedTasks) {
    tableLabel.textContent = "Finished tasks";
  } else {
    tableLabel.textContent = "Open tasks";
  }

  const table = document.createElement("table");
  
  tasklist.forEach((item) => {
    const tr = document.createElement("tr");
    tr.dataset.index = item._id;
    const tdCheck = document.createElement("td");
    const doneCheck = document.createElement("input");
    doneCheck.setAttribute("type", "checkbox");
    doneCheck.setAttribute("class", "taskcheck");
    doneCheck.addEventListener("click", function changeDoneState() {
      if (this.checked) {
        item[checklist] = "true";
      } else {
        item[checklist] = "false";
      }
    });
    if (item[checklist] === "true" || item[checklist] === true) {
      doneCheck.checked = true;
    } else {
      doneCheck.checked = false;
    };
    tdCheck.appendChild(doneCheck);
    tr.appendChild(tdCheck);

    const tdTitle = document.createElement("td");
    tdTitle.setAttribute("class", "tasktitle");
    tdTitle.textContent = item.title;
    tr.appendChild(tdTitle);

    const tdEdit = document.createElement("td");
    tdEdit.setAttribute("class", "tdedit");
    const imgEdit = new Image();
    imgEdit.src = _edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
    tdEdit.appendChild(imgEdit);
    tr.appendChild(tdEdit);

    const tdDelete = document.createElement("td");
    tdDelete.setAttribute("class", "tddelete");
    const imgDelete = new Image();
    imgDelete.src = _delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
    tdDelete.appendChild(imgDelete);
    tr.appendChild(tdDelete);

    table.appendChild(tr);    
  });
    tableDiv.appendChild(tableLabel);
    tableDiv.appendChild(table);
}

function renderProjNav() {
  const ul = document.querySelector(".projects-nav");
  ___WEBPACK_IMPORTED_MODULE_0__.projects.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}`;
    ul.appendChild(li);
  });
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "finishedTasks": () => (/* binding */ finishedTasks),
/* harmony export */   "openTasks": () => (/* binding */ openTasks),
/* harmony export */   "priorities": () => (/* binding */ priorities),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// git subtree push --prefix dist origin gh-pages





const openTasks = [];
const allTasks = [];
const finishedTasks = [];
const projects = [];
const priorities = ["High", "Medium", "Low"];

class Task {
  constructor(
    title,
    description,
    dueDate,
    priority,
    checklist,
    notes,
    project
  ) {
    this._id = getTaskID();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.notes = notes;
    this.project = project;
  }
}

/* Projects */
class Project {
  constructor(name) {
    this._name = name; 
    this._id = getProjectID();
    this._taskList = [];
    projects.push(this);
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value) {
    this._name = value;
    }
  }
  get taskList() {
    return this._taskList;
  }
  set taskList(value) {
    this._taskList.push(value);
  }
}

function getProjectID() {
  let randomNum = () => {
    return Math.floor((1 + Math.random())* 0x10000).toString(16).substring(1);
  };
  let randomID = randomNum() + randomNum() + randomNum() + randomNum();
  return randomID;
}

function getTaskID() {
  let randomNum = () => {
    return Math.floor((1 + Math.random())* 0x10000).toString(36).substring(1);
  };
  let randomID = randomNum() + randomNum() + randomNum() + randomNum() + randomNum();
  return randomID;
}

function addTask(event) {
  const form = document.querySelector("#form");
  const check = document.querySelector("#checklist");
  let newTask = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    check.checked,
    notes.value,
    project.value
  );
  console.log(newTask);
  openTasks.push(newTask);
  allTasks.push(newTask);
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
  (0,_home__WEBPACK_IMPORTED_MODULE_0__.closeModal)();
  event.preventDefault();
}

function addProject(name) {
  let newProject = new Project(name);
}

const defaultProject = new Project("Default");
const workProject = new Project("Work");
addProject("Bob");

const defaultTask = new Task(
  "brush teeth",
  "brush your teeth",
  "now",
  "high",
  "true",
  "no",
  "Default"
);

openTasks.push(defaultTask);
allTasks.push(defaultTask);
(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/delete_icon.svg":
/*!*****************************!*\
  !*** ./src/delete_icon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eac1a29b0fcadff53187.svg";

/***/ }),

/***/ "./src/edit_icon.svg":
/*!***************************!*\
  !*** ./src/edit_icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb174535b66c89089803.svg";

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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakhUO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xcbiAgLyogLS1iYWNrZ3JvdW5kMjogO1xcbi0tYmFja2dyb3VuZDM6IDsgKi9cXG4gIC0tYWNjZW50OiByZ2IoOTQsIDEzNywgMjU1KTtcXG4gIC8qIC0tYWNjZW50MjogO1xcbi0tYWNjZW50MzogOyAqL1xcblxcbiAgLS1mb250OiAjMDAwO1xcbiAgLS1mb250MjogcmdiKDU4LCAxMTAsIDI1NSk7XFxuICAtLWZvbnQzOiAjZmZmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibmF2IG1haW5cXFwiXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiBuYXY7XFxufVxcblxcbi5uYXZpZ2F0aW9uIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXZpZ2F0aW9uIGxpOmFjdGl2ZSB7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxufVxcblxcbiNmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250Myk7XFxufVxcblxcbi8qIFRhc2sgdGFibGUgKi9cXG5cXG4udGFibGVsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXI6IDFweCB2YXIoLS1hY2NlbnQpIHNvbGlkO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250Mik7XFxufVxcblxcbnRoIHtcXG4gIGJvcmRlcjogMXB4IHZhcigtLWFjY2VudCkgc29saWQ7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcbnRkIHtcXG4gIGJvcmRlcjogMXB4IHZhcigtLWFjY2VudCkgc29saWQ7XFxuICBwYWRkaW5nOiA0cHggNXB4O1xcbn1cXG5cXG50YWJsZSAudGFza2NoZWNrIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG50YWJsZSAudGFza3RpdGxlIHtcXG4gIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLnRkZWRpdCBpbWcge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi50ZGRlbGV0ZSBpbWcge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi8qIE1vZGFsIHdpbmRvdyAqL1xcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDMwJTtcXG4gIHRvcDogMjAlO1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tb2RhbCBsYWJlbCB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcblxcbi5tb2RhbCBidXR0b24ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEI7a0JBQ2dCO0VBQ2hCLDJCQUEyQjtFQUMzQjtjQUNZOztFQUVaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYjs7O21CQUdpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcXG4gIC8qIC0tYmFja2dyb3VuZDI6IDtcXG4tLWJhY2tncm91bmQzOiA7ICovXFxuICAtLWFjY2VudDogcmdiKDk0LCAxMzcsIDI1NSk7XFxuICAvKiAtLWFjY2VudDI6IDtcXG4tLWFjY2VudDM6IDsgKi9cXG5cXG4gIC0tZm9udDogIzAwMDtcXG4gIC0tZm9udDI6IHJnYig1OCwgMTEwLCAyNTUpO1xcbiAgLS1mb250MzogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBsaTpob3ZlciB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBsaTphY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG4jZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tZm9udDMpO1xcbn1cXG5cXG4vKiBUYXNrIHRhYmxlICovXFxuXFxuLnRhYmxlbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tYWNjZW50KSBzb2xpZDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBjb2xvcjogdmFyKC0tZm9udDIpO1xcbn1cXG5cXG50aCB7XFxuICBib3JkZXI6IDFweCB2YXIoLS1hY2NlbnQpIHNvbGlkO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG50ZCB7XFxuICBib3JkZXI6IDFweCB2YXIoLS1hY2NlbnQpIHNvbGlkO1xcbiAgcGFkZGluZzogNHB4IDVweDtcXG59XFxuXFxudGFibGUgLnRhc2tjaGVjayB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxudGFibGUgLnRhc2t0aXRsZSB7XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi50ZGVkaXQgaW1nIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4udGRkZWxldGUgaW1nIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4vKiBNb2RhbCB3aW5kb3cgKi9cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAzMCU7XFxuICB0b3A6IDIwJTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwgbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ubW9kYWwgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IG9wZW5UYXNrcywgYWxsVGFza3MsIGZpbmlzaGVkVGFza3MsIHByb2plY3RzLCBwcmlvcml0aWVzLCBhZGRUYXNrIH0gZnJvbSBcIi5cIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXRfaWNvbi5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9kZWxldGVfaWNvbi5zdmcnO1xuZXhwb3J0IHsgcmVuZGVyVGFza3MsIGNsb3NlTW9kYWwgfTtcblxuY29uc3QgZWxlbWVudHMgPSBbXG4gIHsgc2hvcnQ6IFwidGl0bGVcIiwgZnVsbDogXCJUaXRsZVwiIH0sXG4gIHsgc2hvcnQ6IFwiZGVzY3JpcHRpb25cIiwgZnVsbDogXCJEZXNjcmlwdGlvblwiIH0sXG4gIHsgc2hvcnQ6IFwiZHVlRGF0ZVwiLCBmdWxsOiBcIkR1ZSBkYXRlXCIgfSxcbiAgeyBzaG9ydDogXCJwcmlvcml0eVwiLCBmdWxsOiBcIlByaW9yaXR5XCIgfSxcbiAgeyBzaG9ydDogXCJjaGVja2xpc3RcIiwgZnVsbDogXCJEb25lP1wiIH0sXG4gIHsgc2hvcnQ6IFwibm90ZXNcIiwgZnVsbDogXCJOb3Rlc1wiIH0sXG4gIHsgc2hvcnQ6IFwicHJvamVjdFwiLCBmdWxsOiBcIlByb2plY3RcIiB9LFxuXTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvIERvIExpc3RcIjtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuZnVuY3Rpb24gcmVuZGVyT3BlbigpIHtcbiAgcmVuZGVyVGFza3Mob3BlblRhc2tzKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckFsbCgpIHtcbiAgcmVuZGVyVGFza3MoYWxsVGFza3MpO1xufVxuZnVuY3Rpb24gcmVuZGVyRmluaXNoZWQoKSB7XG4gIHJlbmRlclRhc2tzKGZpbmlzaGVkVGFza3MpO1xufVxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBuYXZVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgbmF2T3BlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbmF2QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBuYXZGaW5pc2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0c1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvblwiKTtcbiAgbmF2T3Blbi50ZXh0Q29udGVudCA9IFwiT3BlbiB0YXNrc1wiO1xuICBuYXZPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJPcGVuKTtcbiAgbmF2QWxsLnRleHRDb250ZW50ID0gXCJBbGwgdGFza3NcIjtcbiAgbmF2QWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJBbGwpO1xuICBuYXZGaW5pc2hlZC50ZXh0Q29udGVudCA9IFwiRmluaXNoZWQgdGFza3NcIjtcbiAgbmF2RmluaXNoZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckZpbmlzaGVkKTtcblxuICBwcm9qZWN0c0Rpdi50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgcHJvamVjdHNVbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtbmF2XCIpO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChuYXZVbCk7XG4gIG5hdlVsLmFwcGVuZENoaWxkKG5hdk9wZW4pO1xuICBuYXZVbC5hcHBlbmRDaGlsZChuYXZBbGwpO1xuICBuYXZVbC5hcHBlbmRDaGlsZChuYXZGaW5pc2hlZCk7XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzVWwpO1xuICBuYXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRG9tKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTmF2KCk7XG4gIHJlbmRlclByb2pOYXYoKTtcblxuICAvKiBNYWluICovXG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLyogTW9kYWwgd2luZG93IGZvciBjcmVhdGluZyBhIG5ldyB0YXNrICovXG4gIGNvbnN0IG1vZGFsV2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG5cIik7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbiAgbW9kYWxXaW5kLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtXCIpO1xuICBtb2RhbFdpbmQuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5zaG9ydCA9PT0gXCJwcmlvcml0eVwiKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aXRlbS5zaG9ydH1gKTtcbiAgICBwcmlvcml0aWVzLmZvckVhY2ggKChlbGVtKSA9PiB7XG4gICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGVsZW07XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBlbGVtO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke2l0ZW0uc2hvcnR9YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpdGVtLmZ1bGx9YDtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuICAgIH0gZWxzZSBpZiAoaXRlbS5zaG9ydCA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgc2VsZWN0UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpdGVtLnNob3J0fWApO1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCAoKGVsZW0pID0+IHtcbiAgICAgIGxldCBwcm9qT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIHByb2pPcHRpb24udmFsdWUgPSBlbGVtLm5hbWU7XG4gICAgICBwcm9qT3B0aW9uLnRleHRDb250ZW50ID0gZWxlbS5uYW1lXG4gICAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKHByb2pPcHRpb24pO1xuICAgIH0pO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgJHtpdGVtLnNob3J0fWApO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7aXRlbS5mdWxsfWA7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuICAgIH0gZWxzZSB7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtpdGVtLnNob3J0fWApO1xuICAgIGlmIChpdGVtLnNob3J0ID09PSBcImNoZWNrbGlzdFwiKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRvbmVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGAke2l0ZW0uc2hvcnR9YCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtpdGVtLmZ1bGx9YDtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgfX0pO1xuXG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUYXNrKTtcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgbW9kYWxXaW5kLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWxXaW5kKTtcblxuICBjb25zdCB0YWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYmxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZURpdlwiKTtcblxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIH0pO1xuICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgbWFpbi5hcHBlbmRDaGlsZCh0YWJsZURpdik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gIHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG4vKiBMaXN0IG9mIHRhc2tzICovXG5mdW5jdGlvbiByZW1vdmVUYWJsZSgpIHtcbiAgY29uc3QgdGFibGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlRGl2XCIpO1xuICB3aGlsZSAodGFibGVEaXYubGFzdENoaWxkKSB7XG4gICAgdGFibGVEaXYucmVtb3ZlQ2hpbGQodGFibGVEaXYubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrbGlzdCA9IG9wZW5UYXNrcykge1xuICBjb25zdCB0YWJsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVEaXZcIik7XG4gIHJlbW92ZVRhYmxlKCk7XG4gIGNvbnN0IHRhYmxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJsZUxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFibGVsYWJlbFwiKTtcblxuICBpZiAodGFza2xpc3QgPT0gYWxsVGFza3MpIHtcbiAgICB0YWJsZUxhYmVsLnRleHRDb250ZW50ID0gXCJBbGwgdGFza3NcIjtcbiAgfSBlbHNlIGlmICh0YXNrbGlzdCA9PSBmaW5pc2hlZFRhc2tzKSB7XG4gICAgdGFibGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRmluaXNoZWQgdGFza3NcIjtcbiAgfSBlbHNlIHtcbiAgICB0YWJsZUxhYmVsLnRleHRDb250ZW50ID0gXCJPcGVuIHRhc2tzXCI7XG4gIH1cblxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgXG4gIHRhc2tsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICB0ci5kYXRhc2V0LmluZGV4ID0gaXRlbS5faWQ7XG4gICAgY29uc3QgdGRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBjb25zdCBkb25lQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZG9uZUNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBkb25lQ2hlY2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrY2hlY2tcIik7XG4gICAgZG9uZUNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBjaGFuZ2VEb25lU3RhdGUoKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIGl0ZW1bY2hlY2tsaXN0XSA9IFwidHJ1ZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbVtjaGVja2xpc3RdID0gXCJmYWxzZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpdGVtW2NoZWNrbGlzdF0gPT09IFwidHJ1ZVwiIHx8IGl0ZW1bY2hlY2tsaXN0XSA9PT0gdHJ1ZSkge1xuICAgICAgZG9uZUNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lQ2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgdGRDaGVjay5hcHBlbmRDaGlsZChkb25lQ2hlY2spO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkQ2hlY2spO1xuXG4gICAgY29uc3QgdGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0ZFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3RpdGxlXCIpO1xuICAgIHRkVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkVGl0bGUpO1xuXG4gICAgY29uc3QgdGRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRkRWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRkZWRpdFwiKTtcbiAgICBjb25zdCBpbWdFZGl0ID0gbmV3IEltYWdlKCk7XG4gICAgaW1nRWRpdC5zcmMgPSBlZGl0SWNvbjtcbiAgICB0ZEVkaXQuYXBwZW5kQ2hpbGQoaW1nRWRpdCk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGRFZGl0KTtcblxuICAgIGNvbnN0IHRkRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRkRGVsZXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGRkZWxldGVcIik7XG4gICAgY29uc3QgaW1nRGVsZXRlID0gbmV3IEltYWdlKCk7XG4gICAgaW1nRGVsZXRlLnNyYyA9IGRlbGV0ZUljb247XG4gICAgdGREZWxldGUuYXBwZW5kQ2hpbGQoaW1nRGVsZXRlKTtcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZERlbGV0ZSk7XG5cbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7ICAgIFxuICB9KTtcbiAgICB0YWJsZURpdi5hcHBlbmRDaGlsZCh0YWJsZUxhYmVsKTtcbiAgICB0YWJsZURpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2pOYXYoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1uYXZcIik7XG4gIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG59XG5cblxuIiwiLy8gZ2l0IHN1YnRyZWUgcHVzaCAtLXByZWZpeCBkaXN0IG9yaWdpbiBnaC1wYWdlc1xuXG5pbXBvcnQgY3JlYXRlRG9tLCB7IHJlbmRlclRhc2tzLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmV4cG9ydCB7IG9wZW5UYXNrcywgYWxsVGFza3MsIGZpbmlzaGVkVGFza3MsIHByb2plY3RzLCBwcmlvcml0aWVzLCBhZGRUYXNrIH07XG5cbmNvbnN0IG9wZW5UYXNrcyA9IFtdO1xuY29uc3QgYWxsVGFza3MgPSBbXTtcbmNvbnN0IGZpbmlzaGVkVGFza3MgPSBbXTtcbmNvbnN0IHByb2plY3RzID0gW107XG5jb25zdCBwcmlvcml0aWVzID0gW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXTtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tsaXN0LFxuICAgIG5vdGVzLFxuICAgIHByb2plY3RcbiAgKSB7XG4gICAgdGhpcy5faWQgPSBnZXRUYXNrSUQoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG5cbi8qIFByb2plY3RzICovXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lOyBcbiAgICB0aGlzLl9pZCA9IGdldFByb2plY3RJRCgpO1xuICAgIHRoaXMuX3Rhc2tMaXN0ID0gW107XG4gICAgcHJvamVjdHMucHVzaCh0aGlzKTtcbiAgfVxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgZ2V0IHRhc2tMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrTGlzdDtcbiAgfVxuICBzZXQgdGFza0xpc3QodmFsdWUpIHtcbiAgICB0aGlzLl90YXNrTGlzdC5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SUQoKSB7XG4gIGxldCByYW5kb21OdW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSogMHgxMDAwMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgfTtcbiAgbGV0IHJhbmRvbUlEID0gcmFuZG9tTnVtKCkgKyByYW5kb21OdW0oKSArIHJhbmRvbU51bSgpICsgcmFuZG9tTnVtKCk7XG4gIHJldHVybiByYW5kb21JRDtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0lEKCkge1xuICBsZXQgcmFuZG9tTnVtID0gKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkqIDB4MTAwMDApLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMSk7XG4gIH07XG4gIGxldCByYW5kb21JRCA9IHJhbmRvbU51bSgpICsgcmFuZG9tTnVtKCkgKyByYW5kb21OdW0oKSArIHJhbmRvbU51bSgpICsgcmFuZG9tTnVtKCk7XG4gIHJldHVybiByYW5kb21JRDtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhldmVudCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tsaXN0XCIpO1xuICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgIHRpdGxlLnZhbHVlLFxuICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgIGR1ZURhdGUudmFsdWUsXG4gICAgcHJpb3JpdHkudmFsdWUsXG4gICAgY2hlY2suY2hlY2tlZCxcbiAgICBub3Rlcy52YWx1ZSxcbiAgICBwcm9qZWN0LnZhbHVlXG4gICk7XG4gIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICBvcGVuVGFza3MucHVzaChuZXdUYXNrKTtcbiAgYWxsVGFza3MucHVzaChuZXdUYXNrKTtcbiAgcmVuZGVyVGFza3MoKTtcbiAgY2xvc2VNb2RhbCgpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbn1cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIik7XG5jb25zdCB3b3JrUHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiV29ya1wiKTtcbmFkZFByb2plY3QoXCJCb2JcIik7XG5cbmNvbnN0IGRlZmF1bHRUYXNrID0gbmV3IFRhc2soXG4gIFwiYnJ1c2ggdGVldGhcIixcbiAgXCJicnVzaCB5b3VyIHRlZXRoXCIsXG4gIFwibm93XCIsXG4gIFwiaGlnaFwiLFxuICBcInRydWVcIixcbiAgXCJub1wiLFxuICBcIkRlZmF1bHRcIlxuKTtcblxub3BlblRhc2tzLnB1c2goZGVmYXVsdFRhc2spO1xuYWxsVGFza3MucHVzaChkZWZhdWx0VGFzayk7XG5jcmVhdGVEb20oKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=