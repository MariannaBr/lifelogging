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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var _utils_initAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/initAuth */ \"./utils/initAuth.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nObject(_utils_initAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsK0RBQVE7O0FBRVIsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXdDO0FBQ3BDLHNCQUNJLHFFQUFFLG9EQUFGO0FBQVcsU0FBSyxFQUFFQyxvREFBbEI7QUFBQSwyQkFDSSxxRUFBRSxTQUFGLG9CQUFnQkQsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIlxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnXG5pbXBvcnQgaW5pdEF1dGggZnJvbSBcIi4uL3V0aWxzL2luaXRBdXRoXCJcblxuaW5pdEF1dGgoKVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDwgUHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgIDwgQ29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cellReducer; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _helpers_deleteItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/deleteItem */ \"./helpers/deleteItem.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst initialState = {\n  days: {\n    \"2021-01-01\": {\n      id: \"2021-01-01\",\n      cells: [\"happy\", \"bread\", \"water\"]\n    },\n    \"2021-01-05\": {\n      id: \"2021-01-05\",\n      cells: [\"sad\", \"potatoes\", \"coffee\", \"iron\"]\n    },\n    \"2021-01-12\": {\n      id: \"2021-01-12\",\n      cells: [\"motivated\", \"pasta\", \"water\", \"zink\"]\n    },\n    \"2021-01-21\": {\n      id: \"2021-01-21\",\n      cells: [\"happy\", \"rice\", \"wine\", \"zink\", \"iron\"]\n    }\n  }\n};\nfunction cellReducer(state = initialState, action) {\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CELL\"]:\n      {\n        var _state$days$dayId;\n\n        const {\n          payload\n        } = action;\n        const {\n          dayId,\n          cellName\n        } = payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days), {}, {\n            [dayId]: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[dayId]), {}, {\n              id: dayId,\n              cells: [...((state === null || state === void 0 ? void 0 : (_state$days$dayId = state.days[dayId]) === null || _state$days$dayId === void 0 ? void 0 : _state$days$dayId.cells) || []), cellName]\n            })\n          })\n        });\n      }\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_CELL\"]:\n      {\n        var _state$days$dayId2;\n\n        const {\n          payload\n        } = action;\n        const {\n          dayId,\n          cellName\n        } = payload;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days), {}, {\n            [dayId]: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[dayId]), {}, {\n              cells: Object(_helpers_deleteItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state === null || state === void 0 ? void 0 : (_state$days$dayId2 = state.days[dayId]) === null || _state$days$dayId2 === void 0 ? void 0 : _state$days$dayId2.cells, cellName)\n            })\n          })\n        });\n      }\n\n    default:\n      return state;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jZWxsUmVkdWNlci5qcz8yMWI2Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImRheXMiLCJpZCIsImNlbGxzIiwiY2VsbFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfQ0VMTCIsInBheWxvYWQiLCJkYXlJZCIsImNlbGxOYW1lIiwiUkVNT1ZFX0NFTEwiLCJkZWxldGVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFO0FBQ0Ysa0JBQWM7QUFDVkMsUUFBRSxFQUFFLFlBRE07QUFFVkMsV0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkI7QUFGRyxLQURaO0FBS0Ysa0JBQWM7QUFDVkQsUUFBRSxFQUFFLFlBRE07QUFFVkMsV0FBSyxFQUFFLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsUUFBcEIsRUFBOEIsTUFBOUI7QUFGRyxLQUxaO0FBU0Ysa0JBQWM7QUFDVkQsUUFBRSxFQUFFLFlBRE07QUFFVkMsV0FBSyxFQUFFLENBQUMsV0FBRCxFQUFjLE9BQWQsRUFBdUIsT0FBdkIsRUFBZ0MsTUFBaEM7QUFGRyxLQVRaO0FBYUYsa0JBQWM7QUFDVkQsUUFBRSxFQUFFLFlBRE07QUFFVkMsV0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsTUFBMUIsRUFBa0MsTUFBbEM7QUFGRztBQWJaO0FBRFcsQ0FBckI7QUFzQmUsU0FBU0MsV0FBVCxDQUFxQkMsS0FBSyxHQUFHTCxZQUE3QixFQUEyQ00sTUFBM0MsRUFBbUQ7QUFDOUQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MscURBQUw7QUFBZTtBQUFBOztBQUNYLGNBQU07QUFBRUM7QUFBRixZQUFjSCxNQUFwQjtBQUNBLGNBQU07QUFBRUksZUFBRjtBQUFTQztBQUFULFlBQXNCRixPQUE1QjtBQUNBLCtDQUNPSixLQURQO0FBRUlKLGNBQUksa0NBQ0dJLEtBREgsYUFDR0EsS0FESCx1QkFDR0EsS0FBSyxDQUFFSixJQURWO0FBRUEsYUFBQ1MsS0FBRCxtQ0FDT0wsS0FEUCxhQUNPQSxLQURQLHVCQUNPQSxLQUFLLENBQUVKLElBQVAsQ0FBWVMsS0FBWixDQURQO0FBRUlSLGdCQUFFLEVBQUVRLEtBRlI7QUFHSVAsbUJBQUssRUFBRSxDQUNILElBQUcsQ0FBQUUsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxpQ0FBQUEsS0FBSyxDQUFFSixJQUFQLENBQVlTLEtBQVoseUVBQW9CUCxLQUFwQixLQUE2QixFQUFoQyxDQURHLEVBRUhRLFFBRkc7QUFIWDtBQUZBO0FBRlI7QUFjSDs7QUFDRCxTQUFLQyx3REFBTDtBQUFrQjtBQUFBOztBQUNkLGNBQU07QUFBRUg7QUFBRixZQUFjSCxNQUFwQjtBQUNBLGNBQU07QUFBRUksZUFBRjtBQUFTQztBQUFULFlBQXNCRixPQUE1QjtBQUNBLCtDQUNPSixLQURQO0FBRUlKLGNBQUksa0NBQ0dJLEtBREgsYUFDR0EsS0FESCx1QkFDR0EsS0FBSyxDQUFFSixJQURWO0FBRUEsYUFBQ1MsS0FBRCxtQ0FDT0wsS0FEUCxhQUNPQSxLQURQLHVCQUNPQSxLQUFLLENBQUVKLElBQVAsQ0FBWVMsS0FBWixDQURQO0FBRVFQLG1CQUFLLEVBQUVVLG1FQUFVLENBQUNSLEtBQUQsYUFBQ0EsS0FBRCw2Q0FBQ0EsS0FBSyxDQUFFSixJQUFQLENBQVlTLEtBQVosQ0FBRCx1REFBQyxtQkFBb0JQLEtBQXJCLEVBQTRCUSxRQUE1QjtBQUZ6QjtBQUZBO0FBRlI7QUFVQzs7QUFFTDtBQUNJLGFBQU9OLEtBQVA7QUFuQ1I7QUFxQ0giLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9jZWxsUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9DRUxMLCBSRU1PVkVfQ0VMTCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiXG5pbXBvcnQgZGVsZXRlSXRlbSBmcm9tIFwiLi4vLi4vaGVscGVycy9kZWxldGVJdGVtXCJcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGRheXM6IHtcbiAgICAgICAgXCIyMDIxLTAxLTAxXCI6IHtcbiAgICAgICAgICAgIGlkOiBcIjIwMjEtMDEtMDFcIixcbiAgICAgICAgICAgIGNlbGxzOiBbXCJoYXBweVwiLCBcImJyZWFkXCIsIFwid2F0ZXJcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCIyMDIxLTAxLTA1XCI6IHtcbiAgICAgICAgICAgIGlkOiBcIjIwMjEtMDEtMDVcIixcbiAgICAgICAgICAgIGNlbGxzOiBbXCJzYWRcIiwgXCJwb3RhdG9lc1wiLCBcImNvZmZlZVwiLCBcImlyb25cIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCIyMDIxLTAxLTEyXCI6IHtcbiAgICAgICAgICAgIGlkOiBcIjIwMjEtMDEtMTJcIixcbiAgICAgICAgICAgIGNlbGxzOiBbXCJtb3RpdmF0ZWRcIiwgXCJwYXN0YVwiLCBcIndhdGVyXCIsIFwiemlua1wiXVxuICAgICAgICB9LFxuICAgICAgICBcIjIwMjEtMDEtMjFcIjoge1xuICAgICAgICAgICAgaWQ6IFwiMjAyMS0wMS0yMVwiLFxuICAgICAgICAgICAgY2VsbHM6IFtcImhhcHB5XCIsIFwicmljZVwiLCBcIndpbmVcIiwgXCJ6aW5rXCIsIFwiaXJvblwiXVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNlbGxSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfQ0VMTDoge1xuICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHsgZGF5SWQsIGNlbGxOYW1lIH0gPSBwYXlsb2FkXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGRheXM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXMsXG4gICAgICAgICAgICAgICAgICAgIFtkYXlJZF06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXlJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdPy5jZWxscyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhc2UgUkVNT1ZFX0NFTEw6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYWN0aW9uXG4gICAgICAgICAgICBjb25zdCB7IGRheUlkLCBjZWxsTmFtZSB9ID0gcGF5bG9hZFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBkYXlzOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzLFxuICAgICAgICAgICAgICAgICAgICBbZGF5SWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IGRlbGV0ZUl0ZW0oc3RhdGU/LmRheXNbZGF5SWRdPy5jZWxscywgY2VsbE5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

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

