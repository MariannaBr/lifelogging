webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaultDays */ \"./helpers/defaultDays.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of objects [{}, {}]\n\n  var daysValues = Object.values(days); // get array of days' ids [\"2021-1-1\", \"2021-1-2\"], inputs: data - array of objects [{}, {}]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  }); // get array of dates from second day to today [\"2021-1-1\", \"2021-1-2\"]\n\n  var defaultDays = Object(_helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(daysIds[1]), new Date(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__[\"todayChart\"]));\n\n  function cellHappenedToday(cell, defaultDay) {\n    if (daysIds.includes(defaultDay)) {\n      return daysValues.reduce(function (total, day) {\n        // o=daysValues.reduce((total, day) => {...}, 0)\n        if (day.id === defaultDay) {\n          var categoryIds = Object.values(day.categories).map(function (cat) {\n            return cat.id;\n          });\n\n          if (categoryIds.includes(props.id)) {\n            var cells = Object.values(day.categories[props.id].cells);\n\n            if (cells.includes(cell)) {\n              return total + 1;\n            }\n          }\n        }\n\n        return 0;\n      }, 0);\n    } else {\n      return 0;\n    }\n  }\n\n  var plotOptions = {\n    heatmap: {\n      colorScale: {\n        ranges: [{\n          from: 0,\n          to: 0,\n          color: \"#F9FAFB\"\n        }, {\n          from: 1,\n          to: 1,\n          color: props.color\n        }]\n      }\n    }\n  };\n  var series = props.defaultCells.map(function (cell) {\n    return {\n      name: cell.name,\n      data: defaultDays.map(function (day) {\n        return {\n          x: day,\n          y: console.log(cellHappenedToday(cell.name, day))\n        };\n      })\n    };\n  });\n  var currentSeries = [];\n  currentSeries.push(series);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n      options: plotOptions,\n      series: currentSeries,\n      type: \"heatmap\",\n      width: \"500\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CategoryChart, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart); // \n//console.log(categories)\n// Array of arrays of ids [[\"\", \"\", \"\"], [\"\", \"\", \"\"]]\n//const categoriesIds = categories.map((category) => category.map((cat) => cat.id))\n//console.log(categoriesIds)\n// Array of arrays of arrays of cells [[[\"\",\"\"],[\"\",\"\"]],[[\"\",\"\"],[\"\",\"\"]]]\n//const cells = categories.map((category) => category.map((cat) => cat.cells))\n//console.log(cells)\n// function getDefaultCell(defaultCells) {\n//     defaultCells.forEach((cell) => cell.name)\n// }\n// function cellHappenedToday(cell, cells, category, days, defaultday) {\n//     if (days.includes(defaultday) && category.includes(props.id) && cells.includes(cell)) {\n//         return 1\n//     } else {\n//         return 0\n//     }  \n// }\n// get array of categories of particular day [\"\", \"\"], inputs: day - string, data - array of objects [{}, {}]\n// function getCategoriesofDay(day, data) {\n//     let categories = []\n//     data.forEach((item) => {\n//         if (item.id === day) {\n//             categories = Object.values(item.categories).map((cat) => cat.id)\n//         }\n//     })\n//     return categories\n// }\n// get array of cells of particular category [\"\", \"\"], inputs: category - string, data(category) - array of objects [{}, {}]\n// function getCellsofCategory(category, data) {\n//     let cells = []\n//     data.forEach((item) => {\n//         if (item.id === category) {\n//             cells = Object.values(item.cells)\n//         }\n//     })\n//     return cells\n// }\n//Array of arrays of objects - categories [[{}, {}], [{}, {}]]\n//const categoriesValues = daysValues.map((day) => Object.values(day.categories))\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJDYXRlZ29yeUNoYXJ0IiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXlzSWRzIiwibWFwIiwiZGF5IiwiaWQiLCJkZWZhdWx0RGF5cyIsImdlbmVyYXRlRGVmYXVsdERheXMiLCJEYXRlIiwidG9kYXlDaGFydCIsImNlbGxIYXBwZW5lZFRvZGF5IiwiY2VsbCIsImRlZmF1bHREYXkiLCJpbmNsdWRlcyIsInJlZHVjZSIsInRvdGFsIiwiY2F0ZWdvcnlJZHMiLCJjYXQiLCJjZWxscyIsInBsb3RPcHRpb25zIiwiaGVhdG1hcCIsImNvbG9yU2NhbGUiLCJyYW5nZXMiLCJmcm9tIiwidG8iLCJjb2xvciIsInNlcmllcyIsImRlZmF1bHRDZWxscyIsIm5hbWUiLCJkYXRhIiwieCIsInkiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFNlcmllcyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxJQUFyQjtBQUFBLENBQXhCOztBQUNBLElBQU1DLEtBQUssR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMEtBQU47QUFBQSxDQUFELEVBQW9DO0FBQUNDLEtBQUcsRUFBRSxLQUFOO0FBQUE7QUFBQTtBQUFBLGtDQUFyQixzRkFBcUI7QUFBQTtBQUFBLGNBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBcEMsQ0FBckI7TUFBTUYsSzs7QUFFTixTQUFTRyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFB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RUFBQyxTQUF6RDtBQUFtRSxXQUFLLEVBQUM7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQXBFUXRDLGE7VUFFUUUsdUQ7OztNQUZSRixhO0FBc0VNQSw0RUFBZixFLENBRUE7QUFDSTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Q2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCB7IHRvZGF5Q2hhcnQgfSBmcm9tIFwiLi4vaGVscGVycy90b2RheURhdGVcIlxuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdERheXMgZnJvbSBcIi4uL2hlbHBlcnMvZGVmYXVsdERheXNcIlxuXG5jb25zdCBzZWxlY3REYXlzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllcy5kYXlzXG5jb25zdCBDaGFydCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0IChcInJlYWN0LWFwZXhjaGFydHNcIiksIHtzc3I6IGZhbHNlfSlcblxuZnVuY3Rpb24gQ2F0ZWdvcnlDaGFydChwcm9wcykge1xuICAgIFxuICAgIGNvbnN0IGRheXMgPSB1c2VTZWxlY3RvcihzZWxlY3REYXlzKVxuICAgIC8vIEFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICBjb25zdCBkYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXlzKVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGRheXMnIGlkcyBbXCIyMDIxLTEtMVwiLCBcIjIwMjEtMS0yXCJdLCBpbnB1dHM6IGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcblxuICAgIC8vIGdldCBhcnJheSBvZiBkYXRlcyBmcm9tIHNlY29uZCBkYXkgdG8gdG9kYXkgW1wiMjAyMS0xLTFcIiwgXCIyMDIxLTEtMlwiXVxuICAgIGNvbnN0IGRlZmF1bHREYXlzID0gZ2VuZXJhdGVEZWZhdWx0RGF5cyhuZXcgRGF0ZShkYXlzSWRzWzFdKSwgbmV3IERhdGUodG9kYXlDaGFydCkpXG5cbiAgICBmdW5jdGlvbiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLCBkZWZhdWx0RGF5KSB7XG4gICAgICAgIGlmIChkYXlzSWRzLmluY2x1ZGVzKGRlZmF1bHREYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHsgIC8vIG89ZGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHsuLi59LCAwKVxuICAgICAgICAgICAgICAgIGlmIChkYXkuaWQgPT09IGRlZmF1bHREYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJZHMgPSBPYmplY3QudmFsdWVzKGRheS5jYXRlZ29yaWVzKS5tYXAoKGNhdCkgPT4gY2F0LmlkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlJZHMuaW5jbHVkZXMocHJvcHMuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IE9iamVjdC52YWx1ZXMoZGF5LmNhdGVnb3JpZXNbcHJvcHMuaWRdLmNlbGxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxzLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gMCBcbiAgICAgICAgICAgIH0sIDApXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgcGxvdE9wdGlvbnMgPSB7XG4gICAgICAgIGhlYXRtYXA6IHtcbiAgICAgICAgICAgIGNvbG9yU2NhbGU6IHtcbiAgICAgICAgICAgICAgICByYW5nZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRjlGQUZCXCJcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IDEsXG4gICAgICAgICAgICAgICAgICAgIHRvOiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3JcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2VyaWVzID0gcHJvcHMuZGVmYXVsdENlbGxzLm1hcCgoY2VsbCkgPT4gKFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBjZWxsLm5hbWUsXG4gICAgICAgICAgICBkYXRhOiBkZWZhdWx0RGF5cy5tYXAoKGRheSkgPT4gKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogZGF5LFxuICAgICAgICAgICAgICAgICAgICB5OiBjb25zb2xlLmxvZyhjZWxsSGFwcGVuZWRUb2RheShjZWxsLm5hbWUsIGRheSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICkpXG5cbiAgICBjb25zdCBjdXJyZW50U2VyaWVzID0gW11cbiAgICBjdXJyZW50U2VyaWVzLnB1c2goc2VyaWVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDaGFydCBvcHRpb25zPXtwbG90T3B0aW9uc30gc2VyaWVzPXtjdXJyZW50U2VyaWVzfSB0eXBlPVwiaGVhdG1hcFwiIHdpZHRoPVwiNTAwXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Q2hhcnRcblxuLy8gXG4gICAgLy9jb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuXG4gICAgLy8gQXJyYXkgb2YgYXJyYXlzIG9mIGlkcyBbW1wiXCIsIFwiXCIsIFwiXCJdLCBbXCJcIiwgXCJcIiwgXCJcIl1dXG4gICAgLy9jb25zdCBjYXRlZ29yaWVzSWRzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5tYXAoKGNhdCkgPT4gY2F0LmlkKSlcbiAgICAvL2NvbnNvbGUubG9nKGNhdGVnb3JpZXNJZHMpXG5cbiAgICAvLyBBcnJheSBvZiBhcnJheXMgb2YgYXJyYXlzIG9mIGNlbGxzIFtbW1wiXCIsXCJcIl0sW1wiXCIsXCJcIl1dLFtbXCJcIixcIlwiXSxbXCJcIixcIlwiXV1dXG4gICAgLy9jb25zdCBjZWxscyA9IGNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubWFwKChjYXQpID0+IGNhdC5jZWxscykpXG4gICAgLy9jb25zb2xlLmxvZyhjZWxscylcblxuICAgIC8vIGZ1bmN0aW9uIGdldERlZmF1bHRDZWxsKGRlZmF1bHRDZWxscykge1xuICAgIC8vICAgICBkZWZhdWx0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5uYW1lKVxuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIGNlbGxIYXBwZW5lZFRvZGF5KGNlbGwsIGNlbGxzLCBjYXRlZ29yeSwgZGF5cywgZGVmYXVsdGRheSkge1xuICAgIC8vICAgICBpZiAoZGF5cy5pbmNsdWRlcyhkZWZhdWx0ZGF5KSAmJiBjYXRlZ29yeS5pbmNsdWRlcyhwcm9wcy5pZCkgJiYgY2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAxXG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gMFxuICAgIC8vICAgICB9ICBcbiAgICAvLyB9XG5cbiAgICAvLyBnZXQgYXJyYXkgb2YgY2F0ZWdvcmllcyBvZiBwYXJ0aWN1bGFyIGRheSBbXCJcIiwgXCJcIl0sIGlucHV0czogZGF5IC0gc3RyaW5nLCBkYXRhIC0gYXJyYXkgb2Ygb2JqZWN0cyBbe30sIHt9XVxuICAgIC8vIGZ1bmN0aW9uIGdldENhdGVnb3JpZXNvZkRheShkYXksIGRhdGEpIHtcbiAgICAvLyAgICAgbGV0IGNhdGVnb3JpZXMgPSBbXVxuICAgIC8vICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChpdGVtLmlkID09PSBkYXkpIHtcbiAgICAvLyAgICAgICAgICAgICBjYXRlZ29yaWVzID0gT2JqZWN0LnZhbHVlcyhpdGVtLmNhdGVnb3JpZXMpLm1hcCgoY2F0KSA9PiBjYXQuaWQpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHJldHVybiBjYXRlZ29yaWVzXG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGNlbGxzIG9mIHBhcnRpY3VsYXIgY2F0ZWdvcnkgW1wiXCIsIFwiXCJdLCBpbnB1dHM6IGNhdGVnb3J5IC0gc3RyaW5nLCBkYXRhKGNhdGVnb3J5KSAtIGFycmF5IG9mIG9iamVjdHMgW3t9LCB7fV1cbiAgICAvLyBmdW5jdGlvbiBnZXRDZWxsc29mQ2F0ZWdvcnkoY2F0ZWdvcnksIGRhdGEpIHtcbiAgICAvLyAgICAgbGV0IGNlbGxzID0gW11cbiAgICAvLyAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2F0ZWdvcnkpIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxscyA9IE9iamVjdC52YWx1ZXMoaXRlbS5jZWxscylcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgcmV0dXJuIGNlbGxzXG4gICAgLy8gfVxuICAgIC8vQXJyYXkgb2YgYXJyYXlzIG9mIG9iamVjdHMgLSBjYXRlZ29yaWVzIFtbe30sIHt9XSwgW3t9LCB7fV1dXG4gICAgLy9jb25zdCBjYXRlZ29yaWVzVmFsdWVzID0gZGF5c1ZhbHVlcy5tYXAoKGRheSkgPT4gT2JqZWN0LnZhbHVlcyhkYXkuY2F0ZWdvcmllcykpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})