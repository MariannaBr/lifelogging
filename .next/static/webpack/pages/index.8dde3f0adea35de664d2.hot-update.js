webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaultDays */ \"./helpers/defaultDays.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of objects [{}, {}]\n\n  var daysValues = Object.values(days); // get array of days' ids [\"2021-1-1\", \"2021-1-2\"], inputs: data - array of objects [{}, {}]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  });\n  console.log(\"store days\", daysIds); // get array of dates from second day to today [\"2021-1-1\", \"2021-1-2\"]\n\n  var defaultDays = Object(_helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(daysIds[0]), new Date(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__[\"todayChart\"]));\n  console.log(\"chartdays\", defaultDays);\n\n  function cellHappenedToday(cell, defaultDay) {\n    if (daysIds.includes(defaultDay)) {\n      return daysValues.reduce(function (total, day) {\n        console.log(\"storeday\", day, \"chartday\", defaultDay);\n\n        if (day.id === defaultDay) {\n          console.log(day.id === defaultDay);\n          var categoryIds = Object.values(day.categories).map(function (cat) {\n            return cat.id;\n          });\n\n          if (categoryIds.includes(props.id)) {\n            console.log(categoryIds.includes(props.id));\n            var cells = Object.values(day.categories[props.id].cells);\n\n            if (cells.includes(cell)) {\n              console.log(cells.includes(cell));\n              return total + 1;\n            }\n          }\n        }\n\n        return 0;\n      }, 0);\n    } else {\n      return 0;\n    }\n  }\n\n  var options = {\n    series: props.defaultCells.map(function (cell) {\n      return {\n        name: cell.name,\n        data: defaultDays.map(function (day) {\n          console.log(\"series - chartday, cell.name\", day, cell.name);\n          return {\n            x: day,\n            y: cellHappenedToday(cell.name, day)\n          };\n        })\n      };\n    }),\n    plotOptions: {\n      heatmap: {\n        colorScale: {\n          ranges: [{\n            from: 0,\n            to: 0,\n            color: \"#F9FAFB\"\n          }, {\n            from: 1,\n            to: 1,\n            color: props.color\n          }]\n        }\n      }\n    }\n  };\n  console.log(options.series);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n      options: options.plotOptions,\n      series: options.series,\n      type: \"heatmap\",\n      width: \"500\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CategoryChart, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart); // Array of arrays of ids [[\"\", \"\", \"\"], [\"\", \"\", \"\"]]\n//const categoriesIds = categories.map((category) => category.map((cat) => cat.id))\n//console.log(categoriesIds)\n// Array of arrays of arrays of cells [[[\"\",\"\"],[\"\",\"\"]],[[\"\",\"\"],[\"\",\"\"]]]\n//const cells = categories.map((category) => category.map((cat) => cat.cells))\n//console.log(cells)\n// function getDefaultCell(defaultCells) {\n//     defaultCells.forEach((cell) => cell.name)\n// }\n// function cellHappenedToday(cell, cells, category, days, defaultday) {\n//     if (days.includes(defaultday) && category.includes(props.id) && cells.includes(cell)) {\n//         return 1\n//     } else {\n//         return 0\n//     }  \n// }\n// get array of categories of particular day [\"\", \"\"], inputs: day - string, data - array of objects [{}, {}]\n// function getCategoriesofDay(day, data) {\n//     let categories = []\n//     data.forEach((item) => {\n//         if (item.id === day) {\n//             categories = Object.values(item.categories).map((cat) => cat.id)\n//         }\n//     })\n//     return categories\n// }\n// get array of cells of particular category [\"\", \"\"], inputs: category - string, data(category) - array of objects [{}, {}]\n// function getCellsofCategory(category, data) {\n//     let cells = []\n//     data.forEach((item) => {\n//         if (item.id === category) {\n//             cells = Object.values(item.cells)\n//         }\n//     })\n//     return cells\n// }\n//Array of arrays of objects - categories [[{}, {}], [{}, {}]]\n//const categoriesValues = daysValues.map((day) => Object.values(day.categories))\n// const currentSeries = []\n// const series = props.defaultCells.map((cell) => (\n//     {\n//         name: cell.name,\n//         data: defaultDays.map((day) => (\n//             {\n//                 x: day,\n//                 y: cellHappenedToday(cell.name, day)\n//             }\n//         ))\n//     }\n// ))\n// series.map((s) => {\n//     const data = s.data.map((d) => {\n//         return {x: d, y: cellHappenedToday(s.name, d)}\n//     })\n//     currentSeries.push({data, name:s.name})\n// })\n// const plotOptions = {\n//     heatmap: {\n//         colorScale: {\n//             ranges: [{\n//                 from: 0,\n//                 to: 0,\n//                 color: \"#F9FAFB\"\n//             }, {\n//                 from: 1,\n//                 to: 1,\n//                 color: props.color\n//             }]\n//         }\n//     }\n// }\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJDYXRlZ29yeUNoYXJ0IiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXlzSWRzIiwibWFwIiwiZGF5IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdERheXMiLCJnZW5lcmF0ZURlZmF1bHREYXlzIiwiRGF0ZSIsInRvZGF5Q2hhcnQiLCJjZWxsSGFwcGVuZWRUb2RheSIsImNlbGwiLCJkZWZhdWx0RGF5IiwiaW5jbHVkZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsImNhdGVnb3J5SWRzIiwiY2F0IiwiY2VsbHMiLCJvcHRpb25zIiwic2VyaWVzIiwiZGVmYXVsdENlbGxzIiwibmFtZSIsImRhdGEiLCJ4IiwieSIsInBsb3RPcHRpb25zIiwiaGVhdG1hcCIsImNvbG9yU2NhbGUiLCJyYW5nZXMiLCJmcm9tIiwidG8iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLElBQXJCO0FBQUEsQ0FBeEI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwwS0FBTjtBQUFBLENBQUQsRUFBb0M7QUFBQ0MsS0FBRyxFQUFFLEtBQU47QUFBQTtBQUFBO0FBQUEsa0NBQXJCLHNGQUFxQjtBQUFBO0FBQUEsY0FBckIsa0JBQXFCO0FBQUE7QUFBQSxDQUFwQyxDQUFyQjtNQUFNRixLOztBQUVOLFNBQVNHLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBRTFCLE1BQU1M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LCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Q2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCB7IHRvZGF5Q2hhcnQgfSBmcm9tIFwiLi4vaGVscGVycy90b2RheURhdGVcIlxuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdERheXMgZnJvbSBcIi4uL2hlbHBlcnMvZGVmYXVsdERheXNcIlxuXG5jb25zdCBzZWxlY3REYXlzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllcy5kYXlzXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0IChcInJlYWN0LWFwZXhjaGFydHNcIiksIHtzc3I6IGZhbHNlfSlcblxuZnVuY3Rpb24gQ2F0ZWdvcnlDaGFydChwcm9wcykge1xuICAgIFxuICAgIGNvbnN0IGRheXMgPSB1c2VTZWxlY3RvcihzZWxlY3REYXlzKVxuICAgIC8vIEFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICBjb25zdCBkYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXlzKVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGRheXMnIGlkcyBbXCIyMDIxLTEtMVwiLCBcIjIwMjEtMS0yXCJdLCBpbnB1dHM6IGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcbiAgICBjb25zb2xlLmxvZyhcInN0b3JlIGRheXNcIiwgZGF5c0lkcylcblxuICAgIC8vIGdldCBhcnJheSBvZiBkYXRlcyBmcm9tIHNlY29uZCBkYXkgdG8gdG9kYXkgW1wiMjAyMS0xLTFcIiwgXCIyMDIxLTEtMlwiXVxuICAgIGNvbnN0IGRlZmF1bHREYXlzID0gZ2VuZXJhdGVEZWZhdWx0RGF5cyhuZXcgRGF0ZShkYXlzSWRzWzBdKSwgbmV3IERhdGUodG9kYXlDaGFydCkpXG4gICAgY29uc29sZS5sb2coXCJjaGFydGRheXNcIiwgZGVmYXVsdERheXMpXG5cbiAgICBmdW5jdGlvbiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLCBkZWZhdWx0RGF5KSB7XG4gICAgICAgIGlmIChkYXlzSWRzLmluY2x1ZGVzKGRlZmF1bHREYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JlZGF5XCIsIGRheSwgXCJjaGFydGRheVwiLCBkZWZhdWx0RGF5KVxuICAgICAgICAgICAgICAgIGlmIChkYXkuaWQgPT09IGRlZmF1bHREYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF5LmlkID09PSBkZWZhdWx0RGF5KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUlkcyA9IE9iamVjdC52YWx1ZXMoZGF5LmNhdGVnb3JpZXMpLm1hcCgoY2F0KSA9PiBjYXQuaWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUlkcy5pbmNsdWRlcyhwcm9wcy5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5SWRzLmluY2x1ZGVzKHByb3BzLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGxzID0gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllc1twcm9wcy5pZF0uY2VsbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjZWxscy5pbmNsdWRlcyhjZWxsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAwIFxuICAgICAgICAgICAgfSwgMClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHNlcmllczogXG4gICAgICAgICAgICBwcm9wcy5kZWZhdWx0Q2VsbHMubWFwKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogY2VsbC5uYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRlZmF1bHREYXlzLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VyaWVzIC0gY2hhcnRkYXksIGNlbGwubmFtZVwiLCBkYXksIGNlbGwubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNlbGxIYXBwZW5lZFRvZGF5KGNlbGwubmFtZSwgZGF5KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgaGVhdG1hcDoge1xuICAgICAgICAgICAgICAgIGNvbG9yU2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0Y5RkFGQlwiXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvclxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuc2VyaWVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtvcHRpb25zLnBsb3RPcHRpb25zfSBzZXJpZXM9e29wdGlvbnMuc2VyaWVzfSB0eXBlPVwiaGVhdG1hcFwiIHdpZHRoPVwiNTAwXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Q2hhcnRcblxuXG4gICAgLy8gQXJyYXkgb2YgYXJyYXlzIG9mIGlkcyBbW1wiXCIsIFwiXCIsIFwiXCJdLCBbXCJcIiwgXCJcIiwgXCJcIl1dXG4gICAgLy9jb25zdCBjYXRlZ29yaWVzSWRzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5tYXAoKGNhdCkgPT4gY2F0LmlkKSlcbiAgICAvL2NvbnNvbGUubG9nKGNhdGVnb3JpZXNJZHMpXG5cbiAgICAvLyBBcnJheSBvZiBhcnJheXMgb2YgYXJyYXlzIG9mIGNlbGxzIFtbW1wiXCIsXCJcIl0sW1wiXCIsXCJcIl1dLFtbXCJcIixcIlwiXSxbXCJcIixcIlwiXV1dXG4gICAgLy9jb25zdCBjZWxscyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubWFwKChjYXQpID0+IGNhdC5jZWxscykpXG4gICAgLy9jb25zb2xlLmxvZyhjZWxscylcblxuICAgIC8vIGZ1bmN0aW9uIGdldERlZmF1bHRDZWxsKGRlZmF1bHRDZWxscykge1xuICAgIC8vICAgICBkZWZhdWx0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5uYW1lKVxuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIGNlbGxIYXBwZW5lZFRvZGF5KGNlbGwsIGNlbGxzLCBjYXRlZ29yeSwgZGF5cywgZGVmYXVsdGRheSkge1xuICAgIC8vICAgICBpZiAoZGF5cy5pbmNsdWRlcyhkZWZhdWx0ZGF5KSAmJiBjYXRlZ29yeS5pbmNsdWRlcyhwcm9wcy5pZCkgJiYgY2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAxXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gMFxuICAgIC8vICAgICB9ICBcbiAgICAvLyB9XG5cbiAgICAvLyBnZXQgYXJyYXkgb2YgY2F0ZWdvcmllcyBvZiBwYXJ0aWN1bGFyIGRheSBbXCJcIiwgXCJcIl0sIGlucHV0czogZGF5IC0gc3RyaW5nLCBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyBbe30sIHt9XVxuICAgIC8vIGZ1bmN0aW9uIGdldENhdGVnb3JpZXNvZkRheShkYXksIGRhdGEpIHtcbiAgICAvLyAgICAgbGV0IGNhdGVnb3JpZXMgPSBbXVxuICAgIC8vICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChpdGVtLmlkID09PSBkYXkpIHtcbiAgICAvLyAgICAgICAgICAgICBjYXRlZ29yaWVzID0gT2JqZWN0LnZhbHVlcyhpdGVtLmNhdGVnb3JpZXMpLm1hcCgoY2F0KSA9PiBjYXQuaWQpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHJldHVybiBjYXRlZ29yaWVzXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGNlbGxzIG9mIHBhcnRpY3VsYXIgY2F0ZWdvcnkgW1wiXCIsIFwiXCJdLCBpbnB1dHM6IGNhdGVnb3J5IC0gc3RyaW5nLCBkYXRhKGNhdGVnb3J5KSAtIGFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICAvLyBmdW5jdGlvbiBnZXRDZWxsc29mQ2F0ZWdvcnkoY2F0ZWdvcnksIGRhdGEpIHtcbiAgICAvLyAgICAgbGV0IGNlbGxzID0gW11cbiAgICAvLyAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2F0ZWdvcnkpIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxscyA9IE9iamVjdC52YWx1ZXMoaXRlbS5jZWxscylcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgcmV0dXJuIGNlbGxzXG4gICAgLy8gfVxuICAgIC8vQXJyYXkgb2YgYXJyYXlzIG9mIG9iamVjdHMgLSBjYXRlZ29yaWVzIFtbe30sIHt9XSwgW3t9LCB7fV1dXG4gICAgLy9jb25zdCBjYXRlZ29yaWVzVmFsdWVzID0gZGF5c1ZhbHVlcy5tYXAoKGRheSkgPT4gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllcykpXG5cblxuICAgIFxuXG5cbiAgICAvLyBjb25zdCBjdXJyZW50U2VyaWVzID0gW11cblxuICAgIC8vIGNvbnN0IHNlcmllcyA9IHByb3BzLmRlZmF1bHRDZWxscy5tYXAoKGNlbGwpID0+IChcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogY2VsbC5uYW1lLFxuICAgIC8vICAgICAgICAgZGF0YTogZGVmYXVsdERheXMubWFwKChkYXkpID0+IChcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHg6IGRheSxcbiAgICAvLyAgICAgICAgICAgICAgICAgeTogY2VsbEhhcHBlbmVkVG9kYXkoY2VsbC5uYW1lLCBkYXkpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgKSlcbiAgICAvLyAgICAgfVxuICAgIC8vICkpXG5cbiAgICAvLyBzZXJpZXMubWFwKChzKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBzLmRhdGEubWFwKChkKSA9PiB7XG4gICAgLy8gICAgICAgICByZXR1cm4ge3g6IGQsIHk6IGNlbGxIYXBwZW5lZFRvZGF5KHMubmFtZSwgZCl9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIGN1cnJlbnRTZXJpZXMucHVzaCh7ZGF0YSwgbmFtZTpzLm5hbWV9KVxuICAgIC8vIH0pXG5cbiAgICAvLyBjb25zdCBwbG90T3B0aW9ucyA9IHtcbiAgICAvLyAgICAgaGVhdG1hcDoge1xuICAgIC8vICAgICAgICAgY29sb3JTY2FsZToge1xuICAgIC8vICAgICAgICAgICAgIHJhbmdlczogW3tcbiAgICAvLyAgICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86IDAsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGOUZBRkJcIlxuICAgIC8vICAgICAgICAgICAgIH0sIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZnJvbTogMSxcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86IDEsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvclxuICAgIC8vICAgICAgICAgICAgIH1dXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})