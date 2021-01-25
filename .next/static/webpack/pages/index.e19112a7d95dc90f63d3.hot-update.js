webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaultDays */ \"./helpers/defaultDays.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of objects [{}, {}]\n\n  var daysValues = Object.values(days); // get array of days' ids [\"2021-1-1\", \"2021-1-2\"], inputs: data - array of objects [{}, {}]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  }); // get array of dates from second day to today [\"2021-1-1\", \"2021-1-2\"]\n\n  var defaultDays = Object(_helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(daysIds[0]), new Date(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__[\"todayChart\"]));\n\n  function cellHappenedToday(cell, defaultDay) {\n    if (daysIds.includes(defaultDay)) {\n      return daysValues.reduce(function (total, day) {\n        if (day.id === defaultDay) {\n          var categoryIds = Object.values(day.categories).map(function (cat) {\n            return cat.id;\n          });\n\n          if (categoryIds.includes(props.id)) {\n            var cells = Object.values(day.categories[props.id].cells);\n\n            if (cells.includes(cell)) {\n              return total + 1;\n            }\n          }\n        }\n\n        return total;\n      }, 0);\n    } else {\n      return 0;\n    }\n  }\n\n  var series = props.defaultCells.map(function (cell) {\n    return {\n      name: cell.name,\n      data: defaultDays.map(function (day) {\n        return {\n          x: day,\n          y: cellHappenedToday(cell.name, day)\n        };\n      })\n    };\n  });\n  var options = {\n    chart: {\n      toolbar: {\n        show: false\n      },\n      width: '10%'\n    },\n    legend: {\n      show: true\n    },\n    colors: [props.color],\n    dataLabels: {\n      enabled: false\n    },\n    plotOptions: {\n      heatmap: {\n        radius: 100,\n        colorScale: {\n          ranges: [{\n            from: 0,\n            to: 0,\n            color: \"#F9FAFB\"\n          }, {\n            from: 1,\n            to: 2,\n            color: props.color\n          }]\n        }\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n      options: options,\n      series: series,\n      type: \"heatmap\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CategoryChart, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart); // Array of arrays of ids [[\"\", \"\", \"\"], [\"\", \"\", \"\"]]\n//const categoriesIds = categories.map((category) => category.map((cat) => cat.id))\n//console.log(categoriesIds)\n// Array of arrays of arrays of cells [[[\"\",\"\"],[\"\",\"\"]],[[\"\",\"\"],[\"\",\"\"]]]\n//const cells = categories.map((category) => category.map((cat) => cat.cells))\n//console.log(cells)\n// function getDefaultCell(defaultCells) {\n//     defaultCells.forEach((cell) => cell.name)\n// }\n// function cellHappenedToday(cell, cells, category, days, defaultday) {\n//     if (days.includes(defaultday) && category.includes(props.id) && cells.includes(cell)) {\n//         return 1\n//     } else {\n//         return 0\n//     }  \n// }\n// get array of categories of particular day [\"\", \"\"], inputs: day - string, data - array of objects [{}, {}]\n// function getCategoriesofDay(day, data) {\n//     let categories = []\n//     data.forEach((item) => {\n//         if (item.id === day) {\n//             categories = Object.values(item.categories).map((cat) => cat.id)\n//         }\n//     })\n//     return categories\n// }\n// get array of cells of particular category [\"\", \"\"], inputs: category - string, data(category) - array of objects [{}, {}]\n// function getCellsofCategory(category, data) {\n//     let cells = []\n//     data.forEach((item) => {\n//         if (item.id === category) {\n//             cells = Object.values(item.cells)\n//         }\n//     })\n//     return cells\n// }\n//Array of arrays of objects - categories [[{}, {}], [{}, {}]]\n//const categoriesValues = daysValues.map((day) => Object.values(day.categories))\n// const currentSeries = []\n// const series = props.defaultCells.map((cell) => (\n//     {\n//         name: cell.name,\n//         data: defaultDays.map((day) => (\n//             {\n//                 x: day,\n//                 y: cellHappenedToday(cell.name, day)\n//             }\n//         ))\n//     }\n// ))\n// series.map((s) => {\n//     const data = s.data.map((d) => {\n//         return {x: d, y: cellHappenedToday(s.name, d)}\n//     })\n//     currentSeries.push({data, name:s.name})\n// })\n// const plotOptions = {\n//     heatmap: {\n//         colorScale: {\n//             ranges: [{\n//                 from: 0,\n//                 to: 0,\n//                 color: \"#F9FAFB\"\n//             }, {\n//                 from: 1,\n//                 to: 1,\n//                 color: props.color\n//             }]\n//         }\n//     }\n// }\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJDYXRlZ29yeUNoYXJ0IiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXlzSWRzIiwibWFwIiwiZGF5IiwiaWQiLCJkZWZhdWx0RGF5cyIsImdlbmVyYXRlRGVmYXVsdERheXMiLCJEYXRlIiwidG9kYXlDaGFydCIsImNlbGxIYXBwZW5lZFRvZGF5IiwiY2VsbCIsImRlZmF1bHREYXkiLCJpbmNsdWRlcyIsInJlZHVjZSIsInRvdGFsIiwiY2F0ZWdvcnlJZHMiLCJjYXQiLCJjZWxscyIsInNlcmllcyIsImRlZmF1bHRDZWxscyIsIm5hbWUiLCJkYXRhIiwieCIsInkiLCJvcHRpb25zIiwiY2hhcnQiLCJ0b29sYmFyIiwic2hvdyIsIndpZHRoIiwibGVnZW5kIiwiY29sb3JzIiwiY29sb3IiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInBsb3RPcHRpb25zIiwiaGVhdG1hcCIsInJhZGl1cyIsImNvbG9yU2NhbGUiLCJyYW5nZXMiLCJmcm9tIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxJQUFyQjtBQUFBLENBQXhCOztBQUNBLElBQU1DLEtBQUssR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMEtBQU47QUFBQSxDQUFELEVBQW9DO0FBQUNDLEtBQUcsRUFBRSxLQUFOO0FBQUE7QUFBQTtBQUFBLGtDQUFyQixzRkFBcUI7QUFBQTtBQUFBLGNBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBcEMs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LEVBQUU7QUFIRixXQUFELEVBSUw7QUFDQ1EsZ0JBQUksRUFBRSxDQURQO0FBRUNDLGNBQUUsRUFBRSxDQUZMO0FBR0NULGlCQUFLLEVBQUVuQyxLQUFLLENBQUNtQztBQUhkLFdBSks7QUFEQTtBQUZQO0FBREE7QUFkRCxHQUFoQjtBQWlDQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLEtBQUQ7QUFBTyxhQUFPLEVBQUVQLE9BQWhCO0FBQXlCLFlBQU0sRUFBRU4sTUFBakM7QUFBeUMsVUFBSSxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7R0FqRlF2QixhO1VBRVFFLHVEOzs7TUFGUkYsYTtBQW1GTUEsNEVBQWYsRSxDQUdJO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Q2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCB7IHRvZGF5Q2hhcnQgfSBmcm9tIFwiLi4vaGVscGVycy90b2RheURhdGVcIlxuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdERheXMgZnJvbSBcIi4uL2hlbHBlcnMvZGVmYXVsdERheXNcIlxuXG5jb25zdCBzZWxlY3REYXlzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllcy5kYXlzXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0IChcInJlYWN0LWFwZXhjaGFydHNcIiksIHtzc3I6IGZhbHNlfSlcblxuZnVuY3Rpb24gQ2F0ZWdvcnlDaGFydChwcm9wcykge1xuICAgIFxuICAgIGNvbnN0IGRheXMgPSB1c2VTZWxlY3RvcihzZWxlY3REYXlzKVxuICAgIC8vIEFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICBjb25zdCBkYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXlzKVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGRheXMnIGlkcyBbXCIyMDIxLTEtMVwiLCBcIjIwMjEtMS0yXCJdLCBpbnB1dHM6IGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcblxuICAgIC8vIGdldCBhcnJheSBvZiBkYXRlcyBmcm9tIHNlY29uZCBkYXkgdG8gdG9kYXkgW1wiMjAyMS0xLTFcIiwgXCIyMDIxLTEtMlwiXVxuICAgIGNvbnN0IGRlZmF1bHREYXlzID0gZ2VuZXJhdGVEZWZhdWx0RGF5cyhuZXcgRGF0ZShkYXlzSWRzWzBdKSwgbmV3IERhdGUodG9kYXlDaGFydCkpXG5cbiAgICBmdW5jdGlvbiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLCBkZWZhdWx0RGF5KSB7XG4gICAgICAgIGlmIChkYXlzSWRzLmluY2x1ZGVzKGRlZmF1bHREYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF5LmlkID09PSBkZWZhdWx0RGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SWRzID0gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllcykubWFwKChjYXQpID0+IGNhdC5pZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5SWRzLmluY2x1ZGVzKHByb3BzLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBPYmplY3QudmFsdWVzKGRheS5jYXRlZ29yaWVzW3Byb3BzLmlkXS5jZWxscylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZWxscy5pbmNsdWRlcyhjZWxsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsIFxuICAgICAgICAgICAgfSwgMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXJpZXMgPSBwcm9wcy5kZWZhdWx0Q2VsbHMubWFwKChjZWxsKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogY2VsbC5uYW1lLFxuICAgICAgICAgIGRhdGE6IGRlZmF1bHREYXlzLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICB4OiBkYXksXG4gICAgICAgICAgICAgICAgICB5OiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLm5hbWUsIGRheSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6ICcxMCUnXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjb2xvcnM6IFtwcm9wcy5jb2xvcl0sXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICBoZWF0bWFwOiB7XG4gICAgICAgICAgICAgICAgcmFkaXVzOiAxMDAsXG4gICAgICAgICAgICAgICAgY29sb3JTY2FsZToge1xuICAgICAgICAgICAgICAgICAgICByYW5nZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRjlGQUZCXCJcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q2hhcnQgb3B0aW9ucz17b3B0aW9uc30gc2VyaWVzPXtzZXJpZXN9IHR5cGU9XCJoZWF0bWFwXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Q2hhcnRcblxuXG4gICAgLy8gQXJyYXkgb2YgYXJyYXlzIG9mIGlkcyBbW1wiXCIsIFwiXCIsIFwiXCJdLCBbXCJcIiwgXCJcIiwgXCJcIl1dXG4gICAgLy9jb25zdCBjYXRlZ29yaWVzSWRzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5tYXAoKGNhdCkgPT4gY2F0LmlkKSlcbiAgICAvL2NvbnNvbGUubG9nKGNhdGVnb3JpZXNJZHMpXG5cbiAgICAvLyBBcnJheSBvZiBhcnJheXMgb2YgYXJyYXlzIG9mIGNlbGxzIFtbW1wiXCIsXCJcIl0sW1wiXCIsXCJcIl1dLFtbXCJcIixcIlwiXSxbXCJcIixcIlwiXV1dXG4gICAgLy9jb25zdCBjZWxscyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubWFwKChjYXQpID0+IGNhdC5jZWxscykpXG4gICAgLy9jb25zb2xlLmxvZyhjZWxscylcblxuICAgIC8vIGZ1bmN0aW9uIGdldERlZmF1bHRDZWxsKGRlZmF1bHRDZWxscykge1xuICAgIC8vICAgICBkZWZhdWx0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5uYW1lKVxuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIGNlbGxIYXBwZW5lZFRvZGF5KGNlbGwsIGNlbGxzLCBjYXRlZ29yeSwgZGF5cywgZGVmYXVsdGRheSkge1xuICAgIC8vICAgICBpZiAoZGF5cy5pbmNsdWRlcyhkZWZhdWx0ZGF5KSAmJiBjYXRlZ29yeS5pbmNsdWRlcyhwcm9wcy5pZCkgJiYgY2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAxXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gMFxuICAgIC8vICAgICB9ICBcbiAgICAvLyB9XG5cbiAgICAvLyBnZXQgYXJyYXkgb2YgY2F0ZWdvcmllcyBvZiBwYXJ0aWN1bGFyIGRheSBbXCJcIiwgXCJcIl0sIGlucHV0czogZGF5IC0gc3RyaW5nLCBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyBbe30sIHt9XVxuICAgIC8vIGZ1bmN0aW9uIGdldENhdGVnb3JpZXNvZkRheShkYXksIGRhdGEpIHtcbiAgICAvLyAgICAgbGV0IGNhdGVnb3JpZXMgPSBbXVxuICAgIC8vICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChpdGVtLmlkID09PSBkYXkpIHtcbiAgICAvLyAgICAgICAgICAgICBjYXRlZ29yaWVzID0gT2JqZWN0LnZhbHVlcyhpdGVtLmNhdGVnb3JpZXMpLm1hcCgoY2F0KSA9PiBjYXQuaWQpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHJldHVybiBjYXRlZ29yaWVzXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGNlbGxzIG9mIHBhcnRpY3VsYXIgY2F0ZWdvcnkgW1wiXCIsIFwiXCJdLCBpbnB1dHM6IGNhdGVnb3J5IC0gc3RyaW5nLCBkYXRhKGNhdGVnb3J5KSAtIGFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICAvLyBmdW5jdGlvbiBnZXRDZWxsc29mQ2F0ZWdvcnkoY2F0ZWdvcnksIGRhdGEpIHtcbiAgICAvLyAgICAgbGV0IGNlbGxzID0gW11cbiAgICAvLyAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2F0ZWdvcnkpIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxscyA9IE9iamVjdC52YWx1ZXMoaXRlbS5jZWxscylcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgcmV0dXJuIGNlbGxzXG4gICAgLy8gfVxuICAgIC8vQXJyYXkgb2YgYXJyYXlzIG9mIG9iamVjdHMgLSBjYXRlZ29yaWVzIFtbe30sIHt9XSwgW3t9LCB7fV1dXG4gICAgLy9jb25zdCBjYXRlZ29yaWVzVmFsdWVzID0gZGF5c1ZhbHVlcy5tYXAoKGRheSkgPT4gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllcykpXG5cblxuICAgIFxuXG5cbiAgICAvLyBjb25zdCBjdXJyZW50U2VyaWVzID0gW11cblxuICAgIC8vIGNvbnN0IHNlcmllcyA9IHByb3BzLmRlZmF1bHRDZWxscy5tYXAoKGNlbGwpID0+IChcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogY2VsbC5uYW1lLFxuICAgIC8vICAgICAgICAgZGF0YTogZGVmYXVsdERheXMubWFwKChkYXkpID0+IChcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHg6IGRheSxcbiAgICAvLyAgICAgICAgICAgICAgICAgeTogY2VsbEhhcHBlbmVkVG9kYXkoY2VsbC5uYW1lLCBkYXkpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgKSlcbiAgICAvLyAgICAgfVxuICAgIC8vICkpXG5cbiAgICAvLyBzZXJpZXMubWFwKChzKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBzLmRhdGEubWFwKChkKSA9PiB7XG4gICAgLy8gICAgICAgICByZXR1cm4ge3g6IGQsIHk6IGNlbGxIYXBwZW5lZFRvZGF5KHMubmFtZSwgZCl9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIGN1cnJlbnRTZXJpZXMucHVzaCh7ZGF0YSwgbmFtZTpzLm5hbWV9KVxuICAgIC8vIH0pXG5cbiAgICAvLyBjb25zdCBwbG90T3B0aW9ucyA9IHtcbiAgICAvLyAgICAgaGVhdG1hcDoge1xuICAgIC8vICAgICAgICAgY29sb3JTY2FsZToge1xuICAgIC8vICAgICAgICAgICAgIHJhbmdlczogW3tcbiAgICAvLyAgICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86IDAsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGOUZBRkJcIlxuICAgIC8vICAgICAgICAgICAgIH0sIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgZnJvbTogMSxcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86IDEsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvclxuICAgIC8vICAgICAgICAgICAgIH1dXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})