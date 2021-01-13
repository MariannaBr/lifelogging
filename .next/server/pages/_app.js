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

/***/ "./components/Category.js":
/*!********************************!*\
  !*** ./components/Category.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"./components/Cell.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/selectors */ \"./redux/selectors.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Category.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction Category(props) {\n  const {\n    0: isOpen,\n    1: SetIsOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  isOpen && Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__[\"addCategory\"])(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative inline-block text-left\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: () => SetIsOpen(!isOpen),\n        className: `inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-${props.bg}-300 text-lg font-medium text-gray-700\n                 hover:bg-${props.bg}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300`,\n        id: \"mood\",\n        \"aria-haspopup\": \"true\",\n        \"aria-expanded\": \"true\",\n        children: [\" \", props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"origin-top-right absolute right-0 mt-2 w-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"py-1\",\n        role: \"menu\",\n        \"aria-orientation\": \"vertical\",\n        \"aria-labelledby\": \"options-menu\",\n        children: props.cells.map(cell => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          name: cell.name,\n          bg: props.bg\n        }, cell.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 46\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 24\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n}\n\nconst mapStateToProps = state => {\n  const {\n    cell,\n    cells\n  } = state.cellsList || {};\n  const cellsList = cells ? cells.map(name => cell ? _objectSpread(_objectSpread({}, cell[name]), {}, {\n    name\n  }) : null) : null;\n  return {\n    cellsList\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(Category)); //export default connect(state => ({cells: getCells(state)}))(Category)\n//export default Category//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzP2MwZDQiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJwcm9wcyIsImlzT3BlbiIsIlNldElzT3BlbiIsInVzZVN0YXRlIiwiYWRkQ2F0ZWdvcnkiLCJiZyIsIm5hbWUiLCJjZWxscyIsIm1hcCIsImNlbGwiLCJpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2VsbHNMaXN0IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFFckIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFFQUYsUUFBTSxJQUFJRyxrRUFBVyxDQUFDSixLQUFELENBQXJCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFLE1BQUtFLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQTdDO0FBQXdELGlCQUFTLEVBQUcsOEZBQTZGRCxLQUFLLENBQUNLLEVBQUc7QUFDMUwsNEJBQTRCTCxLQUFLLENBQUNLLEVBQUcseUdBRHJCO0FBRUMsVUFBRSxFQUFDLE1BRko7QUFFVyx5QkFBYyxNQUZ6QjtBQUVnQyx5QkFBYyxNQUY5QztBQUFBLHdCQUV1REwsS0FBSyxDQUFDTSxJQUY3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFnQktMLE1BQU0saUJBQUk7QUFBSyxlQUFTLEVBQUMsK0NBQWY7QUFBQSw2QkFDUDtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFzQixZQUFJLEVBQUMsTUFBM0I7QUFBa0MsNEJBQWlCLFVBQW5EO0FBQThELDJCQUFnQixjQUE5RTtBQUFBLGtCQUNLRCxLQUFLLENBQUNPLEtBQU4sQ0FBWUMsR0FBWixDQUFnQkMsSUFBSSxpQkFBSSxxRUFBQyw2Q0FBRDtBQUFvQixjQUFJLEVBQUVBLElBQUksQ0FBQ0gsSUFBL0I7QUFBcUMsWUFBRSxFQUFFTixLQUFLLENBQUNLO0FBQS9DLFdBQVdJLElBQUksQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBeEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDs7QUFFRCxNQUFNQyxlQUFlLEdBQUdDLEtBQUssSUFBSTtBQUM3QixRQUFNO0FBQUNILFFBQUQ7QUFBT0Y7QUFBUCxNQUFnQkssS0FBSyxDQUFDQyxTQUFOLElBQW1CLEVBQXpDO0FBQ0EsUUFBTUEsU0FBUyxHQUFHTixLQUFLLEdBQUdBLEtBQUssQ0FBQ0MsR0FBTixDQUFVRixJQUFJLElBQUtHLElBQUksbUNBQU9BLElBQUksQ0FBQ0gsSUFBRCxDQUFYO0FBQW1CQTtBQUFuQixPQUEyQixJQUFsRCxDQUFILEdBQThELElBQXJGO0FBQ0EsU0FBTztBQUFDTztBQUFELEdBQVA7QUFDSCxDQUpEOztBQU1lQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJaLFFBQXpCLENBQWYsRSxDQUNBO0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGdldENlbGxzIH0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiXG5pbXBvcnQgeyBhZGRDYXRlZ29yeSB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCIgXG5cbmZ1bmN0aW9uIENhdGVnb3J5KHByb3BzKSB7XG5cbiAgICBjb25zdCBbaXNPcGVuLCBTZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBpc09wZW4gJiYgYWRkQ2F0ZWdvcnkocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PiBTZXRJc09wZW4oIWlzT3Blbil9IGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHB4LTQgcHktMiBiZy0ke3Byb3BzLmJnfS0zMDAgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXG4gICAgICAgICAgICAgICAgIGhvdmVyOmJnLSR7cHJvcHMuYmd9LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS0xMDAgZm9jdXM6cmluZy1ncmF5LTMwMGB9XG4gICAgICAgICAgICAgICAgIGlkPVwibW9vZFwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIj4ge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgIHsvKiBEcm9wZG93biBwYW5lbCwgc2hvdy9oaWRlIGJhc2VkIG9uIGRyb3Bkb3duIHN0YXRlLlxuXG4gICAgRW50ZXJpbmc6IFwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgRnJvbTogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgIExlYXZpbmc6IFwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1XCJcbiAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCIgKi99XG4gICAgICAgICAgICB7aXNPcGVuICYmIDxkaXYgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xXCIgcm9sZT1cIm1lbnVcIiBhcmlhLW9yaWVudGF0aW9uPVwidmVydGljYWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJvcHRpb25zLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNlbGxzLm1hcChjZWxsID0+IDxDZWxsIGtleT17Y2VsbC5pZH0gbmFtZT17Y2VsbC5uYW1lfSBiZz17cHJvcHMuYmd9Lz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgICBjb25zdCB7Y2VsbCwgY2VsbHN9ID0gc3RhdGUuY2VsbHNMaXN0IHx8IHt9XG4gICAgY29uc3QgY2VsbHNMaXN0ID0gY2VsbHMgPyBjZWxscy5tYXAobmFtZSA9PiAoY2VsbCA/IHsuLi5jZWxsW25hbWVdLCBuYW1lfSA6IG51bGwpKSA6IG51bGxcbiAgICByZXR1cm4ge2NlbGxzTGlzdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhdGVnb3J5KVxuLy9leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7Y2VsbHM6IGdldENlbGxzKHN0YXRlKX0pKShDYXRlZ29yeSlcblxuLy9leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Category.js\n");

