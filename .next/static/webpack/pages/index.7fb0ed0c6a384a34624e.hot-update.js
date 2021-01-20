webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Statistics.js":
/*!**********************************!*\
  !*** ./components/Statistics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Statistics.js\",\n    _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction Statistics() {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays); // Array of all days [{},{},{}]\n\n  var daysValues = Object.values(days);\n  console.log(\"days\", daysValues); // Array of all days' ids [\"dayId_1\",\"dayId_2\", \"dayId_3\" ]\n\n  var dayIds = daysValues.map(function (day) {\n    return day.id;\n  });\n  console.log(\"day\", dayIds); // Array of all categories [{}, {}, {}]\n\n  var categoriesValues = daysValues.map(function (day) {\n    return day.categories;\n  });\n  console.log(\"categories objects\", categoriesValues); // Array of arrays of objects - categories [[{}, {}, {}]]\n\n  var categories = categoriesValues.map(function (categories) {\n    return Object.values(categories);\n  });\n  console.log(\"categories\", categories); // Array of arrays with category [[\"\"], [\"\"], [\"\"]]\n\n  categories = categoriesValues.map(function (categories) {\n    return Object.values(categories).map(function (category) {\n      return category.id;\n    });\n  });\n  console.log(\"category\", categoriesIds[0]);\n  var categoriesIds = categories[0];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" mt-52\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Statistics\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Day: \", dayIds[1]]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Categories: \", categoriesIds]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Statistics, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Statistics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statistics);\n\nvar _c;\n\n$RefreshReg$(_c, \"Statistics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0aXN0aWNzLmpzPzA2NWYiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJTdGF0aXN0aWNzIiwidXNlU2VsZWN0b3IiLCJkYXlzVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImRheUlkcyIsIm1hcCIsImRheSIsImlkIiwiY2F0ZWdvcmllc1ZhbHVlcyIsImNhdGVnb3J5IiwiY2F0ZWdvcmllc0lkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBckI7QUFBQSxDQUF4Qjs7QUFFQSxTQUFTQyxVQUFULEdBQXNCO0FBQUE7O0FBRWxCLE1BQU1ELElBQUksR0FBR0UsK0RBQVcsQ0FBQ0wsVUFBRCxDQUF4QixDQUZrQixDQUlsQjs7QUFDQSxNQUFNTSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxJQUFkLENBQW5CO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JKLFVBQXBCLEVBTmtCLENBUWxCOztBQUNBLE1BQU1LLE1BQU0sR0FBR0wsVUFBVSxDQUFDTSxHQUFYLENBQWUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsRUFBYjtBQUFBLEdBQWYsQ0FBZjtBQUNBTCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CQyxNQUFuQixFQVZrQixDQVlsQjs7QUFDQSxNQUFNSSxnQkFBZ0IsR0FBR1QsVUFBVSxDQUFDTSxHQUFYLENBQWUsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ1gsVUFBYjtBQUFBLEdBQWYsQ0FBekI7QUFDQU8sU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NLLGdCQUFsQyxFQWRrQixDQWdCbEI7O0FBQ0EsTUFBSWIsVUFBVSxHQUFHYSxnQkFBZ0IsQ0FBQ0gsR0FBakIsQ0FBcUIsVUFBQ1YsVUFBRDtBQUFBLFdBQWdCSyxNQUFNLENBQUNDLE1BQVAsQ0FBY04sVUFBZCxDQUFoQjtBQUFBLEdBQXJCLENBQWpCO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJSLFVBQTFCLEVBbEJrQixDQW9CbEI7O0FBQ0FBLFlBQVUsR0FBR2EsZ0JBQWdCLENBQUNILEdBQWpCLENBQXFCLFVBQUNWLFVBQUQ7QUFBQSxXQUFnQkssTUFBTSxDQUFDQyxNQUFQLENBQWNOLFVBQWQsRUFBMEJVLEdBQTFCLENBQThCLFVBQUNJLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNGLEVBQXZCO0FBQUEsS0FBOUIsQ0FBaEI7QUFBQSxHQUFyQixDQUFiO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JPLGFBQWEsQ0FBQyxDQUFELENBQXJDO0FBQ0EsTUFBTUEsYUFBYSxHQUFHZixVQUFVLENBQUMsQ0FBRCxDQUFoQztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSwwQkFDVVMsTUFBTSxDQUFDLENBQUQsQ0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFLSTtBQUFBLGlDQUNpQk0sYUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FyQ1FiLFU7VUFFUUMsdUQ7OztLQUZSRCxVO0FBdUNNQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RhdGlzdGljcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY29uc3Qgc2VsZWN0RGF5cyA9IHN0YXRlID0+IHN0YXRlLmNhdGVnb3JpZXMuZGF5c1xuXG5mdW5jdGlvbiBTdGF0aXN0aWNzKCkge1xuXG4gICAgY29uc3QgZGF5cyA9IHVzZVNlbGVjdG9yKHNlbGVjdERheXMpXG5cbiAgICAvLyBBcnJheSBvZiBhbGwgZGF5cyBbe30se30se31dXG4gICAgY29uc3QgZGF5c1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF5cylcbiAgICBjb25zb2xlLmxvZyhcImRheXNcIiwgZGF5c1ZhbHVlcylcblxuICAgIC8vIEFycmF5IG9mIGFsbCBkYXlzJyBpZHMgW1wiZGF5SWRfMVwiLFwiZGF5SWRfMlwiLCBcImRheUlkXzNcIiBdXG4gICAgY29uc3QgZGF5SWRzID0gZGF5c1ZhbHVlcy5tYXAoKGRheSkgPT4gZGF5LmlkKVxuICAgIGNvbnNvbGUubG9nKFwiZGF5XCIsIGRheUlkcylcblxuICAgIC8vIEFycmF5IG9mIGFsbCBjYXRlZ29yaWVzIFt7fSwge30sIHt9XVxuICAgIGNvbnN0IGNhdGVnb3JpZXNWYWx1ZXMgPSBkYXlzVmFsdWVzLm1hcCgoZGF5KSA9PiBkYXkuY2F0ZWdvcmllcylcbiAgICBjb25zb2xlLmxvZyhcImNhdGVnb3JpZXMgb2JqZWN0c1wiLCBjYXRlZ29yaWVzVmFsdWVzKVxuXG4gICAgLy8gQXJyYXkgb2YgYXJyYXlzIG9mIG9iamVjdHMgLSBjYXRlZ29yaWVzIFtbe30sIHt9LCB7fV1dXG4gICAgbGV0IGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzVmFsdWVzLm1hcCgoY2F0ZWdvcmllcykgPT4gT2JqZWN0LnZhbHVlcyhjYXRlZ29yaWVzKSlcbiAgICBjb25zb2xlLmxvZyhcImNhdGVnb3JpZXNcIiwgY2F0ZWdvcmllcylcblxuICAgIC8vIEFycmF5IG9mIGFycmF5cyB3aXRoIGNhdGVnb3J5IFtbXCJcIl0sIFtcIlwiXSwgW1wiXCJdXVxuICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzVmFsdWVzLm1hcCgoY2F0ZWdvcmllcykgPT4gT2JqZWN0LnZhbHVlcyhjYXRlZ29yaWVzKS5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5pZCkpXG4gICAgY29uc29sZS5sb2coXCJjYXRlZ29yeVwiLCBjYXRlZ29yaWVzSWRzWzBdKVxuICAgIGNvbnN0IGNhdGVnb3JpZXNJZHMgPSBjYXRlZ29yaWVzWzBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtdC01MlwiPlxuICAgICAgICAgICAgPGgxPlN0YXRpc3RpY3M8L2gxPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBEYXk6IHtkYXlJZHNbMV19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllczoge2NhdGVnb3JpZXNJZHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Statistics.js\n");

/***/ })

})