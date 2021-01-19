webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n/* STRUCTURE OF THE STATE\n\nstate = {\n    days: [\n        {\n            day_id: \"\",\n            categories: [\n                {\n                    category_name: \"\",\n                    cells: []\n                }\n            ]\n        }\n    ]\n} */\n\nvar initialState = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CELL\"]:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.days), [{\n            day_id: action.payload.day_id,\n            categories: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.categories), [{\n              category_name: action.payload.category_name,\n              cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.cells), [action.payload.cell_name])\n            }])\n          }])\n        });\n      }\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_CELL\"]:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.days), [{\n            day_id: action.payload.day_id,\n            categories: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.categories), [{\n              category_name: action.payload.category_name,\n              cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.cells), [action.payload.cell_name])\n            }])\n          }])\n        });\n      }\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanM/MjFiNiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfQ0VMTCIsImRheXMiLCJkYXlfaWQiLCJwYXlsb2FkIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5X25hbWUiLCJjZWxscyIsImNlbGxfbmFtZSIsIlJFTU9WRV9DRUxMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxFQUFyQjtBQUVlLDJFQUF1QztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJELFlBQXNCO0FBQUEsTUFBUkUsTUFBUTs7QUFDbEQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MscURBQUw7QUFBZTtBQUNYLCtDQUNPSCxLQURQO0FBRUlJLGNBQUkseUdBQ0dKLEtBQUssQ0FBQ0ksSUFEVCxJQUVBO0FBQ0lDLGtCQUFNLEVBQUVKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlRCxNQUQzQjtBQUVJRSxzQkFBVSx5R0FDSFAsS0FBSyxDQUFDTyxVQURILElBRU47QUFDSUMsMkJBQWEsRUFBRVAsTUFBTSxDQUFDSyxPQUFQLENBQWVFLGFBRGxDO0FBRUlDLG1CQUFLLHlHQUNFVCxLQUFLLENBQUNTLEtBRFIsSUFFRFIsTUFBTSxDQUFDSyxPQUFQLENBQWVJLFNBRmQ7QUFGVCxhQUZNO0FBRmQsV0FGQTtBQUZSO0FBbUJIOztBQUNELFNBQUtDLHdEQUFMO0FBQWtCO0FBQ2QsK0NBQ09YLEtBRFA7QUFFSUksY0FBSSx5R0FDR0osS0FBSyxDQUFDSSxJQURULElBRUE7QUFDSUMsa0JBQU0sRUFBRUosTUFBTSxDQUFDSyxPQUFQLENBQWVELE1BRDNCO0FBRUlFLHNCQUFVLHlHQUNIUCxLQUFLLENBQUNPLFVBREgsSUFFTjtBQUNJQywyQkFBYSxFQUFFUCxNQUFNLENBQUNLLE9BQVAsQ0FBZUUsYUFEbEM7QUFFSUMsbUJBQUsseUdBQ0VULEtBQUssQ0FBQ1MsS0FEUixJQUVEUixNQUFNLENBQUNLLE9BQVAsQ0FBZUksU0FGZDtBQUZULGFBRk07QUFGZCxXQUZBO0FBRlI7QUFtQkg7O0FBRUQ7QUFDSSxhQUFPVixLQUFQO0FBN0NSO0FBK0NIIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRERfREFZLCBBRERfQ0FURUdPUlksIEFERF9DRUxMLCBSRU1PVkVfQ0VMTCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiXG5cbi8qIFNUUlVDVFVSRSBPRiBUSEUgU1RBVEVcblxuc3RhdGUgPSB7XG4gICAgZGF5czogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkYXlfaWQ6IFwiXCIsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9uYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjZWxsczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59ICovXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfQ0VMTDoge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBkYXlzOiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheXMsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheV9pZDogYWN0aW9uLnBheWxvYWQuZGF5X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeV9uYW1lOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2VsbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5jZWxsX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFJFTU9WRV9DRUxMOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGRheXM6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5cyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5X2lkOiBhY3Rpb24ucGF5bG9hZC5kYXlfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5X25hbWU6IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jZWxscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmNlbGxfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ })

})