/***/ }),

/***/ "./components/Cell.js":
/*!****************************!*\
  !*** ./components/Cell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Cell.js\";\n\n\n\n\nfunction Cell(props) {\n  const {\n    0: picked,\n    1: setpicked\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: items,\n    1: setItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  function HandleOnClick() {\n    setpicked(!picked);\n    props.addCell(props.name); // setItems((prevItems) => {\n    //     return [...prevItems, props.name]\n    //     })\n  }\n\n  console.log(items);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: HandleOnClick,\n      className: `justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 ${picked ? \"bg-\" + props.bg + \"-300\" : \"bg-\" + props.bg + \"-100\"}  \n            block px-4 py-2 text-sm text-gray-700 hover:bg-${props.bg}-200 hover:text-gray-900 focus:outline-none`,\n      role: \"menuitem\",\n      id: props.id,\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": \"true\",\n      children: [\" \", props.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null, {\n  addCell: _redux_actions__WEBPACK_IMPORTED_MODULE_3__[\"addCell\"]\n})(Cell));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlbGwuanM/MjQzMiJdLCJuYW1lcyI6WyJDZWxsIiwicHJvcHMiLCJwaWNrZWQiLCJzZXRwaWNrZWQiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJIYW5kbGVPbkNsaWNrIiwiYWRkQ2VsbCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiYmciLCJpZCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBRWpCLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsV0FBU0csYUFBVCxHQUF5QjtBQUNyQkosYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNBRCxTQUFLLENBQUNPLE9BQU4sQ0FBY1AsS0FBSyxDQUFDUSxJQUFwQixFQUZxQixDQUlyQjtBQUNBO0FBQ0E7QUFDQzs7QUFFTEMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVo7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFRSxhQUEvQjtBQUE4QyxlQUFTLEVBQUcsMEVBQXlFTCxNQUFNLEdBQUUsUUFBTUQsS0FBSyxDQUFDVyxFQUFaLEdBQWUsTUFBakIsR0FBMEIsUUFBTVgsS0FBSyxDQUFDVyxFQUFaLEdBQWUsTUFBTztBQUNyTSw2REFBNkRYLEtBQUssQ0FBQ1csRUFBRyw2Q0FEMUQ7QUFDd0csVUFBSSxFQUFDLFVBRDdHO0FBRUksUUFBRSxFQUFFWCxLQUFLLENBQUNZLEVBRmQ7QUFFa0IsdUJBQWMsTUFGaEM7QUFFdUMsdUJBQWMsTUFGckQ7QUFBQSxzQkFFOERaLEtBQUssQ0FBQ1EsSUFGcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0FBRWNLLDBIQUFPLENBQUMsSUFBRCxFQUFPO0FBQUNOLGlFQUFPQTtBQUFSLENBQVAsQ0FBUCxDQUF5QlIsSUFBekIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2VsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgYWRkQ2VsbCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCIgXG5cbmZ1bmN0aW9uIENlbGwocHJvcHMpIHtcblxuICAgIGNvbnN0IFtwaWNrZWQsIHNldHBpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgZnVuY3Rpb24gSGFuZGxlT25DbGljaygpIHtcbiAgICAgICAgc2V0cGlja2VkKCFwaWNrZWQpXG4gICAgICAgIHByb3BzLmFkZENlbGwocHJvcHMubmFtZSlcblxuICAgICAgICAvLyBzZXRJdGVtcygocHJldkl0ZW1zKSA9PiB7XG4gICAgICAgIC8vICAgICByZXR1cm4gWy4uLnByZXZJdGVtcywgcHJvcHMubmFtZV1cbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhpdGVtcylcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17SGFuZGxlT25DbGlja30gY2xhc3NOYW1lPXtganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHB4LTIgcHktMiAke3BpY2tlZD8gXCJiZy1cIitwcm9wcy5iZytcIi0zMDBcIiA6IFwiYmctXCIrcHJvcHMuYmcrXCItMTAwXCJ9ICBcbiAgICAgICAgICAgIGJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctJHtwcm9wcy5iZ30tMjAwIGhvdmVyOnRleHQtZ3JheS05MDAgZm9jdXM6b3V0bGluZS1ub25lYH0gcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIj4ge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHthZGRDZWxsfSkoQ2VsbCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cell.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Today */ \"./components/Today.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Header.js\";\n\n\nfunction Header(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-20 mb-20 relative flex justify-center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-5xl font-bold text-green-300\",\n        children: [\"Hi \", props.name, \", how is your day?\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Today__WEBPACK_IMPORTED_MODULE_1__[\"Today\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDbkIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMENBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLG1DQUFkO0FBQUEsMEJBQ1FBLEtBQUssQ0FBQ0MsSUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLHFFQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7QUFFY0YscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9kYXl9IGZyb20gXCIuL1RvZGF5XCJcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBtYi0yMCByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICBIaSB7cHJvcHMubmFtZX0sIGhvdyBpcyB5b3VyIGRheT9cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxUb2RheSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Today.js":
