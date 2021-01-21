webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ChartAll.js":
/*!********************************!*\
  !*** ./components/ChartAll.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/ChartAll.js\",\n    _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction ChartAll(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of all days [{},{},{}]\n\n  var daysValues = Object.values(days); // Array of all ids [\"\", \"\", \"\"]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  });\n  console.log(daysIds);\n  var categories = daysValues.map(function (day) {\n    return Object.values(day.categories);\n  });\n  console.log(categories);\n  var categoriesIds = categories.map(function (category) {\n    return category.map(function (cat) {\n      return cat.id;\n    });\n  });\n  console.log(categoriesIds);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Chart\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChartAll, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = ChartAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartAll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartAll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydEFsbC5qcz83NGExIl0sIm5hbWVzIjpbInNlbGVjdERheXMiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJkYXlzIiwiQ2hhcnRBbGwiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwiZGF5c1ZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImRheXNJZHMiLCJtYXAiLCJkYXkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yaWVzSWRzIiwiY2F0ZWdvcnkiLCJjYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLElBQXJCO0FBQUEsQ0FBeEI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFFckIsTUFBTUYsSUFBSSxHQUFHRywrREFBVyxDQUFDTixVQUFELENBQXhCLENBRnFCLENBSXJCOztBQUNBLE1BQU1PLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNOLElBQWQsQ0FBbkIsQ0FMcUIsQ0FPckI7O0FBQ0EsTUFBTU8sT0FBTyxHQUFHSCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxFQUFiO0FBQUEsR0FBZixDQUFoQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsT0FBWjtBQUVBLE1BQU1SLFVBQVUsR0FBR0ssVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRyxHQUFHLENBQUNWLFVBQWxCLENBQVQ7QUFBQSxHQUFmLENBQW5CO0FBQ0FZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZYixVQUFaO0FBQ0EsTUFBTWMsYUFBYSxHQUFHZCxVQUFVLENBQUNTLEdBQVgsQ0FBZSxVQUFDTSxRQUFEO0FBQUEsV0FBY0EsUUFBUSxDQUFDTixHQUFULENBQWEsVUFBQ08sR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0wsRUFBYjtBQUFBLEtBQWIsQ0FBZDtBQUFBLEdBQWYsQ0FBdEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVo7QUFFQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0dBdEJRWixRO1VBRVFFLHVEOzs7S0FGUkYsUTtBQXdCTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJ0QWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jb25zdCBzZWxlY3REYXlzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllcy5kYXlzXG5cbmZ1bmN0aW9uIENoYXJ0QWxsKHByb3BzKSB7XG4gICAgXG4gICAgY29uc3QgZGF5cyA9IHVzZVNlbGVjdG9yKHNlbGVjdERheXMpXG5cbiAgICAvLyBBcnJheSBvZiBhbGwgZGF5cyBbe30se30se31dXG4gICAgY29uc3QgZGF5c1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF5cylcblxuICAgIC8vIEFycmF5IG9mIGFsbCBpZHMgW1wiXCIsIFwiXCIsIFwiXCJdXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcbiAgICBjb25zb2xlLmxvZyhkYXlzSWRzKVxuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IE9iamVjdC52YWx1ZXMoZGF5LmNhdGVnb3JpZXMpKVxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gICAgY29uc3QgY2F0ZWdvcmllc0lkcyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubWFwKChjYXQpID0+IGNhdC5pZCkpXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllc0lkcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDaGFydFxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRBbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChartAll.js\n");

/***/ })

})