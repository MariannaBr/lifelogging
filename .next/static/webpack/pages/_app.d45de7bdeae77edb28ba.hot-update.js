webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Statistics.js":
/*!**********************************!*\
  !*** ./components/Statistics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Statistics.js\",\n    _s = $RefreshSig$();\n\n\n\nvar selectDays = function selectDays(state) {\n  return state.categories.days;\n};\n\nfunction Statistics(props) {\n  _s();\n\n  var days = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectDays);\n  var daysValues = Object.values(days);\n  console.log(\"days\", daysValues);\n  var dayId = daysValues.map(function (day) {\n    return day.id;\n  });\n  console.log(\"day\", dayId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \" mt-52\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Statistics\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Day: \", dayId[0]]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Statistics, \"3tzja4VaCyvZFWXqwwNrGY7sHz8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Statistics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statistics);\n\nvar _c;\n\n$RefreshReg$(_c, \"Statistics\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0aXN0aWNzLmpzPzA2NWYiXSwibmFtZXMiOlsic2VsZWN0RGF5cyIsInN0YXRlIiwiY2F0ZWdvcmllcyIsImRheXMiLCJTdGF0aXN0aWNzIiwicHJvcHMiLCJ1c2VTZWxlY3RvciIsImRheXNWYWx1ZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiZGF5SWQiLCJtYXAiLCJkYXkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsSUFBckI7QUFBQSxDQUF4Qjs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUV2QixNQUFNRixJQUFJLEdBQUdHLCtEQUFXLENBQUNOLFVBQUQsQ0FBeEI7QUFDQSxNQUFNTyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixJQUFkLENBQW5CO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JKLFVBQXBCO0FBQ0EsTUFBTUssS0FBSyxHQUFHTCxVQUFVLENBQUNNLEdBQVgsQ0FBZSxVQUFDQyxHQUFEO0FBQUEsV0FDekJBLEdBQUcsQ0FBQ0MsRUFEcUI7QUFBQSxHQUFmLENBQWQ7QUFHQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkMsS0FBbkI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsMEJBQ1VBLEtBQUssQ0FBQyxDQUFELENBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSDs7R0FuQlFSLFU7VUFFUUUsdUQ7OztLQUZSRixVO0FBcUJNQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RhdGlzdGljcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuY29uc3Qgc2VsZWN0RGF5cyA9IHN0YXRlID0+IHN0YXRlLmNhdGVnb3JpZXMuZGF5c1xuXG5mdW5jdGlvbiBTdGF0aXN0aWNzKHByb3BzKSB7XG5cbiAgICBjb25zdCBkYXlzID0gdXNlU2VsZWN0b3Ioc2VsZWN0RGF5cylcbiAgICBjb25zdCBkYXlzVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXlzKVxuICAgIGNvbnNvbGUubG9nKFwiZGF5c1wiLCBkYXlzVmFsdWVzKVxuICAgIGNvbnN0IGRheUlkID0gZGF5c1ZhbHVlcy5tYXAoKGRheSkgPT4gKFxuICAgICAgICBkYXkuaWRcbiAgICApKVxuICAgIGNvbnNvbGUubG9nKFwiZGF5XCIsIGRheUlkKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXQtNTJcIj5cbiAgICAgICAgICAgIDxoMT5TdGF0aXN0aWNzPC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRGF5OiB7ZGF5SWRbMF19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Statistics.js\n");

/***/ })

})