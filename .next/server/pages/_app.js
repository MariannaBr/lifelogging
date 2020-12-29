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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"./components/Cell.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Category.js\";\n\n\n\nfunction Category(props) {\n  const {\n    0: isOpen,\n    1: SetIsOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    class: \"relative inline-block text-left\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: () => SetIsOpen(!isOpen),\n        className: `inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-${props.bg}-300 text-lg font-medium text-gray-700\n                 hover:bg-${props.bg}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300`,\n        id: \"mood\",\n        \"aria-haspopup\": \"true\",\n        \"aria-expanded\": \"true\",\n        children: [\" \", props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      class: \"origin-top-right absolute right-0 mt-2 w-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        class: \"py-1\",\n        role: \"menu\",\n        \"aria-orientation\": \"vertical\",\n        \"aria-labelledby\": \"options-menu\",\n        children: props.cells.map(cell => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          name: cell.name,\n          bg: props.bg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 46\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 24\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzP2MwZDQiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJwcm9wcyIsImlzT3BlbiIsIlNldElzT3BlbiIsInVzZVN0YXRlIiwiYmciLCJuYW1lIiwiY2VsbHMiLCJtYXAiLCJjZWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFFckIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7QUFFQSxzQkFDSTtBQUFLLFNBQUssRUFBQyxpQ0FBWDtBQUFBLDRCQUNJO0FBQUEsNkJBQ0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUUsTUFBS0QsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBN0M7QUFBd0QsaUJBQVMsRUFBRyw4RkFBNkZELEtBQUssQ0FBQ0ksRUFBRztBQUMxTCw0QkFBNEJKLEtBQUssQ0FBQ0ksRUFBRyx5R0FEckI7QUFFQyxVQUFFLEVBQUMsTUFGSjtBQUVXLHlCQUFjLE1BRnpCO0FBRWdDLHlCQUFjLE1BRjlDO0FBQUEsd0JBRXVESixLQUFLLENBQUNLLElBRjdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQWdCS0osTUFBTSxpQkFBSTtBQUFLLFdBQUssRUFBQywrQ0FBWDtBQUFBLDZCQUNQO0FBQUssYUFBSyxFQUFDLE1BQVg7QUFBa0IsWUFBSSxFQUFDLE1BQXZCO0FBQThCLDRCQUFpQixVQUEvQztBQUEwRCwyQkFBZ0IsY0FBMUU7QUFBQSxrQkFDS0QsS0FBSyxDQUFDTSxLQUFOLENBQVlDLEdBQVosQ0FBZ0JDLElBQUksaUJBQUkscUVBQUMsNkNBQUQ7QUFBTSxjQUFJLEVBQUVBLElBQUksQ0FBQ0gsSUFBakI7QUFBdUIsWUFBRSxFQUFFTCxLQUFLLENBQUNJO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURPO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7O0FBRWNMLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXRlZ29yeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIlxuXG5mdW5jdGlvbiBDYXRlZ29yeShwcm9wcykge1xuXG4gICAgY29uc3QgW2lzT3BlbiwgU2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PiBTZXRJc09wZW4oIWlzT3Blbil9IGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHB4LTQgcHktMiBiZy0ke3Byb3BzLmJnfS0zMDAgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXG4gICAgICAgICAgICAgICAgIGhvdmVyOmJnLSR7cHJvcHMuYmd9LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS0xMDAgZm9jdXM6cmluZy1ncmF5LTMwMGB9XG4gICAgICAgICAgICAgICAgIGlkPVwibW9vZFwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIj4ge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgIHsvKiBEcm9wZG93biBwYW5lbCwgc2hvdy9oaWRlIGJhc2VkIG9uIGRyb3Bkb3duIHN0YXRlLlxuXG4gICAgRW50ZXJpbmc6IFwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgRnJvbTogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgIExlYXZpbmc6IFwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1XCJcbiAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCIgKi99XG4gICAgICAgICAgICB7aXNPcGVuICYmIDxkaXYgY2xhc3M9XCJvcmlnaW4tdG9wLXJpZ2h0IGFic29sdXRlIHJpZ2h0LTAgbXQtMiB3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHktMVwiIHJvbGU9XCJtZW51XCIgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgYXJpYS1sYWJlbGxlZGJ5PVwib3B0aW9ucy1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jZWxscy5tYXAoY2VsbCA9PiA8Q2VsbCBuYW1lPXtjZWxsLm5hbWV9IGJnPXtwcm9wcy5iZ30vPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Category.js\n");

