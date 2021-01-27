webpackHotUpdate_N_E("pages/user",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_chartOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/chartOptions */ \"./helpers/chartOptions.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\";\n\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  // default chart series, generated for every cell\n  // const defaultSeries = props.defaultCells.map((cell) => {\n  //     return {\n  //         name: cell.name,\n  //         data: props.defaultDatas\n  //     }\n  // })\n  var data = {};\n\n  for (var i = 0; i < props.chartDays.length; i++) {\n    //console.log(\"day\", props.chartDays[i])\n    data[props.chartDays[i]] = {}; //console.log(\"data[day]\",data[props.chartDays[i]])\n\n    for (var j = 0; j < props.defaultCells.length; j++) {\n      data[props.chartDays[i]][props.defaultCells[j]] = 0; //console.log(\"data[day][cell]\", data[props.chartDays[i]][props.defaultCells[j]])\n    }\n  } //console.log(data)\n\n\n  for (var i = 0; i < props.storeDaysValues.length; i++) {\n    for (j = 0; j < props.storeDaysValues[cells].length; j++) {\n      data[props.storeDaysValues[i]].id[props.storeDaysValues[i].cells[j]] = 1;\n    }\n  }\n\n  console.log(data);\n  var chartWidth = (props.chartDays.length * 15).toString();\n  var chartHeight = (props.defaultCells.length * 50).toString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-row\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"text-lg w-1/5 font-semibold text-\".concat(props.color, \"-400\"),\n      children: props.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n        options: Object(_helpers_chartOptions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(props.color),\n        series: defaultSeries,\n        type: \"heatmap\",\n        width: chartWidth,\n        height: chartHeight\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart); // const series = props.defaultCells.map((cell) => {\n//     return {\n//       name: cell.name,\n//       data: chartDays.map((day) => {\n//           return {\n//               x: simplifyDate(day),\n//               y: cellHappenedToday(cell.name, day)\n//           }\n//       })\n//     }\n//   })\n// function cellHappenedToday(cell, chartDay) {\n//     return storeDaysValues.reduce((total, day) => {\n//         if (day.id === chartDay) {\n//             const storeCellsIds = Object.values(day.cells)\n//             if (storeCellsIds.includes(cell)) {\n//                 return total + 1\n//             }\n//         }               \n//         return total \n//     }, 0)\n// }\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsiQ2hhcnQiLCJkeW5hbWljIiwic3NyIiwiQ2F0ZWdvcnlDaGFydCIsInByb3BzIiwiZGF0YSIsImkiLCJjaGFydERheXMiLCJsZW5ndGgiLCJqIiwiZGVmYXVsdENlbGxzIiwic3RvcmVEYXlzVmFsdWVzIiwiY2VsbHMiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjaGFydFdpZHRoIiwidG9TdHJpbmciLCJjaGFydEhlaWdodCIsImNvbG9yIiwiY2hhcnRPcHRpb25zIiwiZGVmYXVsdFNlcmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwwS0FBTjtBQUFBLENBQUQsRUFBb0M7QUFBQ0MsS0FBRyxFQUFFLEtBQU47QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsY0FBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFwQyxDQUFyQjtNQUFNRixLOztBQUVOLFNBQVNHLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNGLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsTUFBaEMsRUFBdUNGLENBQUMsRUFBeEMsRUFBNEM7QUFDeEM7QUFDQUQsUUFBSSxDQUFDRCxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JELENBQWhCLENBQUQsQ0FBSixHQUEyQixFQUEzQixDQUZ3QyxDQUd4Qzs7QUFDQSxTQUFLLElBQUlHLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ0wsS0FBSyxDQUFDTSxZQUFOLENBQW1CRixNQUFuQyxFQUEyQ0MsQ0FBQyxFQUE1QyxFQUFnRDtBQUM1Q0osVUFBSSxDQUFDRCxLQUFLLENBQUNHLFNBQU4sQ0FBZ0JELENBQWhCLENBQUQsQ0FBSixDQUF5QkYsS0FBSyxDQUFDTSxZQUFOLENBQW1CRCxDQUFuQixDQUF6QixJQUFrRCxDQUFsRCxDQUQ0QyxDQUU1QztBQUNIO0FBQ0osR0FuQnlCLENBcUIxQjs7O0FBRUEsT0FBSyxJQUFJSCxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUNGLEtBQUssQ0FBQ08sZUFBTixDQUFzQkgsTUFBdEMsRUFBOENGLENBQUMsRUFBL0MsRUFBbUQ7QUFDL0MsU0FBS0csQ0FBQyxHQUFDLENBQVAsRUFBVUEsQ0FBQyxHQUFDTCxLQUFLLENBQUNPLGVBQU4sQ0FBc0JDLEtBQXRCLEVBQTZCSixNQUF6QyxFQUFpREMsQ0FBQyxFQUFsRCxFQUFzRDtBQUNsREosVUFBSSxDQUFDRCxLQUFLLENBQUNPLGVBQU4sQ0FBc0JMLENBQXRCLENBQUQsQ0FBSixDQUErQk8sRUFBL0IsQ0FBa0NULEtBQUssQ0FBQ08sZUFBTixDQUFzQkwsQ0FBdEIsRUFBeUJNLEtBQXpCLENBQStCSCxDQUEvQixDQUFsQyxJQUF1RSxDQUF2RTtBQUNIO0FBQ0o7O0FBRURLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaO0FBQ0EsTUFBTVcsVUFBVSxHQUFHLENBQUNaLEtBQUssQ0FBQ0csU0FBTixDQUFnQkMsTUFBaEIsR0FBdUIsRUFBeEIsRUFBNEJTLFFBQTVCLEVBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNkLEtBQUssQ0FBQ00sWUFBTixDQUFtQkYsTUFBbkIsR0FBMEIsRUFBM0IsRUFBK0JTLFFBQS9CLEVBQXBCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyw2Q0FBc0NiLEtBQUssQ0FBQ2UsS0FBNUMsU0FBZDtBQUFBLGdCQUNLZixLQUFLLENBQUNTO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBQSw2QkFDSSxxRUFBQyxLQUFEO0FBQU8sZUFBTyxFQUFFTyxxRUFBWSxDQUFDaEIsS0FBSyxDQUFDZSxLQUFQLENBQTVCO0FBQTJDLGNBQU0sRUFBRUUsYUFBbkQ7QUFBa0UsWUFBSSxFQUFDLFNBQXZFO0FBQWlGLGFBQUssRUFBRUwsVUFBeEY7QUFBb0csY0FBTSxFQUFFRTtBQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O01BNUNRZixhO0FBOENNQSw0RUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Q2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCBjaGFydE9wdGlvbnMgZnJvbSBcIi4uL2hlbHBlcnMvY2hhcnRPcHRpb25zXCJcblxuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCAoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7c3NyOiBmYWxzZX0pXG5cbmZ1bmN0aW9uIENhdGVnb3J5Q2hhcnQocHJvcHMpIHtcblxuICAgIC8vIGRlZmF1bHQgY2hhcnQgc2VyaWVzLCBnZW5lcmF0ZWQgZm9yIGV2ZXJ5IGNlbGxcbiAgICAvLyBjb25zdCBkZWZhdWx0U2VyaWVzID0gcHJvcHMuZGVmYXVsdENlbGxzLm1hcCgoY2VsbCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgICAgbmFtZTogY2VsbC5uYW1lLFxuICAgIC8vICAgICAgICAgZGF0YTogcHJvcHMuZGVmYXVsdERhdGFzXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxuXG4gICAgbGV0IGRhdGEgPSB7fVxuICAgIGZvciAodmFyIGk9MDsgaTxwcm9wcy5jaGFydERheXMubGVuZ3RoO2krKykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGF5XCIsIHByb3BzLmNoYXJ0RGF5c1tpXSlcbiAgICAgICAgZGF0YVtwcm9wcy5jaGFydERheXNbaV1dID0ge31cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGFbZGF5XVwiLGRhdGFbcHJvcHMuY2hhcnREYXlzW2ldXSlcbiAgICAgICAgZm9yICh2YXIgaj0wOyBqPHByb3BzLmRlZmF1bHRDZWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgZGF0YVtwcm9wcy5jaGFydERheXNbaV1dW3Byb3BzLmRlZmF1bHRDZWxsc1tqXV0gPSAwXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGF0YVtkYXldW2NlbGxdXCIsIGRhdGFbcHJvcHMuY2hhcnREYXlzW2ldXVtwcm9wcy5kZWZhdWx0Q2VsbHNbal1dKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgZm9yICh2YXIgaT0wOyBpPHByb3BzLnN0b3JlRGF5c1ZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGo9MDsgajxwcm9wcy5zdG9yZURheXNWYWx1ZXNbY2VsbHNdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBkYXRhW3Byb3BzLnN0b3JlRGF5c1ZhbHVlc1tpXV0uaWRbcHJvcHMuc3RvcmVEYXlzVmFsdWVzW2ldLmNlbGxzW2pdXSA9IDFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgY29uc3QgY2hhcnRXaWR0aCA9IChwcm9wcy5jaGFydERheXMubGVuZ3RoKjE1KS50b1N0cmluZygpXG4gICAgY29uc3QgY2hhcnRIZWlnaHQgPSAocHJvcHMuZGVmYXVsdENlbGxzLmxlbmd0aCo1MCkudG9TdHJpbmcoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRleHQtbGcgdy0xLzUgZm9udC1zZW1pYm9sZCB0ZXh0LSR7cHJvcHMuY29sb3J9LTQwMGB9PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pZH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17Y2hhcnRPcHRpb25zKHByb3BzLmNvbG9yKX0gc2VyaWVzPXtkZWZhdWx0U2VyaWVzfSB0eXBlPVwiaGVhdG1hcFwiIHdpZHRoPXtjaGFydFdpZHRofSBoZWlnaHQ9e2NoYXJ0SGVpZ2h0fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Q2hhcnRcblxuLy8gY29uc3Qgc2VyaWVzID0gcHJvcHMuZGVmYXVsdENlbGxzLm1hcCgoY2VsbCkgPT4ge1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBuYW1lOiBjZWxsLm5hbWUsXG4vLyAgICAgICBkYXRhOiBjaGFydERheXMubWFwKChkYXkpID0+IHtcbi8vICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICB4OiBzaW1wbGlmeURhdGUoZGF5KSxcbi8vICAgICAgICAgICAgICAgeTogY2VsbEhhcHBlbmVkVG9kYXkoY2VsbC5uYW1lLCBkYXkpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgfSlcbi8vICAgICB9XG4vLyAgIH0pXG5cbi8vIGZ1bmN0aW9uIGNlbGxIYXBwZW5lZFRvZGF5KGNlbGwsIGNoYXJ0RGF5KSB7XG4vLyAgICAgcmV0dXJuIHN0b3JlRGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHtcbi8vICAgICAgICAgaWYgKGRheS5pZCA9PT0gY2hhcnREYXkpIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHN0b3JlQ2VsbHNJZHMgPSBPYmplY3QudmFsdWVzKGRheS5jZWxscylcbi8vICAgICAgICAgICAgIGlmIChzdG9yZUNlbGxzSWRzLmluY2x1ZGVzKGNlbGwpKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgMVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9ICAgICAgICAgICAgICAgXG4vLyAgICAgICAgIHJldHVybiB0b3RhbCBcbi8vICAgICB9LCAwKVxuLy8gfVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})