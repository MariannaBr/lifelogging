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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ \"./components/Cell.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Category.js\";\n\n\nfunction Category(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    class: \"relative inline-block text-left\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        className: `inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-${props.bg} text-lg font-medium text-gray-700\n                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300`,\n        id: \"mood\",\n        \"aria-haspopup\": \"true\",\n        \"aria-expanded\": \"true\",\n        children: [\" \", props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      class: \"origin-top-right absolute right-0 mt-2 w-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        class: \"py-1\",\n        role: \"menu\",\n        \"aria-orientation\": \"vertical\",\n        \"aria-labelledby\": \"options-menu\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: props.cell_name,\n          bg: props.cell_bg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: props.cell_name,\n          bg: props.cell_bg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: props.cell_name,\n          bg: props.cell_bg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: props.cell_name,\n          bg: props.cell_bg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          name: props.cell_name,\n          bg: props.cell_bg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzP2MwZDQiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJwcm9wcyIsImJnIiwibmFtZSIsImNlbGxfbmFtZSIsImNlbGxfYmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3JCLHNCQUNJO0FBQUssU0FBSyxFQUFDLGlDQUFYO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUcsOEZBQTZGQSxLQUFLLENBQUNDLEVBQUc7QUFDeEoscUlBRGdCO0FBRUMsVUFBRSxFQUFDLE1BRko7QUFFVyx5QkFBYyxNQUZ6QjtBQUVnQyx5QkFBYyxNQUY5QztBQUFBLHdCQUV1REQsS0FBSyxDQUFDRSxJQUY3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFpQkk7QUFBSyxXQUFLLEVBQUMsK0NBQVg7QUFBQSw2QkFDSTtBQUFLLGFBQUssRUFBQyxNQUFYO0FBQWtCLFlBQUksRUFBQyxNQUF2QjtBQUE4Qiw0QkFBaUIsVUFBL0M7QUFBMEQsMkJBQWdCLGNBQTFFO0FBQUEsZ0NBQ0kscUVBQUMsNkNBQUQ7QUFBTSxjQUFJLEVBQUVGLEtBQUssQ0FBQ0csU0FBbEI7QUFBNkIsWUFBRSxFQUFFSCxLQUFLLENBQUNJO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyw2Q0FBRDtBQUFNLGNBQUksRUFBRUosS0FBSyxDQUFDRyxTQUFsQjtBQUE2QixZQUFFLEVBQUVILEtBQUssQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLDZDQUFEO0FBQU0sY0FBSSxFQUFFSixLQUFLLENBQUNHLFNBQWxCO0FBQTZCLFlBQUUsRUFBRUgsS0FBSyxDQUFDSTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUkscUVBQUMsNkNBQUQ7QUFBTSxjQUFJLEVBQUVKLEtBQUssQ0FBQ0csU0FBbEI7QUFBNkIsWUFBRSxFQUFFSCxLQUFLLENBQUNJO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFLSSxxRUFBQyw2Q0FBRDtBQUFNLGNBQUksRUFBRUosS0FBSyxDQUFDRyxTQUFsQjtBQUE2QixZQUFFLEVBQUVILEtBQUssQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIOztBQUVjTCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2F0ZWdvcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCJcblxuZnVuY3Rpb24gQ2F0ZWdvcnkocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC00IHB5LTIgYmctJHtwcm9wcy5iZ30gdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXG4gICAgICAgICAgICAgICAgIGhvdmVyOmJnLWdyYXktNTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktMTAwIGZvY3VzOnJpbmctZ3JheS0zMDBgfVxuICAgICAgICAgICAgICAgICBpZD1cIm1vb2RcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+IHtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICB7LyogRHJvcGRvd24gcGFuZWwsIHNob3cvaGlkZSBiYXNlZCBvbiBkcm9wZG93biBzdGF0ZS5cblxuICAgIEVudGVyaW5nOiBcInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcbiAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICBMZWF2aW5nOiBcInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgVG86IFwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiICovfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB5LTFcIiByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGFyaWEtbGFiZWxsZWRieT1cIm9wdGlvbnMtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2VsbCBuYW1lPXtwcm9wcy5jZWxsX25hbWV9IGJnPXtwcm9wcy5jZWxsX2JnfS8+XG4gICAgICAgICAgICAgICAgICAgIDxDZWxsIG5hbWU9e3Byb3BzLmNlbGxfbmFtZX0gYmc9e3Byb3BzLmNlbGxfYmd9Lz5cbiAgICAgICAgICAgICAgICAgICAgPENlbGwgbmFtZT17cHJvcHMuY2VsbF9uYW1lfSBiZz17cHJvcHMuY2VsbF9iZ30vPlxuICAgICAgICAgICAgICAgICAgICA8Q2VsbCBuYW1lPXtwcm9wcy5jZWxsX25hbWV9IGJnPXtwcm9wcy5jZWxsX2JnfS8+XG4gICAgICAgICAgICAgICAgICAgIDxDZWxsIG5hbWU9e3Byb3BzLmNlbGxfbmFtZX0gYmc9e3Byb3BzLmNlbGxfYmd9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Category.js\n");

