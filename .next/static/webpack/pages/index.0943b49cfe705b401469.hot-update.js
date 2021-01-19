webpackHotUpdate_N_E("pages/index",{

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: addCell, removeCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCell\", function() { return addCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeCell\", function() { return removeCell; });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./redux/actionTypes.js\");\n\nvar addCell = function addCell(day_id, category_name, cell_name) {\n  return {\n    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"ADD_CELL\"],\n    payload: {\n      day_id: day_id,\n      category_name: category_name,\n      cell_name: cell_name\n    }\n  };\n};\nvar removeCell = function removeCell(day_id, category_name, cell_name) {\n  return {\n    type: REMOVE_CELL,\n    payload: {\n      day_id: day_id,\n      category_name: category_name,\n      cell_name: cell_name\n    }\n  };\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy5qcz82NjkwIl0sIm5hbWVzIjpbImFkZENlbGwiLCJkYXlfaWQiLCJjYXRlZ29yeV9uYW1lIiwiY2VsbF9uYW1lIiwidHlwZSIsIkFERF9DRUxMIiwicGF5bG9hZCIsInJlbW92ZUNlbGwiLCJSRU1PVkVfQ0VMTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBU0MsYUFBVCxFQUF3QkMsU0FBeEI7QUFBQSxTQUF1QztBQUMxREMsUUFBSSxFQUFFQyxxREFEb0Q7QUFFMURDLFdBQU8sRUFBRTtBQUNMTCxZQUFNLEVBQUVBLE1BREg7QUFFTEMsbUJBQWEsRUFBRUEsYUFGVjtBQUdMQyxlQUFTLEVBQUVBO0FBSE47QUFGaUQsR0FBdkM7QUFBQSxDQUFoQjtBQVNBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNOLE1BQUQsRUFBU0MsYUFBVCxFQUF3QkMsU0FBeEI7QUFBQSxTQUF1QztBQUM3REMsUUFBSSxFQUFFSSxXQUR1RDtBQUU3REYsV0FBTyxFQUFFO0FBQ0xMLFlBQU0sRUFBRUEsTUFESDtBQUVMQyxtQkFBYSxFQUFFQSxhQUZWO0FBR0xDLGVBQVMsRUFBRUE7QUFITjtBQUZvRCxHQUF2QztBQUFBLENBQW5CIiwiZmlsZSI6Ii4vcmVkdXgvYWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9DRUxMIH0gZnJvbSBcIi4vYWN0aW9uVHlwZXNcIlxuXG5cbmV4cG9ydCBjb25zdCBhZGRDZWxsID0gKGRheV9pZCwgY2F0ZWdvcnlfbmFtZSwgY2VsbF9uYW1lKSA9PiAoe1xuICAgIHR5cGU6IEFERF9DRUxMLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZGF5X2lkOiBkYXlfaWQsXG4gICAgICAgIGNhdGVnb3J5X25hbWU6IGNhdGVnb3J5X25hbWUsXG4gICAgICAgIGNlbGxfbmFtZTogY2VsbF9uYW1lXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNlbGwgPSAoZGF5X2lkLCBjYXRlZ29yeV9uYW1lLCBjZWxsX25hbWUpID0+ICh7XG4gICAgdHlwZTogUkVNT1ZFX0NFTEwsXG4gICAgcGF5bG9hZDoge1xuICAgICAgICBkYXlfaWQ6IGRheV9pZCxcbiAgICAgICAgY2F0ZWdvcnlfbmFtZTogY2F0ZWdvcnlfbmFtZSxcbiAgICAgICAgY2VsbF9uYW1lOiBjZWxsX25hbWVcbiAgICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions.js\n");

/***/ })

})