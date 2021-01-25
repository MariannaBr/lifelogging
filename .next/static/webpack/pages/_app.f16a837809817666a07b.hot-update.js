webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaultDays */ \"./helpers/defaultDays.js\");\n/* harmony import */ var _helpers_chartOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/chartOptions */ \"./helpers/chartOptions.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of objects [{}, {}]\n\n  var daysValues = Object.values(days); // get array of days' ids [\"2021-1-1\", \"2021-1-2\"], inputs: data - array of objects [{}, {}]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  }); // get array of dates from second day to today [\"2021-1-1\", \"2021-1-2\"]\n\n  var defaultDays = Object(_helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(daysIds[0]), new Date(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__[\"todayChart\"]));\n\n  function cellHappenedToday(cell, defaultDay) {\n    if (daysIds.includes(defaultDay)) {\n      return daysValues.reduce(function (total, day) {\n        if (day.id === defaultDay) {\n          var categoryIds = Object.values(day.categories).map(function (cat) {\n            return cat.id;\n          });\n\n          if (categoryIds.includes(props.id)) {\n            var cells = Object.values(day.categories[props.id].cells);\n\n            if (cells.includes(cell)) {\n              return total + 1;\n            }\n          }\n        }\n\n        return total;\n      }, 0);\n    } else {\n      return 0;\n    }\n  }\n\n  var series = props.defaultCells.map(function (cell) {\n    return {\n      name: cell.name,\n      data: defaultDays.map(function (day) {\n        return {\n          x: day,\n          y: cellHappenedToday(cell.name, day)\n        };\n      })\n    };\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-row\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-lg w-1/5 font-semibold text-\".concat(props.color, \"-400\"),\n      children: props.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n        options: Object(_helpers_chartOptions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.color),\n        series: series,\n        type: \"heatmap\",\n        width: \"400\",\n        height: \"auto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CategoryChart, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJDYXRlZ29yeUNoYXJ0IiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXlzSWRzIiwibWFwIiwiZGF5IiwiaWQiLCJkZWZhdWx0RGF5cyIsImdlbmVyYXRlRGVmYXVsdERheXMiLCJEYXRlIiwidG9kYXlDaGFydCIsImNlbGxIYXBwZW5lZFRvZGF5IiwiY2VsbCIsImRlZmF1bHREYXkiLCJpbmNsdWRlcyIsInJlZHVjZSIsInRvdGFsIiwiY2F0ZWdvcnlJZHMiLCJjYXQiLCJjZWxscyIsInNlcmllcyIsImRlZmF1bHRDZWxscyIsIm5hbWUiLCJkYXRhIiwieCIsInkiLCJjb2xvciIsImNoYXJ0T3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLElBQXJCO0FBQUEsQ0FBeEI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwwS0FBTjtBQUFBLENBQUQsRUFBb0M7QUFBQ0MsS0FBRyxFQUFFLEtBQU47QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsY0FBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFwQyxDQUFyQjtNQUFNRixLOztBQUVOLFNBQVNHLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBRTFCLE1BQU1MLElBQUksR0FBR00sK0RBQVcsQ0FBQ1QsVUFBRCxDQUF4QixDQUYwQixDQUcxQjs7QUFDQSxNQUFNVSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVCxJQUFkLENBQW5CLENBSjBCLENBTTFCOztBQUNBLE1BQU1VLE9BQU8sR0FBR0gsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsRUFBYjtBQUFBLEdBQWYsQ0FBaEIsQ0FQMEIsQ0FTMUI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHQyxvRUFBbUIsQ0FBQyxJQUFJQyxJQUFKLENBQVNOLE9BQU8sQ0FBQyxDQUFELENBQWhCLENBQUQsRUFBdUIsSUFBSU0sSUFBSixDQUFTQyw2REFBVCxDQUF2QixDQUF2Qzs7QUFFQSxXQUFTQyxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNDLFVBQWpDLEVBQTZDO0FBQ3pDLFFBQUlWLE9BQU8sQ0FBQ1csUUFBUixDQUFpQkQsVUFBakIsQ0FBSixFQUFrQztBQUM5QixhQUFPYixVQUFVLENBQUNlLE1BQVgsQ0FBa0IsVUFBQ0MsS0FBRCxFQUFRWCxHQUFSLEVBQWdCO0FBQ3JDLFlBQUlBLEdBQUcsQ0FBQ0MsRUFBSixLQUFXTyxVQUFmLEVBQTJCO0FBQ3ZCLGNBQU1JLFdBQVcsR0FBR2hCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRyxHQUFHLENBQUNiLFVBQWxCLEVBQThCWSxHQUE5QixDQUFrQyxVQUFDYyxHQUFEO0FBQUEsbUJBQVNBLEdBQUcsQ0FBQ1osRUFBYjtBQUFBLFdBQWxDLENBQXBCOztBQUNBLGNBQUlXLFdBQVcsQ0FBQ0gsUUFBWixDQUFxQmhCLEtBQUssQ0FBQ1EsRUFBM0IsQ0FBSixFQUFvQztBQUNoQyxnQkFBTWEsS0FBSyxHQUFHbEIsTUFBTSxDQUFDQyxNQUFQLENBQWNHLEdBQUcsQ0FBQ2IsVUFBSixDQUFlTSxLQUFLLENBQUNRLEVBQXJCLEVBQXlCYSxLQUF2QyxDQUFkOztBQUNBLGdCQUFJQSxLQUFLLENBQUNMLFFBQU4sQ0FBZUYsSUFBZixDQUFKLEVBQTBCO0FBQ3RCLHFCQUFPSSxLQUFLLEdBQUcsQ0FBZjtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxlQUFPQSxLQUFQO0FBQ0gsT0FYTSxFQVdKLENBWEksQ0FBUDtBQVlILEtBYkQsTUFhTztBQUNILGFBQU8sQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsTUFBTUksTUFBTSxHQUFHdEIsS0FBSyxDQUFDdUIsWUFBTixDQUFtQmpCLEdBQW5CLENBQXVCLFVBQUNRLElBQUQsRUFBVTtBQUM1QyxXQUFPO0FBQ0xVLFVBQUksRUFBRVYsSUFBSSxDQUFDVSxJQUROO0FBRUxDLFVBQUksRUFBRWhCLFdBQVcsQ0FBQ0gsR0FBWixDQUFnQixVQUFDQyxHQUFELEVBQVM7QUFDM0IsZUFBTztBQUNIbUIsV0FBQyxFQUFFbkIsR0FEQTtBQUVIb0IsV0FBQyxFQUFFZCxpQkFBaUIsQ0FBQ0MsSUFBSSxDQUFDVSxJQUFOLEVBQVlqQixHQUFaO0FBRmpCLFNBQVA7QUFJSCxPQUxLO0FBRkQsS0FBUDtBQVNELEdBVlksQ0FBZjtBQVlBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsNkNBQXNDUCxLQUFLLENBQUM0QixLQUE1QyxTQUFkO0FBQUEsZ0JBQ0s1QixLQUFLLENBQUNRO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQU8sZUFBTyxFQUFFcUIscUVBQVksQ0FBQzdCLEtBQUssQ0FBQzRCLEtBQVAsQ0FBNUI7QUFBMkMsY0FBTSxFQUFFTixNQUFuRDtBQUEyRCxZQUFJLEVBQUMsU0FBaEU7QUFBMEUsYUFBSyxFQUFDLEtBQWhGO0FBQXNGLGNBQU0sRUFBQztBQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBdERRdkIsYTtVQUVRRSx1RDs7O01BRlJGLGE7QUF3RE1BLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiXG5pbXBvcnQgeyB0b2RheUNoYXJ0IH0gZnJvbSBcIi4uL2hlbHBlcnMvdG9kYXlEYXRlXCJcbmltcG9ydCBnZW5lcmF0ZURlZmF1bHREYXlzIGZyb20gXCIuLi9oZWxwZXJzL2RlZmF1bHREYXlzXCJcbmltcG9ydCBjaGFydE9wdGlvbnMgZnJvbSBcIi4uL2hlbHBlcnMvY2hhcnRPcHRpb25zXCJcblxuY29uc3Qgc2VsZWN0RGF5cyA9IHN0YXRlID0+IHN0YXRlLmNhdGVnb3JpZXMuZGF5c1xuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCAoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7c3NyOiBmYWxzZX0pXG5cbmZ1bmN0aW9uIENhdGVnb3J5Q2hhcnQocHJvcHMpIHtcbiAgICBcbiAgICBjb25zdCBkYXlzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGF5cylcbiAgICAvLyBBcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF5cylcblxuICAgIC8vIGdldCBhcnJheSBvZiBkYXlzJyBpZHMgW1wiMjAyMS0xLTFcIiwgXCIyMDIxLTEtMlwiXSwgaW5wdXRzOiBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyBbe30sIHt9XVxuICAgIGNvbnN0IGRheXNJZHMgPSBkYXlzVmFsdWVzLm1hcCgoZGF5KSA9PiBkYXkuaWQpXG5cbiAgICAvLyBnZXQgYXJyYXkgb2YgZGF0ZXMgZnJvbSBzZWNvbmQgZGF5IHRvIHRvZGF5IFtcIjIwMjEtMS0xXCIsIFwiMjAyMS0xLTJcIl1cbiAgICBjb25zdCBkZWZhdWx0RGF5cyA9IGdlbmVyYXRlRGVmYXVsdERheXMobmV3IERhdGUoZGF5c0lkc1swXSksIG5ldyBEYXRlKHRvZGF5Q2hhcnQpKVxuXG4gICAgZnVuY3Rpb24gY2VsbEhhcHBlbmVkVG9kYXkoY2VsbCwgZGVmYXVsdERheSkge1xuICAgICAgICBpZiAoZGF5c0lkcy5pbmNsdWRlcyhkZWZhdWx0RGF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRheXNWYWx1ZXMucmVkdWNlKCh0b3RhbCwgZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRheS5pZCA9PT0gZGVmYXVsdERheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUlkcyA9IE9iamVjdC52YWx1ZXMoZGF5LmNhdGVnb3JpZXMpLm1hcCgoY2F0KSA9PiBjYXQuaWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUlkcy5pbmNsdWRlcyhwcm9wcy5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllc1twcm9wcy5pZF0uY2VsbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCBcbiAgICAgICAgICAgIH0sIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWVzID0gcHJvcHMuZGVmYXVsdENlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGNlbGwubmFtZSxcbiAgICAgICAgICBkYXRhOiBkZWZhdWx0RGF5cy5tYXAoKGRheSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgeDogZGF5LFxuICAgICAgICAgICAgICAgICAgeTogY2VsbEhhcHBlbmVkVG9kYXkoY2VsbC5uYW1lLCBkYXkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtbGcgdy0xLzUgZm9udC1zZW1pYm9sZCB0ZXh0LSR7cHJvcHMuY29sb3J9LTQwMGB9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pZH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17Y2hhcnRPcHRpb25zKHByb3BzLmNvbG9yKX0gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJoZWF0bWFwXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCJhdXRvXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUNoYXJ0XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})