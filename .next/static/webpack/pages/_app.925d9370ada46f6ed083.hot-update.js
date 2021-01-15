webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _components_Today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Today */ \"./components/Today.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar dayId = _components_Today__WEBPACK_IMPORTED_MODULE_3__[\"today\"];\nvar initialState = {\n  categories: [{\n    category: \"\",\n    cells: []\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CATEGORY\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        categories: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.categories), [{\n          category: action.payload\n        }])\n      });\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CELL\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        categories: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.categories), [{\n          category: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.category), [{\n            cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.cells), [{\n              cell: action.payload\n            }])\n          }])\n        }])\n      });\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanM/MjFiNiJdLCJuYW1lcyI6WyJkYXlJZCIsInRvZGF5IiwiaW5pdGlhbFN0YXRlIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiY2VsbHMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfQ0FURUdPUlkiLCJwYXlsb2FkIiwiQUREX0NFTEwiLCJjZWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHQyx1REFBWjtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNqQkMsWUFBVSxFQUFFLENBQUM7QUFBQ0MsWUFBUSxFQUFDLEVBQVY7QUFBY0MsU0FBSyxFQUFDO0FBQXBCLEdBQUQ7QUFESyxDQUFyQjtBQUllLDJFQUF1QztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJKLFlBQXNCO0FBQUEsTUFBUkssTUFBUTs7QUFDbEQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MseURBQUw7QUFDSSw2Q0FDT0gsS0FEUDtBQUVJSCxrQkFBVSx5R0FBTUcsS0FBSyxDQUFDSCxVQUFaLElBQ1Y7QUFDSUMsa0JBQVEsRUFBRUcsTUFBTSxDQUFDRztBQURyQixTQURVO0FBRmQ7O0FBT0osU0FBS0MscURBQUw7QUFDSSw2Q0FDT0wsS0FEUDtBQUVJSCxrQkFBVSx5R0FBTUcsS0FBSyxDQUFDSCxVQUFaLElBQ047QUFDSUMsa0JBQVEseUdBQU1FLEtBQUssQ0FBQ0YsUUFBWixJQUNSO0FBQ0lDLGlCQUFLLHlHQUFNQyxLQUFLLENBQUNELEtBQVosSUFDRDtBQUNJTyxrQkFBSSxFQUFFTCxNQUFNLENBQUNHO0FBRGpCLGFBREM7QUFEVCxXQURRO0FBRFosU0FETTtBQUZkOztBQWtCSjtBQUNJLGFBQU9KLEtBQVA7QUE3QlI7QUErQkgiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9jZWxsUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9EQVksIEFERF9DQVRFR09SWSwgQUREX0NFTEwgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIlxuaW1wb3J0IHt0b2RheX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVG9kYXlcIlxuXG5sZXQgZGF5SWQgPSB0b2RheVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgY2F0ZWdvcmllczogW3tjYXRlZ29yeTpcIlwiLCBjZWxsczpbXX1dLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX0NBVEVHT1JZOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbLi4uc3RhdGUuY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgQUREX0NFTEw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsuLi5zdGF0ZS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogWy4uLnN0YXRlLmNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbLi4uc3RhdGUuY2VsbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGw6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ })

})