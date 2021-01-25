webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/cellReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/cellReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cellReducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actionTypes */ \"./redux/actionTypes.js\");\n/* harmony import */ var _helpers_deleteItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/deleteItem */ \"./helpers/deleteItem.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  days: {\n    \"2020-10-1\": {\n      id: \"2020-10-1\",\n      categories: {\n        \"mood\": {\n          id: \"mood\",\n          cells: [\"happy\", \"motivated\"]\n        },\n        \"food\": {\n          id: \"food\",\n          cells: [\"pasta\", \"bread\"]\n        }\n      }\n    },\n    \"2021-1-21\": {\n      id: \"2021-1-21\",\n      categories: {\n        \"mood\": {\n          id: \"mood\",\n          cells: [\"happy\", \"fine\"]\n        },\n        \"food\": {\n          id: \"food\",\n          cells: [\"potatoes\", \"bread\"]\n        }\n      }\n    }\n  }\n};\nfunction cellReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"ADD_CELL\"]:\n      {\n        var _state$days$dayId, _state$days$dayId2, _state$days$dayId3, _state$days$dayId3$ca;\n\n        var payload = action.payload;\n        var dayId = payload.dayId,\n            categoryName = payload.categoryName,\n            cellName = payload.cellName;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, dayId, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[dayId]), {}, {\n            id: dayId,\n            categories: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$dayId = state.days[dayId]) === null || _state$days$dayId === void 0 ? void 0 : _state$days$dayId.categories), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, categoryName, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$dayId2 = state.days[dayId]) === null || _state$days$dayId2 === void 0 ? void 0 : _state$days$dayId2.categories[categoryName]), {}, {\n              id: categoryName,\n              cells: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((state === null || state === void 0 ? void 0 : (_state$days$dayId3 = state.days[dayId]) === null || _state$days$dayId3 === void 0 ? void 0 : (_state$days$dayId3$ca = _state$days$dayId3.categories[categoryName]) === null || _state$days$dayId3$ca === void 0 ? void 0 : _state$days$dayId3$ca.cells) || []), [cellName])\n            })))\n          })))\n        });\n      }\n\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_CELL\"]:\n      {\n        var _state$days$_dayId, _state$days$_dayId2, _state$days$_dayId3, _state$days$_dayId3$c;\n\n        var _payload = action.payload;\n        var _dayId = _payload.dayId,\n            _categoryName = _payload.categoryName,\n            _cellName = _payload.cellName;\n        return _objectSpread(_objectSpread({}, state), {}, {\n          days: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _dayId, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : state.days[_dayId]), {}, {\n            categories: _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$_dayId = state.days[_dayId]) === null || _state$days$_dayId === void 0 ? void 0 : _state$days$_dayId.categories), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, _categoryName, _objectSpread(_objectSpread({}, state === null || state === void 0 ? void 0 : (_state$days$_dayId2 = state.days[_dayId]) === null || _state$days$_dayId2 === void 0 ? void 0 : _state$days$_dayId2.categories[_categoryName]), {}, {\n              cells: Object(_helpers_deleteItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === null || state === void 0 ? void 0 : (_state$days$_dayId3 = state.days[_dayId]) === null || _state$days$_dayId3 === void 0 ? void 0 : (_state$days$_dayId3$c = _state$days$_dayId3.categories[_categoryName]) === null || _state$days$_dayId3$c === void 0 ? void 0 : _state$days$_dayId3$c.cells, _cellName)\n            })))\n          })))\n        });\n      }\n\n    default:\n      return state;\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvY2VsbFJlZHVjZXIuanM/MjFiNiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJkYXlzIiwiaWQiLCJjYXRlZ29yaWVzIiwiY2VsbHMiLCJjZWxsUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9DRUxMIiwicGF5bG9hZCIsImRheUlkIiwiY2F0ZWdvcnlOYW1lIiwiY2VsbE5hbWUiLCJSRU1PVkVfQ0VMTCIsImRlbGV0ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxNQUFJLEVBQUU7QUFDRixpQkFBYTtBQUNUQyxRQUFFLEVBQUUsV0FESztBQUVUQyxnQkFBVSxFQUFFO0FBQ1IsZ0JBQVE7QUFDSkQsWUFBRSxFQUFFLE1BREE7QUFFSkUsZUFBSyxFQUFFLENBQUMsT0FBRCxFQUFVLFdBQVY7QUFGSCxTQURBO0FBS1IsZ0JBQVE7QUFDSkYsWUFBRSxFQUFFLE1BREE7QUFFSkUsZUFBSyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVY7QUFGSDtBQUxBO0FBRkgsS0FEWDtBQWNGLGlCQUFhO0FBQ1RGLFFBQUUsRUFBRSxXQURLO0FBRVRDLGdCQUFVLEVBQUU7QUFDUixnQkFBUTtBQUNKRCxZQUFFLEVBQUUsTUFEQTtBQUVKRSxlQUFLLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVjtBQUZILFNBREE7QUFLUixnQkFBUTtBQUNKRixZQUFFLEVBQUUsTUFEQTtBQUVKRSxlQUFLLEVBQUUsQ0FBQyxVQUFELEVBQWEsT0FBYjtBQUZIO0FBTEE7QUFGSDtBQWRYO0FBRFcsQ0FBckI7QUErQmUsU0FBU0MsV0FBVCxHQUFtRDtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJOLFlBQXNCO0FBQUEsTUFBUk8sTUFBUTs7QUFDOUQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MscURBQUw7QUFBZTtBQUFBOztBQUFBLFlBQ0hDLE9BREcsR0FDU0gsTUFEVCxDQUNIRyxPQURHO0FBQUEsWUFFSEMsS0FGRyxHQUUrQkQsT0FGL0IsQ0FFSEMsS0FGRztBQUFBLFlBRUlDLFlBRkosR0FFK0JGLE9BRi9CLENBRUlFLFlBRko7QUFBQSxZQUVrQkMsUUFGbEIsR0FFK0JILE9BRi9CLENBRWtCRyxRQUZsQjtBQUdYLCtDQUNPUCxLQURQO0FBRUlMLGNBQUksa0NBQ0dLLEtBREgsYUFDR0EsS0FESCx1QkFDR0EsS0FBSyxDQUFFTCxJQURWLHFHQUVDVSxLQUZELGtDQUdPTCxLQUhQLGFBR09BLEtBSFAsdUJBR09BLEtBQUssQ0FBRUwsSUFBUCxDQUFZVSxLQUFaLENBSFA7QUFJSVQsY0FBRSxFQUFFUyxLQUpSO0FBS0lSLHNCQUFVLGtDQUNIRyxLQURHLGFBQ0hBLEtBREcsNENBQ0hBLEtBQUssQ0FBRUwsSUFBUCxDQUFZVSxLQUFaLENBREcsc0RBQ0gsa0JBQW9CUixVQURqQixxR0FFTFMsWUFGSyxrQ0FHQ04sS0FIRCxhQUdDQSxLQUhELDZDQUdDQSxLQUFLLENBQUVMLElBQVAsQ0FBWVUsS0FBWixDQUhELHVEQUdDLG1CQUFvQlIsVUFBcEIsQ0FBK0JTLFlBQS9CLENBSEQ7QUFJRlYsZ0JBQUUsRUFBRVUsWUFKRjtBQUtGUixtQkFBSyx5R0FDRSxDQUFBRSxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLGtDQUFBQSxLQUFLLENBQUVMLElBQVAsQ0FBWVUsS0FBWixvR0FBb0JSLFVBQXBCLENBQStCUyxZQUEvQixpRkFBOENSLEtBQTlDLEtBQXVELEVBRHpELElBRURTLFFBRkM7QUFMSDtBQUxkO0FBRlI7QUFxQkg7O0FBQ0QsU0FBS0Msd0RBQUw7QUFBa0I7QUFBQTs7QUFBQSxZQUNOSixRQURNLEdBQ01ILE1BRE4sQ0FDTkcsT0FETTtBQUFBLFlBRU5DLE1BRk0sR0FFNEJELFFBRjVCLENBRU5DLEtBRk07QUFBQSxZQUVDQyxhQUZELEdBRTRCRixRQUY1QixDQUVDRSxZQUZEO0FBQUEsWUFFZUMsU0FGZixHQUU0QkgsUUFGNUIsQ0FFZUcsUUFGZjtBQUdkLCtDQUNPUCxLQURQO0FBRUlMLGNBQUksa0NBQ0dLLEtBREgsYUFDR0EsS0FESCx1QkFDR0EsS0FBSyxDQUFFTCxJQURWLHFHQUVDVSxNQUZELGtDQUdPTCxLQUhQLGFBR09BLEtBSFAsdUJBR09BLEtBQUssQ0FBRUwsSUFBUCxDQUFZVSxNQUFaLENBSFA7QUFJSVIsc0JBQVUsa0NBQ0hHLEtBREcsYUFDSEEsS0FERyw2Q0FDSEEsS0FBSyxDQUFFTCxJQUFQLENBQVlVLE1BQVosQ0FERyx1REFDSCxtQkFBb0JSLFVBRGpCLHFHQUVMUyxhQUZLLGtDQUdDTixLQUhELGFBR0NBLEtBSEQsOENBR0NBLEtBQUssQ0FBRUwsSUFBUCxDQUFZVSxNQUFaLENBSEQsd0RBR0Msb0JBQW9CUixVQUFwQixDQUErQlMsYUFBL0IsQ0FIRDtBQUlGUixtQkFBSyxFQUFFVyxtRUFBVSxDQUFDVCxLQUFELGFBQUNBLEtBQUQsOENBQUNBLEtBQUssQ0FBRUwsSUFBUCxDQUFZVSxNQUFaLENBQUQsaUZBQUMsb0JBQW9CUixVQUFwQixDQUErQlMsYUFBL0IsQ0FBRCwwREFBQyxzQkFBOENSLEtBQS9DLEVBQXNEUyxTQUF0RDtBQUpmO0FBSmQ7QUFGUjtBQWdCSDs7QUFFRDtBQUNJLGFBQU9QLEtBQVA7QUFoRFI7QUFrREgiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9jZWxsUmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFERF9DRUxMLCBSRU1PVkVfQ0VMTCB9IGZyb20gXCIuLi9hY3Rpb25UeXBlc1wiXG5pbXBvcnQgZGVsZXRlSXRlbSBmcm9tIFwiLi4vLi4vaGVscGVycy9kZWxldGVJdGVtXCJcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGRheXM6IHtcbiAgICAgICAgXCIyMDIwLTEwLTFcIjoge1xuICAgICAgICAgICAgaWQ6IFwiMjAyMC0xMC0xXCIsXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgXCJtb29kXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwibW9vZFwiLFxuICAgICAgICAgICAgICAgICAgICBjZWxsczogW1wiaGFwcHlcIiwgXCJtb3RpdmF0ZWRcIl1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZm9vZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImZvb2RcIixcbiAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcInBhc3RhXCIsIFwiYnJlYWRcIl1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiMjAyMS0xLTIxXCI6IHtcbiAgICAgICAgICAgIGlkOiBcIjIwMjEtMS0yMVwiLFxuICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgIFwibW9vZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm1vb2RcIixcbiAgICAgICAgICAgICAgICAgICAgY2VsbHM6IFtcImhhcHB5XCIsIFwiZmluZVwiXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmb29kXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZm9vZFwiLFxuICAgICAgICAgICAgICAgICAgICBjZWxsczogW1wicG90YXRvZXNcIiwgXCJicmVhZFwiXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2VsbFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9DRUxMOiB7XG4gICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGFjdGlvblxuICAgICAgICAgICAgY29uc3QgeyBkYXlJZCwgY2F0ZWdvcnlOYW1lLCBjZWxsTmFtZSB9ID0gcGF5bG9hZFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBkYXlzOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzLFxuICAgICAgICAgICAgICAgICAgICBbZGF5SWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZGF5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdPy5jYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeU5hbWVdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXT8uY2F0ZWdvcmllc1tjYXRlZ29yeU5hbWVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdPy5jYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0/LmNlbGxzIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBSRU1PVkVfQ0VMTDoge1xuICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBhY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHsgZGF5SWQsIGNhdGVnb3J5TmFtZSwgY2VsbE5hbWUgfSA9IHBheWxvYWRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF5czoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5cyxcbiAgICAgICAgICAgICAgICAgICAgW2RheUlkXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGU/LmRheXNbZGF5SWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlPy5kYXlzW2RheUlkXT8uY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlOYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZT8uZGF5c1tkYXlJZF0/LmNhdGVnb3JpZXNbY2F0ZWdvcnlOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHM6IGRlbGV0ZUl0ZW0oc3RhdGU/LmRheXNbZGF5SWRdPy5jYXRlZ29yaWVzW2NhdGVnb3J5TmFtZV0/LmNlbGxzLCBjZWxsTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/cellReducer.js\n");

/***/ })

})