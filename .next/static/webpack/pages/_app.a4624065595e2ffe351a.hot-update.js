webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/ChartAll.js":
/*!********************************!*\
  !*** ./components/ChartAll.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/ChartAll.js\",\n    _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction ChartAll(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays);\n  var daysValues = Object.values(days); // get array of days' ids [\"\", \"\"]\n\n  function getDays(data) {\n    var days = Object.values(data).map(function (day) {\n      return day.id;\n    });\n    return days;\n  } // Array of arrays of objects - categories [[{}, {}], [{}, {}]]\n\n\n  var categories = daysValues.map(function (day) {\n    return Object.values(day.categories);\n  }); //console.log(categories)\n  // Array of arrays of ids [[\"\", \"\", \"\"], [\"\", \"\", \"\"]]\n\n  var categoriesIds = categories.map(function (category) {\n    return category.map(function (cat) {\n      return cat.id;\n    });\n  }); //console.log(categoriesIds)\n  // Array of arrays of arrays of cells [[[\"\",\"\"],[\"\",\"\"]],[[\"\",\"\"],[\"\",\"\"]]]\n\n  var cells = categories.map(function (category) {\n    return category.map(function (cat) {\n      return cat.cells;\n    });\n  }); //console.log(cells)\n\n  function getCategoriesofDay(day, data) {\n    var categories = [];\n    data.forEach(function (item) {\n      console.log(\"day\", day, \"item\", item);\n\n      if (item.id === day) {\n        categories = Object.values(item.categories).map(function (cat) {\n          return cat.id;\n        });\n      }\n    });\n    console.log(categories);\n    return categories;\n  }\n\n  function getDays(data) {\n    var days = Object.values(data).map(function (day) {\n      return day.id;\n    });\n    return days;\n  }\n\n  getCategoriesofDay(getDays(days)[1], daysValues);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Chart\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ChartAll, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = ChartAll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChartAll);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChartAll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFydEFsbC5qcz83NGExIl0sIm5hbWVzIjpbInNlbGVjdERheXMiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJkYXlzIiwiQ2hhcnRBbGwiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwiZGF5c1ZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImdldERheXMiLCJkYXRhIiwibWFwIiwiZGF5IiwiaWQiLCJjYXRlZ29yaWVzSWRzIiwiY2F0ZWdvcnkiLCJjYXQiLCJjZWxscyIsImdldENhdGVnb3JpZXNvZkRheSIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBckI7QUFBQSxDQUF4Qjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUVyQixNQUFNRixJQUFJLEdBQUdHLCtEQUFXLENBQUNOLFVBQUQsQ0FBeEI7QUFDQSxNQUFNTyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixJQUFkLENBQW5CLENBSHFCLENBS3JCOztBQUNBLFdBQVNPLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ25CLFFBQU1SLElBQUksR0FBR0ssTUFBTSxDQUFDQyxNQUFQLENBQWNFLElBQWQsRUFBb0JDLEdBQXBCLENBQXdCLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLEVBQWI7QUFBQSxLQUF4QixDQUFiO0FBQ0EsV0FBT1gsSUFBUDtBQUNILEdBVG9CLENBWXJCOzs7QUFDQSxNQUFNRCxVQUFVLEdBQUdLLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNDLEdBQUQ7QUFBQSxXQUFTTCxNQUFNLENBQUNDLE1BQVAsQ0FBY0ksR0FBRyxDQUFDWCxVQUFsQixDQUFUO0FBQUEsR0FBZixDQUFuQixDQWJxQixDQWNyQjtBQUVBOztBQUNBLE1BQU1hLGFBQWEsR0FBR2IsVUFBVSxDQUFDVSxHQUFYLENBQWUsVUFBQ0ksUUFBRDtBQUFBLFdBQWNBLFFBQVEsQ0FBQ0osR0FBVCxDQUFhLFVBQUNLLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNILEVBQWI7QUFBQSxLQUFiLENBQWQ7QUFBQSxHQUFmLENBQXRCLENBakJxQixDQWtCckI7QUFFQTs7QUFDQSxNQUFNSSxLQUFLLEdBQUdoQixVQUFVLENBQUNVLEdBQVgsQ0FBZSxVQUFDSSxRQUFEO0FBQUEsV0FBY0EsUUFBUSxDQUFDSixHQUFULENBQWEsVUFBQ0ssR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsS0FBYjtBQUFBLEtBQWIsQ0FBZDtBQUFBLEdBQWYsQ0FBZCxDQXJCcUIsQ0FzQnJCOztBQUdBLFdBQVNDLGtCQUFULENBQTRCTixHQUE1QixFQUFpQ0YsSUFBakMsRUFBdUM7QUFDbkMsUUFBSVQsVUFBVSxHQUFHLEVBQWpCO0FBQ0FTLFFBQUksQ0FBQ1MsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUNuQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQlYsR0FBbkIsRUFBd0IsTUFBeEIsRUFBZ0NRLElBQWhDOztBQUNBLFVBQUlBLElBQUksQ0FBQ1AsRUFBTCxLQUFZRCxHQUFoQixFQUFxQjtBQUNqQlgsa0JBQVUsR0FBR00sTUFBTSxDQUFDQyxNQUFQLENBQWNZLElBQUksQ0FBQ25CLFVBQW5CLEVBQStCVSxHQUEvQixDQUFtQyxVQUFDSyxHQUFEO0FBQUEsaUJBQVNBLEdBQUcsQ0FBQ0gsRUFBYjtBQUFBLFNBQW5DLENBQWI7QUFDSDtBQUNKLEtBTEQ7QUFNQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlyQixVQUFaO0FBQ0EsV0FBT0EsVUFBUDtBQUNIOztBQUVELFdBQVNRLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ25CLFFBQU1SLElBQUksR0FBR0ssTUFBTSxDQUFDQyxNQUFQLENBQWNFLElBQWQsRUFBb0JDLEdBQXBCLENBQXdCLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLEVBQWI7QUFBQSxLQUF4QixDQUFiO0FBQ0EsV0FBT1gsSUFBUDtBQUNIOztBQUVEZ0Isb0JBQWtCLENBQUNULE9BQU8sQ0FBQ1AsSUFBRCxDQUFQLENBQWMsQ0FBZCxDQUFELEVBQW1CSSxVQUFuQixDQUFsQjtBQUVBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0FsRFFILFE7VUFFUUUsdUQ7OztLQUZSRixRO0FBb0RNQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hhcnRBbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmNvbnN0IHNlbGVjdERheXMgPSBzdGF0ZSA9PiBzdGF0ZS5jYXRlZ29yaWVzLmRheXNcblxuZnVuY3Rpb24gQ2hhcnRBbGwocHJvcHMpIHtcbiAgICBcbiAgICBjb25zdCBkYXlzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGF5cylcbiAgICBjb25zdCBkYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXlzKVxuXG4gICAgLy8gZ2V0IGFycmF5IG9mIGRheXMnIGlkcyBbXCJcIiwgXCJcIl1cbiAgICBmdW5jdGlvbiBnZXREYXlzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IE9iamVjdC52YWx1ZXMoZGF0YSkubWFwKChkYXkpID0+IGRheS5pZClcbiAgICAgICAgcmV0dXJuIGRheXNcbiAgICB9XG5cblxuICAgIC8vIEFycmF5IG9mIGFycmF5cyBvZiBvYmplY3RzIC0gY2F0ZWdvcmllcyBbW3t9LCB7fV0sIFt7fSwge31dXVxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkYXlzVmFsdWVzLm1hcCgoZGF5KSA9PiBPYmplY3QudmFsdWVzKGRheS5jYXRlZ29yaWVzKSlcbiAgICAvL2NvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG5cbiAgICAvLyBBcnJheSBvZiBhcnJheXMgb2YgaWRzIFtbXCJcIiwgXCJcIiwgXCJcIl0sIFtcIlwiLCBcIlwiLCBcIlwiXV1cbiAgICBjb25zdCBjYXRlZ29yaWVzSWRzID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5tYXAoKGNhdCkgPT4gY2F0LmlkKSlcbiAgICAvL2NvbnNvbGUubG9nKGNhdGVnb3JpZXNJZHMpXG5cbiAgICAvLyBBcnJheSBvZiBhcnJheXMgb2YgYXJyYXlzIG9mIGNlbGxzIFtbW1wiXCIsXCJcIl0sW1wiXCIsXCJcIl1dLFtbXCJcIixcIlwiXSxbXCJcIixcIlwiXV1dXG4gICAgY29uc3QgY2VsbHMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm1hcCgoY2F0KSA9PiBjYXQuY2VsbHMpKVxuICAgIC8vY29uc29sZS5sb2coY2VsbHMpXG5cblxuICAgIGZ1bmN0aW9uIGdldENhdGVnb3JpZXNvZkRheShkYXksIGRhdGEpIHtcbiAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBbXVxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF5XCIsIGRheSwgXCJpdGVtXCIsIGl0ZW0pXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gZGF5KSB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyA9IE9iamVjdC52YWx1ZXMoaXRlbS5jYXRlZ29yaWVzKS5tYXAoKGNhdCkgPT4gY2F0LmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuICAgICAgICByZXR1cm4gY2F0ZWdvcmllc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERheXMoZGF0YSkge1xuICAgICAgICBjb25zdCBkYXlzID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5tYXAoKGRheSkgPT4gZGF5LmlkKVxuICAgICAgICByZXR1cm4gZGF5c1xuICAgIH1cblxuICAgIGdldENhdGVnb3JpZXNvZkRheShnZXREYXlzKGRheXMpWzFdLCBkYXlzVmFsdWVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIENoYXJ0XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGFydEFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ChartAll.js\n");

/***/ })

})