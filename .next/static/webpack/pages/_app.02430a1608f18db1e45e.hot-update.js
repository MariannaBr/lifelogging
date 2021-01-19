webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _components_Today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Today */ \"./components/Today.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar dayId = _components_Today__WEBPACK_IMPORTED_MODULE_3__[\"today\"]; // const initialState = {category:\"\", cells:[]}\n// export default function(state = initialState, action) {\n//     switch(action.type) {\n//         case ADD_CATEGORY: {\n//             return {\n//                 ...state,\n//                 category: [...state.category, action.payload]\n//                 }\n//         }\n//         case ADD_CELL: {\n//             return {\n//                 ...state,\n//                 category: [...state.category],\n//                 cells: [...state.cells, action.payload]\n//             }\n//         }\n//         default:\n//             return state\n//     }\n// }\n\nvar initialState = {\n  day: {\n    id: \"\",\n    categories: [{\n      name: \"\",\n      cells: []\n    }]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CATEGORY\"]:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          day: _objectSpread(_objectSpread({}, state.day), {}, {\n            categories: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.day.categories), [action.payload])\n          })\n        });\n      }\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CELL\"]:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          day: _objectSpread(_objectSpread({}, state.day), {}, {\n            categories: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.day.categories), [{\n              cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.day.categories.cells), [action.payload])\n            }])\n          })\n        });\n      }\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanM/MjFiNiJdLCJuYW1lcyI6WyJkYXlJZCIsInRvZGF5IiwiaW5pdGlhbFN0YXRlIiwiZGF5IiwiaWQiLCJjYXRlZ29yaWVzIiwibmFtZSIsImNlbGxzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX0NBVEVHT1JZIiwicGF5bG9hZCIsIkFERF9DRUxMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHQyx1REFBWixDLENBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLEtBQUcsRUFBRTtBQUNEQyxNQUFFLEVBQUUsRUFESDtBQUVEQyxjQUFVLEVBQUUsQ0FDUjtBQUNJQyxVQUFJLEVBQUUsRUFEVjtBQUVJQyxXQUFLLEVBQUU7QUFGWCxLQURRO0FBRlg7QUFEWSxDQUFyQjtBQVllLDJFQUF1QztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJOLFlBQXNCO0FBQUEsTUFBUk8sTUFBUTs7QUFDbEQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MseURBQUw7QUFBbUI7QUFDZiwrQ0FDT0gsS0FEUDtBQUVJTCxhQUFHLGtDQUNJSyxLQUFLLENBQUNMLEdBRFY7QUFFQ0Usc0JBQVUseUdBQ0hHLEtBQUssQ0FBQ0wsR0FBTixDQUFVRSxVQURQLElBRU5JLE1BQU0sQ0FBQ0csT0FGRDtBQUZYO0FBRlA7QUFXSDs7QUFDRCxTQUFLQyxxREFBTDtBQUFlO0FBQ1gsK0NBQ09MLEtBRFA7QUFFSUwsYUFBRyxrQ0FDSUssS0FBSyxDQUFDTCxHQURWO0FBRUNFLHNCQUFVLHlHQUNIRyxLQUFLLENBQUNMLEdBQU4sQ0FBVUUsVUFEUCxJQUVOO0FBQ0lFLG1CQUFLLHlHQUNFQyxLQUFLLENBQUNMLEdBQU4sQ0FBVUUsVUFBVixDQUFxQkUsS0FEdkIsSUFFREUsTUFBTSxDQUFDRyxPQUZOO0FBRFQsYUFGTTtBQUZYO0FBRlA7QUFlSDs7QUFDRDtBQUNJLGFBQU9KLEtBQVA7QUFoQ1I7QUFtQ0giLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9jZWxsUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9EQVksIEFERF9DQVRFR09SWSwgQUREX0NFTEwgfSBmcm9tIFwiLi4vYWN0aW9uVHlwZXNcIlxuaW1wb3J0IHt0b2RheX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVG9kYXlcIlxuXG5sZXQgZGF5SWQgPSB0b2RheVxuXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7Y2F0ZWdvcnk6XCJcIiwgY2VsbHM6W119XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuLy8gICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuLy8gICAgICAgICBjYXNlIEFERF9DQVRFR09SWToge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbi8vICAgICAgICAgICAgICAgICBjYXRlZ29yeTogWy4uLnN0YXRlLmNhdGVnb3J5LCBhY3Rpb24ucGF5bG9hZF1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbiAgICAgICAgICAgIFxuLy8gICAgICAgICBjYXNlIEFERF9DRUxMOiB7XG4vLyAgICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuLy8gICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBbLi4uc3RhdGUuY2F0ZWdvcnldLFxuLy8gICAgICAgICAgICAgICAgIGNlbGxzOiBbLi4uc3RhdGUuY2VsbHMsIGFjdGlvbi5wYXlsb2FkXVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbi8vICAgICB9XG4vLyB9XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXk6IHtcbiAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgIGNlbGxzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX0NBVEVHT1JZOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGRheToge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXksXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNhc2UgQUREX0NFTEw6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheSxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5LmNhdGVnb3JpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5LmNhdGVnb3JpZXMuY2VsbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ })

})