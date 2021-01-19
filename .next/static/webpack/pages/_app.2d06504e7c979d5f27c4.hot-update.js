webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Cell.js":
/*!****************************!*\
  !*** ./components/Cell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Cell.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Cell(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      picked = _useState[0],\n      setpicked = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      items = _useState2[0],\n      setItems = _useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  function HandleOnClick() {\n    setpicked(!picked);\n    props.selected(props.name, picked);\n  }\n\n  console.log(items);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: HandleOnClick,\n      className: \"justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 \".concat(picked ? \"bg-\" + props.bg + \"-300\" : \"bg-\" + props.bg + \"-100\", \"  \\n            block px-4 py-2 text-sm text-gray-700 hover:bg-\").concat(props.bg, \"-200 hover:text-gray-900 focus:outline-none\"),\n      role: \"menuitem\",\n      id: props.id,\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": \"true\",\n      children: [\" \", props.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Cell, \"yB84X0nxJLIYPd3xNIenBvhkvkU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n\n_c = Cell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cell\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZWxsLmpzPzI0MzIiXSwibmFtZXMiOlsiQ2VsbCIsInByb3BzIiwidXNlU3RhdGUiLCJwaWNrZWQiLCJzZXRwaWNrZWQiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkhhbmRsZU9uQ2xpY2siLCJzZWxlY3RlZCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiYmciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLGtCQUVXQyxzREFBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUVWQyxNQUZVO0FBQUEsTUFFRkMsU0FGRTs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHVkcsS0FIVTtBQUFBLE1BR0hDLFFBSEc7O0FBSWpCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsV0FBU0MsYUFBVCxHQUF5QjtBQUNyQkwsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNBRixTQUFLLENBQUNTLFFBQU4sQ0FBZVQsS0FBSyxDQUFDVSxJQUFyQixFQUEyQlIsTUFBM0I7QUFDQzs7QUFFTFMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLEtBQVo7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBTyxFQUFFSSxhQUEvQjtBQUE4QyxlQUFTLG1GQUE0RU4sTUFBTSxHQUFFLFFBQU1GLEtBQUssQ0FBQ2EsRUFBWixHQUFlLE1BQWpCLEdBQTBCLFFBQU1iLEtBQUssQ0FBQ2EsRUFBWixHQUFlLE1BQTNILDRFQUNOYixLQUFLLENBQUNhLEVBREEsZ0RBQXZEO0FBQ3dHLFVBQUksRUFBQyxVQUQ3RztBQUVJLFFBQUUsRUFBRWIsS0FBSyxDQUFDYyxFQUZkO0FBRWtCLHVCQUFjLE1BRmhDO0FBRXVDLHVCQUFjLE1BRnJEO0FBQUEsc0JBRThEZCxLQUFLLENBQUNVLElBRnBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVFIOztHQXBCUVgsSTtVQUlZUSx1RDs7O0tBSlpSLEk7QUFzQk1BLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DZWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5mdW5jdGlvbiBDZWxsKHByb3BzKSB7XG5cbiAgICBjb25zdCBbcGlja2VkLCBzZXRwaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICAgIGZ1bmN0aW9uIEhhbmRsZU9uQ2xpY2soKSB7XG4gICAgICAgIHNldHBpY2tlZCghcGlja2VkKVxuICAgICAgICBwcm9wcy5zZWxlY3RlZChwcm9wcy5uYW1lLCBwaWNrZWQpXG4gICAgICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhpdGVtcylcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17SGFuZGxlT25DbGlja30gY2xhc3NOYW1lPXtganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93LXNtIHB4LTIgcHktMiAke3BpY2tlZD8gXCJiZy1cIitwcm9wcy5iZytcIi0zMDBcIiA6IFwiYmctXCIrcHJvcHMuYmcrXCItMTAwXCJ9ICBcbiAgICAgICAgICAgIGJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgaG92ZXI6YmctJHtwcm9wcy5iZ30tMjAwIGhvdmVyOnRleHQtZ3JheS05MDAgZm9jdXM6b3V0bGluZS1ub25lYH0gcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIj4ge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cell.js\n");

/***/ })

})