/*!*****************************!*\
  !*** ./components/Today.js ***!
  \*****************************/
/*! exports provided: Today, today */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Today\", function() { return Today; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"today\", function() { return today; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Today.js\";\nlet d = new Date();\nlet year = d.getFullYear();\nlet month_num = d.getMonth();\nconst months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\nlet month = months[month_num];\nlet day = d.getDate();\nlet weekday_num = d.getDay();\nconst weekdays = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\nlet weekday = weekdays[weekday_num];\nlet today = weekday + \", \" + day.toString() + \" \" + month + \" \" + year.toString();\n\nfunction Today() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"text-green-300 font-semibold text-3xl relative flex justify-center p-4 \",\n    children: today\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZGF5LmpzPzA3ZDciXSwibmFtZXMiOlsiZCIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aF9udW0iLCJnZXRNb250aCIsIm1vbnRocyIsIm1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsIndlZWtkYXlfbnVtIiwiZ2V0RGF5Iiwid2Vla2RheXMiLCJ3ZWVrZGF5IiwidG9kYXkiLCJ0b1N0cmluZyIsIlRvZGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsSUFBSUEsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBUjtBQUNBLElBQUlDLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxXQUFGLEVBQVg7QUFDQSxJQUFJQyxTQUFTLEdBQUdKLENBQUMsQ0FBQ0ssUUFBRixFQUFoQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBQWY7QUFDQSxJQUFJQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0YsU0FBRCxDQUFsQjtBQUNBLElBQUlJLEdBQUcsR0FBR1IsQ0FBQyxDQUFDUyxPQUFGLEVBQVY7QUFDQSxJQUFJQyxXQUFXLEdBQUdWLENBQUMsQ0FBQ1csTUFBRixFQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCLEVBQWdDLFdBQWhDLEVBQTZDLFVBQTdDLEVBQXlELFFBQXpELEVBQW1FLFVBQW5FLENBQWpCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxRQUFRLENBQUNGLFdBQUQsQ0FBdEI7QUFDQSxJQUFJSSxLQUFLLEdBQUdELE9BQU8sR0FBRyxJQUFWLEdBQWlCTCxHQUFHLENBQUNPLFFBQUosRUFBakIsR0FBa0MsR0FBbEMsR0FBd0NSLEtBQXhDLEdBQWdELEdBQWhELEdBQXNETCxJQUFJLENBQUNhLFFBQUwsRUFBbEU7O0FBRUEsU0FBU0MsS0FBVCxHQUFpQjtBQUViLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlFQUFmO0FBQUEsY0FDS0Y7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvVG9kYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmxldCBkID0gbmV3IERhdGUoKVxubGV0IHllYXIgPSBkLmdldEZ1bGxZZWFyKClcbmxldCBtb250aF9udW0gPSBkLmdldE1vbnRoKClcbmNvbnN0IG1vbnRocyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdXG5sZXQgbW9udGggPSBtb250aHNbbW9udGhfbnVtXVxubGV0IGRheSA9IGQuZ2V0RGF0ZSgpXG5sZXQgd2Vla2RheV9udW0gPSBkLmdldERheSgpXG5jb25zdCB3ZWVrZGF5cyA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG5sZXQgd2Vla2RheSA9IHdlZWtkYXlzW3dlZWtkYXlfbnVtXVxubGV0IHRvZGF5ID0gd2Vla2RheSArIFwiLCBcIiArIGRheS50b1N0cmluZygpICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgeWVhci50b1N0cmluZygpXG5cbmZ1bmN0aW9uIFRvZGF5KCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi0zMDAgZm9udC1zZW1pYm9sZCB0ZXh0LTN4bCByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIHAtNCBcIj5cbiAgICAgICAgICAgIHt0b2RheX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgeyBUb2RheSwgdG9kYXkgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Today.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ \"./pages/index.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/_app.js\";\n\n\n\n\n\nfunction MyApp(params) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(___WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJwYXJhbXMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLE1BQWYsRUFBdUI7QUFDbkIsc0JBQ0kscUVBQUUsb0RBQUY7QUFBVyxTQUFLLEVBQUVDLG9EQUFsQjtBQUFBLDJCQUNJLHFFQUFFLHlDQUFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi5cIlxuXG5mdW5jdGlvbiBNeUFwcChwYXJhbXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8IFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8IEhvbWVQYWdlIC8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Category */ \"./components/Category.js\");\n/* harmony import */ var _public_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/inputs */ \"./public/inputs.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/index.js\";\n\n\n\n\nfunction HomePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mx-8 lg:mx-32\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"Marianna\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-between\",\n      children: _public_inputs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].categories.map(cat => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: cat.name,\n        bg: cat.color,\n        cells: cat.cells\n      }, cat.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 47\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiaW5wdXRzIiwiY2F0ZWdvcmllcyIsIm1hcCIsImNhdCIsIm5hbWUiLCJjb2xvciIsImNlbGxzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFFaEIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNJLHFFQUFDLDBEQUFEO0FBQVEsVUFBSSxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSxnQkFDS0Msc0RBQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsR0FBbEIsQ0FBc0JDLEdBQUcsaUJBQUkscUVBQUMsNERBQUQ7QUFBdUIsWUFBSSxFQUFFQSxHQUFHLENBQUNDLElBQWpDO0FBQXVDLFVBQUUsRUFBRUQsR0FBRyxDQUFDRSxLQUEvQztBQUFzRCxhQUFLLEVBQUVGLEdBQUcsQ0FBQ0c7QUFBakUsU0FBZUgsR0FBRyxDQUFDSSxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQTdCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0FBRWNSLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2F0ZWdvcnlcIlxuaW1wb3J0IGlucHV0cyBmcm9tIFwiLi4vcHVibGljL2lucHV0c1wiXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IGxnOm14LTMyXCI+XG4gICAgICAgICAgICA8SGVhZGVyIG5hbWU9e1wiTWFyaWFubmFcIn0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIHtpbnB1dHMuY2F0ZWdvcmllcy5tYXAoY2F0ID0+IDxDYXRlZ29yeSBrZXk9e2NhdC5pZH0gbmFtZT17Y2F0Lm5hbWV9IGJnPXtjYXQuY29sb3J9IGNlbGxzPXtjYXQuY2VsbHN9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./public/inputs.js":
/*!**************************!*\
  !*** ./public/inputs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst inputs = {\n  categories: [{\n    name: \"mood\",\n    color: 'yellow',\n    cells: [{\n      name: \"fine\"\n    }, {\n      name: \"happy\"\n    }, {\n      name: \"energetic\"\n    }, {\n      name: \"motivated\"\n    }]\n  }, {\n    name: \"food\",\n    color: 'red',\n    cells: [{\n      name: \"bread\"\n    }, {\n      name: \"potatoes\"\n    }, {\n      name: \"pasta\"\n    }, {\n      name: \"rice\"\n    }]\n  }, {\n    name: \"liquids\",\n    color: 'pink',\n    cells: [{\n      name: \"water\"\n    }, {\n      name: \"wine\"\n    }, {\n      name: \"coffee\"\n    }]\n  }, {\n    name: \"suplements\",\n    color: 'purple',\n    cells: [{\n      name: \"omega-3\"\n    }, {\n      name: \"zink\"\n    }, {\n      name: \"iron\"\n    }, {\n      name: \"BCCA\"\n    }]\n  }, {\n    name: \"workouts\",\n    color: 'indigo',\n    cells: [{\n      name: \"run\"\n    }, {\n      name: \"bike\"\n    }, {\n      name: \"swim\"\n    }]\n  }, {\n    name: \"body\",\n    color: 'blue',\n    cells: [{\n      name: \"headache\"\n    }, {\n      name: \"acne\"\n    }, {\n      name: \"tender breasts\"\n    }, {\n      name: \"backpain\"\n    }]\n  }, {\n    name: \"menst. cycle\",\n    color: 'green',\n    cells: [{\n      name: \"menstruation\"\n    }, {\n      name: \"weak bleeding\"\n    }, {\n      name: \"medium bleeding\"\n    }, {\n      name: \"heavy bleeding\"\n    }]\n  }, {\n    name: \"sleep\",\n    color: 'gray',\n    cells: [{\n      name: \"restless\"\n    }, {\n      name: \"good\"\n    }, {\n      name: \"great\"\n    }, {\n      name: \"0-4h\"\n    }, {\n      name: \"5-7h\"\n    }, {\n      name: \"8-9h\"\n    }, {\n      name: \"10-11h\"\n    }]\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputs); // mood: [\"motivated\", \"mood swings\", \"sad\", \"emotional\", \"overwelmed\", \"irritable\", \"frustrated\"]\n// food: [\"chicken\", \"fish\", \"beef\", \"cheese\", \"eggs\", \"yogurt\", \"chocolate\", \"fruits\", \"vegetables\"]\n// liquids: [\"beer\", \"white russian\", \"electrolytes\", \"tea\"]\n// suplements: [\"magnesium\", \"vitamin B\", \"multivitamin\", \"vitamin D3\"]\n// workouts: [\"strength\", \"hike\", \"flying\", \"skitour\", \"climb\"]\n// body: [\"bloating\", \"nausea\", \"cramps\", \"diarrhea\", \"constipation\", \"fatigue\", \"muscle pain - workout\", \"muscle pain - illness\"]\n// menst.cycle: [\"heavy bleeding\", \"painless\", \"painful\", \"cramps\", \"cravings\", \"follicular phase\", \"ovulation\", \"luteal phase\"]//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW5wdXRzLmpzP2VhMDUiXSwibmFtZXMiOlsiaW5wdXRzIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJjb2xvciIsImNlbGxzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBRztBQUNYQyxZQUFVLEVBQUUsQ0FBQztBQUNUQyxRQUFJLEVBQUUsTUFERztBQUVUQyxTQUFLLEVBQUUsUUFGRTtBQUdUQyxTQUFLLEVBQUUsQ0FDSDtBQUNJRixVQUFJLEVBQUU7QUFEVixLQURHLEVBR0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FIQSxFQUtBO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBTEEsRUFPQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQVBBO0FBSEUsR0FBRCxFQWNUO0FBQ0NBLFFBQUksRUFBRSxNQURQO0FBRUNDLFNBQUssRUFBRSxLQUZSO0FBR0NDLFNBQUssRUFBRSxDQUNIO0FBQ0lGLFVBQUksRUFBRTtBQURWLEtBREcsRUFHQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQUhBLEVBS0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FMQSxFQU9BO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBUEE7QUFIUixHQWRTLEVBNEJUO0FBQ0NBLFFBQUksRUFBRSxTQURQO0FBRUNDLFNBQUssRUFBRSxNQUZSO0FBR0NDLFNBQUssRUFBRSxDQUNIO0FBQ0lGLFVBQUksRUFBRTtBQURWLEtBREcsRUFHQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQUhBLEVBS0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FMQTtBQUhSLEdBNUJTLEVBd0NUO0FBQ0NBLFFBQUksRUFBRSxZQURQO0FBRUNDLFNBQUssRUFBRSxRQUZSO0FBR0NDLFNBQUssRUFBRSxDQUNIO0FBQ0lGLFVBQUksRUFBRTtBQURWLEtBREcsRUFHQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQUhBLEVBS0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FMQSxFQU9BO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBUEE7QUFIUixHQXhDUyxFQXNEVDtBQUNDQSxRQUFJLEVBQUUsVUFEUDtBQUVDQyxTQUFLLEVBQUUsUUFGUjtBQUdDQyxTQUFLLEVBQUUsQ0FDSDtBQUNJRixVQUFJLEVBQUU7QUFEVixLQURHLEVBR0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FIQSxFQUtBO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBTEE7QUFIUixHQXREUyxFQWtFVDtBQUNDQSxRQUFJLEVBQUUsTUFEUDtBQUVDQyxTQUFLLEVBQUUsTUFGUjtBQUdDQyxTQUFLLEVBQUUsQ0FDSDtBQUNJRixVQUFJLEVBQUU7QUFEVixLQURHLEVBR0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FIQSxFQUtBO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBTEEsRUFPQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQVBBO0FBSFIsR0FsRVMsRUFnRlQ7QUFDQ0EsUUFBSSxFQUFFLGNBRFA7QUFFQ0MsU0FBSyxFQUFFLE9BRlI7QUFHQ0MsU0FBSyxFQUFFLENBQ0g7QUFDSUYsVUFBSSxFQUFFO0FBRFYsS0FERyxFQUdBO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBSEEsRUFLQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQUxBLEVBT0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FQQTtBQUhSLEdBaEZTLEVBOEZUO0FBQ0NBLFFBQUksRUFBRSxPQURQO0FBRUNDLFNBQUssRUFBRSxNQUZSO0FBR0NDLFNBQUssRUFBRSxDQUNIO0FBQ0lGLFVBQUksRUFBRTtBQURWLEtBREcsRUFHQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQUhBLEVBS0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FMQSxFQU9BO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBUEEsRUFTQTtBQUNDQSxVQUFJLEVBQUU7QUFEUCxLQVRBLEVBV0E7QUFDQ0EsVUFBSSxFQUFFO0FBRFAsS0FYQSxFQWFBO0FBQ0NBLFVBQUksRUFBRTtBQURQLEtBYkE7QUFIUixHQTlGUztBQURELENBQWY7QUFzSGVGLHFFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3B1YmxpYy9pbnB1dHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnB1dHMgPSB7XG4gICAgY2F0ZWdvcmllczogW3tcbiAgICAgICAgbmFtZTogXCJtb29kXCIsXG4gICAgICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZpbmVcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImhhcHB5XCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbmVyZ2V0aWNcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vdGl2YXRlZFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcImZvb2RcIixcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICBjZWxsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiYnJlYWRcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInBvdGF0b2VzXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJwYXN0YVwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwicmljZVwiLFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcImxpcXVpZHNcIixcbiAgICAgICAgY29sb3I6ICdwaW5rJyxcbiAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIndhdGVyXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ3aW5lXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJjb2ZmZWVcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJzdXBsZW1lbnRzXCIsXG4gICAgICAgIGNvbG9yOiAncHVycGxlJyxcbiAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm9tZWdhLTNcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInppbmtcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImlyb25cIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJDQ0FcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJ3b3Jrb3V0c1wiLFxuICAgICAgICBjb2xvcjogJ2luZGlnbycsXG4gICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJydW5cIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJpa2VcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInN3aW1cIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJib2R5XCIsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJoZWFkYWNoZVwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiYWNuZVwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwidGVuZGVyIGJyZWFzdHNcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImJhY2twYWluXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwibWVuc3QuIGN5Y2xlXCIsXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuICAgICAgICBjZWxsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibWVuc3RydWF0aW9uXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ3ZWFrIGJsZWVkaW5nXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtZWRpdW0gYmxlZWRpbmdcIixcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImhlYXZ5IGJsZWVkaW5nXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwic2xlZXBcIixcbiAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInJlc3RsZXNzXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJnb29kXCIsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJncmVhdFwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiMC00aFwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiNS03aFwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiOC05aFwiLFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiMTAtMTFoXCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbnB1dHNcblxuLy8gbW9vZDogW1wibW90aXZhdGVkXCIsIFwibW9vZCBzd2luZ3NcIiwgXCJzYWRcIiwgXCJlbW90aW9uYWxcIiwgXCJvdmVyd2VsbWVkXCIsIFwiaXJyaXRhYmxlXCIsIFwiZnJ1c3RyYXRlZFwiXVxuLy8gZm9vZDogW1wiY2hpY2tlblwiLCBcImZpc2hcIiwgXCJiZWVmXCIsIFwiY2hlZXNlXCIsIFwiZWdnc1wiLCBcInlvZ3VydFwiLCBcImNob2NvbGF0ZVwiLCBcImZydWl0c1wiLCBcInZlZ2V0YWJsZXNcIl1cbi8vIGxpcXVpZHM6IFtcImJlZXJcIiwgXCJ3aGl0ZSBydXNzaWFuXCIsIFwiZWxlY3Ryb2x5dGVzXCIsIFwidGVhXCJdXG4vLyBzdXBsZW1lbnRzOiBbXCJtYWduZXNpdW1cIiwgXCJ2aXRhbWluIEJcIiwgXCJtdWx0aXZpdGFtaW5cIiwgXCJ2aXRhbWluIEQzXCJdXG4vLyB3b3Jrb3V0czogW1wic3RyZW5ndGhcIiwgXCJoaWtlXCIsIFwiZmx5aW5nXCIsIFwic2tpdG91clwiLCBcImNsaW1iXCJdXG4vLyBib2R5OiBbXCJibG9hdGluZ1wiLCBcIm5hdXNlYVwiLCBcImNyYW1wc1wiLCBcImRpYXJyaGVhXCIsIFwiY29uc3RpcGF0aW9uXCIsIFwiZmF0aWd1ZVwiLCBcIm11c2NsZSBwYWluIC0gd29ya291dFwiLCBcIm11c2NsZSBwYWluIC0gaWxsbmVzc1wiXVxuLy8gbWVuc3QuY3ljbGU6IFtcImhlYXZ5IGJsZWVkaW5nXCIsIFwicGFpbmxlc3NcIiwgXCJwYWluZnVsXCIsIFwiY3JhbXBzXCIsIFwiY3JhdmluZ3NcIiwgXCJmb2xsaWN1bGFyIHBoYXNlXCIsIFwib3Z1bGF0aW9uXCIsIFwibHV0ZWFsIHBoYXNlXCJdIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/inputs.js\n");

/***/ }),

