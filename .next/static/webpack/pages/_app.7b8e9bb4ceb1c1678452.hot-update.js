webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaultDays */ \"./helpers/defaultDays.js\");\n/* harmony import */ var _helpers_chartOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/chartOptions */ \"./helpers/chartOptions.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of objects [{}, {}]\n\n  var daysValues = Object.values(days); // get array of days' ids [\"2021-1-1\", \"2021-1-2\"], inputs: data - array of objects [{}, {}]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  }); // get array of dates from second day to today [\"2021-1-1\", \"2021-1-2\"]\n\n  var defaultDays = Object(_helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(daysIds[0]), new Date(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__[\"todayChart\"]));\n\n  function cellHappenedToday(cell, defaultDay) {\n    if (daysIds.includes(defaultDay)) {\n      return daysValues.reduce(function (total, day) {\n        if (day.id === defaultDay) {\n          var categoryIds = Object.values(day.categories).map(function (cat) {\n            return cat.id;\n          });\n\n          if (categoryIds.includes(props.id)) {\n            var cells = Object.values(day.categories[props.id].cells);\n\n            if (cells.includes(cell)) {\n              return total + 1;\n            }\n          }\n        }\n\n        return total;\n      }, 0);\n    } else {\n      return 0;\n    }\n  }\n\n  function simplifyDate(date) {\n    console.log(date.slice(date[5], date[6]));\n    var day = date.slice(date.length - 2);\n    var month = date.slice(date[5], date[7]);\n  }\n\n  simplifyDate(\"2021-01-02\");\n  var series = props.defaultCells.map(function (cell) {\n    return {\n      name: cell.name,\n      data: defaultDays.map(function (day) {\n        return {\n          x: day,\n          y: cellHappenedToday(cell.name, day)\n        };\n      })\n    };\n  });\n  var chartWidth = (defaultDays.length * 12).toString();\n  var chartHeight = (props.defaultCells.length * 50).toString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-row\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-lg w-1/5 font-semibold text-\".concat(props.color, \"-400\"),\n      children: props.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n        options: Object(_helpers_chartOptions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.color),\n        series: series,\n        type: \"heatmap\",\n        width: chartWidth,\n        height: chartHeight\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CategoryChart, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJDYXRlZ29yeUNoYXJ0IiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXlzSWRzIiwibWFwIiwiZGF5IiwiaWQiLCJkZWZhdWx0RGF5cyIsImdlbmVyYXRlRGVmYXVsdERheXMiLCJEYXRlIiwidG9kYXlDaGFydCIsImNlbGxIYXBwZW5lZFRvZGF5IiwiY2VsbCIsImRlZmF1bHREYXkiLCJpbmNsdWRlcyIsInJlZHVjZSIsInRvdGFsIiwiY2F0ZWdvcnlJZHMiLCJjYXQiLCJjZWxscyIsInNpbXBsaWZ5RGF0ZSIsImRhdGUiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJsZW5ndGgiLCJtb250aCIsInNlcmllcyIsImRlZmF1bHRDZWxscyIsIm5hbWUiLCJkYXRhIiwieCIsInkiLCJjaGFydFdpZHRoIiwidG9TdHJpbmciLCJjaGFydEhlaWdodCIsImNvbG9yIiwiY2hhcnRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBckI7QUFBQSxDQUF4Qjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDBLQUFOO0FBQUEsQ0FBRCxFQUFvQztBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBckIsc0ZBQXFCO0FBQUE7QUFBQSxjQUFyQixrQkFBcUI7QUFBQTtBQUFBLENBQXBDLENBQXJCO01BQU1GLEs7O0FBRU4sU0FBU0csYUFB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QUF3QlMsUUFBeEIsRUFBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ3JDLEtBQUssQ0FBQzhCLFlBQU4sQ0FBbUJILE1BQW5CLEdBQTBCLEVBQTNCLEVBQStCUyxRQUEvQixFQUFwQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsNkNBQXNDcEMsS0FBSyxDQUFDc0MsS0FBNUMsU0FBZDtBQUFBLGdCQUNLdEMsS0FBSyxDQUFDUTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUEsNkJBQ0kscUVBQUMsS0FBRDtBQUFPLGVBQU8sRUFBRStCLHFFQUFZLENBQUN2QyxLQUFLLENBQUNzQyxLQUFQLENBQTVCO0FBQTJDLGNBQU0sRUFBRVQsTUFBbkQ7QUFBMkQsWUFBSSxFQUFDLFNBQWhFO0FBQTBFLGFBQUssRUFBRU0sVUFBakY7QUFBNkYsY0FBTSxFQUFFRTtBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBaEVRdEMsYTtVQUVRRSx1RDs7O01BRlJGLGE7QUFrRU1BLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgeyB0b2RheUNoYXJ0IH0gZnJvbSBcIi4uL2hlbHBlcnMvdG9kYXlEYXRlXCJcbmltcG9ydCBnZW5lcmF0ZURlZmF1bHREYXlzIGZyb20gXCIuLi9oZWxwZXJzL2RlZmF1bHREYXlzXCJcbmltcG9ydCBjaGFydE9wdGlvbnMgZnJvbSBcIi4uL2hlbHBlcnMvY2hhcnRPcHRpb25zXCJcblxuY29uc3Qgc2VsZWN0RGF5cyA9IHN0YXRlID0+IHN0YXRlLmNhdGVnb3JpZXMuZGF5c1xuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCAoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7c3NyOiBmYWxzZX0pXG5cbmZ1bmN0aW9uIENhdGVnb3J5Q2hhcnQocHJvcHMpIHtcbiAgICBcbiAgICBjb25zdCBkYXlzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGF5cylcbiAgICAvLyBBcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF5cylcblxuICAgIC8vIGdldCBhcnJheSBvZiBkYXlzJyBpZHMgW1wiMjAyMS0xLTFcIiwgXCIyMDIxLTEtMlwiXSwgaW5wdXRzOiBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyBbe30sIHt9XVxuICAgIGNvbnN0IGRheXNJZHMgPSBkYXlzVmFsdWVzLm1hcCgoZGF5KSA9PiBkYXkuaWQpXG5cbiAgICAvLyBnZXQgYXJyYXkgb2YgZGF0ZXMgZnJvbSBzZWNvbmQgZGF5IHRvIHRvZGF5IFtcIjIwMjEtMS0xXCIsIFwiMjAyMS0xLTJcIl1cbiAgICBjb25zdCBkZWZhdWx0RGF5cyA9IGdlbmVyYXRlRGVmYXVsdERheXMobmV3IERhdGUoZGF5c0lkc1swXSksIG5ldyBEYXRlKHRvZGF5Q2hhcnQpKVxuXG4gICAgZnVuY3Rpb24gY2VsbEhhcHBlbmVkVG9kYXkoY2VsbCwgZGVmYXVsdERheSkge1xuICAgICAgICBpZiAoZGF5c0lkcy5pbmNsdWRlcyhkZWZhdWx0RGF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheXNWYWx1ZXMucmVkdWNlKCh0b3RhbCwgZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRheS5pZCA9PT0gZGVmYXVsdERheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUlkcyA9IE9iamVjdC52YWx1ZXMoZGF5LmNhdGVnb3JpZXMpLm1hcCgoY2F0KSA9PiBjYXQuaWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUlkcy5pbmNsdWRlcyhwcm9wcy5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllc1twcm9wcy5pZF0uY2VsbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCBcbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2ltcGxpZnlEYXRlKGRhdGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZS5zbGljZShkYXRlWzVdLGRhdGVbNl0pKVxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLnNsaWNlKGRhdGUubGVuZ3RoLTIpXG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5zbGljZShkYXRlWzVdLGRhdGVbN10pXG4gICAgfVxuICAgIHNpbXBsaWZ5RGF0ZShcIjIwMjEtMDEtMDJcIilcblxuICAgIGNvbnN0IHNlcmllcyA9IHByb3BzLmRlZmF1bHRDZWxscy5tYXAoKGNlbGwpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiBjZWxsLm5hbWUsXG4gICAgICAgICAgZGF0YTogZGVmYXVsdERheXMubWFwKChkYXkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHg6IGRheSxcbiAgICAgICAgICAgICAgICAgIHk6IGNlbGxIYXBwZW5lZFRvZGF5KGNlbGwubmFtZSwgZGF5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIGNvbnN0IGNoYXJ0V2lkdGggPSAoZGVmYXVsdERheXMubGVuZ3RoKjEyKS50b1N0cmluZygpXG4gICAgY29uc3QgY2hhcnRIZWlnaHQgPSAocHJvcHMuZGVmYXVsdENlbGxzLmxlbmd0aCo1MCkudG9TdHJpbmcoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtbGcgdy0xLzUgZm9udC1zZW1pYm9sZCB0ZXh0LSR7cHJvcHMuY29sb3J9LTQwMGB9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pZH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17Y2hhcnRPcHRpb25zKHByb3BzLmNvbG9yKX0gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJoZWF0bWFwXCIgd2lkdGg9e2NoYXJ0V2lkdGh9IGhlaWdodD17Y2hhcnRIZWlnaHR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlDaGFydFxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})