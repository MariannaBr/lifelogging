webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ChartAll.js":
/*!********************************!*\
  !*** ./components/ChartAll.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/ChartAll.js\",\n    _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction ChartAll(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of all days [{},{},{}]\n\n  var daysValues = Object.values(days); // Array of all ids [\"\", \"\", \"\"]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  });\n  console.log(daysIds);\n  var categoriesValues = daysValues.map(function (day) {\n    return Object.values(day.categories);\n  });\n  console.log(categoriesValues);\n  var categories = Object.values(categoriesValues);\n  console.log(categories);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Chart\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChartAll, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = ChartAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartAll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartAll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydEFsbC5qcz83NGExIl0sIm5hbWVzIjpbInNlbGVjdERheXMiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJkYXlzIiwiQ2hhcnRBbGwiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwiZGF5c1ZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImRheXNJZHMiLCJtYXAiLCJkYXkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yaWVzVmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxJQUFyQjtBQUFBLENBQXhCOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBRXJCLE1BQU1GLElBQUksR0FBR0csK0RBQVcsQ0FBQ04sVUFBRCxDQUF4QixDQUZxQixDQUlyQjs7QUFDQSxNQUFNTyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixJQUFkLENBQW5CLENBTHFCLENBT3JCOztBQUNBLE1BQU1PLE9BQU8sR0FBR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsRUFBYjtBQUFBLEdBQWYsQ0FBaEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFFQSxNQUFNTSxnQkFBZ0IsR0FBR1QsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRyxHQUFHLENBQUNWLFVBQWxCLENBQVQ7QUFBQSxHQUFmLENBQXpCO0FBQ0FZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBWjtBQUNBLE1BQU1kLFVBQVUsR0FBR00sTUFBTSxDQUFDQyxNQUFQLENBQWNPLGdCQUFkLENBQW5CO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZYixVQUFaO0FBRUEsc0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQXRCUUUsUTtVQUVRRSx1RDs7O0tBRlJGLFE7QUF3Qk1BLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DaGFydEFsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY29uc3Qgc2VsZWN0RGF5cyA9IHN0YXRlID0+IHN0YXRlLmNhdGVnb3JpZXMuZGF5c1xuXG5mdW5jdGlvbiBDaGFydEFsbChwcm9wcykge1xuICAgIFxuICAgIGNvbnN0IGRheXMgPSB1c2VTZWxlY3RvcihzZWxlY3REYXlzKVxuXG4gICAgLy8gQXJyYXkgb2YgYWxsIGRheXMgW3t9LHt9LHt9XVxuICAgIGNvbnN0IGRheXNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRheXMpXG5cbiAgICAvLyBBcnJheSBvZiBhbGwgaWRzIFtcIlwiLCBcIlwiLCBcIlwiXVxuICAgIGNvbnN0IGRheXNJZHMgPSBkYXlzVmFsdWVzLm1hcCgoZGF5KSA9PiBkYXkuaWQpXG4gICAgY29uc29sZS5sb2coZGF5c0lkcylcblxuICAgIGNvbnN0IGNhdGVnb3JpZXNWYWx1ZXMgPSBkYXlzVmFsdWVzLm1hcCgoZGF5KSA9PiBPYmplY3QudmFsdWVzKGRheS5jYXRlZ29yaWVzKSlcbiAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzVmFsdWVzKVxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3QudmFsdWVzKGNhdGVnb3JpZXNWYWx1ZXMpXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDaGFydFxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRBbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChartAll.js\n");

/***/ })

})