/***/ }),

/***/ "./components/Cell.js":
/*!****************************!*\
  !*** ./components/Cell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Cell.js\";\n\nfunction Cell(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: `justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 bg-${props.bg}-100 \n                block px-4 py-2 text-sm text-gray-700 hover:bg-${props.bg}-200 hover:text-gray-900`,\n      role: \"menuitem\",\n      id: \"mood\",\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": \"true\",\n      children: [\" \", props.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 17\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NlbGwuanM/MjQzMiJdLCJuYW1lcyI6WyJDZWxsIiwicHJvcHMiLCJiZyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNqQixzQkFDSTtBQUFBLDJCQUNRO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBUyxFQUFHLDZFQUE0RUEsS0FBSyxDQUFDQyxFQUFHO0FBQ3ZJLGlFQUFpRUQsS0FBSyxDQUFDQyxFQUFHLDBCQUQxRDtBQUNxRixVQUFJLEVBQUMsVUFEMUY7QUFFQyxRQUFFLEVBQUMsTUFGSjtBQUVXLHVCQUFjLE1BRnpCO0FBRWdDLHVCQUFjLE1BRjlDO0FBQUEsc0JBRXVERCxLQUFLLENBQUNFLElBRjdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztBQUVjSCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2VsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENlbGwocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17YGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC0yIHB5LTIgYmctJHtwcm9wcy5iZ30tMTAwIFxuICAgICAgICAgICAgICAgIGJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctJHtwcm9wcy5iZ30tMjAwIGhvdmVyOnRleHQtZ3JheS05MDBgfSByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICBpZD1cIm1vb2RcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+IHtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cell.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Category */ \"./components/Category.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/index.js\";\n\n\n\nfunction HomePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mx-8 lg:mx-32\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"Marianna\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"mood\",\n        bg: 'yellow-300'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"food\",\n        bg: 'red-300',\n        cell_name: \"pasta\",\n        cell_bg: \"red\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"liquids\",\n        bg: 'pink-300'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"suplements\",\n        bg: 'purple-300'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"workouts\",\n        bg: 'indigo-300'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"body\",\n        bg: 'blue-500'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"menst. cycle\",\n        bg: 'green-500'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"sleep\",\n        bg: 'green-300'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2hCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDSSxxRUFBQywwREFBRDtBQUFRLFVBQUksRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsOEJBQ0kscUVBQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUUsTUFBaEI7QUFBd0IsVUFBRSxFQUFFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLDREQUFEO0FBQVUsWUFBSSxFQUFFLE1BQWhCO0FBQXdCLFVBQUUsRUFBRSxTQUE1QjtBQUF1QyxpQkFBUyxFQUFFLE9BQWxEO0FBQTJELGVBQU8sRUFBRTtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSxxRUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRSxTQUFoQjtBQUEyQixVQUFFLEVBQUU7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUkscUVBQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUUsWUFBaEI7QUFBOEIsVUFBRSxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJLHFFQUFDLDREQUFEO0FBQVUsWUFBSSxFQUFFLFVBQWhCO0FBQTRCLFVBQUUsRUFBRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFNSSxxRUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRSxNQUFoQjtBQUF3QixVQUFFLEVBQUU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBT0kscUVBQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUUsY0FBaEI7QUFBZ0MsVUFBRSxFQUFFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVFJLHFFQUFDLDREQUFEO0FBQVUsWUFBSSxFQUFFLE9BQWhCO0FBQXlCLFVBQUUsRUFBRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0FBRWNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2F0ZWdvcnlcIlxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggbGc6bXgtMzJcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgbmFtZT17XCJNYXJpYW5uYVwifS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPENhdGVnb3J5IG5hbWU9e1wibW9vZFwifSBiZz17J3llbGxvdy0zMDAnfSAvPlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPXtcImZvb2RcIn0gYmc9eydyZWQtMzAwJ30gY2VsbF9uYW1lPXtcInBhc3RhXCJ9IGNlbGxfYmc9e1wicmVkXCJ9Lz5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbmFtZT17XCJsaXF1aWRzXCJ9IGJnPXsncGluay0zMDAnfSAvPlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPXtcInN1cGxlbWVudHNcIn0gYmc9eydwdXJwbGUtMzAwJ30gLz5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbmFtZT17XCJ3b3Jrb3V0c1wifSBiZz17J2luZGlnby0zMDAnfSAvPlxuICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPXtcImJvZHlcIn0gYmc9eydibHVlLTUwMCd9IC8+XG4gICAgICAgICAgICAgICAgPENhdGVnb3J5IG5hbWU9e1wibWVuc3QuIGN5Y2xlXCJ9IGJnPXsnZ3JlZW4tNTAwJ30gLz5cbiAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbmFtZT17XCJzbGVlcFwifSBiZz17J2dyZWVuLTMwMCd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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