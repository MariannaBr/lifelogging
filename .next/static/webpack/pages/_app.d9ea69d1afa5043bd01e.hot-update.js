webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaultDays */ \"./helpers/defaultDays.js\");\n/* harmony import */ var _helpers_chartOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/chartOptions */ \"./helpers/chartOptions.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of objects [{}, {}]\n\n  var daysValues = Object.values(days); // get array of days' ids [\"2021-1-1\", \"2021-1-2\"], inputs: data - array of objects [{}, {}]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  }); // get array of dates from second day to today [\"2021-1-1\", \"2021-1-2\"]\n\n  var defaultDays = Object(_helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(daysIds[0]), new Date(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__[\"todayChart\"]));\n\n  function cellHappenedToday(cell, defaultDay) {\n    if (daysIds.includes(defaultDay)) {\n      return daysValues.reduce(function (total, day) {\n        if (day.id === defaultDay) {\n          var categoryIds = Object.values(day.categories).map(function (cat) {\n            return cat.id;\n          });\n\n          if (categoryIds.includes(props.id)) {\n            var cells = Object.values(day.categories[props.id].cells);\n\n            if (cells.includes(cell)) {\n              return total + 1;\n            }\n          }\n        }\n\n        return total;\n      }, 0);\n    } else {\n      return 0;\n    }\n  }\n\n  function simplifyDate(date) {\n    console.log(date.slice(5, 7));\n    var day = date.slice(date.length - 2);\n    var month = date.slice(date[5], date[7]);\n  }\n\n  simplifyDate(\"2021-01-02\");\n  var series = props.defaultCells.map(function (cell) {\n    return {\n      name: cell.name,\n      data: defaultDays.map(function (day) {\n        return {\n          x: day,\n          y: cellHappenedToday(cell.name, day)\n        };\n      })\n    };\n  });\n  var chartWidth = (defaultDays.length * 12).toString();\n  var chartHeight = (props.defaultCells.length * 50).toString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-row\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-lg w-1/5 font-semibold text-\".concat(props.color, \"-400\"),\n      children: props.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n        options: Object(_helpers_chartOptions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.color),\n        series: series,\n        type: \"heatmap\",\n        width: chartWidth,\n        height: chartHeight\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CategoryChart, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJDYXRlZ29yeUNoYXJ0IiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXlzSWRzIiwibWFwIiwiZGF5IiwiaWQiLCJkZWZhdWx0RGF5cyIsImdlbmVyYXRlRGVmYXVsdERheXMiLCJEYXRlIiwidG9kYXlDaGFydCIsImNlbGxIYXBwZW5lZFRvZGF5IiwiY2VsbCIsImRlZmF1bHREYXkiLCJpbmNsdWRlcyIsInJlZHVjZSIsInRvdGFsIiwiY2F0ZWdvcnlJZHMiLCJjYXQiLCJjZWxscyIsInNpbXBsaWZ5RGF0ZSIsImRhdGUiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJsZW5ndGgiLCJtb250aCIsInNlcmllcyIsImRlZmF1bHRDZWxscyIsIm5hbWUiLCJkYXRhIiwieCIsInkiLCJjaGFydFdpZHRoIiwidG9TdHJpbmciLCJjaGFydEhlaWdodCIsImNvbG9yIiwiY2hhcnRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBckI7QUFBQSxDQUF4Qjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDBLQUFOO0FBQUEsQ0FBRCxFQUFvQztBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsc0ZBQXFCO0FBQUE7QUFBQSxjQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQXBDLENBQXJCO01BQU1GLEs7O0FBRU4sU0FBU0csYUFB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R0FBRyxDQUFDckMsS0FBSyxDQUFDOEIsWUFBTixDQUFtQkgsTUFBbkIsR0FBMEIsRUFBM0IsRUFBK0JTLFFBQS9CLEVBQXBCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyw2Q0FBc0NwQyxLQUFLLENBQUNzQyxLQUE1QyxTQUFkO0FBQUEsZ0JBQ0t0QyxLQUFLLENBQUNRO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQU8sZUFBTyxFQUFFK0IscUVBQVksQ0FBQ3ZDLEtBQUssQ0FBQ3NDLEtBQVAsQ0FBNUI7QUFBMkMsY0FBTSxFQUFFVCxNQUFuRDtBQUEyRCxZQUFJLEVBQUMsU0FBaEU7QUFBMEUsYUFBSyxFQUFFTSxVQUFqRjtBQUE2RixjQUFNLEVBQUVFO0FBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7R0FoRVF0QyxhO1VBRVFFLHVEOzs7TUFGUkYsYTtBQWtFTUEsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Q2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCB7IHRvZGF5Q2hhcnQgfSBmcm9tIFwiLi4vaGVscGVycy90b2RheURhdGVcIlxuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdERheXMgZnJvbSBcIi4uL2hlbHBlcnMvZGVmYXVsdERheXNcIlxuaW1wb3J0IGNoYXJ0T3B0aW9ucyBmcm9tIFwiLi4vaGVscGVycy9jaGFydE9wdGlvbnNcIlxuXG5jb25zdCBzZWxlY3REYXlzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllcy5kYXlzXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0IChcInJlYWN0LWFwZXhjaGFydHNcIiksIHtzc3I6IGZhbHNlfSlcblxuZnVuY3Rpb24gQ2F0ZWdvcnlDaGFydChwcm9wcykge1xuICAgIFxuICAgIGNvbnN0IGRheXMgPSB1c2VTZWxlY3RvcihzZWxlY3REYXlzKVxuICAgIC8vIEFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICBjb25zdCBkYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXlzKVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGRheXMnIGlkcyBbXCIyMDIxLTEtMVwiLCBcIjIwMjEtMS0yXCJdLCBpbnB1dHM6IGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcblxuICAgIC8vIGdldCBhcnJheSBvZiBkYXRlcyBmcm9tIHNlY29uZCBkYXkgdG8gdG9kYXkgW1wiMjAyMS0xLTFcIiwgXCIyMDIxLTEtMlwiXVxuICAgIGNvbnN0IGRlZmF1bHREYXlzID0gZ2VuZXJhdGVEZWZhdWx0RGF5cyhuZXcgRGF0ZShkYXlzSWRzWzBdKSwgbmV3IERhdGUodG9kYXlDaGFydCkpXG5cbiAgICBmdW5jdGlvbiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLCBkZWZhdWx0RGF5KSB7XG4gICAgICAgIGlmIChkYXlzSWRzLmluY2x1ZGVzKGRlZmF1bHREYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF5LmlkID09PSBkZWZhdWx0RGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SWRzID0gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllcykubWFwKChjYXQpID0+IGNhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5SWRzLmluY2x1ZGVzKHByb3BzLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBPYmplY3QudmFsdWVzKGRheS5jYXRlZ29yaWVzW3Byb3BzLmlkXS5jZWxscylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxscy5pbmNsdWRlcyhjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsIFxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaW1wbGlmeURhdGUoZGF0ZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRlLnNsaWNlKDUsNykpXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuc2xpY2UoZGF0ZS5sZW5ndGgtMilcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLnNsaWNlKGRhdGVbNV0sZGF0ZVs3XSlcbiAgICB9XG4gICAgc2ltcGxpZnlEYXRlKFwiMjAyMS0wMS0wMlwiKVxuXG4gICAgY29uc3Qgc2VyaWVzID0gcHJvcHMuZGVmYXVsdENlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGNlbGwubmFtZSxcbiAgICAgICAgICBkYXRhOiBkZWZhdWx0RGF5cy5tYXAoKGRheSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgeDogZGF5LFxuICAgICAgICAgICAgICAgICAgeTogY2VsbEhhcHBlbmVkVG9kYXkoY2VsbC5uYW1lLCBkYXkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgY29uc3QgY2hhcnRXaWR0aCA9IChkZWZhdWx0RGF5cy5sZW5ndGgqMTIpLnRvU3RyaW5nKClcbiAgICBjb25zdCBjaGFydEhlaWdodCA9IChwcm9wcy5kZWZhdWx0Q2VsbHMubGVuZ3RoKjUwKS50b1N0cmluZygpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1sZyB3LTEvNSBmb250LXNlbWlib2xkIHRleHQtJHtwcm9wcy5jb2xvcn0tNDAwYH0+XG4gICAgICAgICAgICAgICAge3Byb3BzLmlkfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtjaGFydE9wdGlvbnMocHJvcHMuY29sb3IpfSBzZXJpZXM9e3Nlcmllc30gdHlwZT1cImhlYXRtYXBcIiB3aWR0aD17Y2hhcnRXaWR0aH0gaGVpZ2h0PXtjaGFydEhlaWdodH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUNoYXJ0XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})