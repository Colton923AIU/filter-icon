define("0cb0c9a2-c1a9-4f31-bbc5-10c90847b5fa_0.0.1", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-property-pane","@microsoft/sp-webpart-base"], (__WEBPACK_EXTERNAL_MODULE__650__, __WEBPACK_EXTERNAL_MODULE__729__, __WEBPACK_EXTERNAL_MODULE__878__, __WEBPACK_EXTERNAL_MODULE__723__, __WEBPACK_EXTERNAL_MODULE__134__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 59:
/*!******************************************************************!*\
  !*** ./lib/webparts/filterIcon/components/FilterIcon.module.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js */ 726);
// Imports


_node_modules_microsoft_sp_css_loader_node_modules_microsoft_load_themed_styles_lib_es6_index_js__WEBPACK_IMPORTED_MODULE_0__.loadStyles(".filterIconBase_e358cb5d{align-items:center;background-color:transparent;display:flex;justify-content:center;margin:1px;min-height:30px;min-width:30px;padding:1px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vQzovVXNlcnMvbWNjY29sMDkyMy9wcm9qZWN0cy9maWx0ZXItaWNvbi9zcmMvd2VicGFydHMvZmlsdGVySWNvbi9jb21wb25lbnRzL0ZpbHRlckljb24ubW9kdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBR0Usa0JBQUEsQ0FPQSw0QkFBQSxDQVRBLFlBQUEsQ0FDQSxzQkFBQSxDQUlBLFVBQUEsQ0FFQSxlQUFBLENBREEsY0FBQSxDQUZBLFdBS0EiLCJmaWxlIjoiRmlsdGVySWNvbi5tb2R1bGUuY3NzIn0= */", true);


/***/ }),

/***/ 28:
/*!**********************************************************!*\
  !*** ./lib/webparts/filterIcon/components/FilterIcon.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterIcon.module.scss */ 470);


var FilterIcon = function (props) {
    var handleClick = function () {
        // Toggle the state for the given name (e.g., "Military")
        props.globalStateService.toggleState(props.name);
    };
    var isActive = props.globalStateService.getState(props.name);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { onClick: handleClick, style: {
            opacity: isActive ? 1 : 0.7,
        }, className: _FilterIcon_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].filterIconBase, dangerouslySetInnerHTML: {
            __html: props.icon,
        } }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterIcon);


/***/ }),

/***/ 470:
/*!**********************************************************************!*\
  !*** ./lib/webparts/filterIcon/components/FilterIcon.module.scss.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* tslint:disable */
__webpack_require__(/*! ./FilterIcon.module.css */ 59);
var styles = {
    filterIconBase: 'filterIconBase_e358cb5d'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);
/* tslint:enable */ 


/***/ }),

/***/ 9:
/*!***************************************************************!*\
  !*** ./lib/webparts/filterIcon/context/GlobalStateService.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStateService: () => (/* binding */ GlobalStateService)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ 878);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);

var GlobalStateService = /** @class */ (function () {
    function GlobalStateService(serviceScope) {
        // Store states by name (e.g., "Military" => true/false)
        this.states = {};
        this.subscribers = {};
    }
    // Get the state for a specific filter name
    GlobalStateService.prototype.getState = function (name) {
        return this.states[name] || false; // Default to false if not defined
    };
    // Toggle the state for a specific filter name
    GlobalStateService.prototype.toggleState = function (name) {
        this.states[name] = !this.states[name];
        this.notifySubscribers(name);
    };
    // Subscribe to state changes for a specific filter name
    GlobalStateService.prototype.subscribe = function (name, callback) {
        if (!this.subscribers[name]) {
            this.subscribers[name] = [];
        }
        this.subscribers[name].push(callback);
    };
    // Notify subscribers of a state change for a specific filter name
    GlobalStateService.prototype.notifySubscribers = function (name) {
        var _this = this;
        var callbacks = this.subscribers[name];
        if (callbacks) {
            callbacks.forEach(function (callback) { return callback(_this.states[name]); });
        }
    };
    GlobalStateService.serviceKey = _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__.ServiceKey.create("filter-icon:GlobalStateService", GlobalStateService);
    return GlobalStateService;
}());



/***/ }),

/***/ 726:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@microsoft/sp-css-loader/node_modules/@microsoft/load-themed-styles/lib-es6/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStyles: () => (/* binding */ loadStyles)
/* harmony export */ });
/* unused harmony exports configureLoadStyles, configureRunMode, flush, loadTheme, clearStyles, detokenize, splitStyles */
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? __webpack_require__.g : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* ClearStyleOptions.all */; }
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}


/***/ }),

/***/ 878:
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__878__;

/***/ }),

/***/ 723:
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__723__;

/***/ }),

/***/ 134:
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__134__;

/***/ }),

/***/ 650:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__650__;

/***/ }),

/***/ 729:
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__729__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************************!*\
  !*** ./lib/webparts/filterIcon/FilterIconWebPart.js ***!
  \******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 729);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ 878);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ 723);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ 134);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FilterIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FilterIcon */ 28);
/* harmony import */ var _context_GlobalStateService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/GlobalStateService */ 9);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var FilterIconWebPart = /** @class */ (function (_super) {
    __extends(FilterIconWebPart, _super);
    function FilterIconWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterIconWebPart.prototype.onInit = function () {
        this.globalStateService = this.context.serviceScope.consume(_context_GlobalStateService__WEBPACK_IMPORTED_MODULE_6__.GlobalStateService.serviceKey);
        return _super.prototype.onInit.call(this);
    };
    FilterIconWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FilterIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            tagTitle: this.properties.tagTitle,
            icon: this.properties.icon,
            name: this.properties.name,
            globalStateService: this.globalStateService,
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__.render(element, this.domElement);
    };
    FilterIconWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(FilterIconWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__.Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    FilterIconWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Properties",
                    },
                    groups: [
                        {
                            groupName: "Filter Icon",
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)("tagTitle", {
                                    label: "Tag Title",
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)("icon", {
                                    label: "Icon",
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__.PropertyPaneTextField)("name", {
                                    label: "Filter Name (e.g., Military)",
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return FilterIconWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__.BaseClientSideWebPart));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterIconWebPart);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});;
//# sourceMappingURL=filter-icon-web-part.js.map