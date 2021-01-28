webpackHotUpdate_N_E("pages/user",{

/***/ "./components/DaySum.js":
/*!******************************!*\
  !*** ./components/DaySum.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _DayCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DayCategory */ \"./components/DayCategory.js\");\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _CategoryCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryCell */ \"./components/CategoryCell.js\");\n/* harmony import */ var _public_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/inputs */ \"./public/inputs.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/DaySum.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction DaySum(props) {\n  _s();\n\n  var _this = this;\n\n  var storeDays = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(selectDays); // Array of objects [{id:\"\", cells:[]}, {id:\"\", cells:[]}]\n\n  var storeDaysValues = Object.values(storeDays); // get array of days' ids [\"2021-1-1\", \"2021-1-2\"], inputs: data - array of objects [{}, {}]\n\n  var storeDaysIds = storeDaysValues.map(function (day) {\n    return day.id;\n  });\n  var todayCells = [];\n\n  if (_helpers_todayDate__WEBPACK_IMPORTED_MODULE_2__[\"todayChart\"] === storeDaysIds[storeDaysIds.length - 1]) {\n    todayCells = storeDaysValues[storeDaysValues.length - 1].cells;\n  }\n\n  console.log(todayCells);\n\n  function findColor(cellName, definedCategories) {\n    for (var i = 0; i < definedCategories.length; i++) {\n      if (definedCategories[i].cells.includes(cellName)) {\n        return definedCategories[i].color;\n      }\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative my-6\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"text-2xl font-semibold text-gray-500\",\n      children: _helpers_todayDate__WEBPACK_IMPORTED_MODULE_2__[\"todayGreeting\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: todayCells.map(function (cell) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CategoryCell__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          id: cell,\n          color: findColor(cell, _public_inputs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].categories)\n        }, cell, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 44\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DaySum, \"kfibSqpD8jzgmWFU4euTDlZA5Gw=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]];\n});\n\n_c = DaySum;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DaySum);\n\nvar _c;\n\n$RefreshReg$(_c, \"DaySum\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXlTdW0uanM/NGM1NSJdLCJuYW1lcyI6WyJzZWxlY3REYXlzIiwic3RhdGUiLCJjYXRlZ29yaWVzIiwiZGF5cyIsIkRheVN1bSIsInByb3BzIiwic3RvcmVEYXlzIiwidXNlU2VsZWN0b3IiLCJzdG9yZURheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzdG9yZURheXNJZHMiLCJtYXAiLCJkYXkiLCJpZCIsInRvZGF5Q2VsbHMiLCJ0b2RheUNoYXJ0IiwibGVuZ3RoIiwiY2VsbHMiLCJjb25zb2xlIiwibG9nIiwiZmluZENvbG9yIiwiY2VsbE5hbWUiLCJkZWZpbmVkQ2F0ZWdvcmllcyIsImkiLCJpbmNsdWRlcyIsImNvbG9yIiwidG9kYXlHcmVldGluZyIsImNlbGwiLCJJbnB1dHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBckI7QUFBQSxDQUF4Qjs7QUFFQSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBOztBQUVuQixNQUFNQyxTQUFTLEdBQUdDLCtEQUFXLENBQUNQLFVBQUQsQ0FBN0IsQ0FGbUIsQ0FJbkI7O0FBQ0EsTUFBTVEsZUFBZSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osU0FBZCxDQUF4QixDQUxtQixDQU9uQjs7QUFDQSxNQUFNSyxZQUFZLEdBQUdILGVBQWUsQ0FBQ0ksR0FBaEIsQ0FBb0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsRUFBYjtBQUFBLEdBQXBCLENBQXJCO0FBRUEsTUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUNBLE1BQUlDLDZEQUFVLEtBQUtMLFlBQVksQ0FBQ0EsWUFBWSxDQUFDTSxNQUFiLEdBQXNCLENBQXZCLENBQS9CLEVBQTBEO0FBQ3RERixjQUFVLEdBQUdQLGVBQWUsQ0FBQ0EsZUFBZSxDQUFDUyxNQUFoQixHQUF5QixDQUExQixDQUFmLENBQTRDQyxLQUF6RDtBQUNIOztBQUNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsVUFBWjs7QUFFQSxXQUFTTSxTQUFULENBQW1CQyxRQUFuQixFQUE2QkMsaUJBQTdCLEVBQStDO0FBQzNDLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDRCxpQkFBaUIsQ0FBQ04sTUFBbEMsRUFBMENPLENBQUMsRUFBM0MsRUFBK0M7QUFDM0MsVUFBSUQsaUJBQWlCLENBQUNDLENBQUQsQ0FBakIsQ0FBcUJOLEtBQXJCLENBQTJCTyxRQUEzQixDQUFvQ0gsUUFBcEMsQ0FBSixFQUFtRDtBQUMvQyxlQUFPQyxpQkFBaUIsQ0FBQ0MsQ0FBRCxDQUFqQixDQUFxQkUsS0FBNUI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLHNDQUFkO0FBQUEsZ0JBQXVEQyxnRUFBYUE7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxnQkFBTVosVUFBVSxDQUFDSCxHQUFYLENBQWUsVUFBQ2dCLElBQUQ7QUFBQSw0QkFBVSxxRUFBQyxxREFBRDtBQUF5QixZQUFFLEVBQUVBLElBQTdCO0FBQW1DLGVBQUssRUFBRVAsU0FBUyxDQUFDTyxJQUFELEVBQU9DLHNEQUFNLENBQUMzQixVQUFkO0FBQW5ELFdBQW1CMEIsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVjtBQUFBLE9BQWY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7R0FqQ1F4QixNO1VBRWFHLHVEOzs7S0FGYkgsTTtBQW1DTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RheVN1bS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXlDYXRlZ29yeSBmcm9tIFwiLi9EYXlDYXRlZ29yeVwiXG5pbXBvcnQge3RvZGF5R3JlZXRpbmd9IGZyb20gXCIuLi9oZWxwZXJzL3RvZGF5RGF0ZVwiXG5pbXBvcnQgeyB0b2RheUNoYXJ0IH0gZnJvbSBcIi4uL2hlbHBlcnMvdG9kYXlEYXRlXCJcbmltcG9ydCBDYXRlZ29yeUNlbGwgZnJvbSBcIi4vQ2F0ZWdvcnlDZWxsXCJcbmltcG9ydCBJbnB1dHMgZnJvbSBcIi4uL3B1YmxpYy9pbnB1dHNcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5jb25zdCBzZWxlY3REYXlzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllcy5kYXlzXG5cbmZ1bmN0aW9uIERheVN1bShwcm9wcykge1xuXG4gICAgY29uc3Qgc3RvcmVEYXlzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGF5cylcblxuICAgIC8vIEFycmF5IG9mIG9iamVjdHMgW3tpZDpcIlwiLCBjZWxsczpbXX0sIHtpZDpcIlwiLCBjZWxsczpbXX1dXG4gICAgY29uc3Qgc3RvcmVEYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhzdG9yZURheXMpXG5cbiAgICAvLyBnZXQgYXJyYXkgb2YgZGF5cycgaWRzIFtcIjIwMjEtMS0xXCIsIFwiMjAyMS0xLTJcIl0sIGlucHV0czogZGF0YSAtIGFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICBjb25zdCBzdG9yZURheXNJZHMgPSBzdG9yZURheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcblxuICAgIGxldCB0b2RheUNlbGxzID0gW11cbiAgICBpZiAodG9kYXlDaGFydCA9PT0gc3RvcmVEYXlzSWRzW3N0b3JlRGF5c0lkcy5sZW5ndGggLSAxXSkge1xuICAgICAgICB0b2RheUNlbGxzID0gc3RvcmVEYXlzVmFsdWVzW3N0b3JlRGF5c1ZhbHVlcy5sZW5ndGggLSAxXS5jZWxsc1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0b2RheUNlbGxzKVxuXG4gICAgZnVuY3Rpb24gZmluZENvbG9yKGNlbGxOYW1lLCBkZWZpbmVkQ2F0ZWdvcmllcyl7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxkZWZpbmVkQ2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRlZmluZWRDYXRlZ29yaWVzW2ldLmNlbGxzLmluY2x1ZGVzKGNlbGxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZpbmVkQ2F0ZWdvcmllc1tpXS5jb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXktNlwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTUwMFwiID57dG9kYXlHcmVldGluZ308L2gxPlxuICAgICAgICAgICAgPGRpdj57dG9kYXlDZWxscy5tYXAoKGNlbGwpID0+IDxDYXRlZ29yeUNlbGwga2V5PXtjZWxsfSBpZD17Y2VsbH0gY29sb3I9e2ZpbmRDb2xvcihjZWxsLCBJbnB1dHMuY2F0ZWdvcmllcyl9Lz4gKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERheVN1bSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DaySum.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})