/***/ }),

/***/ "./components/Cell.js":
/*!****************************!*\
  !*** ./components/Cell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Cell.js\";\n\nfunction Cell(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: `justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 bg-${props.bg}-100 \n                block px-4 py-2 text-sm text-gray-700 hover:bg-${props.bg}-200 hover:text-gray-900`,\n      role: \"menuitem\",\n      id: props.id,\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": \"true\",\n      children: [\" \", props.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 17\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlbGwuanM/MjQzMiJdLCJuYW1lcyI6WyJDZWxsIiwicHJvcHMiLCJiZyIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ2pCLHNCQUNJO0FBQUEsMkJBQ1E7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFTLEVBQUcsNkVBQTRFQSxLQUFLLENBQUNDLEVBQUc7QUFDdkksaUVBQWlFRCxLQUFLLENBQUNDLEVBQUcsMEJBRDFEO0FBQ3FGLFVBQUksRUFBQyxVQUQxRjtBQUVDLFFBQUUsRUFBRUQsS0FBSyxDQUFDRSxFQUZYO0FBRWUsdUJBQWMsTUFGN0I7QUFFb0MsdUJBQWMsTUFGbEQ7QUFBQSxzQkFFMkRGLEtBQUssQ0FBQ0csSUFGakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBUUg7O0FBRWNKLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ2VsbChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHB4LTIgcHktMiBiZy0ke3Byb3BzLmJnfS0xMDAgXG4gICAgICAgICAgICAgICAgYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy0ke3Byb3BzLmJnfS0yMDAgaG92ZXI6dGV4dC1ncmF5LTkwMGB9IHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgIGlkPXtwcm9wcy5pZH0gYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPiB7cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cell.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Today */ \"./components/Today.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Header.js\";\n\n\nfunction Header(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-20 mb-20 relative flex justify-center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-5xl font-bold text-green-300\",\n        children: [\"Hi \", props.name, \", how is your day?\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Today__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDbkIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMENBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLG1DQUFkO0FBQUEsMEJBQ1FBLEtBQUssQ0FBQ0MsSUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7QUFFY0YscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2RheSBmcm9tIFwiLi9Ub2RheVwiXG5cbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgbWItMjAgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmVlbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgSGkge3Byb3BzLm5hbWV9LCBob3cgaXMgeW91ciBkYXk/XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8VG9kYXkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Today.js":
