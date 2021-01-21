webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ChartAll.js":
/*!********************************!*\
  !*** ./components/ChartAll.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/ChartAll.js\",\n    _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction ChartAll(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of all days [{},{},{}]\n\n  var daysValues = Object.values(days); // Array of all ids [\"\", \"\", \"\"]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  }); //console.log(daysIds)\n  // Array of arrays of objects - categories [[{}, {}], [{}, {}]]\n\n  var categories = daysValues.map(function (day) {\n    return Object.values(day.categories);\n  }); //console.log(categories)\n  // Array of arrays of ids [[\"\", \"\", \"\"], [\"\", \"\", \"\"]]\n\n  var categoriesIds = categories.map(function (category) {\n    return category.map(function (cat) {\n      return cat.id;\n    });\n  }); //console.log(categoriesIds)\n  // Array of arrays of arrays of cells [[[\"\",\"\"],[\"\",\"\"]],[[\"\",\"\"],[\"\",\"\"]]]\n\n  var cells = categories.map(function (category) {\n    return category.map(function (cat) {\n      return cat.cells;\n    });\n  }); //console.log(cells)\n\n  function getCategoriesofDay(day, data) {\n    var categories = [];\n    data.forEach(function (item) {\n      console.log(\"day\", day, \"item\", item);\n\n      if (item.id === day) {\n        categories = Object.values(item.categories).map(function (cat) {\n          return cat.id;\n        });\n      }\n    });\n    console.log(categories);\n    return categories;\n  }\n\n  function getDay(data) {\n    return Object.values(data).map(day = day.id);\n  }\n\n  getCategoriesofDay(getDay[1], daysValues);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Chart\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChartAll, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = ChartAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartAll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartAll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydEFsbC5qcz83NGExIl0sIm5hbWVzIjpbInNlbGVjdERheXMiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJkYXlzIiwiQ2hhcnRBbGwiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwiZGF5c1ZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImRheXNJZHMiLCJtYXAiLCJkYXkiLCJpZCIsImNhdGVnb3JpZXNJZHMiLCJjYXRlZ29yeSIsImNhdCIsImNlbGxzIiwiZ2V0Q2F0ZWdvcmllc29mRGF5IiwiZGF0YSIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImdldERheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBckI7QUFBQSxDQUF4Qjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUVyQixNQUFNRixJQUFJLEdBQUdHLCtEQUFXLENBQUNOLFVBQUQsQ0FBeEIsQ0FGcUIsQ0FJckI7O0FBQ0EsTUFBTU8sVUFBVSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY04sSUFBZCxDQUFuQixDQUxxQixDQU9yQjs7QUFDQSxNQUFNTyxPQUFPLEdBQUdILFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLEVBQWI7QUFBQSxHQUFmLENBQWhCLENBUnFCLENBU3JCO0FBRUE7O0FBQ0EsTUFBTVgsVUFBVSxHQUFHSyxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxHQUFEO0FBQUEsV0FBU0osTUFBTSxDQUFDQyxNQUFQLENBQWNHLEdBQUcsQ0FBQ1YsVUFBbEIsQ0FBVDtBQUFBLEdBQWYsQ0FBbkIsQ0FacUIsQ0FhckI7QUFFQTs7QUFDQSxNQUFNWSxhQUFhLEdBQUdaLFVBQVUsQ0FBQ1MsR0FBWCxDQUFlLFVBQUNJLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNKLEdBQVQsQ0FBYSxVQUFDSyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDSCxFQUFiO0FBQUEsS0FBYixDQUFkO0FBQUEsR0FBZixDQUF0QixDQWhCcUIsQ0FpQnJCO0FBRUE7O0FBQ0EsTUFBTUksS0FBSyxHQUFHZixVQUFVLENBQUNTLEdBQVgsQ0FBZSxVQUFDSSxRQUFEO0FBQUEsV0FBY0EsUUFBUSxDQUFDSixHQUFULENBQWEsVUFBQ0ssR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsS0FBYjtBQUFBLEtBQWIsQ0FBZDtBQUFBLEdBQWYsQ0FBZCxDQXBCcUIsQ0FxQnJCOztBQUdBLFdBQVNDLGtCQUFULENBQTRCTixHQUE1QixFQUFpQ08sSUFBakMsRUFBdUM7QUFDbkMsUUFBSWpCLFVBQVUsR0FBRyxFQUFqQjtBQUNBaUIsUUFBSSxDQUFDQyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ25CQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CWCxHQUFuQixFQUF3QixNQUF4QixFQUFnQ1MsSUFBaEM7O0FBQ0EsVUFBSUEsSUFBSSxDQUFDUixFQUFMLEtBQVlELEdBQWhCLEVBQXFCO0FBQ2pCVixrQkFBVSxHQUFHTSxNQUFNLENBQUNDLE1BQVAsQ0FBY1ksSUFBSSxDQUFDbkIsVUFBbkIsRUFBK0JTLEdBQS9CLENBQW1DLFVBQUNLLEdBQUQ7QUFBQSxpQkFBU0EsR0FBRyxDQUFDSCxFQUFiO0FBQUEsU0FBbkMsQ0FBYjtBQUNIO0FBQ0osS0FMRDtBQU1BUyxXQUFPLENBQUNDLEdBQVIsQ0FBWXJCLFVBQVo7QUFDQSxXQUFPQSxVQUFQO0FBQ0g7O0FBRUQsV0FBU3NCLE1BQVQsQ0FBZ0JMLElBQWhCLEVBQXNCO0FBQ2xCLFdBQU9YLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVSxJQUFkLEVBQW9CUixHQUFwQixDQUF5QkMsR0FBRCxHQUFRQSxHQUFHLENBQUNDLEVBQXBDLENBQVA7QUFDSDs7QUFFREssb0JBQWtCLENBQUNNLE1BQU0sQ0FBQyxDQUFELENBQVAsRUFBWWpCLFVBQVosQ0FBbEI7QUFFQSxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0dBaERRSCxRO1VBRVFFLHVEOzs7S0FGUkYsUTtBQWtETUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXJ0QWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jb25zdCBzZWxlY3REYXlzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllcy5kYXlzXG5cbmZ1bmN0aW9uIENoYXJ0QWxsKHByb3BzKSB7XG4gICAgXG4gICAgY29uc3QgZGF5cyA9IHVzZVNlbGVjdG9yKHNlbGVjdERheXMpXG5cbiAgICAvLyBBcnJheSBvZiBhbGwgZGF5cyBbe30se30se31dXG4gICAgY29uc3QgZGF5c1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF5cylcblxuICAgIC8vIEFycmF5IG9mIGFsbCBpZHMgW1wiXCIsIFwiXCIsIFwiXCJdXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcbiAgICAvL2NvbnNvbGUubG9nKGRheXNJZHMpXG5cbiAgICAvLyBBcnJheSBvZiBhcnJheXMgb2Ygb2JqZWN0cyAtIGNhdGVnb3JpZXMgW1t7fSwge31dLCBbe30sIHt9XV1cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZGF5c1ZhbHVlcy5tYXAoKGRheSkgPT4gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllcykpXG4gICAgLy9jb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuXG4gICAgLy8gQXJyYXkgb2YgYXJyYXlzIG9mIGlkcyBbW1wiXCIsIFwiXCIsIFwiXCJdLCBbXCJcIiwgXCJcIiwgXCJcIl1dXG4gICAgY29uc3QgY2F0ZWdvcmllc0lkcyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubWFwKChjYXQpID0+IGNhdC5pZCkpXG4gICAgLy9jb25zb2xlLmxvZyhjYXRlZ29yaWVzSWRzKVxuXG4gICAgLy8gQXJyYXkgb2YgYXJyYXlzIG9mIGFycmF5cyBvZiBjZWxscyBbW1tcIlwiLFwiXCJdLFtcIlwiLFwiXCJdXSxbW1wiXCIsXCJcIl0sW1wiXCIsXCJcIl1dXVxuICAgIGNvbnN0IGNlbGxzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5tYXAoKGNhdCkgPT4gY2F0LmNlbGxzKSlcbiAgICAvL2NvbnNvbGUubG9nKGNlbGxzKVxuXG5cbiAgICBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzb2ZEYXkoZGF5LCBkYXRhKSB7XG4gICAgICAgIGxldCBjYXRlZ29yaWVzID0gW11cbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRheVwiLCBkYXksIFwiaXRlbVwiLCBpdGVtKVxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGRheSkge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSBPYmplY3QudmFsdWVzKGl0ZW0uY2F0ZWdvcmllcykubWFwKChjYXQpID0+IGNhdC5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcbiAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXkoZGF0YSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhkYXRhKS5tYXAoKGRheSkgPSBkYXkuaWQpXG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcmllc29mRGF5KGdldERheVsxXSwgZGF5c1ZhbHVlcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBDaGFydFxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnRBbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ChartAll.js\n");

/***/ })

})