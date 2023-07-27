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

function createDom() {
  createHeader();
  createNav();
  renderProjNav();

  const main = document.createElement("div");
  main.classList.add("main");

  createModal()

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

function createModal(taskIndex) {
  /* Modal window for creating a new task */
  const modalWindow = document.createElement("div");
    
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.addEventListener("click", closeModal);
  modalWindow.appendChild(closeBtn);

  const form = document.createElement("form");

  form.setAttribute("id", "form");
  modalWindow.classList.add("modal");

  //task's id
  const spanID = document.createElement("span");
  spanID.textContent = taskIndex;
  form.appendChild(spanID);

  //title
  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("id", "title");
  const labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.textContent = "Title";
  form.appendChild(labelTitle);
  form.appendChild(inputTitle);

  //description
  const inputDesc = document.createElement("input");
  inputDesc.setAttribute("id", "description");
  const labelDesc = document.createElement("label");
  labelDesc.setAttribute("for", "description");
  labelDesc.textContent = "Description";
  form.appendChild(labelDesc);
  form.appendChild(inputDesc);

  //due date
  const inputDue = document.createElement("input");
  inputDue.setAttribute("id", "dueDate");
  const labelDue = document.createElement("label");
  labelDue.setAttribute("for", "dueDate");
  labelDue.textContent = "Due Date";
  form.appendChild(labelDue);
  form.appendChild(inputDue);

  //priority
  const selectPriority = document.createElement("select");
  selectPriority.setAttribute("id", "priority");
  ___WEBPACK_IMPORTED_MODULE_0__.priorities.forEach ((elem) => {
    let option = document.createElement("option");
    option.value = elem;
    option.textContent = elem;
    selectPriority.appendChild(option);
  });
  const labelPriority = document.createElement("label");
  labelPriority.setAttribute("for", "priority");
  labelPriority.textContent = "Priority";
  form.appendChild(labelPriority);
  form.appendChild(selectPriority);

  //project
  const selectProject = document.createElement("select");
  selectProject.setAttribute("id", "project");
  ___WEBPACK_IMPORTED_MODULE_0__.projects.forEach ((elem) => {
    let projOption = document.createElement("option");
    projOption.value = elem.name;
    projOption.textContent = elem.name;
    selectProject.appendChild(projOption);
  });
  const labelProject = document.createElement("label");
  labelProject.setAttribute("for", "project");
  labelProject.textContent = "Project";
  form.appendChild(labelProject);
  form.appendChild(selectProject);

  //checklist
  const inputCheck = document.createElement("input");
  inputCheck.setAttribute("id", "checklist");
  inputCheck.setAttribute("type", "checkbox");
  inputCheck.setAttribute("value", "done");
  const labelCheck = document.createElement("label");
  labelCheck.setAttribute("for", "checklist");
  labelCheck.textContent = "Done?";
  form.appendChild(labelCheck);
  form.appendChild(inputCheck);

  //notes
  const inputNotes = document.createElement("input");
  inputNotes.setAttribute("id", "notes");
  const labelNotes = document.createElement("label");
  labelNotes.setAttribute("for", "notes");
  labelNotes.textContent = "Additional notes";
  form.appendChild(labelNotes);
  form.appendChild(inputNotes);

  const submitBtn = document.createElement("button");
  submitBtn.addEventListener("click", ___WEBPACK_IMPORTED_MODULE_0__.addTask);
  submitBtn.setAttribute("id", "submit");
  submitBtn.textContent = "Submit";
  form.appendChild(submitBtn);

  modalWindow.appendChild(form);

  body.appendChild(modalWindow);
}

function showModal(id) {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  let bibi = id;
  console.log(bibi);
  let searchedTask = ___WEBPACK_IMPORTED_MODULE_0__.allTasks.find((task) => task._id == bibi);
  console.log(searchedTask);
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let dueDate = document.getElementById("dueDate");
  let project = document.getElementById("project");
  let checklist = document.getElementById("checklist");
  let notes = document.getElementById("notes");
  title.value = searchedTask.title;
  description.value = searchedTask.description;
  dueDate.value = searchedTask.dueDate;
  project.value = searchedTask.project;
  if (searchedTask.checklist) {
    checklist.checked = true;
  };
  notes.value = searchedTask.notes;
}

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

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";

  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let dueDate = document.getElementById("dueDate");
  let project = document.getElementById("project");
  let checklist = document.getElementById("checklist");
  let notes = document.getElementById("notes");
  title.value = "";
  description.value = "";
  dueDate.value = "";
  project.value = "Default";
  checklist.checked = false;
  notes.value = "";
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
    imgEdit.dataset.index = item._id;
    imgEdit.addEventListener("click", (event) => {
      let taskID = event.target.dataset.index;
      // createModal();

      //ok. so createModal() creates an invisible empty modal window. the add button just changes the display from none to flex.
      // if we want to use it for adding new tasks and editing existing tasks, we need to change it. 
      //for example, createModal() could create the hidden window, all labels etc as it currently does. the window would be invisible 
      // then we would have another function, showModal(id), triggered on edit tasks buttons and add task button => it would change the display from none to flex; then if id is undefined (!id) (?),
      // we would not change any inputs, and clicking submit would trigger addnewtask function, which actually adds a task. if we do have an id of a task, we need to search for this id in the tasklist, 
      // then edit the modal window to show current data in all the input fields. clicking the submit button in this case would edit the existing task, not add a new one.
      showModal(taskID);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcXG4gIC8qIC0tYmFja2dyb3VuZDI6IDtcXG4tLWJhY2tncm91bmQzOiA7ICovXFxuICAtLWFjY2VudDogcmdiKDk0LCAxMzcsIDI1NSk7XFxuICAvKiAtLWFjY2VudDI6IDtcXG4tLWFjY2VudDM6IDsgKi9cXG5cXG4gIC0tZm9udDogIzAwMDtcXG4gIC0tZm9udDI6IHJnYig1OCwgMTEwLCAyNTUpO1xcbiAgLS1mb250MzogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgXFxcIm5hdiBtYWluXFxcIlxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5uYXZpZ2F0aW9uIHtcXG4gIGdyaWQtYXJlYTogbmF2O1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBsaTpob3ZlciB7XFxuICBjb2xvcjogb3JhbmdlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiBsaTphY3RpdmUge1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG4jZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuICBjb2xvcjogdmFyKC0tZm9udDMpO1xcbn1cXG5cXG4vKiBUYXNrIHRhYmxlICovXFxuXFxuLnRhYmxlbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tYWNjZW50KSBzb2xpZDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBjb2xvcjogdmFyKC0tZm9udDIpO1xcbn1cXG5cXG50aCB7XFxuICBib3JkZXI6IDFweCB2YXIoLS1hY2NlbnQpIHNvbGlkO1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG50ZCB7XFxuICBib3JkZXI6IDFweCB2YXIoLS1hY2NlbnQpIHNvbGlkO1xcbiAgcGFkZGluZzogNHB4IDVweDtcXG59XFxuXFxudGFibGUgLnRhc2tjaGVjayB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxudGFibGUgLnRhc2t0aXRsZSB7XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi50ZGVkaXQgaW1nIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4udGRkZWxldGUgaW1nIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4vKiBNb2RhbCB3aW5kb3cgKi9cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAzMCU7XFxuICB0b3A6IDIwJTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwgbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG5cXG4ubW9kYWwgYnV0dG9uIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCO2tCQUNnQjtFQUNoQiwyQkFBMkI7RUFDM0I7Y0FDWTs7RUFFWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2I7OzttQkFHaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6ICNmZmY7XFxuICAvKiAtLWJhY2tncm91bmQyOiA7XFxuLS1iYWNrZ3JvdW5kMzogOyAqL1xcbiAgLS1hY2NlbnQ6IHJnYig5NCwgMTM3LCAyNTUpO1xcbiAgLyogLS1hY2NlbnQyOiA7XFxuLS1hY2NlbnQzOiA7ICovXFxuXFxuICAtLWZvbnQ6ICMwMDA7XFxuICAtLWZvbnQyOiByZ2IoNTgsIDExMCwgMjU1KTtcXG4gIC0tZm9udDM6ICNmZmY7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJuYXYgbWFpblxcXCJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBncmlkLWFyZWE6IG5hdjtcXG59XFxuXFxuLm5hdmlnYXRpb24gbGk6aG92ZXIge1xcbiAgY29sb3I6IG9yYW5nZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdmlnYXRpb24gbGk6YWN0aXZlIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQzKTtcXG59XFxuXFxuLyogVGFzayB0YWJsZSAqL1xcblxcbi50YWJsZWxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlcjogMXB4IHZhcigtLWFjY2VudCkgc29saWQ7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgY29sb3I6IHZhcigtLWZvbnQyKTtcXG59XFxuXFxudGgge1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tYWNjZW50KSBzb2xpZDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxudGQge1xcbiAgYm9yZGVyOiAxcHggdmFyKC0tYWNjZW50KSBzb2xpZDtcXG4gIHBhZGRpbmc6IDRweCA1cHg7XFxufVxcblxcbnRhYmxlIC50YXNrY2hlY2sge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbnRhYmxlIC50YXNrdGl0bGUge1xcbiAgd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4udGRlZGl0IGltZyB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnRkZGVsZXRlIGltZyB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLyogTW9kYWwgd2luZG93ICovXFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMzAlO1xcbiAgdG9wOiAyMCU7XFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsIGxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuXFxuLm1vZGFsIGJ1dHRvbiB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZvcm1hdER1cmF0aW9uIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBvcGVuVGFza3MsIGFsbFRhc2tzLCBmaW5pc2hlZFRhc2tzLCBwcm9qZWN0cywgcHJpb3JpdGllcywgYWRkVGFzayB9IGZyb20gXCIuXCI7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9lZGl0X2ljb24uc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vZGVsZXRlX2ljb24uc3ZnJztcbmV4cG9ydCB7IHJlbmRlclRhc2tzLCBjbG9zZU1vZGFsIH07XG5cbmNvbnN0IGVsZW1lbnRzID0gW1xuICB7IHNob3J0OiBcInRpdGxlXCIsIGZ1bGw6IFwiVGl0bGVcIiB9LFxuICB7IHNob3J0OiBcImRlc2NyaXB0aW9uXCIsIGZ1bGw6IFwiRGVzY3JpcHRpb25cIiB9LFxuICB7IHNob3J0OiBcImR1ZURhdGVcIiwgZnVsbDogXCJEdWUgZGF0ZVwiIH0sXG4gIHsgc2hvcnQ6IFwicHJpb3JpdHlcIiwgZnVsbDogXCJQcmlvcml0eVwiIH0sXG4gIHsgc2hvcnQ6IFwiY2hlY2tsaXN0XCIsIGZ1bGw6IFwiRG9uZT9cIiB9LFxuICB7IHNob3J0OiBcIm5vdGVzXCIsIGZ1bGw6IFwiTm90ZXNcIiB9LFxuICB7IHNob3J0OiBcInByb2plY3RcIiwgZnVsbDogXCJQcm9qZWN0XCIgfSxcbl07XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRG9tKCkge1xuICBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlTmF2KCk7XG4gIHJlbmRlclByb2pOYXYoKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICBjcmVhdGVNb2RhbCgpXG5cbiAgY29uc3QgdGFibGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFibGVEaXZcIik7XG5cbiAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9KTtcbiAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIG1haW4uYXBwZW5kQ2hpbGQodGFibGVEaXYpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICByZW5kZXJUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbCh0YXNrSW5kZXgpIHtcbiAgLyogTW9kYWwgd2luZG93IGZvciBjcmVhdGluZyBhIG5ldyB0YXNrICovXG4gIGNvbnN0IG1vZGFsV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnRuXCIpO1xuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gIG1vZGFsV2luZG93LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIik7XG4gIG1vZGFsV2luZG93LmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcblxuICAvL3Rhc2sncyBpZFxuICBjb25zdCBzcGFuSUQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3BhbklELnRleHRDb250ZW50ID0gdGFza0luZGV4O1xuICBmb3JtLmFwcGVuZENoaWxkKHNwYW5JRCk7XG5cbiAgLy90aXRsZVxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gIGNvbnN0IGxhYmVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gIGxhYmVsVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxUaXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG5cbiAgLy9kZXNjcmlwdGlvblxuICBjb25zdCBpbnB1dERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0RGVzYy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsRGVzYy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgbGFiZWxEZXNjLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsRGVzYyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjKTtcblxuICAvL2R1ZSBkYXRlXG4gIGNvbnN0IGlucHV0RHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dER1ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZURhdGVcIik7XG4gIGNvbnN0IGxhYmVsRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbER1ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlXCIpO1xuICBsYWJlbER1ZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbER1ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREdWUpO1xuXG4gIC8vcHJpb3JpdHlcbiAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICBwcmlvcml0aWVzLmZvckVhY2ggKChlbGVtKSA9PiB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gZWxlbTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBlbGVtO1xuICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdFByaW9yaXR5KTtcblxuICAvL3Byb2plY3RcbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoICgoZWxlbSkgPT4ge1xuICAgIGxldCBwcm9qT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBwcm9qT3B0aW9uLnZhbHVlID0gZWxlbS5uYW1lO1xuICAgIHByb2pPcHRpb24udGV4dENvbnRlbnQgPSBlbGVtLm5hbWU7XG4gICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qT3B0aW9uKTtcbiAgfSk7XG4gIGNvbnN0IGxhYmVsUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxQcm9qZWN0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3RcIik7XG4gIGxhYmVsUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJvamVjdCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG5cbiAgLy9jaGVja2xpc3RcbiAgY29uc3QgaW5wdXRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNoZWNrbGlzdFwiKTtcbiAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkb25lXCIpO1xuICBjb25zdCBsYWJlbENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbENoZWNrLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNoZWNrbGlzdFwiKTtcbiAgbGFiZWxDaGVjay50ZXh0Q29udGVudCA9IFwiRG9uZT9cIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbENoZWNrKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dENoZWNrKTtcblxuICAvL25vdGVzXG4gIGNvbnN0IGlucHV0Tm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0Tm90ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc1wiKTtcbiAgY29uc3QgbGFiZWxOb3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxOb3Rlcy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJub3Rlc1wiKTtcbiAgbGFiZWxOb3Rlcy50ZXh0Q29udGVudCA9IFwiQWRkaXRpb25hbCBub3Rlc1wiO1xuICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsTm90ZXMpO1xuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0Tm90ZXMpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG4gIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIG1vZGFsV2luZG93LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWxXaW5kb3cpO1xufVxuXG5mdW5jdGlvbiBzaG93TW9kYWwoaWQpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGxldCBiaWJpID0gaWQ7XG4gIGNvbnNvbGUubG9nKGJpYmkpO1xuICBsZXQgc2VhcmNoZWRUYXNrID0gYWxsVGFza3MuZmluZCgodGFzaykgPT4gdGFzay5faWQgPT0gYmliaSk7XG4gIGNvbnNvbGUubG9nKHNlYXJjaGVkVGFzayk7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKTtcbiAgbGV0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tsaXN0XCIpO1xuICBsZXQgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuICB0aXRsZS52YWx1ZSA9IHNlYXJjaGVkVGFzay50aXRsZTtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBzZWFyY2hlZFRhc2suZGVzY3JpcHRpb247XG4gIGR1ZURhdGUudmFsdWUgPSBzZWFyY2hlZFRhc2suZHVlRGF0ZTtcbiAgcHJvamVjdC52YWx1ZSA9IHNlYXJjaGVkVGFzay5wcm9qZWN0O1xuICBpZiAoc2VhcmNoZWRUYXNrLmNoZWNrbGlzdCkge1xuICAgIGNoZWNrbGlzdC5jaGVja2VkID0gdHJ1ZTtcbiAgfTtcbiAgbm90ZXMudmFsdWUgPSBzZWFyY2hlZFRhc2subm90ZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVG8gRG8gTGlzdFwiO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck9wZW4oKSB7XG4gIHJlbmRlclRhc2tzKG9wZW5UYXNrcyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbCgpIHtcbiAgcmVuZGVyVGFza3MoYWxsVGFza3MpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJGaW5pc2hlZCgpIHtcbiAgcmVuZGVyVGFza3MoZmluaXNoZWRUYXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IG5hdk9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG5hdkFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbmF2RmluaXNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25cIik7XG4gIG5hdk9wZW4udGV4dENvbnRlbnQgPSBcIk9wZW4gdGFza3NcIjtcbiAgbmF2T3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyT3Blbik7XG4gIG5hdkFsbC50ZXh0Q29udGVudCA9IFwiQWxsIHRhc2tzXCI7XG4gIG5hdkFsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQWxsKTtcbiAgbmF2RmluaXNoZWQudGV4dENvbnRlbnQgPSBcIkZpbmlzaGVkIHRhc2tzXCI7XG4gIG5hdkZpbmlzaGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJGaW5pc2hlZCk7XG5cbiAgcHJvamVjdHNEaXYudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIHByb2plY3RzVWwuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLW5hdlwiKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQobmF2VWwpO1xuICBuYXZVbC5hcHBlbmRDaGlsZChuYXZPcGVuKTtcbiAgbmF2VWwuYXBwZW5kQ2hpbGQobmF2QWxsKTtcbiAgbmF2VWwuYXBwZW5kQ2hpbGQobmF2RmluaXNoZWQpO1xuICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1VsKTtcbiAgbmF2LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcblxuICBib2R5LmFwcGVuZENoaWxkKG5hdik7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKTtcbiAgbGV0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tsaXN0XCIpO1xuICBsZXQgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3QudmFsdWUgPSBcIkRlZmF1bHRcIjtcbiAgY2hlY2tsaXN0LmNoZWNrZWQgPSBmYWxzZTtcbiAgbm90ZXMudmFsdWUgPSBcIlwiO1xufVxuXG4vKiBMaXN0IG9mIHRhc2tzICovXG5mdW5jdGlvbiByZW1vdmVUYWJsZSgpIHtcbiAgY29uc3QgdGFibGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlRGl2XCIpO1xuICB3aGlsZSAodGFibGVEaXYubGFzdENoaWxkKSB7XG4gICAgdGFibGVEaXYucmVtb3ZlQ2hpbGQodGFibGVEaXYubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrbGlzdCA9IG9wZW5UYXNrcykge1xuICBjb25zdCB0YWJsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVEaXZcIik7XG4gIHJlbW92ZVRhYmxlKCk7XG4gIGNvbnN0IHRhYmxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJsZUxhYmVsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFibGVsYWJlbFwiKTtcblxuICBpZiAodGFza2xpc3QgPT0gYWxsVGFza3MpIHtcbiAgICB0YWJsZUxhYmVsLnRleHRDb250ZW50ID0gXCJBbGwgdGFza3NcIjtcbiAgfSBlbHNlIGlmICh0YXNrbGlzdCA9PSBmaW5pc2hlZFRhc2tzKSB7XG4gICAgdGFibGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRmluaXNoZWQgdGFza3NcIjtcbiAgfSBlbHNlIHtcbiAgICB0YWJsZUxhYmVsLnRleHRDb250ZW50ID0gXCJPcGVuIHRhc2tzXCI7XG4gIH1cblxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgXG4gIHRhc2tsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICB0ci5kYXRhc2V0LmluZGV4ID0gaXRlbS5faWQ7XG4gICAgY29uc3QgdGRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICBjb25zdCBkb25lQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZG9uZUNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBkb25lQ2hlY2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YXNrY2hlY2tcIik7XG4gICAgZG9uZUNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBjaGFuZ2VEb25lU3RhdGUoKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIGl0ZW1bY2hlY2tsaXN0XSA9IFwidHJ1ZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbVtjaGVja2xpc3RdID0gXCJmYWxzZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChpdGVtW2NoZWNrbGlzdF0gPT09IFwidHJ1ZVwiIHx8IGl0ZW1bY2hlY2tsaXN0XSA9PT0gdHJ1ZSkge1xuICAgICAgZG9uZUNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lQ2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgdGRDaGVjay5hcHBlbmRDaGlsZChkb25lQ2hlY2spO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkQ2hlY2spO1xuXG4gICAgY29uc3QgdGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0ZFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGFza3RpdGxlXCIpO1xuICAgIHRkVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkVGl0bGUpO1xuXG4gICAgY29uc3QgdGRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgIHRkRWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRkZWRpdFwiKTtcbiAgICBjb25zdCBpbWdFZGl0ID0gbmV3IEltYWdlKCk7XG4gICAgaW1nRWRpdC5zcmMgPSBlZGl0SWNvbjtcbiAgICBpbWdFZGl0LmRhdGFzZXQuaW5kZXggPSBpdGVtLl9pZDtcbiAgICBpbWdFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCB0YXNrSUQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIC8vIGNyZWF0ZU1vZGFsKCk7XG5cbiAgICAgIC8vb2suIHNvIGNyZWF0ZU1vZGFsKCkgY3JlYXRlcyBhbiBpbnZpc2libGUgZW1wdHkgbW9kYWwgd2luZG93LiB0aGUgYWRkIGJ1dHRvbiBqdXN0IGNoYW5nZXMgdGhlIGRpc3BsYXkgZnJvbSBub25lIHRvIGZsZXguXG4gICAgICAvLyBpZiB3ZSB3YW50IHRvIHVzZSBpdCBmb3IgYWRkaW5nIG5ldyB0YXNrcyBhbmQgZWRpdGluZyBleGlzdGluZyB0YXNrcywgd2UgbmVlZCB0byBjaGFuZ2UgaXQuIFxuICAgICAgLy9mb3IgZXhhbXBsZSwgY3JlYXRlTW9kYWwoKSBjb3VsZCBjcmVhdGUgdGhlIGhpZGRlbiB3aW5kb3csIGFsbCBsYWJlbHMgZXRjIGFzIGl0IGN1cnJlbnRseSBkb2VzLiB0aGUgd2luZG93IHdvdWxkIGJlIGludmlzaWJsZSBcbiAgICAgIC8vIHRoZW4gd2Ugd291bGQgaGF2ZSBhbm90aGVyIGZ1bmN0aW9uLCBzaG93TW9kYWwoaWQpLCB0cmlnZ2VyZWQgb24gZWRpdCB0YXNrcyBidXR0b25zIGFuZCBhZGQgdGFzayBidXR0b24gPT4gaXQgd291bGQgY2hhbmdlIHRoZSBkaXNwbGF5IGZyb20gbm9uZSB0byBmbGV4OyB0aGVuIGlmIGlkIGlzIHVuZGVmaW5lZCAoIWlkKSAoPyksXG4gICAgICAvLyB3ZSB3b3VsZCBub3QgY2hhbmdlIGFueSBpbnB1dHMsIGFuZCBjbGlja2luZyBzdWJtaXQgd291bGQgdHJpZ2dlciBhZGRuZXd0YXNrIGZ1bmN0aW9uLCB3aGljaCBhY3R1YWxseSBhZGRzIGEgdGFzay4gaWYgd2UgZG8gaGF2ZSBhbiBpZCBvZiBhIHRhc2ssIHdlIG5lZWQgdG8gc2VhcmNoIGZvciB0aGlzIGlkIGluIHRoZSB0YXNrbGlzdCwgXG4gICAgICAvLyB0aGVuIGVkaXQgdGhlIG1vZGFsIHdpbmRvdyB0byBzaG93IGN1cnJlbnQgZGF0YSBpbiBhbGwgdGhlIGlucHV0IGZpZWxkcy4gY2xpY2tpbmcgdGhlIHN1Ym1pdCBidXR0b24gaW4gdGhpcyBjYXNlIHdvdWxkIGVkaXQgdGhlIGV4aXN0aW5nIHRhc2ssIG5vdCBhZGQgYSBuZXcgb25lLlxuICAgICAgc2hvd01vZGFsKHRhc2tJRCk7XG4gICAgfSk7XG4gICAgdGRFZGl0LmFwcGVuZENoaWxkKGltZ0VkaXQpO1xuICAgIHRyLmFwcGVuZENoaWxkKHRkRWRpdCk7XG5cbiAgICBjb25zdCB0ZERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICB0ZERlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRkZGVsZXRlXCIpO1xuICAgIGNvbnN0IGltZ0RlbGV0ZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ0RlbGV0ZS5zcmMgPSBkZWxldGVJY29uO1xuICAgIHRkRGVsZXRlLmFwcGVuZENoaWxkKGltZ0RlbGV0ZSk7XG4gICAgdHIuYXBwZW5kQ2hpbGQodGREZWxldGUpO1xuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpOyAgICBcbiAgfSk7XG4gICAgdGFibGVEaXYuYXBwZW5kQ2hpbGQodGFibGVMYWJlbCk7XG4gICAgdGFibGVEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qTmF2KCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbmF2XCIpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9YDtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xufVxuXG5cbiIsIi8vIGdpdCBzdWJ0cmVlIHB1c2ggLS1wcmVmaXggZGlzdCBvcmlnaW4gZ2gtcGFnZXNcblxuaW1wb3J0IGNyZWF0ZURvbSwgeyByZW5kZXJUYXNrcywgY2xvc2VNb2RhbCB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5leHBvcnQgeyBvcGVuVGFza3MsIGFsbFRhc2tzLCBmaW5pc2hlZFRhc2tzLCBwcm9qZWN0cywgcHJpb3JpdGllcywgYWRkVGFzayB9O1xuXG5jb25zdCBvcGVuVGFza3MgPSBbXTtcbmNvbnN0IGFsbFRhc2tzID0gW107XG5jb25zdCBmaW5pc2hlZFRhc2tzID0gW107XG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgcHJpb3JpdGllcyA9IFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl07XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrbGlzdCxcbiAgICBub3RlcyxcbiAgICBwcm9qZWN0XG4gICkge1xuICAgIHRoaXMuX2lkID0gZ2V0VGFza0lEKCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxufVxuXG4vKiBQcm9qZWN0cyAqL1xuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTsgXG4gICAgdGhpcy5faWQgPSBnZXRQcm9qZWN0SUQoKTtcbiAgICB0aGlzLl90YXNrTGlzdCA9IFtdO1xuICAgIHByb2plY3RzLnB1c2godGhpcyk7XG4gIH1cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIGdldCB0YXNrTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0xpc3Q7XG4gIH1cbiAgc2V0IHRhc2tMaXN0KHZhbHVlKSB7XG4gICAgdGhpcy5fdGFza0xpc3QucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdElEKCkge1xuICBsZXQgcmFuZG9tTnVtID0gKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkqIDB4MTAwMDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gIH07XG4gIGxldCByYW5kb21JRCA9IHJhbmRvbU51bSgpICsgcmFuZG9tTnVtKCkgKyByYW5kb21OdW0oKSArIHJhbmRvbU51bSgpO1xuICByZXR1cm4gcmFuZG9tSUQ7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tJRCgpIHtcbiAgbGV0IHJhbmRvbU51bSA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpKiAweDEwMDAwKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDEpO1xuICB9O1xuICBsZXQgcmFuZG9tSUQgPSByYW5kb21OdW0oKSArIHJhbmRvbU51bSgpICsgcmFuZG9tTnVtKCkgKyByYW5kb21OdW0oKSArIHJhbmRvbU51bSgpO1xuICByZXR1cm4gcmFuZG9tSUQ7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soZXZlbnQpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrbGlzdFwiKTtcbiAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhcbiAgICB0aXRsZS52YWx1ZSxcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICBkdWVEYXRlLnZhbHVlLFxuICAgIHByaW9yaXR5LnZhbHVlLFxuICAgIGNoZWNrLmNoZWNrZWQsXG4gICAgbm90ZXMudmFsdWUsXG4gICAgcHJvamVjdC52YWx1ZVxuICApO1xuICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcbiAgb3BlblRhc2tzLnB1c2gobmV3VGFzayk7XG4gIGFsbFRhc2tzLnB1c2gobmV3VGFzayk7XG4gIHJlbmRlclRhc2tzKCk7XG4gIGNsb3NlTW9kYWwoKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lKSB7XG4gIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJEZWZhdWx0XCIpO1xuY29uc3Qgd29ya1Byb2plY3QgPSBuZXcgUHJvamVjdChcIldvcmtcIik7XG5hZGRQcm9qZWN0KFwiQm9iXCIpO1xuXG5jb25zdCBkZWZhdWx0VGFzayA9IG5ldyBUYXNrKFxuICBcImJydXNoIHRlZXRoXCIsXG4gIFwiYnJ1c2ggeW91ciB0ZWV0aFwiLFxuICBcIm5vd1wiLFxuICBcImhpZ2hcIixcbiAgXCJ0cnVlXCIsXG4gIFwibm9cIixcbiAgXCJEZWZhdWx0XCJcbik7XG5cbm9wZW5UYXNrcy5wdXNoKGRlZmF1bHRUYXNrKTtcbmFsbFRhc2tzLnB1c2goZGVmYXVsdFRhc2spO1xuY3JlYXRlRG9tKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9