module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/deleteItem.js":
/*!*******************************!*\
  !*** ./helpers/deleteItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deleteItem; });\nfunction deleteItem(arr, val) {\n  return arr.filter(cell => cell != val);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2RlbGV0ZUl0ZW0uanM/NzI5ZCJdLCJuYW1lcyI6WyJkZWxldGVJdGVtIiwiYXJyIiwidmFsIiwiZmlsdGVyIiwiY2VsbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN6QyxTQUFRRCxHQUFHLENBQUNFLE1BQUosQ0FBWUMsSUFBRCxJQUFVQSxJQUFJLElBQUlGLEdBQTdCLENBQVI7QUFDSCIsImZpbGUiOiIuL2hlbHBlcnMvZGVsZXRlSXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUl0ZW0oYXJyLCB2YWwpIHtcbiAgICByZXR1cm4gKGFyci5maWx0ZXIoKGNlbGwpID0+IGNlbGwgIT0gdmFsKSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/deleteItem.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/tailwindcss/tailwind.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF3QztBQUNwQyxzQkFDSSxxRUFBRSxvREFBRjtBQUFXLFNBQUssRUFBRUMsb0RBQWxCO0FBQUEsMkJBQ0kscUVBQUUsU0FBRixvQkFBZ0JELFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDwgUHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDwgQ29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/actionTypes.js":
/*!******************************!*\
  !*** ./redux/actionTypes.js ***!
  \******************************/