/***/ "./redux/actionTypes.js":
/*!******************************!*\
  !*** ./redux/actionTypes.js ***!
  \******************************/
/*! exports provided: ADD_DAY, ADD_CATEGORY, ADD_CELL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_DAY\", function() { return ADD_DAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_CATEGORY\", function() { return ADD_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_CELL\", function() { return ADD_CELL; });\nconst ADD_DAY = \"ADD_DAY\";\nconst ADD_CATEGORY = \"ADD_CATEGORY\";\nconst ADD_CELL = \"ADD_CELL\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25UeXBlcy5qcz80ZjEyIl0sIm5hbWVzIjpbIkFERF9EQVkiLCJBRERfQ0FURUdPUlkiLCJBRERfQ0VMTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25UeXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfREFZID0gXCJBRERfREFZXCJcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUlkgPSBcIkFERF9DQVRFR09SWVwiXG5leHBvcnQgY29uc3QgQUREX0NFTEwgPSBcIkFERF9DRUxMXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actionTypes.js\n");

/***/ }),

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: addDay, addCategory, addCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDay\", function() { return addDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCategory\", function() { return addCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCell\", function() { return addCell; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _components_Today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Today */ \"./components/Today.js\");\n\n\nlet dayId = _components_Today__WEBPACK_IMPORTED_MODULE_1__[\"today\"];\nconst addDay = content => ({\n  type: ADD_DAY,\n  payload: {\n    id: dayId,\n    content\n  }\n});\nconst addCategory = props => ({\n  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CATEGORY\"],\n  payload: {\n    name: props.name,\n    cells: [props.cells]\n  }\n});\nconst addCell = name => ({\n  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CELL\"],\n  payload: {\n    name\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzPzY2OTAiXSwibmFtZXMiOlsiZGF5SWQiLCJ0b2RheSIsImFkZERheSIsImNvbnRlbnQiLCJ0eXBlIiwiQUREX0RBWSIsInBheWxvYWQiLCJpZCIsImFkZENhdGVnb3J5IiwicHJvcHMiLCJBRERfQ0FURUdPUlkiLCJuYW1lIiwiY2VsbHMiLCJhZGRDZWxsIiwiQUREX0NFTEwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUdDLHVEQUFaO0FBRU8sTUFBTUMsTUFBTSxHQUFHQyxPQUFPLEtBQUs7QUFDOUJDLE1BQUksRUFBRUMsT0FEd0I7QUFFOUJDLFNBQU8sRUFBRTtBQUNMQyxNQUFFLEVBQUVQLEtBREM7QUFFTEc7QUFGSztBQUZxQixDQUFMLENBQXRCO0FBUUEsTUFBTUssV0FBVyxHQUFJQyxLQUFELEtBQVk7QUFDbkNMLE1BQUksRUFBRU0seURBRDZCO0FBRW5DSixTQUFPLEVBQUU7QUFDTEssUUFBSSxFQUFFRixLQUFLLENBQUNFLElBRFA7QUFFTEMsU0FBSyxFQUFFLENBQUNILEtBQUssQ0FBQ0csS0FBUDtBQUZGO0FBRjBCLENBQVosQ0FBcEI7QUFRQSxNQUFNQyxPQUFPLEdBQUdGLElBQUksS0FBSztBQUM1QlAsTUFBSSxFQUFFVSxxREFEc0I7QUFFNUJSLFNBQU8sRUFBRTtBQUFDSztBQUFEO0FBRm1CLENBQUwsQ0FBcEIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX0NBVEVHT1JZLCBBRERfQ0VMTH0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIlxuaW1wb3J0IHt0b2RheX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kYXlcIlxuXG5sZXQgZGF5SWQgPSB0b2RheVxuXG5leHBvcnQgY29uc3QgYWRkRGF5ID0gY29udGVudCA9PiAoe1xuICAgIHR5cGU6IEFERF9EQVksXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBpZDogZGF5SWQsXG4gICAgICAgIGNvbnRlbnRcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgYWRkQ2F0ZWdvcnkgPSAocHJvcHMpID0+ICh7XG4gICAgdHlwZTogQUREX0NBVEVHT1JZLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgY2VsbHM6IFtwcm9wcy5jZWxsc11cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgYWRkQ2VsbCA9IG5hbWUgPT4gKHtcbiAgICB0eXBlOiBBRERfQ0VMTCxcbiAgICBwYXlsb2FkOiB7bmFtZX1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions.js\n");

