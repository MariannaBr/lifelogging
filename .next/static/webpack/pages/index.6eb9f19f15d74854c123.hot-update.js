webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CategoryChart.js":
/*!*************************************!*\
  !*** ./components/CategoryChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n/* harmony import */ var _helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/defaultDays */ \"./helpers/defaultDays.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/CategoryChart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nvar Chart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")];\n    },\n    modules: [\"react-apexcharts\"]\n  }\n});\n_c2 = Chart;\n\nfunction CategoryChart(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of objects [{}, {}]\n\n  var daysValues = Object.values(days); // get array of days' ids [\"\", \"\"], inputs: data - array of objects [{}, {}]\n\n  var daysIds = daysValues.map(function (day) {\n    return day.id;\n  });\n  var defaultDays = Object(_helpers_defaultDays__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(new Date(daysIds[1]), new Date(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_3__[\"todayChart\"]));\n\n  function cellHappenedToday(cell, defaultDay) {\n    if (daysIds.includes(defaultDay)) {\n      return daysValues.reduce(function (total, day) {\n        // o=daysValues.reduce((total, day) => {...}, 0)\n        if (day.id === defaultDay) {\n          var categoryIds = Object.values(day.categories).map(function (cat) {\n            return cat.id;\n          });\n\n          if (categoryIds.includes(props.id)) {\n            var cells = Object.values(day.categories[props.id].cells);\n            console.log(\"cells\", cells, \"cell\", cell);\n\n            if (cells.includes(cell)) {\n              console.log(cells.includes(cell));\n              return total + 1;\n            }\n          }\n        }\n\n        return 0;\n      }, 0);\n    } else {\n      return 0;\n    }\n  }\n\n  var options = {\n    series: props.defaultCells.map(function (cell) {\n      return {\n        name: cell.name,\n        data: defaultDays.map(function (day) {\n          return {\n            x: day,\n            y: cellHappenedToday(cell, day)\n          };\n        })\n      };\n    }),\n    plotOptions: {\n      heatmap: {\n        colorScale: {\n          ranges: [{\n            from: 0,\n            to: 0,\n            color: \"#F9FAFB\"\n          }, {\n            from: 1,\n            to: 1,\n            color: props.color\n          }]\n        }\n      }\n    }\n  }; // var chart = new ApexCharts(ref, options)\n  // chart.render()\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Chart, {\n      options: options.plotOptions,\n      series: options.series,\n      type: \"heatmap\",\n      width: \"500\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CategoryChart, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c3 = CategoryChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryChart); // \n//console.log(categories)\n// Array of arrays of ids [[\"\", \"\", \"\"], [\"\", \"\", \"\"]]\n//const categoriesIds = categories.map((category) => category.map((cat) => cat.id))\n//console.log(categoriesIds)\n// Array of arrays of arrays of cells [[[\"\",\"\"],[\"\",\"\"]],[[\"\",\"\"],[\"\",\"\"]]]\n//const cells = categories.map((category) => category.map((cat) => cat.cells))\n//console.log(cells)\n// function getDefaultCell(defaultCells) {\n//     defaultCells.forEach((cell) => cell.name)\n// }\n// function cellHappenedToday(cell, cells, category, days, defaultday) {\n//     if (days.includes(defaultday) && category.includes(props.id) && cells.includes(cell)) {\n//         return 1\n//     } else {\n//         return 0\n//     }  \n// }\n// get array of categories of particular day [\"\", \"\"], inputs: day - string, data - array of objects [{}, {}]\n// function getCategoriesofDay(day, data) {\n//     let categories = []\n//     data.forEach((item) => {\n//         if (item.id === day) {\n//             categories = Object.values(item.categories).map((cat) => cat.id)\n//         }\n//     })\n//     return categories\n// }\n// get array of cells of particular category [\"\", \"\"], inputs: category - string, data(category) - array of objects [{}, {}]\n// function getCellsofCategory(category, data) {\n//     let cells = []\n//     data.forEach((item) => {\n//         if (item.id === category) {\n//             cells = Object.values(item.cells)\n//         }\n//     })\n//     return cells\n// }\n//Array of arrays of objects - categories [[{}, {}], [{}, {}]]\n//const categoriesValues = daysValues.map((day) => Object.values(day.categories))\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Chart$dynamic\");\n$RefreshReg$(_c2, \"Chart\");\n$RefreshReg$(_c3, \"CategoryChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeUNoYXJ0LmpzPzRhYTAiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJDaGFydCIsImR5bmFtaWMiLCJzc3IiLCJDYXRlZ29yeUNoYXJ0IiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXlzSWRzIiwibWFwIiwiZGF5IiwiaWQiLCJkZWZhdWx0RGF5cyIsImdlbmVyYXRlRGVmYXVsdERheXMiLCJEYXRlIiwidG9kYXlDaGFydCIsImNlbGxIYXBwZW5lZFRvZGF5IiwiY2VsbCIsImRlZmF1bHREYXkiLCJpbmNsdWRlcyIsInJlZHVjZSIsInRvdGFsIiwiY2F0ZWdvcnlJZHMiLCJjYXQiLCJjZWxscyIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwic2VyaWVzIiwiZGVmYXVsdENlbGxzIiwibmFtZSIsImRhdGEiLCJ4IiwieSIsInBsb3RPcHRpb25zIiwiaGVhdG1hcCIsImNvbG9yU2NhbGUiLCJyYW5nZXMiLCJmcm9tIiwidG8iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxVQUFOLENBQWlCQyxJQUFyQjtBQUFBLENBQXhCOztBQUNBLElBQU1DLEtBQUssR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMEtBQU47QUFBQSxDQUFELEVBQW9DO0FBQUNDLEtBQUcsRUFBRSxLQUFOO0FBQUE7QUFBQTtBQUFBLGtDQUFyQixzRkFBcUI7QUFBQTtBQUFBLGNBQXJCLGtCQUFxQjtBQUFBO0FBQUEsQ0FBcEMsQ0FBckI7TUFBTUYsSzs7QUFFTixTQUFTRyxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUUx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QUFPLEVBQUViLE9BQU8sQ0FBQ08sV0FBeEI7QUFBcUMsWUFBTSxFQUFFUCxPQUFPLENBQUNDLE1BQXJEO0FBQTZELFVBQUksRUFBQyxTQUFsRTtBQUE0RSxXQUFLLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQUtIOztHQXRFUTFCLGE7VUFFUUUsdUQ7OztNQUZSRixhO0FBd0VNQSw0RUFBZixFLENBRUE7QUFDSTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5Q2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCJcbmltcG9ydCB7IHRvZGF5Q2hhcnQgfSBmcm9tIFwiLi4vaGVscGVycy90b2RheURhdGVcIlxuaW1wb3J0IGdlbmVyYXRlRGVmYXVsdERheXMgZnJvbSBcIi4uL2hlbHBlcnMvZGVmYXVsdERheXNcIlxuaW1wb3J0IHsgcmVuZGVyLCB1c2VSZWYgfSBmcm9tIFwicmVhY3QtZG9tXCJcblxuY29uc3Qgc2VsZWN0RGF5cyA9IHN0YXRlID0+IHN0YXRlLmNhdGVnb3JpZXMuZGF5c1xuY29uc3QgQ2hhcnQgPSBkeW5hbWljKCgpID0+IGltcG9ydCAoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpLCB7c3NyOiBmYWxzZX0pXG5cbmZ1bmN0aW9uIENhdGVnb3J5Q2hhcnQocHJvcHMpIHtcbiAgICBcbiAgICBjb25zdCBkYXlzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGF5cylcbiAgICAvLyBBcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF5cylcblxuICAgIC8vIGdldCBhcnJheSBvZiBkYXlzJyBpZHMgW1wiXCIsIFwiXCJdLCBpbnB1dHM6IGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgY29uc3QgZGF5c0lkcyA9IGRheXNWYWx1ZXMubWFwKChkYXkpID0+IGRheS5pZClcblxuICAgIGNvbnN0IGRlZmF1bHREYXlzID0gZ2VuZXJhdGVEZWZhdWx0RGF5cyhuZXcgRGF0ZShkYXlzSWRzWzFdKSwgbmV3IERhdGUodG9kYXlDaGFydCkpXG5cbiAgICBmdW5jdGlvbiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLCBkZWZhdWx0RGF5KSB7XG4gICAgICAgIGlmIChkYXlzSWRzLmluY2x1ZGVzKGRlZmF1bHREYXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHsgIC8vIG89ZGF5c1ZhbHVlcy5yZWR1Y2UoKHRvdGFsLCBkYXkpID0+IHsuLi59LCAwKVxuICAgICAgICAgICAgICAgIGlmIChkYXkuaWQgPT09IGRlZmF1bHREYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJZHMgPSBPYmplY3QudmFsdWVzKGRheS5jYXRlZ29yaWVzKS5tYXAoKGNhdCkgPT4gY2F0LmlkKVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnlJZHMuaW5jbHVkZXMocHJvcHMuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxscyA9IE9iamVjdC52YWx1ZXMoZGF5LmNhdGVnb3JpZXNbcHJvcHMuaWRdLmNlbGxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjZWxsc1wiLCBjZWxscywgXCJjZWxsXCIsIGNlbGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbHMuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjZWxscy5pbmNsdWRlcyhjZWxsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAwIFxuICAgICAgICAgICAgfSwgMClcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBzZXJpZXM6IFxuICAgICAgICAgICAgcHJvcHMuZGVmYXVsdENlbGxzLm1hcCgoY2VsbCkgPT4gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNlbGwubmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkZWZhdWx0RGF5cy5tYXAoKGRheSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBkYXksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBjZWxsSGFwcGVuZWRUb2RheShjZWxsLCBkYXkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICApKSxcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGhlYXRtYXA6IHtcbiAgICAgICAgICAgICAgICBjb2xvclNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGOUZBRkJcIlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3JcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB2YXIgY2hhcnQgPSBuZXcgQXBleENoYXJ0cyhyZWYsIG9wdGlvbnMpXG4gICAgLy8gY2hhcnQucmVuZGVyKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENoYXJ0IG9wdGlvbnM9e29wdGlvbnMucGxvdE9wdGlvbnN9IHNlcmllcz17b3B0aW9ucy5zZXJpZXN9IHR5cGU9XCJoZWF0bWFwXCIgd2lkdGg9XCI1MDBcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlDaGFydFxuXG4vLyBcbiAgICAvL2NvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG5cbiAgICAvLyBBcnJheSBvZiBhcnJheXMgb2YgaWRzIFtbXCJcIiwgXCJcIiwgXCJcIl0sIFtcIlwiLCBcIlwiLCBcIlwiXV1cbiAgICAvL2NvbnN0IGNhdGVnb3JpZXNJZHMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm1hcCgoY2F0KSA9PiBjYXQuaWQpKVxuICAgIC8vY29uc29sZS5sb2coY2F0ZWdvcmllc0lkcylcblxuICAgIC8vIEFycmF5IG9mIGFycmF5cyBvZiBhcnJheXMgb2YgY2VsbHMgW1tbXCJcIixcIlwiXSxbXCJcIixcIlwiXV0sW1tcIlwiLFwiXCJdLFtcIlwiLFwiXCJdXV1cbiAgICAvL2NvbnN0IGNlbGxzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5tYXAoKGNhdCkgPT4gY2F0LmNlbGxzKSlcbiAgICAvL2NvbnNvbGUubG9nKGNlbGxzKVxuXG4gICAgLy8gZnVuY3Rpb24gZ2V0RGVmYXVsdENlbGwoZGVmYXVsdENlbGxzKSB7XG4gICAgLy8gICAgIGRlZmF1bHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLm5hbWUpXG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gY2VsbEhhcHBlbmVkVG9kYXkoY2VsbCwgY2VsbHMsIGNhdGVnb3J5LCBkYXlzLCBkZWZhdWx0ZGF5KSB7XG4gICAgLy8gICAgIGlmIChkYXlzLmluY2x1ZGVzKGRlZmF1bHRkYXkpICYmIGNhdGVnb3J5LmluY2x1ZGVzKHByb3BzLmlkKSAmJiBjZWxscy5pbmNsdWRlcyhjZWxsKSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIDFcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHJldHVybiAwXG4gICAgLy8gICAgIH0gIFxuICAgIC8vIH1cblxuICAgIC8vIGdldCBhcnJheSBvZiBjYXRlZ29yaWVzIG9mIHBhcnRpY3VsYXIgZGF5IFtcIlwiLCBcIlwiXSwgaW5wdXRzOiBkYXkgLSBzdHJpbmcsIGRhdGEgLSBhcnJheSBvZiBvYmplY3RzIFt7fSwge31dXG4gICAgLy8gZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc29mRGF5KGRheSwgZGF0YSkge1xuICAgIC8vICAgICBsZXQgY2F0ZWdvcmllcyA9IFtdXG4gICAgLy8gICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGRheSkge1xuICAgIC8vICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSBPYmplY3QudmFsdWVzKGl0ZW0uY2F0ZWdvcmllcykubWFwKChjYXQpID0+IGNhdC5pZClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgcmV0dXJuIGNhdGVnb3JpZXNcbiAgICAvLyB9XG5cbiAgICAvLyBnZXQgYXJyYXkgb2YgY2VsbHMgb2YgcGFydGljdWxhciBjYXRlZ29yeSBbXCJcIiwgXCJcIl0sIGlucHV0czogY2F0ZWdvcnkgLSBzdHJpbmcsIGRhdGEoY2F0ZWdvcnkpIC0gYXJyYXkgb2Ygb2JqZWN0cyBbe30sIHt9XVxuICAgIC8vIGZ1bmN0aW9uIGdldENlbGxzb2ZDYXRlZ29yeShjYXRlZ29yeSwgZGF0YSkge1xuICAgIC8vICAgICBsZXQgY2VsbHMgPSBbXVxuICAgIC8vICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChpdGVtLmlkID09PSBjYXRlZ29yeSkge1xuICAgIC8vICAgICAgICAgICAgIGNlbGxzID0gT2JqZWN0LnZhbHVlcyhpdGVtLmNlbGxzKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICByZXR1cm4gY2VsbHNcbiAgICAvLyB9XG4gICAgLy9BcnJheSBvZiBhcnJheXMgb2Ygb2JqZWN0cyAtIGNhdGVnb3JpZXMgW1t7fSwge31dLCBbe30sIHt9XV1cbiAgICAvL2NvbnN0IGNhdGVnb3JpZXNWYWx1ZXMgPSBkYXlzVmFsdWVzLm1hcCgoZGF5KSA9PiBPYmplY3QudmFsdWVzKGRheS5jYXRlZ29yaWVzKSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CategoryChart.js\n");

/***/ })

})