webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ChartAll.js":
/*!********************************!*\
  !*** ./components/ChartAll.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nvar _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction ChartAll(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"])(selectDays); // Array of all days [{},{},{}]\n\n  var daysValues = Object.values(days);\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  });\n  console.log(daysIds);\n}\n\n_s(ChartAll, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_0__[\"useSelector\"]];\n});\n\n_c = ChartAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartAll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartAll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydEFsbC5qcz83NGExIl0sIm5hbWVzIjpbInNlbGVjdERheXMiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJkYXlzIiwiQ2hhcnRBbGwiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwiZGF5c1ZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImRheXNJZHMiLCJtYXAiLCJkYXkiLCJpZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxJQUFyQjtBQUFBLENBQXhCOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBRXJCLE1BQU1GLElBQUksR0FBR0csK0RBQVcsQ0FBQ04sVUFBRCxDQUF4QixDQUZxQixDQUlyQjs7QUFDQSxNQUFNTyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixJQUFkLENBQW5CO0FBRUEsTUFBTU8sT0FBTyxHQUFHSCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxFQUFiO0FBQUEsR0FBZixDQUFoQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsT0FBWjtBQUVIOztHQVZRTixRO1VBRVFFLHVEOzs7S0FGUkYsUTtBQVlNQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhcnRBbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNvbnN0IHNlbGVjdERheXMgPSBzdGF0ZSA9PiBzdGF0ZS5jYXRlZ29yaWVzLmRheXNcblxuZnVuY3Rpb24gQ2hhcnRBbGwocHJvcHMpIHtcbiAgICBcbiAgICBjb25zdCBkYXlzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGF5cylcblxuICAgIC8vIEFycmF5IG9mIGFsbCBkYXlzIFt7fSx7fSx7fV1cbiAgICBjb25zdCBkYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXlzKVxuXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcbiAgICBjb25zb2xlLmxvZyhkYXlzSWRzKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0QWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChartAll.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Category */ \"./components/Category.js\");\n/* harmony import */ var _public_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/inputs */ \"./public/inputs.js\");\n/* harmony import */ var _components_Statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Statistics */ \"./components/Statistics.js\");\n/* harmony import */ var _components_ChartAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChartAll */ \"./components/ChartAll.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/index.js\";\n\n\n\n\n\n\nfunction HomePage() {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mx-8 lg:mx-32\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      name: \"Marianna\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex justify-between\",\n      children: _public_inputs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].categories.map(function (cat) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Category__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          id: cat.id,\n          name: cat.name,\n          bg: cat.color,\n          cells: cat.cells\n        }, cat.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 47\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Statistics__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ChartAll__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImlucHV0cyIsImNhdGVnb3JpZXMiLCJtYXAiLCJjYXQiLCJpZCIsIm5hbWUiLCJjb2xvciIsImNlbGxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBRWhCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDSSxxRUFBQywwREFBRDtBQUFRLFVBQUksRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsZ0JBQ0tDLHNEQUFNLENBQUNDLFVBQVAsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUFDLEdBQUc7QUFBQSw0QkFBSSxxRUFBQyw0REFBRDtBQUF1QixZQUFFLEVBQUVBLEdBQUcsQ0FBQ0MsRUFBL0I7QUFBbUMsY0FBSSxFQUFFRCxHQUFHLENBQUNFLElBQTdDO0FBQW1ELFlBQUUsRUFBRUYsR0FBRyxDQUFDRyxLQUEzRDtBQUFrRSxlQUFLLEVBQUVILEdBQUcsQ0FBQ0k7QUFBN0UsV0FBZUosR0FBRyxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUEsT0FBekI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFLSSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7S0FaUUwsUTtBQWNNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0NhdGVnb3J5XCJcbmltcG9ydCBpbnB1dHMgZnJvbSBcIi4uL3B1YmxpYy9pbnB1dHNcIlxuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3RhdGlzdGljc1wiXG5pbXBvcnQgQ2hhcnRBbGwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhcnRBbGxcIlxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBsZzpteC0zMlwiPlxuICAgICAgICAgICAgPEhlYWRlciBuYW1lPXtcIk1hcmlhbm5hXCJ9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICB7aW5wdXRzLmNhdGVnb3JpZXMubWFwKGNhdCA9PiA8Q2F0ZWdvcnkga2V5PXtjYXQuaWR9IGlkPXtjYXQuaWR9IG5hbWU9e2NhdC5uYW1lfSBiZz17Y2F0LmNvbG9yfSBjZWxscz17Y2F0LmNlbGxzfS8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN0YXRpc3RpY3MgLz5cbiAgICAgICAgICAgIDxDaGFydEFsbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})