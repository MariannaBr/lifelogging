webpackHotUpdate_N_E("pages/user",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_chartOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/chartOptions */ \"./helpers/chartOptions.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\";\n\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  // default chart series, generated for every cell\n  var defaultSeries = props.defaultCells.map(function (cell) {\n    return {\n      name: cell.name,\n      data: props.defaultDatas\n    };\n  });\n  var CellDayValue = [];\n  var data = {};\n\n  for (var i = 0; i < props.chartDays.length; i++) {\n    data[props.chartDays[i]] = {};\n    console.log(\"data[day]\", data[props.chartDays[i]]);\n\n    for (var j = 0; j < props.defaultCells.length; j++) {\n      data[props.chartDays[i]][props.defaultCells[j]] = 0;\n      CellDayValue.push(data);\n    }\n  } //console.log(CellDayValue)\n\n\n  var chartWidth = (props.chartDays.length * 15).toString();\n  var chartHeight = (props.defaultCells.length * 50).toString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-row\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-lg w-1/5 font-semibold text-\".concat(props.color, \"-400\"),\n      children: props.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n        options: Object(_helpers_chartOptions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props.color),\n        series: defaultSeries,\n        type: \"heatmap\",\n        width: chartWidth,\n        height: chartHeight\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, this);\n}\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart); // const series = props.defaultCells.map((cell) => {\n//     return {\n//       name: cell.name,\n//       data: chartDays.map((day) => {\n//           return {\n//               x: simplifyDate(day),\n//               y: cellHappenedToday(cell.name, day)\n//           }\n//       })\n//     }\n//   })\n// function cellHappenedToday(cell, chartDay) {\n//     return storeDaysValues.reduce((total, day) => {\n//         if (day.id === chartDay) {\n//             const storeCellsIds = Object.values(day.cells)\n//             if (storeCellsIds.includes(cell)) {\n//                 return total + 1\n//             }\n//         }               \n//         return total \n//     }, 0)\n// }\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsiQ2hhcnQiLCJkeW5hbWljIiwic3NyIiwiQ2F0ZWdvcnlDaGFydCIsInByb3BzIiwiZGVmYXVsdFNlcmllcyIsImRlZmF1bHRDZWxscyIsIm1hcCIsImNlbGwiLCJuYW1lIiwiZGF0YSIsImRlZmF1bHREYXRhcyIsIkNlbGxEYXlWYWx1ZSIsImkiLCJjaGFydERheXMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiaiIsInB1c2giLCJjaGFydFdpZHRoIiwidG9TdHJpbmciLCJjaGFydEhlaWdodCIsImNvbG9yIiwiaWQiLCJjaGFydE9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMEtBQU47QUFBQSxDQUFELEVBQW9DO0FBQUNDLEtBQUcsRUFBRSxLQUFOO0FBQUE7QUFBQTtBQUFBLGtDQUFyQixzRkFBcUI7QUFBQTtBQUFBLGNBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBcEMsQ0FBckI7TUFBTUYsSzs7QUFFTixTQUFTRyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUUxQjtBQUNBLE1BQU1DLGFBQWEsR0FBR0QsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQVU7QUFDbkQsV0FBTztBQUNIQyxVQUFJLEVBQUVELElBQUksQ0FBQ0MsSUFEUjtBQUVIQyxVQUFJLEVBQUVOLEtBQUssQ0FBQ087QUFGVCxLQUFQO0FBSUgsR0FMcUIsQ0FBdEI7QUFPQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQSxNQUFJRixJQUFJLEdBQUcsRUFBWDs7QUFDQSxPQUFLLElBQUlHLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ1QsS0FBSyxDQUFDVSxTQUFOLENBQWdCQyxNQUFoQyxFQUF1Q0YsQ0FBQyxFQUF4QyxFQUE0QztBQUN4Q0gsUUFBSSxDQUFDTixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JELENBQWhCLENBQUQsQ0FBSixHQUEyQixFQUEzQjtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXdCUCxJQUFJLENBQUNOLEtBQUssQ0FBQ1UsU0FBTixDQUFnQkQsQ0FBaEIsQ0FBRCxDQUE1Qjs7QUFDQSxTQUFLLElBQUlLLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ2QsS0FBSyxDQUFDRSxZQUFOLENBQW1CUyxNQUFuQyxFQUEyQ0csQ0FBQyxFQUE1QyxFQUFnRDtBQUM1Q1IsVUFBSSxDQUFDTixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JELENBQWhCLENBQUQsQ0FBSixDQUF5QlQsS0FBSyxDQUFDRSxZQUFOLENBQW1CWSxDQUFuQixDQUF6QixJQUFrRCxDQUFsRDtBQUNBTixrQkFBWSxDQUFDTyxJQUFiLENBQWtCVCxJQUFsQjtBQUNIO0FBQ0osR0FuQnlCLENBcUIxQjs7O0FBRUEsTUFBTVUsVUFBVSxHQUFHLENBQUNoQixLQUFLLENBQUNVLFNBQU4sQ0FBZ0JDLE1BQWhCLEdBQXVCLEVBQXhCLEVBQTRCTSxRQUE1QixFQUFuQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxDQUFDbEIsS0FBSyxDQUFDRSxZQUFOLENBQW1CUyxNQUFuQixHQUEwQixFQUEzQixFQUErQk0sUUFBL0IsRUFBcEI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLDZDQUFzQ2pCLEtBQUssQ0FBQ21CLEtBQTVDLFNBQWQ7QUFBQSxnQkFDS25CLEtBQUssQ0FBQ29CO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQU8sZUFBTyxFQUFFQyxxRUFBWSxDQUFDckIsS0FBSyxDQUFDbUIsS0FBUCxDQUE1QjtBQUEyQyxjQUFNLEVBQUVsQixhQUFuRDtBQUFrRSxZQUFJLEVBQUMsU0FBdkU7QUFBaUYsYUFBSyxFQUFFZSxVQUF4RjtBQUFvRyxjQUFNLEVBQUVFO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7TUFyQ1FuQixhO0FBdUNNQSw0RUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Q2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCBjaGFydE9wdGlvbnMgZnJvbSBcIi4uL2hlbHBlcnMvY2hhcnRPcHRpb25zXCJcblxuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCAoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7c3NyOiBmYWxzZX0pXG5cbmZ1bmN0aW9uIENhdGVnb3J5Q2hhcnQocHJvcHMpIHtcblxuICAgIC8vIGRlZmF1bHQgY2hhcnQgc2VyaWVzLCBnZW5lcmF0ZWQgZm9yIGV2ZXJ5IGNlbGxcbiAgICBjb25zdCBkZWZhdWx0U2VyaWVzID0gcHJvcHMuZGVmYXVsdENlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogY2VsbC5uYW1lLFxuICAgICAgICAgICAgZGF0YTogcHJvcHMuZGVmYXVsdERhdGFzXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgQ2VsbERheVZhbHVlID0gW11cbiAgICBsZXQgZGF0YSA9IHt9XG4gICAgZm9yICh2YXIgaT0wOyBpPHByb3BzLmNoYXJ0RGF5cy5sZW5ndGg7aSsrKSB7XG4gICAgICAgIGRhdGFbcHJvcHMuY2hhcnREYXlzW2ldXSA9IHt9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVtkYXldXCIsZGF0YVtwcm9wcy5jaGFydERheXNbaV1dKVxuICAgICAgICBmb3IgKHZhciBqPTA7IGo8cHJvcHMuZGVmYXVsdENlbGxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBkYXRhW3Byb3BzLmNoYXJ0RGF5c1tpXV1bcHJvcHMuZGVmYXVsdENlbGxzW2pdXSA9IDBcbiAgICAgICAgICAgIENlbGxEYXlWYWx1ZS5wdXNoKGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKENlbGxEYXlWYWx1ZSlcblxuICAgIGNvbnN0IGNoYXJ0V2lkdGggPSAocHJvcHMuY2hhcnREYXlzLmxlbmd0aCoxNSkudG9TdHJpbmcoKVxuICAgIGNvbnN0IGNoYXJ0SGVpZ2h0ID0gKHByb3BzLmRlZmF1bHRDZWxscy5sZW5ndGgqNTApLnRvU3RyaW5nKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LWxnIHctMS81IGZvbnQtc2VtaWJvbGQgdGV4dC0ke3Byb3BzLmNvbG9yfS00MDBgfT5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaWR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e2NoYXJ0T3B0aW9ucyhwcm9wcy5jb2xvcil9IHNlcmllcz17ZGVmYXVsdFNlcmllc30gdHlwZT1cImhlYXRtYXBcIiB3aWR0aD17Y2hhcnRXaWR0aH0gaGVpZ2h0PXtjaGFydEhlaWdodH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUNoYXJ0XG5cbi8vIGNvbnN0IHNlcmllcyA9IHByb3BzLmRlZmF1bHRDZWxscy5tYXAoKGNlbGwpID0+IHtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgbmFtZTogY2VsbC5uYW1lLFxuLy8gICAgICAgZGF0YTogY2hhcnREYXlzLm1hcCgoZGF5KSA9PiB7XG4vLyAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgeDogc2ltcGxpZnlEYXRlKGRheSksXG4vLyAgICAgICAgICAgICAgIHk6IGNlbGxIYXBwZW5lZFRvZGF5KGNlbGwubmFtZSwgZGF5KVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICB9KVxuXG4vLyBmdW5jdGlvbiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLCBjaGFydERheSkge1xuLy8gICAgIHJldHVybiBzdG9yZURheXNWYWx1ZXMucmVkdWNlKCh0b3RhbCwgZGF5KSA9PiB7XG4vLyAgICAgICAgIGlmIChkYXkuaWQgPT09IGNoYXJ0RGF5KSB7XG4vLyAgICAgICAgICAgICBjb25zdCBzdG9yZUNlbGxzSWRzID0gT2JqZWN0LnZhbHVlcyhkYXkuY2VsbHMpXG4vLyAgICAgICAgICAgICBpZiAoc3RvcmVDZWxsc0lkcy5pbmNsdWRlcyhjZWxsKSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIDFcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSAgICAgICAgICAgICAgIFxuLy8gICAgICAgICByZXR1cm4gdG90YWwgXG4vLyAgICAgfSwgMClcbi8vIH1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})