/*! exports provided: ADD_CELL, REMOVE_CELL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_CELL\", function() { return ADD_CELL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_CELL\", function() { return REMOVE_CELL; });\nconst ADD_CELL = \"ADD_CELL\";\nconst REMOVE_CELL = \"REMOVE_CELL\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25UeXBlcy5qcz80ZjEyIl0sIm5hbWVzIjpbIkFERF9DRUxMIiwiUkVNT1ZFX0NFTEwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLFFBQVEsR0FBRyxVQUFqQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQiIsImZpbGUiOiIuL3JlZHV4L2FjdGlvblR5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9DRUxMID0gXCJBRERfQ0VMTFwiXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NFTEwgPSBcIlJFTU9WRV9DRUxMXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actionTypes.js\n");

/***/ }),

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cellReducer; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _helpers_deleteItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/deleteItem */ \"./helpers/deleteItem.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst initialState = {\n  days: {\n    \"2020-12-01\": {\n      id: \"2020-12-01\",\n      cells: [\"happy\", \"fine\", \"potatoes\", \"bread\"]\n    },\n    \"2021-01-21\": {\n      id: \"2021-1-21\",\n      cells: [\"happy\", \"rice\", \"bread\"]\n    }\n  }\n};\nfunction cellReducer(state = initialState, action) {\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CELL\"]:\n      {\n        var _state$days$dayId;\n\n        const {\n          payload\n        } = action;\n        const {\n          dayId,\n          cellName\n        } = payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days), {}, {\n            [dayId]: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[dayId]), {}, {\n              id: dayId,\n              cells: [...((state === null || state === void 0 ? void 0 : (_state$days$dayId = state.days[dayId]) === null || _state$days$dayId === void 0 ? void 0 : _state$days$dayId.cells) || []), cellName]\n            })\n          })\n        });\n      }\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_CELL\"]:\n      {\n        var _state$days$dayId2;\n\n        const {\n          payload\n        } = action;\n        const {\n          dayId,\n          cellName\n        } = payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days), {}, {\n            [dayId]: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[dayId]), {}, {\n              cells: Object(_helpers_deleteItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state === null || state === void 0 ? void 0 : (_state$days$dayId2 = state.days[dayId]) === null || _state$days$dayId2 === void 0 ? void 0 : _state$days$dayId2.cells, cellName)\n            })\n          })\n        });\n      }\n\n    default:\n      return state;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jZWxsUmVkdWNlci5qcz8yMWI2Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRheXMiLCJpZCIsImNlbGxzIiwiY2VsbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfQ0VMTCIsInBheWxvYWQiLCJkYXlJZCIsImNlbGxOYW1lIiwiUkVNT1ZFX0NFTEwiLCJkZWxldGVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFO0FBQ0Ysa0JBQWM7QUFDVkMsUUFBRSxFQUFFLFlBRE07QUFFVkMsV0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsVUFBbEIsRUFBOEIsT0FBOUI7QUFGRyxLQURaO0FBS0Ysa0JBQWM7QUFDVkQsUUFBRSxFQUFFLFdBRE07QUFFVkMsV0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsT0FBbEI7QUFGRztBQUxaO0FBRFcsQ0FBckI7QUFjZSxTQUFTQyxXQUFULENBQXFCQyxLQUFLLEdBQUdMLFlBQTdCLEVBQTJDTSxNQUEzQyxFQUFtRDtBQUM5RCxVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLQyxxREFBTDtBQUFlO0FBQUE7O0FBQ1gsY0FBTTtBQUFFQztBQUFGLFlBQWNILE1BQXBCO0FBQ0EsY0FBTTtBQUFFSSxlQUFGO0FBQVNDO0FBQVQsWUFBc0JGLE9BQTVCO0FBQ0EsK0NBQ09KLEtBRFA7QUFFSUosY0FBSSxrQ0FDR0ksS0FESCxhQUNHQSxLQURILHVCQUNHQSxLQUFLLENBQUVKLElBRFY7QUFFQSxhQUFDUyxLQUFELG1DQUNPTCxLQURQLGFBQ09BLEtBRFAsdUJBQ09BLEtBQUssQ0FBRUosSUFBUCxDQUFZUyxLQUFaLENBRFA7QUFFSVIsZ0JBQUUsRUFBRVEsS0FGUjtBQUdJUCxtQkFBSyxFQUFFLENBQ0gsSUFBRyxDQUFBRSxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLGlDQUFBQSxLQUFLLENBQUVKLElBQVAsQ0FBWVMsS0FBWix5RUFBb0JQLEtBQXBCLEtBQTZCLEVBQWhDLENBREcsRUFFSFEsUUFGRztBQUhYO0FBRkE7QUFGUjtBQWNIOztBQUNELFNBQUtDLHdEQUFMO0FBQWtCO0FBQUE7O0FBQ2QsY0FBTTtBQUFFSDtBQUFGLFlBQWNILE1BQXBCO0FBQ0EsY0FBTTtBQUFFSSxlQUFGO0FBQVNDO0FBQVQsWUFBc0JGLE9BQTVCO0FBQ0EsK0NBQ09KLEtBRFA7QUFFSUosY0FBSSxrQ0FDR0ksS0FESCxhQUNHQSxLQURILHVCQUNHQSxLQUFLLENBQUVKLElBRFY7QUFFQSxhQUFDUyxLQUFELG1DQUNPTCxLQURQLGFBQ09BLEtBRFAsdUJBQ09BLEtBQUssQ0FBRUosSUFBUCxDQUFZUyxLQUFaLENBRFA7QUFFUVAsbUJBQUssRUFBRVUsbUVBQVUsQ0FBQ1IsS0FBRCxhQUFDQSxLQUFELDZDQUFDQSxLQUFLLENBQUVKLElBQVAsQ0FBWVMsS0FBWixDQUFELHVEQUFDLG1CQUFvQlAsS0FBckIsRUFBNEJRLFFBQTVCO0FBRnpCO0FBRkE7QUFGUjtBQVVDOztBQUVMO0FBQ0ksYUFBT04sS0FBUDtBQW5DUjtBQXFDSCIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL2NlbGxSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX0NFTEwsIFJFTU9WRV9DRUxMIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCJcbmltcG9ydCBkZWxldGVJdGVtIGZyb20gXCIuLi8uLi9oZWxwZXJzL2RlbGV0ZUl0ZW1cIlxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgZGF5czoge1xuICAgICAgICBcIjIwMjAtMTItMDFcIjoge1xuICAgICAgICAgICAgaWQ6IFwiMjAyMC0xMi0wMVwiLFxuICAgICAgICAgICAgY2VsbHM6IFtcImhhcHB5XCIsIFwiZmluZVwiLCBcInBvdGF0b2VzXCIsIFwiYnJlYWRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCIyMDIxLTAxLTIxXCI6IHtcbiAgICAgICAgICAgIGlkOiBcIjIwMjEtMS0yMVwiLFxuICAgICAgICAgICAgY2VsbHM6IFtcImhhcHB5XCIsIFwicmljZVwiLCBcImJyZWFkXCJdXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2VsbFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9DRUxMOiB7XG4gICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGFjdGlvblxuICAgICAgICAgICAgY29uc3QgeyBkYXlJZCwgY2VsbE5hbWUgfSA9IHBheWxvYWRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF5czoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgW2RheUlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRheUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0/LmNlbGxzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBSRU1PVkVfQ0VMTDoge1xuICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHsgZGF5SWQsIGNlbGxOYW1lIH0gPSBwYXlsb2FkXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGRheXM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXMsXG4gICAgICAgICAgICAgICAgICAgIFtkYXlJZF06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsczogZGVsZXRlSXRlbShzdGF0ZT8uZGF5c1tkYXlJZF0/LmNlbGxzLCBjZWxsTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cellReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cellReducer */ \"./redux/reducers/cellReducer.js\");\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  categories: _cellReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcz9lYWY0Il0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiY2F0ZWdvcmllcyIsImNlbGxSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDaENDLFlBQVUsRUFBRUMsb0RBQVdBO0FBRFMsQ0FBRCxDQUFuQztBQUllSCwwRUFBZiIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCJcbmltcG9ydCBjZWxsUmVkdWNlciBmcm9tIFwiLi9jZWxsUmVkdWNlclwiXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjYXRlZ29yaWVzOiBjZWxsUmVkdWNlclxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/index.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./redux/reducers/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n //const initialState = {}\n\nconst middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a]; //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose\n\nconst composeEnhancers =  false ? undefined : redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store); //devToolsEnhancer()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82NTI0Il0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJ0aHVuayIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsVUFBVSxHQUFHLENBQUNDLGtEQUFELENBQW5CLEMsQ0FDQTs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FDcEIsU0FFRUMsU0FGRixHQUlPQyw2Q0FMVDtBQU9BLE1BQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsaURBQUQsRUFBY0wsZ0JBQWdCLENBQUNNLDZEQUFlLENBQUMsR0FBR1IsVUFBSixDQUFoQixDQUE5QixDQUF6QjtBQUVlSyxvRUFBZixFLENBRUEiLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCdcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIlxuXG4vL2NvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXVxuLy9jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiZcbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/ICAgXG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyh7XG4gICAgICAvLyBTcGVjaWZ5IGV4dGVuc2lvbuKAmXMgb3B0aW9ucyBsaWtlIG5hbWUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycywgc2VyaWFsaXplLi4uXG4gICAgfSkgOiBjb21wb3NlO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBjb21wb3NlRW5oYW5jZXJzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSkpXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG5cbi8vZGV2VG9vbHNFbmhhbmNlcigpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });