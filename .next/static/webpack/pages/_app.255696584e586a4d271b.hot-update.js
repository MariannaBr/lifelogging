webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cellReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _helpers_deleteItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/deleteItem */ \"./helpers/deleteItem.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // const initialState = {\n//     days: {\n//         \"0\": {\n//             categories: {\n//                 \"test\": {\n//                     cells: [\"test\"]\n//                 }\n//             }\n//         }\n//     },\n//     cells: {\n//         \"test\": {\n//             category: \"test\",\n//             days: [\"0\"]\n//         }\n//     }\n// }\n// export default function cellReducer(state = initialState, action) {\n//     switch(action.type) {\n//         case ADD_CELL: {\n//             const { payload } = action\n//             const { dayId, categoryName, cellName } = payload\n//             return {\n//                 ...state,\n//                 days: {\n//                     ...state?.days,\n//                     [dayId]: {\n//                         ...state?.days[dayId],\n//                         categories: {\n//                             ...state?.days[dayId]?.categories,\n//                             [categoryName]: {\n//                                 ...state?.days[dayId]?.categories[categoryName],\n//                                 cells: [\n//                                     ...state?.days[dayId]?.categories[categoryName]?.cells || [],\n//                                     cellName\n//                                 ]\n//                             }\n//                         }\n//                     }\n//                 },\n//                 cells: {\n//                     ...state?.cells,\n//                     [cellName]: {\n//                         ...state?.cells[cellName],\n//                         category: categoryName,\n//                         days: [\n//                             ...state?.cells[cellName]?.days || [],\n//                             dayId\n//                         ]\n//                     }\n//                 }\n//             }\n//         }\n//         case REMOVE_CELL: {\n//             const { payload } = action\n//             const { dayId, categoryName, cellName } = payload\n//             return {\n//                 ...state,\n//                 days: {\n//                     ...state?.days,\n//                     [dayId]: {\n//                         ...state?.days[dayId],\n//                         categories: {\n//                             ...state?.days[dayId]?.categories,\n//                             [categoryName]: {\n//                                 ...state?.days[dayId]?.categories[categoryName],\n//                                 cells: deleteItem(state?.days[dayId]?.categories[categoryName]?.cells, cellName)\n//                             }\n//                         }\n//                     }\n//                 },\n//                 cells: {\n//                     ...state?.cells,\n//                     [cellName]: {\n//                         ...state?.cells[cellName],\n//                         days: deleteItem(state?.cells[cellName]?.days, dayId)\n//                     }\n//                 }\n//             }\n//         }\n//         default:\n//             return state\n//     }\n// }\n\nvar initialState = {\n  days: [{\n    id: \"0\",\n    categories: [{\n      id: \"test\",\n      cells: [\"test\"]\n    }]\n  }],\n  cells: [{\n    id: \"test\",\n    category: \"test\",\n    days: [\"0\"]\n  }]\n};\nfunction cellReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CELL\"]:\n      {\n        var _state$days$dayId, _state$days$dayId2, _state$days$dayId3, _state$days$dayId3$ca, _state$cells$cellName;\n\n        var payload = action.payload;\n        var dayId = payload.dayId,\n            categoryName = payload.categoryName,\n            cellName = payload.cellName;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state === null || state === void 0 ? void 0 : state.days), [Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, dayId, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[dayId]), {}, {\n            categories: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$dayId = state.days[dayId]) === null || _state$days$dayId === void 0 ? void 0 : _state$days$dayId.categories), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, categoryName, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$dayId2 = state.days[dayId]) === null || _state$days$dayId2 === void 0 ? void 0 : _state$days$dayId2.categories[categoryName]), {}, {\n              cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((state === null || state === void 0 ? void 0 : (_state$days$dayId3 = state.days[dayId]) === null || _state$days$dayId3 === void 0 ? void 0 : (_state$days$dayId3$ca = _state$days$dayId3.categories[categoryName]) === null || _state$days$dayId3$ca === void 0 ? void 0 : _state$days$dayId3$ca.cells) || []), [cellName])\n            })))\n          }))]),\n          cells: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.cells), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, cellName, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.cells[cellName]), {}, {\n            category: categoryName,\n            days: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((state === null || state === void 0 ? void 0 : (_state$cells$cellName = state.cells[cellName]) === null || _state$cells$cellName === void 0 ? void 0 : _state$cells$cellName.days) || []), [dayId])\n          })))\n        });\n      }\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_CELL\"]:\n      {\n        var _state$days$_dayId, _state$days$_dayId2, _state$days$_dayId3, _state$days$_dayId3$c, _state$cells$_cellNam;\n\n        var _payload = action.payload;\n        var _dayId = _payload.dayId,\n            _categoryName = _payload.categoryName,\n            _cellName = _payload.cellName;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _dayId, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[_dayId]), {}, {\n            categories: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$_dayId = state.days[_dayId]) === null || _state$days$_dayId === void 0 ? void 0 : _state$days$_dayId.categories), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _categoryName, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$_dayId2 = state.days[_dayId]) === null || _state$days$_dayId2 === void 0 ? void 0 : _state$days$_dayId2.categories[_categoryName]), {}, {\n              cells: Object(_helpers_deleteItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === null || state === void 0 ? void 0 : (_state$days$_dayId3 = state.days[_dayId]) === null || _state$days$_dayId3 === void 0 ? void 0 : (_state$days$_dayId3$c = _state$days$_dayId3.categories[_categoryName]) === null || _state$days$_dayId3$c === void 0 ? void 0 : _state$days$_dayId3$c.cells, _cellName)\n            })))\n          }))),\n          cells: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.cells), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _cellName, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.cells[_cellName]), {}, {\n            days: Object(_helpers_deleteItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === null || state === void 0 ? void 0 : (_state$cells$_cellNam = state.cells[_cellName]) === null || _state$cells$_cellNam === void 0 ? void 0 : _state$cells$_cellNam.days, _dayId)\n          })))\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanM/MjFiNiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXlzIiwiaWQiLCJjYXRlZ29yaWVzIiwiY2VsbHMiLCJjYXRlZ29yeSIsImNlbGxSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX0NFTEwiLCJwYXlsb2FkIiwiZGF5SWQiLCJjYXRlZ29yeU5hbWUiLCJjZWxsTmFtZSIsIlJFTU9WRV9DRUxMIiwiZGVsZXRlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsTUFBSSxFQUFFLENBQ0Y7QUFDSUMsTUFBRSxFQUFFLEdBRFI7QUFFSUMsY0FBVSxFQUFFLENBQ1I7QUFDSUQsUUFBRSxFQUFFLE1BRFI7QUFFSUUsV0FBSyxFQUFFLENBQUMsTUFBRDtBQUZYLEtBRFE7QUFGaEIsR0FERSxDQURXO0FBWWpCQSxPQUFLLEVBQUUsQ0FDSDtB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QUFZVyxNQUFaLENBQUQsaUZBQUMsb0JBQW9CVCxVQUFwQixDQUErQlUsYUFBL0IsQ0FBRCwwREFBQyxzQkFBOENULEtBQS9DLEVBQXNEVSxTQUF0RDtBQUpmO0FBSmQsY0FGUjtBQWVJVixlQUFLLGtDQUNFRyxLQURGLGFBQ0VBLEtBREYsdUJBQ0VBLEtBQUssQ0FBRUgsS0FEVCxxR0FFQVUsU0FGQSxrQ0FHTVAsS0FITixhQUdNQSxLQUhOLHVCQUdNQSxLQUFLLENBQUVILEtBQVAsQ0FBYVUsU0FBYixDQUhOO0FBSUdiLGdCQUFJLEVBQUVlLG1FQUFVLENBQUNULEtBQUQsYUFBQ0EsS0FBRCxnREFBQ0EsS0FBSyxDQUFFSCxLQUFQLENBQWFVLFNBQWIsQ0FBRCwwREFBQyxzQkFBd0JiLElBQXpCLEVBQStCVyxNQUEvQjtBQUpuQjtBQWZUO0FBdUJIOztBQUVEO0FBQ0ksYUFBT0wsS0FBUDtBQWpFUjtBQW1FSCIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL2NlbGxSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUREX0NFTEwsIFJFTU9WRV9DRUxMIH0gZnJvbSBcIi4uL2FjdGlvblR5cGVzXCJcbmltcG9ydCBkZWxldGVJdGVtIGZyb20gXCIuLi8uLi9oZWxwZXJzL2RlbGV0ZUl0ZW1cIlxuXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4vLyAgICAgZGF5czoge1xuLy8gICAgICAgICBcIjBcIjoge1xuLy8gICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuLy8gICAgICAgICAgICAgICAgIFwidGVzdFwiOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXCJ0ZXN0XCJdXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfSxcbi8vICAgICBjZWxsczoge1xuLy8gICAgICAgICBcInRlc3RcIjoge1xuLy8gICAgICAgICAgICAgY2F0ZWdvcnk6IFwidGVzdFwiLFxuLy8gICAgICAgICAgICAgZGF5czogW1wiMFwiXVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjZWxsUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4vLyAgICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4vLyAgICAgICAgIGNhc2UgQUREX0NFTEw6IHtcbi8vICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gYWN0aW9uXG4vLyAgICAgICAgICAgICBjb25zdCB7IGRheUlkLCBjYXRlZ29yeU5hbWUsIGNlbGxOYW1lIH0gPSBwYXlsb2FkXG4vLyAgICAgICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuLy8gICAgICAgICAgICAgICAgIGRheXM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXMsXG4vLyAgICAgICAgICAgICAgICAgICAgIFtkYXlJZF06IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0/LmNhdGVnb3JpZXMsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhdGVnb3J5TmFtZV06IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdPy5jYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzOiBbXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0/LmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXT8uY2VsbHMgfHwgW10sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsTmFtZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICBjZWxsczoge1xuLy8gICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uY2VsbHMsXG4vLyAgICAgICAgICAgICAgICAgICAgIFtjZWxsTmFtZV06IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5jZWxsc1tjZWxsTmFtZV0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlOYW1lLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGF5czogW1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5jZWxsc1tjZWxsTmFtZV0/LmRheXMgfHwgW10sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5SWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIF1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjYXNlIFJFTU9WRV9DRUxMOiB7XG4vLyAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGFjdGlvblxuLy8gICAgICAgICAgICAgY29uc3QgeyBkYXlJZCwgY2F0ZWdvcnlOYW1lLCBjZWxsTmFtZSB9ID0gcGF5bG9hZFxuLy8gICAgICAgICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbi8vICAgICAgICAgICAgICAgICBkYXlzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzLFxuLy8gICAgICAgICAgICAgICAgICAgICBbZGF5SWRdOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdPy5jYXRlZ29yaWVzLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeU5hbWVdOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXT8uY2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsczogZGVsZXRlSXRlbShzdGF0ZT8uZGF5c1tkYXlJZF0/LmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXT8uY2VsbHMsIGNlbGxOYW1lKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgY2VsbHM6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmNlbGxzLFxuLy8gICAgICAgICAgICAgICAgICAgICBbY2VsbE5hbWVdOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uY2VsbHNbY2VsbE5hbWVdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGF5czogZGVsZXRlSXRlbShzdGF0ZT8uY2VsbHNbY2VsbE5hbWVdPy5kYXlzLCBkYXlJZClcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbi8vICAgICB9XG4vLyB9XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjBcIixcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcInRlc3RcIl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdLFxuICAgIGNlbGxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcInRlc3RcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcInRlc3RcIixcbiAgICAgICAgICAgIGRheXM6IFtcIjBcIl1cbiAgICAgICAgfVxuICAgIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2VsbFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9DRUxMOiB7XG4gICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGFjdGlvblxuICAgICAgICAgICAgY29uc3QgeyBkYXlJZCwgY2F0ZWdvcnlOYW1lLCBjZWxsTmFtZSB9ID0gcGF5bG9hZFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBkYXlzOiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzLFxuICAgICAgICAgICAgICAgICAgICB7W2RheUlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXT8uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlOYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0/LmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXT8uY2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdPy5jZWxscyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgY2VsbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmNlbGxzLFxuICAgICAgICAgICAgICAgICAgICBbY2VsbE5hbWVdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uY2VsbHNbY2VsbE5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uY2VsbHNbY2VsbE5hbWVdPy5kYXlzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheUlkXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBSRU1PVkVfQ0VMTDoge1xuICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHsgZGF5SWQsIGNhdGVnb3J5TmFtZSwgY2VsbE5hbWUgfSA9IHBheWxvYWRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF5czoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgW2RheUlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXT8uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlOYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0/LmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IGRlbGV0ZUl0ZW0oc3RhdGU/LmRheXNbZGF5SWRdPy5jYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0/LmNlbGxzLCBjZWxsTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNlbGxzOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5jZWxscyxcbiAgICAgICAgICAgICAgICAgICAgW2NlbGxOYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmNlbGxzW2NlbGxOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXM6IGRlbGV0ZUl0ZW0oc3RhdGU/LmNlbGxzW2NlbGxOYW1lXT8uZGF5cywgZGF5SWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ })

})