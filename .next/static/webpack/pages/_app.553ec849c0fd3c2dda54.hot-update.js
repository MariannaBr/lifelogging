webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n/* STRUCTURE OF THE STATE\n\nstate = {\n    days: {\n        [day_id]: {\n            categories: {\n                [category_name]: {\n                    cells: []\n                }\n            }\n        }\n    }\n} \nexport default function(state = initialState, action) {\n    switch(action.type) {\n        case ADD_CELL: {\n            return {\n                ...state,\n                days: {\n                    ...state.days,\n                    [action.payload.day_id]: {\n                        ...state.days[action.payload.day_id],\n                        categories: {\n                            ...state.days[action.payload.day_id].categories,\n                            [action.payload.category_name]: {\n                                ...state.days[action.payload.day_id].categories[action.payload.category_name],\n                                cells: [\n                                    ...state.days[action.payload.day_id].categories[action.payload.category_name].cells,\n                                    action.payload.cell_name\n                                ]\n                            }\n                        }\n                    }\n                }\n            }\n        }\n\n        default:\n            return state\n    }\n}*/\n\n/* STRUCTURE OF THE STATE - 2\n\nstate = {\n    days: {\n        byId: {\n            \"1.Jan.2021\": {\n                id: \"1.Jan.2021\",\n                categories: [],\n                cells: []\n            }\n        },\n        allIds: {\n            [\"1.Jan.2021\", 2.Jan.2021]\n        }\n    },\n    categories: {\n        byId: {\n            \"food\": {\n                id: \"food\",\n                cells: []\n            },\n            \"mood\": {\n                id: \"mood\",\n                cells: []\n            }\n        },\n        allIds: {\n            [\"food\", \"mood\"]\n        }\n    },\n    cells: {\n        byId: {\n            \"bread\": {\n                id: \"bread\",\n                category: \"food\"\n            },\n            \"happy\": {\n                id: \"happy\",\n                category: \"mood\"\n            }\n        },\n        allIds: {\n            [\"bread\", \"happy\"]\n        }\n    }\n} */\n\n/* STRUCTURE OF THE STATE - 3\nstate = {\n    days: {\n        [day_id]: {\n            categories: {\n                [category_name]: {\n                    cells: []\n                }\n            }\n        }\n    },\n    cells: {\n        [cell_name]: {\n            category: \"\",\n            days: []\n        }\n    }\n} */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CELL\"]:\n      {\n        var payload = action.payload;\n        var dayId = payload.dayId,\n            categoryName = payload.categoryName,\n            cellName = payload.cellName;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state.days), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, dayId, _objectSpread(_objectSpread({}, state.days[dayId]), {}, {\n            categories: _objectSpread(_objectSpread({}, state.days[dayId].categories), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, categoryName, _objectSpread(_objectSpread({}, state.days[dayId].categories[categoryName]), {}, {\n              cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.days[dayId].categories[categoryName].cells), [cellName])\n            })))\n          })))\n        });\n      }\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanM/MjFiNiJdLCJuYW1lcyI6WyJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfQ0VMTCIsInBheWxvYWQiLCJkYXlJZCIsImNhdGVnb3J5TmFtZSIsImNlbGxOYW1lIiwiZGF5cyIsImNhdGVnb3JpZXMiLCJjZWxscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLDJFQUE2QjtBQUFBLE1BQXBCQSxLQUFvQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsTUFBUTs7QUFHeEMsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MscURBQUw7QUFBZTtBQUFBLFlBQ0hDLE9BREcsR0FDU0gsTUFEVCxDQUNIRyxPQURHO0FBQUEsWUFFSEMsS0FGRyxHQUUrQkQsT0FGL0IsQ0FFSEMsS0FGRztBQUFBLFlBRUlDLFlBRkosR0FFK0JGLE9BRi9CLENBRUlFLFlBRko7QUFBQSxZQUVrQkMsUUFGbEIsR0FFK0JILE9BRi9CLENBRWtCRyxRQUZsQjtBQUdYLCtDQUNPUCxLQURQO0FBRUlRLGNBQUksa0NBQ0dSLEtBQUssQ0FBQ1EsSUFEVCxxR0FFQ0gsS0FGRCxrQ0FHT0wsS0FBSyxDQUFDUSxJQUFOLENBQVdILEtBQVgsQ0FIUDtBQUlJSSxzQkFBVSxrQ0FDSFQsS0FBSyxDQUFDUSxJQUFOLENBQVdILEtBQVgsRUFBa0JJLFVBRGYscUdBRUxILFlBRkssa0NBR0NOLEtBQUssQ0FBQ1EsSUFBTixDQUFXSCxLQUFYLEVBQWtCSSxVQUFsQixDQUE2QkgsWUFBN0IsQ0FIRDtBQUlGSSxtQkFBSyx5R0FDRVYsS0FBSyxDQUFDUSxJQUFOLENBQVdILEtBQVgsRUFBa0JJLFVBQWxCLENBQTZCSCxZQUE3QixFQUEyQ0ksS0FEN0MsSUFFREgsUUFGQztBQUpIO0FBSmQ7QUFGUjtBQW1CSDs7QUFFRDtBQUNJLGFBQU9QLEtBQVA7QUExQlI7QUE0QkgiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9jZWxsUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9EQVksIEFERF9DQVRFR09SWSwgQUREX0NFTEwsIFJFTU9WRV9DRUxMIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCJcblxuLyogU1RSVUNUVVJFIE9GIFRIRSBTVEFURVxuXG5zdGF0ZSA9IHtcbiAgICBkYXlzOiB7XG4gICAgICAgIFtkYXlfaWRdOiB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgW2NhdGVnb3J5X25hbWVdOiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX0NFTEw6IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF5czoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzLFxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWQuZGF5X2lkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5c1thY3Rpb24ucGF5bG9hZC5kYXlfaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheXNbYWN0aW9uLnBheWxvYWQuZGF5X2lkXS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZC5jYXRlZ29yeV9uYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzW2FjdGlvbi5wYXlsb2FkLmRheV9pZF0uY2F0ZWdvcmllc1thY3Rpb24ucGF5bG9hZC5jYXRlZ29yeV9uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheXNbYWN0aW9uLnBheWxvYWQuZGF5X2lkXS5jYXRlZ29yaWVzW2FjdGlvbi5wYXlsb2FkLmNhdGVnb3J5X25hbWVdLmNlbGxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuY2VsbF9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSovXG5cbi8qIFNUUlVDVFVSRSBPRiBUSEUgU1RBVEUgLSAyXG5cbnN0YXRlID0ge1xuICAgIGRheXM6IHtcbiAgICAgICAgYnlJZDoge1xuICAgICAgICAgICAgXCIxLkphbi4yMDIxXCI6IHtcbiAgICAgICAgICAgICAgICBpZDogXCIxLkphbi4yMDIxXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgICAgICAgICAgY2VsbHM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsbElkczoge1xuICAgICAgICAgICAgW1wiMS5KYW4uMjAyMVwiLCAyLkphbi4yMDIxXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICAgIFwiZm9vZFwiOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZm9vZFwiLFxuICAgICAgICAgICAgICAgIGNlbGxzOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwibW9vZFwiOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibW9vZFwiLFxuICAgICAgICAgICAgICAgIGNlbGxzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGxJZHM6IHtcbiAgICAgICAgICAgIFtcImZvb2RcIiwgXCJtb29kXCJdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNlbGxzOiB7XG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICAgIFwiYnJlYWRcIjoge1xuICAgICAgICAgICAgICAgIGlkOiBcImJyZWFkXCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiZm9vZFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJoYXBweVwiOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiaGFwcHlcIixcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJtb29kXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxsSWRzOiB7XG4gICAgICAgICAgICBbXCJicmVhZFwiLCBcImhhcHB5XCJdXG4gICAgICAgIH1cbiAgICB9XG59ICovXG5cbi8qIFNUUlVDVFVSRSBPRiBUSEUgU1RBVEUgLSAzXG5zdGF0ZSA9IHtcbiAgICBkYXlzOiB7XG4gICAgICAgIFtkYXlfaWRdOiB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgW2NhdGVnb3J5X25hbWVdOiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2VsbHM6IHtcbiAgICAgICAgW2NlbGxfbmFtZV06IHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICAgICAgZGF5czogW11cbiAgICAgICAgfVxuICAgIH1cbn0gKi9cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0ge30sIGFjdGlvbikge1xuICAgIFxuXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX0NFTEw6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYWN0aW9uXG4gICAgICAgICAgICBjb25zdCB7IGRheUlkLCBjYXRlZ29yeU5hbWUsIGNlbGxOYW1lIH0gPSBwYXlsb2FkXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGRheXM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgW2RheUlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5c1tkYXlJZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5c1tkYXlJZF0uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlOYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzW2RheUlkXS5jYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzW2RheUlkXS5jYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0uY2VsbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ })

})