/***/ "./utils/initAuth.js":
/*!***************************!*\
  !*** ./utils/initAuth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n //import * as admin from \"firebase-admin\"\n// var firebaseui = require('firebaseui')\n// var ui = new firebaseui.auth.AuthUI(firebase.auth())\n// var uiConfig = {\n//     callbacks: {\n//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {\n//         // User successfully signed in.\n//         // Return type determines whether we continue the redirect automatically\n//         // or whether we leave that to developer to handle.\n//         return true;\n//       },\n//       uiShown: function() {\n//         // The widget is rendered.\n//         // Hide the loader.\n//         document.getElementById('loader').style.display = 'none'\n//       }\n//     },\n//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.\n//     signInFlow: 'popup',\n//     signInSuccessUrl: '<url-to-redirect-to-on-success>',\n//     signInOptions: [\n//       // Leave the lines as is for the providers you want to offer your users.\n//       firebase.auth.EmailAuthProvider.PROVIDER_ID,\n//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,\n//     ],\n//     // Terms of service url.\n//     tosUrl: '<your-tos-url>',\n//     // Privacy policy url.\n//     privacyPolicyUrl: '<your-privacy-policy-url>'\n//   };\n// ui.start('#firebaseui-auth-container', uiConfig)\n// export default ui\n\nconst initAuth = () => {\n  Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__[\"init\"])({\n    debug: false,\n    authPageURL: '/auth',\n    appPageURL: '/',\n    loginAPIEndpoint: '/api/login',\n    // required\n    logoutAPIEndpoint: '/api/logout',\n    // required\n    firebaseAdminInitConfig: {\n      credential: {\n        projectId: 'lifelogging-20c8a',\n        clientEmail: 'lifelogging-20c8a@appspot.gserviceaccount.com',\n        // The private key must not be accesssible on the client side.\n        privateKey: process.env.FIREBASE_PRIVATE_KEY\n      },\n      databaseURL: \"https://lifelogging-20c8a-default-rtdb.europe-west1.firebasedatabase.app\"\n    },\n    firebaseClientInitConfig: {\n      apiKey: 'AIzaSyD61dFVqFCDh029N8Rr_PQjhJg5xAFOcRk',\n      // required\n      authDomain: 'lifelogging-20c8a.firebaseapp.com',\n      databaseURL: 'https://lifelogging-20c8a.firebaseio.com',\n      projectId: 'lifelogging-20c8a'\n    },\n    cookies: {\n      name: 'lifelogging',\n      // required\n      // Keys are required unless you set `signed` to `false`.\n      // The keys cannot be accessible on the client side.\n      keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],\n      httpOnly: true,\n      maxAge: 12 * 60 * 60 * 24 * 1000,\n      // twelve days\n      overwrite: true,\n      path: '/',\n      sameSite: 'strict',\n      secure: false,\n      // set this to false in local (non-HTTPS) development\n      signed: false\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbml0QXV0aC5qcz84MzQ1Il0sIm5hbWVzIjpbImluaXRBdXRoIiwiaW5pdCIsImRlYnVnIiwiYXV0aFBhZ2VVUkwiLCJhcHBQYWdlVVJMIiwibG9naW5BUElFbmRwb2ludCIsImxvZ291dEFQSUVuZHBvaW50IiwiZmlyZWJhc2VBZG1pbkluaXRDb25maWciLCJjcmVkZW50aWFsIiwicHJvamVjdElkIiwiY2xpZW50RW1haWwiLCJwcml2YXRlS2V5IiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX1BSSVZBVEVfS0VZIiwiZGF0YWJhc2VVUkwiLCJmaXJlYmFzZUNsaWVudEluaXRDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiY29va2llcyIsIm5hbWUiLCJrZXlzIiwiQ09PS0lFX1NFQ1JFVF9DVVJSRU5UIiwiQ09PS0lFX1NFQ1JFVF9QUkVWSU9VUyIsImh0dHBPbmx5IiwibWF4QWdlIiwib3ZlcndyaXRlIiwicGF0aCIsInNhbWVTaXRlIiwic2VjdXJlIiwic2lnbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Q0FDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ25CQyxpRUFBSSxDQUFDO0FBQ0RDLFNBQUssRUFBRSxLQUROO0FBRURDLGVBQVcsRUFBRSxPQUZaO0FBR0RDLGNBQVUsRUFBRSxHQUhYO0FBSURDLG9CQUFnQixFQUFFLFlBSmpCO0FBSStCO0FBQ2hDQyxxQkFBaUIsRUFBRSxhQUxsQjtBQUtpQztBQUNsQ0MsMkJBQXVCLEVBQUU7QUFDckJDLGdCQUFVLEVBQUU7QUFDVkMsaUJBQVMsRUFBRSxtQkFERDtBQUVWQyxtQkFBVyxFQUFFLCtDQUZIO0FBR1Y7QUFDQUMsa0JBQVUsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBSmQsT0FEUztBQU9yQkMsaUJBQVcsRUFBRTtBQVBRLEtBTnhCO0FBZURDLDRCQUF3QixFQUFFO0FBQ3RCQyxZQUFNLEVBQUUseUNBRGM7QUFDNkI7QUFDbkRDLGdCQUFVLEVBQUUsbUNBRlU7QUFHdEJILGlCQUFXLEVBQUUsMENBSFM7QUFJdEJOLGVBQVMsRUFBRTtBQUpXLEtBZnpCO0FBcUJEVSxXQUFPLEVBQUU7QUFDTEMsVUFBSSxFQUFFLGFBREQ7QUFDZ0I7QUFDckI7QUFDQTtBQUNBQyxVQUFJLEVBQUUsQ0FDSlQsT0FBTyxDQUFDQyxHQUFSLENBQVlTLHFCQURSLEVBRUpWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxzQkFGUixDQUpEO0FBUUxDLGNBQVEsRUFBRSxJQVJMO0FBU0xDLFlBQU0sRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsRUFBZixHQUFvQixJQVR2QjtBQVM2QjtBQUNsQ0MsZUFBUyxFQUFFLElBVk47QUFXTEMsVUFBSSxFQUFFLEdBWEQ7QUFZTEMsY0FBUSxFQUFFLFFBWkw7QUFhTEMsWUFBTSxFQUFFLEtBYkg7QUFhVTtBQUNmQyxZQUFNLEVBQUU7QUFkSDtBQXJCUixHQUFELENBQUo7QUFzQ0gsQ0F2Q0Q7O0FBeUNlOUIsdUVBQWYiLCJmaWxlIjoiLi91dGlscy9pbml0QXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXQgfSBmcm9tIFwibmV4dC1maXJlYmFzZS1hdXRoXCJcbi8vaW1wb3J0ICogYXMgYWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCJcblxuLy8gdmFyIGZpcmViYXNldWkgPSByZXF1aXJlKCdmaXJlYmFzZXVpJylcblxuLy8gdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKVxuXG4vLyB2YXIgdWlDb25maWcgPSB7XG4vLyAgICAgY2FsbGJhY2tzOiB7XG4vLyAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IGZ1bmN0aW9uKGF1dGhSZXN1bHQsIHJlZGlyZWN0VXJsKSB7XG4vLyAgICAgICAgIC8vIFVzZXIgc3VjY2Vzc2Z1bGx5IHNpZ25lZCBpbi5cbi8vICAgICAgICAgLy8gUmV0dXJuIHR5cGUgZGV0ZXJtaW5lcyB3aGV0aGVyIHdlIGNvbnRpbnVlIHRoZSByZWRpcmVjdCBhdXRvbWF0aWNhbGx5XG4vLyAgICAgICAgIC8vIG9yIHdoZXRoZXIgd2UgbGVhdmUgdGhhdCB0byBkZXZlbG9wZXIgdG8gaGFuZGxlLlxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgIH0sXG4vLyAgICAgICB1aVNob3duOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cbi8vICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuLy8gICAgICAgfVxuLy8gICAgIH0sXG4vLyAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxuLy8gICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXG4vLyAgICAgc2lnbkluU3VjY2Vzc1VybDogJzx1cmwtdG8tcmVkaXJlY3QtdG8tb24tc3VjY2Vzcz4nLFxuLy8gICAgIHNpZ25Jbk9wdGlvbnM6IFtcbi8vICAgICAgIC8vIExlYXZlIHRoZSBsaW5lcyBhcyBpcyBmb3IgdGhlIHByb3ZpZGVycyB5b3Ugd2FudCB0byBvZmZlciB5b3VyIHVzZXJzLlxuLy8gICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbi8vICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuLy8gICAgIF0sXG4vLyAgICAgLy8gVGVybXMgb2Ygc2VydmljZSB1cmwuXG4vLyAgICAgdG9zVXJsOiAnPHlvdXItdG9zLXVybD4nLFxuLy8gICAgIC8vIFByaXZhY3kgcG9saWN5IHVybC5cbi8vICAgICBwcml2YWN5UG9saWN5VXJsOiAnPHlvdXItcHJpdmFjeS1wb2xpY3ktdXJsPidcbi8vICAgfTtcblxuLy8gdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlDb25maWcpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IHVpXG5cbmNvbnN0IGluaXRBdXRoID0gKCkgPT4ge1xuICAgIGluaXQoe1xuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIGF1dGhQYWdlVVJMOiAnL2F1dGgnLFxuICAgICAgICBhcHBQYWdlVVJMOiAnLycsXG4gICAgICAgIGxvZ2luQVBJRW5kcG9pbnQ6ICcvYXBpL2xvZ2luJywgLy8gcmVxdWlyZWRcbiAgICAgICAgbG9nb3V0QVBJRW5kcG9pbnQ6ICcvYXBpL2xvZ291dCcsIC8vIHJlcXVpcmVkXG4gICAgICAgIGZpcmViYXNlQWRtaW5Jbml0Q29uZmlnOiB7XG4gICAgICAgICAgICBjcmVkZW50aWFsOiB7XG4gICAgICAgICAgICAgIHByb2plY3RJZDogJ2xpZmVsb2dnaW5nLTIwYzhhJyxcbiAgICAgICAgICAgICAgY2xpZW50RW1haWw6ICdsaWZlbG9nZ2luZy0yMGM4YUBhcHBzcG90LmdzZXJ2aWNlYWNjb3VudC5jb20nLFxuICAgICAgICAgICAgICAvLyBUaGUgcHJpdmF0ZSBrZXkgbXVzdCBub3QgYmUgYWNjZXNzc2libGUgb24gdGhlIGNsaWVudCBzaWRlLlxuICAgICAgICAgICAgICBwcml2YXRlS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUklWQVRFX0tFWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2xpZmVsb2dnaW5nLTIwYzhhLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICAgICAgfSxcbiAgICAgICAgZmlyZWJhc2VDbGllbnRJbml0Q29uZmlnOiB7XG4gICAgICAgICAgICBhcGlLZXk6ICdBSXphU3lENjFkRlZxRkNEaDAyOU44UnJfUFFqaEpnNXhBRk9jUmsnLCAvLyByZXF1aXJlZFxuICAgICAgICAgICAgYXV0aERvbWFpbjogJ2xpZmVsb2dnaW5nLTIwYzhhLmZpcmViYXNlYXBwLmNvbScsXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vbGlmZWxvZ2dpbmctMjBjOGEuZmlyZWJhc2Vpby5jb20nLFxuICAgICAgICAgICAgcHJvamVjdElkOiAnbGlmZWxvZ2dpbmctMjBjOGEnLFxuICAgICAgICB9LFxuICAgICAgICBjb29raWVzOiB7XG4gICAgICAgICAgICBuYW1lOiAnbGlmZWxvZ2dpbmcnLCAvLyByZXF1aXJlZFxuICAgICAgICAgICAgLy8gS2V5cyBhcmUgcmVxdWlyZWQgdW5sZXNzIHlvdSBzZXQgYHNpZ25lZGAgdG8gYGZhbHNlYC5cbiAgICAgICAgICAgIC8vIFRoZSBrZXlzIGNhbm5vdCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSBjbGllbnQgc2lkZS5cbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF9DVVJSRU5ULFxuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVUX1BSRVZJT1VTLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgbWF4QWdlOiAxMiAqIDYwICogNjAgKiAyNCAqIDEwMDAsIC8vIHR3ZWx2ZSBkYXlzXG4gICAgICAgICAgICBvdmVyd3JpdGU6IHRydWUsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICAgICAgICBzZWN1cmU6IGZhbHNlLCAvLyBzZXQgdGhpcyB0byBmYWxzZSBpbiBsb2NhbCAobm9uLUhUVFBTKSBkZXZlbG9wbWVudFxuICAgICAgICAgICAgc2lnbmVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/initAuth.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-firebase-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWZpcmViYXNlLWF1dGhcIj9jMjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtZmlyZWJhc2UtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZmlyZWJhc2UtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-firebase-auth\n");

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