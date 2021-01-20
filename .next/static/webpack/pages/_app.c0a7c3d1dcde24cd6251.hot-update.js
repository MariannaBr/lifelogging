webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Statistics.js":
/*!**********************************!*\
  !*** ./components/Statistics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Statistics.js\",\n    _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction Statistics() {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of all days [{},{},{}]\n\n  var daysValues = Object.values(days);\n  console.log(\"days\", daysValues); // Array of all days' ids [\"dayId_1\",\"dayId_2\", \"dayId_3\" ]\n\n  var dayIds = daysValues.map(function (day) {\n    return day.id;\n  });\n  console.log(\"day\", dayIds); // Array of all categories [{}, {}, {}]\n\n  var categoriesValues = daysValues.map(function (day) {\n    return day.categories;\n  });\n  console.log(\"categories objects\", categoriesValues); // Array of arrays of objects - categories [[{}, {}, {}]]\n\n  var categories = categoriesValues.map(function (categories) {\n    return Object.values(categories);\n  });\n  console.log(\"categories\", categories); // Array of arrays with category [[\"\"], [\"\"], [\"\"]]\n\n  var categoriesIds = categoriesValues.map(function (categories) {\n    return Object.values(categories).map(function (category) {\n      return category.id;\n    });\n  });\n  console.log(\"category\", categoriesIds[0]);\n  var cellsValues = categoriesIds.map(function (category) {\n    return category.cells;\n  });\n  console.log(\"cells\", cellsValues);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" mt-52\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Statistics\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Day: \", dayIds[1]]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Categories: \", categoriesIds]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Statistics, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Statistics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statistics);\n\nvar _c;\n\n$RefreshReg$(_c, \"Statistics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0aXN0aWNzLmpzPzA2NWYiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJTdGF0aXN0aWNzIiwidXNlU2VsZWN0b3IiLCJkYXlzVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImRheUlkcyIsIm1hcCIsImRheSIsImlkIiwiY2F0ZWdvcmllc1ZhbHVlcyIsImNhdGVnb3JpZXNJZHMiLCJjYXRlZ29yeSIsImNlbGxzVmFsdWVzIiwiY2VsbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLElBQXJCO0FBQUEsQ0FBeEI7O0FBRUEsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUVsQixNQUFNRCxJQUFJLEdBQUdFLCtEQUFXLENBQUNMLFVBQUQsQ0FBeEIsQ0FGa0IsQ0FJbEI7O0FBQ0EsTUFBTU0sVUFBVSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsSUFBZCxDQUFuQjtBQUNBTSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CSixVQUFwQixFQU5rQixDQVFsQjs7QUFDQSxNQUFNSyxNQUFNLEdBQUdMLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNDLEVBQWI7QUFBQSxHQUFmLENBQWY7QUFDQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkMsTUFBbkIsRUFWa0IsQ0FZbEI7O0FBQ0EsTUFBTUksZ0JBQWdCLEdBQUdULFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNYLFVBQWI7QUFBQSxHQUFmLENBQXpCO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDSyxnQkFBbEMsRUFka0IsQ0FnQmxCOztBQUNBLE1BQU1iLFVBQVUsR0FBR2EsZ0JBQWdCLENBQUNILEdBQWpCLENBQXFCLFVBQUNWLFVBQUQ7QUFBQSxXQUFnQkssTUFBTSxDQUFDQyxNQUFQLENBQWNOLFVBQWQsQ0FBaEI7QUFBQSxHQUFyQixDQUFuQjtBQUNBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCUixVQUExQixFQWxCa0IsQ0FvQmxCOztBQUNBLE1BQU1jLGFBQWEsR0FBR0QsZ0JBQWdCLENBQUNILEdBQWpCLENBQXFCLFVBQUNWLFVBQUQ7QUFBQSxXQUFnQkssTUFBTSxDQUFDQyxNQUFQLENBQWNOLFVBQWQsRUFBMEJVLEdBQTFCLENBQThCLFVBQUNLLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNILEVBQXZCO0FBQUEsS0FBOUIsQ0FBaEI7QUFBQSxHQUFyQixDQUF0QjtBQUNBTCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCTSxhQUFhLENBQUMsQ0FBRCxDQUFyQztBQUVBLE1BQU1FLFdBQVcsR0FBR0YsYUFBYSxDQUFDSixHQUFkLENBQWtCLFVBQUNLLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNFLEtBQXZCO0FBQUEsR0FBbEIsQ0FBcEI7QUFDQVYsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlEsV0FBckI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsMEJBQ1VQLE1BQU0sQ0FBQyxDQUFELENBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBS0k7QUFBQSxpQ0FDaUJLLGFBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBdkNRWixVO1VBRVFDLHVEOzs7S0FGUkQsVTtBQXlDTUEseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRpc3RpY3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNvbnN0IHNlbGVjdERheXMgPSBzdGF0ZSA9PiBzdGF0ZS5jYXRlZ29yaWVzLmRheXNcblxuZnVuY3Rpb24gU3RhdGlzdGljcygpIHtcblxuICAgIGNvbnN0IGRheXMgPSB1c2VTZWxlY3RvcihzZWxlY3REYXlzKVxuXG4gICAgLy8gQXJyYXkgb2YgYWxsIGRheXMgW3t9LHt9LHt9XVxuICAgIGNvbnN0IGRheXNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGRheXMpXG4gICAgY29uc29sZS5sb2coXCJkYXlzXCIsIGRheXNWYWx1ZXMpXG5cbiAgICAvLyBBcnJheSBvZiBhbGwgZGF5cycgaWRzIFtcImRheUlkXzFcIixcImRheUlkXzJcIiwgXCJkYXlJZF8zXCIgXVxuICAgIGNvbnN0IGRheUlkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcbiAgICBjb25zb2xlLmxvZyhcImRheVwiLCBkYXlJZHMpXG5cbiAgICAvLyBBcnJheSBvZiBhbGwgY2F0ZWdvcmllcyBbe30sIHt9LCB7fV1cbiAgICBjb25zdCBjYXRlZ29yaWVzVmFsdWVzID0gZGF5c1ZhbHVlcy5tYXAoKGRheSkgPT4gZGF5LmNhdGVnb3JpZXMpXG4gICAgY29uc29sZS5sb2coXCJjYXRlZ29yaWVzIG9iamVjdHNcIiwgY2F0ZWdvcmllc1ZhbHVlcylcblxuICAgIC8vIEFycmF5IG9mIGFycmF5cyBvZiBvYmplY3RzIC0gY2F0ZWdvcmllcyBbW3t9LCB7fSwge31dXVxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzVmFsdWVzLm1hcCgoY2F0ZWdvcmllcykgPT4gT2JqZWN0LnZhbHVlcyhjYXRlZ29yaWVzKSlcbiAgICBjb25zb2xlLmxvZyhcImNhdGVnb3JpZXNcIiwgY2F0ZWdvcmllcylcblxuICAgIC8vIEFycmF5IG9mIGFycmF5cyB3aXRoIGNhdGVnb3J5IFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXVxuICAgIGNvbnN0IGNhdGVnb3JpZXNJZHMgPSBjYXRlZ29yaWVzVmFsdWVzLm1hcCgoY2F0ZWdvcmllcykgPT4gT2JqZWN0LnZhbHVlcyhjYXRlZ29yaWVzKS5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5pZCkpXG4gICAgY29uc29sZS5sb2coXCJjYXRlZ29yeVwiLCBjYXRlZ29yaWVzSWRzWzBdKVxuXG4gICAgY29uc3QgY2VsbHNWYWx1ZXMgPSBjYXRlZ29yaWVzSWRzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LmNlbGxzKVxuICAgIGNvbnNvbGUubG9nKFwiY2VsbHNcIiwgY2VsbHNWYWx1ZXMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC01MlwiPlxuICAgICAgICAgICAgPGgxPlN0YXRpc3RpY3M8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBEYXk6IHtkYXlJZHNbMV19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllczoge2NhdGVnb3JpZXNJZHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Statistics.js\n");

/***/ })

})