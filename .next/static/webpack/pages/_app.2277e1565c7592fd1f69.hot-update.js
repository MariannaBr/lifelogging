webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n/* STRUCTURE OF THE STATE\n\nstate = {\n    days: {\n        [day_id]: {\n            categories: {\n                [category_name]: {\n                    cells: []\n                }\n            }\n        }\n    }\n} \nexport default function(state = initialState, action) {\n    switch(action.type) {\n        case ADD_CELL: {\n            return {\n                ...state,\n                days: {\n                    ...state.days,\n                    [action.payload.day_id]: {\n                        ...state.days[action.payload.day_id],\n                        categories: {\n                            ...state.days[action.payload.day_id].categories,\n                            [action.payload.category_name]: {\n                                ...state.days[action.payload.day_id].categories[action.payload.category_name],\n                                cells: [\n                                    ...state.days[action.payload.day_id].categories[action.payload.category_name].cells,\n                                    action.payload.cell_name\n                                ]\n                            }\n                        }\n                    }\n                }\n            }\n        }\n\n        default:\n            return state\n    }\n}*/\n\n/* STRUCTURE OF THE STATE - 2\n\nstate = {\n    days: {\n        byId: {\n            \"1.Jan.2021\": {\n                id: \"1.Jan.2021\",\n                categories: [],\n                cells: []\n            }\n        },\n        allIds: {\n            [\"1.Jan.2021\", 2.Jan.2021]\n        }\n    },\n    categories: {\n        byId: {\n            \"food\": {\n                id: \"food\",\n                cells: []\n            },\n            \"mood\": {\n                id: \"mood\",\n                cells: []\n            }\n        },\n        allIds: {\n            [\"food\", \"mood\"]\n        }\n    },\n    cells: {\n        byId: {\n            \"bread\": {\n                id: \"bread\",\n                category: \"food\"\n            },\n            \"happy\": {\n                id: \"happy\",\n                category: \"mood\"\n            }\n        },\n        allIds: {\n            [\"bread\", \"happy\"]\n        }\n    }\n} */\n\n/* STRUCTURE OF THE STATE - 3\nstate = {\n    days: {\n        [day_id]: {\n            categories: {\n                [category_name]: {\n                    cells: []\n                }\n            }\n        }\n    },\n    cells: {\n        [cell_name]: {\n            category: \"\",\n            days: []\n        }\n    }\n} */\n\nvar initialState = {\n  days: {\n    \"0\": {\n      categories: {\n        \"test\": {\n          cells: [\"test\"]\n        }\n      }\n    }\n  },\n  cells: {\n    \"test\": {\n      category: \"test\",\n      days: [\"0\"]\n    }\n  }\n};\n\nfunction addDay(state, action) {\n  var payload = action.payload;\n  var dayId = payload.dayId,\n      categoryName = payload.categoryName,\n      cellName = payload.cellName;\n  return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, dayId, {\n    categories: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, categoryName, {\n      cells: [cellName]\n    })\n  }));\n}\n\nfunction addCategory(state, action) {\n  var payload = action.payload;\n  var dayId = payload.dayId,\n      categoryName = payload.categoryName,\n      cellName = payload.cellName;\n  return _objectSpread(_objectSpread({}, state), {}, {\n    days: _objectSpread(_objectSpread({}, state.days), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, dayId, _objectSpread(_objectSpread({}, state.days[dayId]), {}, {\n      categories: _objectSpread(_objectSpread({}, state.days[dayId].categories), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, categoryName, {\n        cells: [cellName]\n      }))\n    })))\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CELL\"]:\n      {\n        var payload = action.payload;\n        var dayId = payload.dayId,\n            categoryName = payload.categoryName,\n            cellName = payload.cellName;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state.days), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, dayId, _objectSpread(_objectSpread({}, state.days[dayId]), {}, {\n            categories: _objectSpread(_objectSpread({}, state.days[dayId].categories), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, categoryName, _objectSpread(_objectSpread({}, state.days[dayId].categories[categoryName]), {}, {\n              cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.days[dayId].categories[categoryName].cells), [cellName])\n            })))\n          })))\n        });\n      }\n\n    default:\n      return state;\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanM/MjFiNiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXlzIiwiY2F0ZWdvcmllcyIsImNlbGxzIiwiY2F0ZWdvcnkiLCJhZGREYXkiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJkYXlJZCIsImNhdGVnb3J5TmFtZSIsImNlbGxOYW1lIiwiYWRkQ2F0ZWdvcnkiLCJ0eXBlIiwiQUREX0NFTEwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLE1BQUksRUFBRTtBQUNGLFNBQUs7QUFDREMsZ0JBQVUsRUFBRTtBQUNSLGdCQUFRO0FBQ0pDLGVBQUssRUFBRSxDQUFDLE1BQUQ7QUFESDtBQURBO0FBRFg7QUFESCxHQURXO0FBVWpCQSxPQUFLLEVBQUU7QUFDSCxZQUFRO0FBQ0pDLGNBQVEsRUFBRSxNQUROO0FBRUpILFVBQUksRUFBRSxDQUFDLEdBQUQ7QUFGRjtBQURMO0FBVlUsQ0FBckI7O0FBa0JBLFNBQVNJLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxNQUF2QixFQUErQjtBQUFBLE1BQ25CQyxPQURtQixHQUNQRCxNQURPLENBQ25CQyxPQURtQjtBQUFBLE1BRW5CQyxLQUZtQixHQUVlRCxPQUZmLENBRW5CQyxLQUZtQjtBQUFBLE1BRVpDLFlBRlksR0FFZUYsT0FGZixDQUVaRSxZQUZZO0FBQUEsTUFFRUMsUUFGRixHQUVlSCxPQUZmLENBRUVHLFFBRkY7QUFHM0IseUNBQ09MLEtBRFAscUdBRUtHLEtBRkwsRUFFYTtBQUNMUCxjQUFVLEVBQUUsOEZBQ1BRLFlBREssRUFDVTtBQUNaUCxXQUFLLEVBQUUsQ0FBQ1EsUUFBRDtBQURLLEtBRFY7QUFETCxHQUZiO0FBVUg7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQk4sS0FBckIsRUFBNEJDLE1BQTVCLEVBQW9DO0FBQUEsTUFDeEJDLE9BRHdCLEdBQ1pELE1BRFksQ0FDeEJDLE9BRHdCO0FBQUEsTUFFeEJDLEtBRndCLEdBRVVELE9BRlYsQ0FFeEJDLEtBRndCO0FBQUEsTUFFakJDLFlBRmlCLEdBRVVGLE9BRlYsQ0FFakJFLFlBRmlCO0FBQUEsTUFFSEMsUUFGRyxHQUVVSCxPQUZWLENBRUhHLFFBRkc7QUFHaEMseUNBQ09MLEtBRFA7QUFFSUwsUUFBSSxrQ0FDR0ssS0FBSyxDQUFDTCxJQURULHFHQUVDUSxLQUZELGtDQUdPSCxLQUFLLENBQUNMLElBQU4sQ0FBV1EsS0FBWCxDQUhQO0FBSUlQLGdCQUFVLGtDQUNISSxLQUFLLENBQUNMLElBQU4sQ0FBV1EsS0FBWCxFQUFrQlAsVUFEZixxR0FFTFEsWUFGSyxFQUVVO0FBQ1pQLGFBQUssRUFBRSxDQUFDUSxRQUFEO0FBREssT0FGVjtBQUpkO0FBRlI7QUFlSDs7QUFFYywyRUFBdUM7QUFBQSxNQUE5QkwsS0FBOEIsdUVBQXRCTixZQUFzQjtBQUFBLE1BQVJPLE1BQVE7O0FBQ2xELFVBQU9BLE1BQU0sQ0FBQ00sSUFBZDtBQUNJLFNBQUtDLHFEQUFMO0FBQWU7QUFBQSxZQUNITixPQURHLEdBQ1NELE1BRFQsQ0FDSEMsT0FERztBQUFBLFlBRUhDLEtBRkcsR0FFK0JELE9BRi9CLENBRUhDLEtBRkc7QUFBQSxZQUVJQyxZQUZKLEdBRStCRixPQUYvQixDQUVJRSxZQUZKO0FBQUEsWUFFa0JDLFFBRmxCLEdBRStCSCxPQUYvQixDQUVrQkcsUUFGbEI7QUFHWCwrQ0FDT0wsS0FEUDtBQUVJTCxjQUFJLGtDQUNHSyxLQUFLLENBQUNMLElBRFQscUdBRUNRLEtBRkQsa0NBR09ILEtBQUssQ0FBQ0wsSUFBTixDQUFXUSxLQUFYLENBSFA7QUFJSVAsc0JBQVUsa0NBQ0hJLEtBQUssQ0FBQ0wsSUFBTixDQUFXUSxLQUFYLEVBQWtCUCxVQURmLHFHQUVMUSxZQUZLLGtDQUdDSixLQUFLLENBQUNMLElBQU4sQ0FBV1EsS0FBWCxFQUFrQlAsVUFBbEIsQ0FBNkJRLFlBQTdCLENBSEQ7QUFJRlAsbUJBQUsseUdBQ0VHLEtBQUssQ0FBQ0wsSUFBTixDQUFXUSxLQUFYLEVBQWtCUCxVQUFsQixDQUE2QlEsWUFBN0IsRUFBMkNQLEtBRDdDLElBRURRLFFBRkM7QUFKSDtBQUpkO0FBRlI7QUFtQkg7O0FBRUQ7QUFDSSxhQUFPTCxLQUFQO0FBMUJSO0FBNEJIIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBRERfREFZLCBBRERfQ0FURUdPUlksIEFERF9DRUxMLCBSRU1PVkVfQ0VMTCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiXG5cbi8qIFNUUlVDVFVSRSBPRiBUSEUgU1RBVEVcblxuc3RhdGUgPSB7XG4gICAgZGF5czoge1xuICAgICAgICBbZGF5X2lkXToge1xuICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgIFtjYXRlZ29yeV9uYW1lXToge1xuICAgICAgICAgICAgICAgICAgICBjZWxsczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9DRUxMOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGRheXM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmRheV9pZF06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheXNbYWN0aW9uLnBheWxvYWQuZGF5X2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzW2FjdGlvbi5wYXlsb2FkLmRheV9pZF0uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnlfbmFtZV06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5c1thY3Rpb24ucGF5bG9hZC5kYXlfaWRdLmNhdGVnb3JpZXNbYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnlfbmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzW2FjdGlvbi5wYXlsb2FkLmRheV9pZF0uY2F0ZWdvcmllc1thY3Rpb24ucGF5bG9hZC5jYXRlZ29yeV9uYW1lXS5jZWxscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmNlbGxfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0qL1xuXG4vKiBTVFJVQ1RVUkUgT0YgVEhFIFNUQVRFIC0gMlxuXG5zdGF0ZSA9IHtcbiAgICBkYXlzOiB7XG4gICAgICAgIGJ5SWQ6IHtcbiAgICAgICAgICAgIFwiMS5KYW4uMjAyMVwiOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiMS5KYW4uMjAyMVwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGNlbGxzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGxJZHM6IHtcbiAgICAgICAgICAgIFtcIjEuSmFuLjIwMjFcIiwgMi5KYW4uMjAyMV1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2F0ZWdvcmllczoge1xuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgICBcImZvb2RcIjoge1xuICAgICAgICAgICAgICAgIGlkOiBcImZvb2RcIixcbiAgICAgICAgICAgICAgICBjZWxsczogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm1vb2RcIjoge1xuICAgICAgICAgICAgICAgIGlkOiBcIm1vb2RcIixcbiAgICAgICAgICAgICAgICBjZWxsczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxsSWRzOiB7XG4gICAgICAgICAgICBbXCJmb29kXCIsIFwibW9vZFwiXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjZWxsczoge1xuICAgICAgICBieUlkOiB7XG4gICAgICAgICAgICBcImJyZWFkXCI6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJicmVhZFwiLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcImZvb2RcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiaGFwcHlcIjoge1xuICAgICAgICAgICAgICAgIGlkOiBcImhhcHB5XCIsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwibW9vZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsbElkczoge1xuICAgICAgICAgICAgW1wiYnJlYWRcIiwgXCJoYXBweVwiXVxuICAgICAgICB9XG4gICAgfVxufSAqL1xuXG4vKiBTVFJVQ1RVUkUgT0YgVEhFIFNUQVRFIC0gM1xuc3RhdGUgPSB7XG4gICAgZGF5czoge1xuICAgICAgICBbZGF5X2lkXToge1xuICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgIFtjYXRlZ29yeV9uYW1lXToge1xuICAgICAgICAgICAgICAgICAgICBjZWxsczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNlbGxzOiB7XG4gICAgICAgIFtjZWxsX25hbWVdOiB7XG4gICAgICAgICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgICAgICAgIGRheXM6IFtdXG4gICAgICAgIH1cbiAgICB9XG59ICovXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXlzOiB7XG4gICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcInRlc3RcIl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNlbGxzOiB7XG4gICAgICAgIFwidGVzdFwiOiB7XG4gICAgICAgICAgICBjYXRlZ29yeTogXCJ0ZXN0XCIsXG4gICAgICAgICAgICBkYXlzOiBbXCIwXCJdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZERheShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhY3Rpb25cbiAgICBjb25zdCB7IGRheUlkLCBjYXRlZ29yeU5hbWUsIGNlbGxOYW1lIH0gPSBwYXlsb2FkXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtkYXlJZF06IHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAgICAgICBbY2F0ZWdvcnlOYW1lXToge1xuICAgICAgICAgICAgICAgICAgICBjZWxsczogW2NlbGxOYW1lXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnkoc3RhdGUsIGFjdGlvbikge1xuICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYWN0aW9uXG4gICAgY29uc3QgeyBkYXlJZCwgY2F0ZWdvcnlOYW1lLCBjZWxsTmFtZSB9ID0gcGF5bG9hZFxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBkYXlzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5kYXlzLFxuICAgICAgICAgICAgW2RheUlkXToge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheXNbZGF5SWRdLFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZGF5c1tkYXlJZF0uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgW2NhdGVnb3J5TmFtZV06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbY2VsbE5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfQ0VMTDoge1xuICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHsgZGF5SWQsIGNhdGVnb3J5TmFtZSwgY2VsbE5hbWUgfSA9IHBheWxvYWRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF5czoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzLFxuICAgICAgICAgICAgICAgICAgICBbZGF5SWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzW2RheUlkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5kYXlzW2RheUlkXS5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeU5hbWVdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheXNbZGF5SWRdLmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmRheXNbZGF5SWRdLmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXS5jZWxscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ })

})