/***/ }),

/***/ "./redux/reducer.js":
/*!**************************!*\
  !*** ./redux/reducer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootReducer; });\nfunction rootReducer(state = {}, action) {\n  return {};\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzPzE0NDQiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQUssR0FBQyxFQUEzQixFQUErQkMsTUFBL0IsRUFBdUM7QUFDbEQsU0FBTyxFQUFQO0FBR0giLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGU9e30sIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducer.js\n");

/***/ }),

/***/ "./redux/selectors.js":
/*!****************************!*\
  !*** ./redux/selectors.js ***!
  \****************************/
/*! exports provided: getCellState, getCategory, getCellByName, getCells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCellState\", function() { return getCellState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCategory\", function() { return getCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCellByName\", function() { return getCellByName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCells\", function() { return getCells; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst getCellState = store => store.cells;\nconst getCategory = store => getCellState(store) ? getCellState(store).cells : [];\nconst getCellByName = (store, name) => getCellState(store) ? _objectSpread(_objectSpread({}, getCellState(store).cell[name]), {}, {\n  name\n}) : {};\nconst getCells = store => getCategory(store).map(name => getCellByName(store, name));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zZWxlY3RvcnMuanM/YzVkOCJdLCJuYW1lcyI6WyJnZXRDZWxsU3RhdGUiLCJzdG9yZSIsImNlbGxzIiwiZ2V0Q2F0ZWdvcnkiLCJnZXRDZWxsQnlOYW1lIiwibmFtZSIsImNlbGwiLCJnZXRDZWxscyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUdDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFwQztBQUVBLE1BQU1DLFdBQVcsR0FBR0YsS0FBSyxJQUFJRCxZQUFZLENBQUNDLEtBQUQsQ0FBWixHQUFzQkQsWUFBWSxDQUFDQyxLQUFELENBQVosQ0FBb0JDLEtBQTFDLEdBQWtELEVBQS9FO0FBRUEsTUFBTUUsYUFBYSxHQUFHLENBQUNILEtBQUQsRUFBUUksSUFBUixLQUFpQkwsWUFBWSxDQUFDQyxLQUFELENBQVosbUNBQTBCRCxZQUFZLENBQUNDLEtBQUQsQ0FBWixDQUFvQkssSUFBcEIsQ0FBeUJELElBQXpCLENBQTFCO0FBQTBEQTtBQUExRCxLQUFrRSxFQUF6RztBQUVBLE1BQU1FLFFBQVEsR0FBR04sS0FBSyxJQUFJRSxXQUFXLENBQUNGLEtBQUQsQ0FBWCxDQUFtQk8sR0FBbkIsQ0FBdUJILElBQUksSUFBSUQsYUFBYSxDQUFDSCxLQUFELEVBQVFJLElBQVIsQ0FBNUMsQ0FBMUIiLCJmaWxlIjoiLi9yZWR1eC9zZWxlY3RvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0Q2VsbFN0YXRlID0gc3RvcmUgPT4gc3RvcmUuY2VsbHNcblxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5ID0gc3RvcmUgPT4gZ2V0Q2VsbFN0YXRlKHN0b3JlKSA/IGdldENlbGxTdGF0ZShzdG9yZSkuY2VsbHMgOiBbXVxuXG5leHBvcnQgY29uc3QgZ2V0Q2VsbEJ5TmFtZSA9IChzdG9yZSwgbmFtZSkgPT4gZ2V0Q2VsbFN0YXRlKHN0b3JlKSA/IHsuLi5nZXRDZWxsU3RhdGUoc3RvcmUpLmNlbGxbbmFtZV0sIG5hbWV9IDoge31cblxuZXhwb3J0IGNvbnN0IGdldENlbGxzID0gc3RvcmUgPT4gZ2V0Q2F0ZWdvcnkoc3RvcmUpLm1hcChuYW1lID0+IGdldENlbGxCeU5hbWUoc3RvcmUsIG5hbWUpKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/selectors.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./redux/reducer.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"devToolsEnhancer\"])());\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82NTI0Il0sIm5hbWVzIjpbInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImRldlRvb2xzRW5oYW5jZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsZ0RBQUQsRUFBY0MsaUZBQWdCLEVBQTlCLENBQXpCO0FBRWVILG9FQUFmIiwiZmlsZSI6Ii4vcmVkdXgvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCB7IGRldlRvb2xzRW5oYW5jZXIgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGRldlRvb2xzRW5oYW5jZXIoKSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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

/***/ })

/******/ });