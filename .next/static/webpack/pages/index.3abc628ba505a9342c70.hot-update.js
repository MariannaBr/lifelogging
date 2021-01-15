webpackHotUpdate_N_E("pages/index",{

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: addDay, addCategory, addCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDay\", function() { return addDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCategory\", function() { return addCategory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCell\", function() { return addCell; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _components_Today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Today */ \"./components/Today.js\");\n\n\nvar dayId = _components_Today__WEBPACK_IMPORTED_MODULE_1__[\"today\"];\nvar addDay = function addDay(content) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_DAY\"],\n    payload: {\n      id: dayId,\n      content: content\n    }\n  };\n};\nvar addCategory = function addCategory(props) {\n  return function (content) {\n    return {\n      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CATEGORY\"],\n      payload: {\n        category: props.name,\n        cells: [content]\n      }\n    };\n  };\n};\nvar addCell = function addCell(name) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CELL\"],\n    payload: {\n      name: name\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy5qcz82NjkwIl0sIm5hbWVzIjpbImRheUlkIiwidG9kYXkiLCJhZGREYXkiLCJjb250ZW50IiwidHlwZSIsIkFERF9EQVkiLCJwYXlsb2FkIiwiaWQiLCJhZGRDYXRlZ29yeSIsInByb3BzIiwiQUREX0NBVEVHT1JZIiwiY2F0ZWdvcnkiLCJuYW1lIiwiY2VsbHMiLCJhZGRDZWxsIiwiQUREX0NFTEwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFJQSxLQUFLLEdBQUdDLHVEQUFaO0FBRU8sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsT0FBTztBQUFBLFNBQUs7QUFDOUJDLFFBQUksRUFBRUMsb0RBRHdCO0FBRTlCQyxXQUFPLEVBQUU7QUFDTEMsUUFBRSxFQUFFUCxLQURDO0FBRUxHLGFBQU8sRUFBUEE7QUFGSztBQUZxQixHQUFMO0FBQUEsQ0FBdEI7QUFRQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FBVyxVQUFBTixPQUFPO0FBQUEsV0FBSztBQUM5Q0MsVUFBSSxFQUFFTSx5REFEd0M7QUFFOUNKLGFBQU8sRUFBRTtBQUNMSyxnQkFBUSxFQUFFRixLQUFLLENBQUNHLElBRFg7QUFFTEMsYUFBSyxFQUFFLENBQUNWLE9BQUQ7QUFGRjtBQUZxQyxLQUFMO0FBQUEsR0FBbEI7QUFBQSxDQUFwQjtBQVFBLElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUFGLElBQUk7QUFBQSxTQUFLO0FBQzVCUixRQUFJLEVBQUVXLHFEQURzQjtBQUU1QlQsV0FBTyxFQUFFO0FBQUNNLFVBQUksRUFBSkE7QUFBRDtBQUZtQixHQUFMO0FBQUEsQ0FBcEIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX0RBWSwgQUREX0NBVEVHT1JZLCBBRERfQ0VMTCB9IGZyb20gXCIuL2FjdGlvblR5cGVzXCJcbmltcG9ydCB7dG9kYXl9IGZyb20gXCIuLi9jb21wb25lbnRzL1RvZGF5XCJcblxubGV0IGRheUlkID0gdG9kYXlcblxuZXhwb3J0IGNvbnN0IGFkZERheSA9IGNvbnRlbnQgPT4gKHtcbiAgICB0eXBlOiBBRERfREFZLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaWQ6IGRheUlkLFxuICAgICAgICBjb250ZW50XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGFkZENhdGVnb3J5ID0gKHByb3BzKSA9PiBjb250ZW50ID0+ICh7XG4gICAgdHlwZTogQUREX0NBVEVHT1JZLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY2F0ZWdvcnk6IHByb3BzLm5hbWUsXG4gICAgICAgIGNlbGxzOiBbY29udGVudF1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgYWRkQ2VsbCA9IG5hbWUgPT4gKHtcbiAgICB0eXBlOiBBRERfQ0VMTCxcbiAgICBwYXlsb2FkOiB7bmFtZX1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions.js\n");

/***/ })

})