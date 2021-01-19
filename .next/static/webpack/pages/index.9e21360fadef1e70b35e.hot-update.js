webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Cell.js":
/*!****************************!*\
  !*** ./components/Cell.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Cell.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Cell(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      picked = _useState[0],\n      setPicked = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      items = _useState2[0],\n      setItems = _useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  function HandleOnClick() {\n    var selected = !picked;\n    props.selected(props.name, selected);\n    setPicked(selected);\n  }\n\n  console.log(items);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      onClick: HandleOnClick,\n      className: \"justify-center rounded-full border border-gray-300 shadow-sm px-2 py-2 \".concat(picked ? \"bg-\" + props.bg + \"-300\" : \"bg-\" + props.bg + \"-100\", \"  \\n            block px-4 py-2 text-sm text-gray-700 hover:bg-\").concat(props.bg, \"-200 hover:text-gray-900 focus:outline-none\"),\n      role: \"menuitem\",\n      id: props.id,\n      \"aria-haspopup\": \"true\",\n      \"aria-expanded\": \"true\",\n      children: [\" \", props.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Cell, \"+oSPyUK1xROtfhWI5F87q/+1Aeo=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n\n_c = Cell;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cell\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DZWxsLmpzPzI0MzIiXSwibmFtZXMiOlsiQ2VsbCIsInByb3BzIiwidXNlU3RhdGUiLCJwaWNrZWQiLCJzZXRQaWNrZWQiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIkhhbmRsZU9uQ2xpY2siLCJzZWxlY3RlZCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiYmciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLGtCQUVXQyxzREFBUSxDQUFDLEtBQUQsQ0FGbkI7QUFBQSxNQUVWQyxNQUZVO0FBQUEsTUFFRkMsU0FGRTs7QUFBQSxtQkFHU0Ysc0RBQVEsQ0FBQyxFQUFELENBSGpCO0FBQUEsTUFHVkcsS0FIVTtBQUFBLE1BR0hDLFFBSEc7O0FBSWpCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsV0FBU0MsYUFBVCxHQUF5QjtBQUNyQixRQUFNQyxRQUFRLEdBQUcsQ0FBQ1AsTUFBbEI7QUFDQUYsU0FBSyxDQUFDUyxRQUFOLENBQWVULEtBQUssQ0FBQ1UsSUFBckIsRUFBMkJELFFBQTNCO0FBQ0FOLGFBQVMsQ0FBQ00sUUFBRCxDQUFUO0FBQ0g7O0FBRURFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixLQUFaO0FBQ0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGFBQU8sRUFBRUksYUFBL0I7QUFBOEMsZUFBUyxtRkFBNEVOLE1BQU0sR0FBRSxRQUFNRixLQUFLLENBQUNhLEVBQVosR0FBZSxNQUFqQixHQUEwQixRQUFNYixLQUFLLENBQUNhLEVBQVosR0FBZSxNQUEzSCw0RUFDTmIsS0FBSyxDQUFDYSxFQURBLGdEQUF2RDtBQUN3RyxVQUFJLEVBQUMsVUFEN0c7QUFFSSxRQUFFLEVBQUViLEtBQUssQ0FBQ2MsRUFGZDtBQUVrQix1QkFBYyxNQUZoQztBQUV1Qyx1QkFBYyxNQUZyRDtBQUFBLHNCQUU4RGQsS0FBSyxDQUFDVSxJQUZwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7R0FyQlFYLEk7VUFJWVEsdUQ7OztLQUpaUixJO0FBdUJNQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2VsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuZnVuY3Rpb24gQ2VsbChwcm9wcykge1xuXG4gICAgY29uc3QgW3BpY2tlZCwgc2V0UGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgICBmdW5jdGlvbiBIYW5kbGVPbkNsaWNrKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9ICFwaWNrZWRcbiAgICAgICAgcHJvcHMuc2VsZWN0ZWQocHJvcHMubmFtZSwgc2VsZWN0ZWQpXG4gICAgICAgIHNldFBpY2tlZChzZWxlY3RlZClcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coaXRlbXMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e0hhbmRsZU9uQ2xpY2t9IGNsYXNzTmFtZT17YGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC0yIHB5LTIgJHtwaWNrZWQ/IFwiYmctXCIrcHJvcHMuYmcrXCItMzAwXCIgOiBcImJnLVwiK3Byb3BzLmJnK1wiLTEwMFwifSAgXG4gICAgICAgICAgICBibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLSR7cHJvcHMuYmd9LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGZvY3VzOm91dGxpbmUtbm9uZWB9IHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgaWQ9e3Byb3BzLmlkfSBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+IHtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cell.js\n");

/***/ })

})