/*!*****************************!*\
  !*** ./components/Today.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Today.js\";\n\nfunction Today() {\n  let d = new Date();\n  let year = d.getFullYear();\n  let month_num = d.getMonth();\n  const months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  let month = months[month_num];\n  let day = d.getDate();\n  let weekday_num = d.getDay();\n  const weekdays = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n  let weekday = weekdays[weekday_num];\n  let today = weekday + \", \" + day.toString() + \" \" + month + \" \" + year.toString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"text-green-300 font-semibold text-3xl relative flex justify-center p-4 \",\n    children: today\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Today);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZGF5LmpzPzA3ZDciXSwibmFtZXMiOlsiVG9kYXkiLCJkIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoX251bSIsImdldE1vbnRoIiwibW9udGhzIiwibW9udGgiLCJkYXkiLCJnZXREYXRlIiwid2Vla2RheV9udW0iLCJnZXREYXkiLCJ3ZWVrZGF5cyIsIndlZWtkYXkiLCJ0b2RheSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2IsTUFBSUMsQ0FBQyxHQUFHLElBQUlDLElBQUosRUFBUjtBQUNBLE1BQUlDLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxXQUFGLEVBQVg7QUFDQSxNQUFJQyxTQUFTLEdBQUdKLENBQUMsQ0FBQ0ssUUFBRixFQUFoQjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUdELE1BQU0sQ0FBQ0YsU0FBRCxDQUFsQjtBQUNBLE1BQUlJLEdBQUcsR0FBR1IsQ0FBQyxDQUFDUyxPQUFGLEVBQVY7QUFDQSxNQUFJQyxXQUFXLEdBQUdWLENBQUMsQ0FBQ1csTUFBRixFQUFsQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCLEVBQWdDLFdBQWhDLEVBQTZDLFVBQTdDLEVBQXlELFFBQXpELEVBQW1FLFVBQW5FLENBQWpCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHRCxRQUFRLENBQUNGLFdBQUQsQ0FBdEI7QUFDQSxNQUFJSSxLQUFLLEdBQUdELE9BQU8sR0FBRyxJQUFWLEdBQWlCTCxHQUFHLENBQUNPLFFBQUosRUFBakIsR0FBa0MsR0FBbEMsR0FBd0NSLEtBQXhDLEdBQWdELEdBQWhELEdBQXNETCxJQUFJLENBQUNhLFFBQUwsRUFBbEU7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx5RUFBZjtBQUFBLGNBQ0tEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRWNmLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub2RheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gVG9kYXkoKSB7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpXG4gICAgbGV0IHllYXIgPSBkLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGhfbnVtID0gZC5nZXRNb250aCgpXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cbiAgICBsZXQgbW9udGggPSBtb250aHNbbW9udGhfbnVtXVxuICAgIGxldCBkYXkgPSBkLmdldERhdGUoKVxuICAgIGxldCB3ZWVrZGF5X251bSA9IGQuZ2V0RGF5KClcbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdXG4gICAgbGV0IHdlZWtkYXkgPSB3ZWVrZGF5c1t3ZWVrZGF5X251bV1cbiAgICBsZXQgdG9kYXkgPSB3ZWVrZGF5ICsgXCIsIFwiICsgZGF5LnRvU3RyaW5nKCkgKyBcIiBcIiArIG1vbnRoICsgXCIgXCIgKyB5ZWFyLnRvU3RyaW5nKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tMzAwIGZvbnQtc2VtaWJvbGQgdGV4dC0zeGwgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBwLTQgXCI+XG4gICAgICAgICAgICB7dG9kYXl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Today.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./pages/index.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/_app.js\";\n\n\n\nfunction MyApp(params) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(___WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLE1BQWYsRUFBdUI7QUFDbkIsc0JBQU8scUVBQUUseUNBQUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBRWNELG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi5cIlxuXG5mdW5jdGlvbiBNeUFwcChwYXJhbXMpIHtcbiAgICByZXR1cm4gPCBIb21lUGFnZSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Category */ \"./components/Category.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/index.js\";\n\n // mood: [\"motivated\", \"mood swings\", \"sad\", \"emotional\", \"overwelmed\", \"irritable\", \"frustrated\"]\n// food: [\"chicken\", \"fish\", \"beef\", \"cheese\", \"eggs\", \"yogurt\", \"chocolate\", \"fruits\", \"vegetables\"]\n// liquids: [\"beer\", \"white russian\", \"electrolytes\", \"tea\"]\n// suplements: [\"magnesium\", \"vitamin B\", \"multivitamin\", \"vitamin D3\"]\n// workouts: [\"strength\", \"hike\", \"flying\", \"skitour\", \"climb\"]\n// body: [\"bloating\", \"nausea\", \"cramps\", \"diarrhea\", \"constipation\", \"fatigue\", \"muscle pain - workout\", \"muscle pain - illness\"]\n// menst.cycle: [\"heavy bleeding\", \"painless\", \"painful\", \"cramps\", \"cravings\", \"follicular phase\", \"ovulation\", \"luteal phase\"]\n\nfunction HomePage() {\n  const inputs = {\n    categories: [{\n      name: \"mood\",\n      color: 'yellow',\n      cells: [{\n        name: \"fine\"\n      }, {\n        name: \"happy\"\n      }, {\n        name: \"energetic\"\n      }, {\n        name: \"motivated\"\n      }]\n    }, {\n      name: \"food\",\n      color: 'red',\n      cells: [{\n        name: \"bread\"\n      }, {\n        name: \"potatoes\"\n      }, {\n        name: \"pasta\"\n      }, {\n        name: \"rice\"\n      }]\n    }, {\n      name: \"liquids\",\n      color: 'pink',\n      cells: [{\n        name: \"water\"\n      }, {\n        name: \"wine\"\n      }, {\n        name: \"coffee\"\n      }]\n    }, {\n      name: \"suplements\",\n      color: 'purple',\n      cells: [{\n        name: \"omega-3\"\n      }, {\n        name: \"zink\"\n      }, {\n        name: \"iron\"\n      }, {\n        name: \"BCCA\"\n      }]\n    }, {\n      name: \"workouts\",\n      color: 'indigo',\n      cells: [{\n        name: \"run\"\n      }, {\n        name: \"bike\"\n      }, {\n        name: \"swim\"\n      }]\n    }, {\n      name: \"body\",\n      color: 'blue',\n      cells: [{\n        name: \"headache\"\n      }, {\n        name: \"acne\"\n      }, {\n        name: \"tender breasts\"\n      }, {\n        name: \"backpain\"\n      }]\n    }, {\n      name: \"menst. cycle\",\n      color: 'green',\n      cells: [{\n        name: \"menstruation\"\n      }, {\n        name: \"weak bleeding\"\n      }, {\n        name: \"medium bleeding\"\n      }, {\n        name: \"heavy bleeding\"\n      }]\n    }, {\n      name: \"sleep\",\n      color: 'gray',\n      cells: [{\n        name: \"restless\"\n      }, {\n        name: \"good\"\n      }, {\n        name: \"great\"\n      }, {\n        name: \"0-4h\"\n      }, {\n        name: \"5-7h\"\n      }, {\n        name: \"8-9h\"\n      }, {\n        name: \"10-11h\"\n      }]\n    }]\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mx-8 lg:mx-32\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"Marianna\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-between\",\n      children: inputs.categories.map(cat => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: cat.name,\n        bg: cat.color,\n        cells: cat.cells\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 47\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiaW5wdXRzIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJjb2xvciIsImNlbGxzIiwibWFwIiwiY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBRWhCLFFBQU1DLE1BQU0sR0FBRztBQUNYQyxjQUFVLEVBQUUsQ0FBQztBQUNUQyxVQUFJLEVBQUUsTUFERztBQUVUQyxXQUFLLEVBQUUsUUFGRTtBQUdUQyxXQUFLLEVBQUUsQ0FDSDtBQUNJRixZQUFJLEVBQUU7QUFEVixPQURHLEVBR0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FIQSxFQUtBO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BTEEsRUFPQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQVBBO0FBSEUsS0FBRCxFQWNUO0FBQ0NBLFVBQUksRUFBRSxNQURQO0FBRUNDLFdBQUssRUFBRSxLQUZSO0FBR0NDLFdBQUssRUFBRSxDQUNIO0FBQ0lGLFlBQUksRUFBRTtBQURWLE9BREcsRUFHQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQUhBLEVBS0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FMQSxFQU9BO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BUEE7QUFIUixLQWRTLEVBNEJUO0FBQ0NBLFVBQUksRUFBRSxTQURQO0FBRUNDLFdBQUssRUFBRSxNQUZSO0FBR0NDLFdBQUssRUFBRSxDQUNIO0FBQ0lGLFlBQUksRUFBRTtBQURWLE9BREcsRUFHQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQUhBLEVBS0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FMQTtBQUhSLEtBNUJTLEVBd0NUO0FBQ0NBLFVBQUksRUFBRSxZQURQO0FBRUNDLFdBQUssRUFBRSxRQUZSO0FBR0NDLFdBQUssRUFBRSxDQUNIO0FBQ0lGLFlBQUksRUFBRTtBQURWLE9BREcsRUFHQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQUhBLEVBS0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FMQSxFQU9BO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BUEE7QUFIUixLQXhDUyxFQXNEVDtBQUNDQSxVQUFJLEVBQUUsVUFEUDtBQUVDQyxXQUFLLEVBQUUsUUFGUjtBQUdDQyxXQUFLLEVBQUUsQ0FDSDtBQUNJRixZQUFJLEVBQUU7QUFEVixPQURHLEVBR0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FIQSxFQUtBO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BTEE7QUFIUixLQXREUyxFQWtFVDtBQUNDQSxVQUFJLEVBQUUsTUFEUDtBQUVDQyxXQUFLLEVBQUUsTUFGUjtBQUdDQyxXQUFLLEVBQUUsQ0FDSDtBQUNJRixZQUFJLEVBQUU7QUFEVixPQURHLEVBR0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FIQSxFQUtBO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BTEEsRUFPQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQVBBO0FBSFIsS0FsRVMsRUFnRlQ7QUFDQ0EsVUFBSSxFQUFFLGNBRFA7QUFFQ0MsV0FBSyxFQUFFLE9BRlI7QUFHQ0MsV0FBSyxFQUFFLENBQ0g7QUFDSUYsWUFBSSxFQUFFO0FBRFYsT0FERyxFQUdBO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BSEEsRUFLQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQUxBLEVBT0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FQQTtBQUhSLEtBaEZTLEVBOEZUO0FBQ0NBLFVBQUksRUFBRSxPQURQO0FBRUNDLFdBQUssRUFBRSxNQUZSO0FBR0NDLFdBQUssRUFBRSxDQUNIO0FBQ0lGLFlBQUksRUFBRTtBQURWLE9BREcsRUFHQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQUhBLEVBS0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FMQSxFQU9BO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BUEEsRUFTQTtBQUNDQSxZQUFJLEVBQUU7QUFEUCxPQVRBLEVBV0E7QUFDQ0EsWUFBSSxFQUFFO0FBRFAsT0FYQSxFQWFBO0FBQ0NBLFlBQUksRUFBRTtBQURQLE9BYkE7QUFIUixLQTlGUztBQURELEdBQWY7QUFzSEEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNJLHFFQUFDLDBEQUFEO0FBQVEsVUFBSSxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSxnQkFDS0YsTUFBTSxDQUFDQyxVQUFQLENBQWtCSSxHQUFsQixDQUFzQkMsR0FBRyxpQkFBSSxxRUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRUEsR0FBRyxDQUFDSixJQUFwQjtBQUEwQixVQUFFLEVBQUVJLEdBQUcsQ0FBQ0gsS0FBbEM7QUFBeUMsYUFBSyxFQUFFRyxHQUFHLENBQUNGO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBN0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7QUFFY0wsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXRlZ29yeVwiXG5cbi8vIG1vb2Q6IFtcIm1vdGl2YXRlZFwiLCBcIm1vb2Qgc3dpbmdzXCIsIFwic2FkXCIsIFwiZW1vdGlvbmFsXCIsIFwib3ZlcndlbG1lZFwiLCBcImlycml0YWJsZVwiLCBcImZydXN0cmF0ZWRcIl1cbi8vIGZvb2Q6IFtcImNoaWNrZW5cIiwgXCJmaXNoXCIsIFwiYmVlZlwiLCBcImNoZWVzZVwiLCBcImVnZ3NcIiwgXCJ5b2d1cnRcIiwgXCJjaG9jb2xhdGVcIiwgXCJmcnVpdHNcIiwgXCJ2ZWdldGFibGVzXCJdXG4vLyBsaXF1aWRzOiBbXCJiZWVyXCIsIFwid2hpdGUgcnVzc2lhblwiLCBcImVsZWN0cm9seXRlc1wiLCBcInRlYVwiXVxuLy8gc3VwbGVtZW50czogW1wibWFnbmVzaXVtXCIsIFwidml0YW1pbiBCXCIsIFwibXVsdGl2aXRhbWluXCIsIFwidml0YW1pbiBEM1wiXVxuLy8gd29ya291dHM6IFtcInN0cmVuZ3RoXCIsIFwiaGlrZVwiLCBcImZseWluZ1wiLCBcInNraXRvdXJcIiwgXCJjbGltYlwiXVxuLy8gYm9keTogW1wiYmxvYXRpbmdcIiwgXCJuYXVzZWFcIiwgXCJjcmFtcHNcIiwgXCJkaWFycmhlYVwiLCBcImNvbnN0aXBhdGlvblwiLCBcImZhdGlndWVcIiwgXCJtdXNjbGUgcGFpbiAtIHdvcmtvdXRcIiwgXCJtdXNjbGUgcGFpbiAtIGlsbG5lc3NcIl1cbi8vIG1lbnN0LmN5Y2xlOiBbXCJoZWF2eSBibGVlZGluZ1wiLCBcInBhaW5sZXNzXCIsIFwicGFpbmZ1bFwiLCBcImNyYW1wc1wiLCBcImNyYXZpbmdzXCIsIFwiZm9sbGljdWxhciBwaGFzZVwiLCBcIm92dWxhdGlvblwiLCBcImx1dGVhbCBwaGFzZVwiXVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuICAgIGNvbnN0IGlucHV0cyA9IHtcbiAgICAgICAgY2F0ZWdvcmllczogW3tcbiAgICAgICAgICAgIG5hbWU6IFwibW9vZFwiLFxuICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmluZVwiLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJoYXBweVwiLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbmVyZ2V0aWNcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW90aXZhdGVkXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiBcImZvb2RcIixcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJyZWFkXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBvdGF0b2VzXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3RhXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJpY2VcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwibGlxdWlkc1wiLFxuICAgICAgICAgICAgY29sb3I6ICdwaW5rJyxcbiAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndhdGVyXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIndpbmVcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29mZmVlXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiBcInN1cGxlbWVudHNcIixcbiAgICAgICAgICAgIGNvbG9yOiAncHVycGxlJyxcbiAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm9tZWdhLTNcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiemlua1wiLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpcm9uXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJDQ0FcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwid29ya291dHNcIixcbiAgICAgICAgICAgIGNvbG9yOiAnaW5kaWdvJyxcbiAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJ1blwiLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiaWtlXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN3aW1cIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwiYm9keVwiLFxuICAgICAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhlYWRhY2hlXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFjbmVcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGVuZGVyIGJyZWFzdHNcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmFja3BhaW5cIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwibWVuc3QuIGN5Y2xlXCIsXG4gICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1lbnN0cnVhdGlvblwiLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ3ZWFrIGJsZWVkaW5nXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1lZGl1bSBibGVlZGluZ1wiLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJoZWF2eSBibGVlZGluZ1wiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogXCJzbGVlcFwiLFxuICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlc3RsZXNzXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImdvb2RcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZ3JlYXRcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMC00aFwiLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI1LTdoXCIsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjgtOWhcIixcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMTAtMTFoXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBsZzpteC0zMlwiPlxuICAgICAgICAgICAgPEhlYWRlciBuYW1lPXtcIk1hcmlhbm5hXCJ9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7aW5wdXRzLmNhdGVnb3JpZXMubWFwKGNhdCA9PiA8Q2F0ZWdvcnkgbmFtZT17Y2F0Lm5hbWV9IGJnPXtjYXQuY29sb3J9IGNlbGxzPXtjYXQuY2VsbHN9Lz4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });