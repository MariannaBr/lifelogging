webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Category.js":
/*!********************************!*\
  !*** ./components/Category.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cell */ \"./components/Cell.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/selectors */ \"./redux/selectors.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions.js\");\n\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Category.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction Category(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isOpen = _useState[0],\n      SetIsOpen = _useState[1];\n\n  isOpen && props.addCategory(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"relative inline-block text-left\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: function onClick() {\n          return SetIsOpen(!isOpen);\n        },\n        className: \"inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-\".concat(props.bg, \"-300 text-lg font-medium text-gray-700\\n                 hover:bg-\").concat(props.bg, \"-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300\"),\n        id: \"mood\",\n        \"aria-haspopup\": \"true\",\n        \"aria-expanded\": \"true\",\n        children: [\" \", props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"origin-top-right absolute right-0 mt-2 w-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"py-1\",\n        role: \"menu\",\n        \"aria-orientation\": \"vertical\",\n        \"aria-labelledby\": \"options-menu\",\n        children: props.cells.map(function (cell) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            name: cell.name,\n            bg: props.bg\n          }, cell.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 46\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 24\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n} // const mapStateToProps = state => {\n//     const {cell, cells} = state.cellsList || {}\n//     const cellsList = cells ? cells.map(name => (cell ? {...cell[name], name} : null)) : null\n//     return {cellsList}\n// }\n\n\n_s(Category, \"SAjffNT0RooRBW+54jbLAXFyYSI=\");\n\n_c = Category;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var _ref = state.categoryList || {},\n      category = _ref.category,\n      categories = _ref.categories;\n\n  var categoryList = categories ? categories.map(function (name) {\n    return category ? _objectSpread(_objectSpread({}, category[name]), {}, {\n      name: name\n    }) : null;\n  }) : null;\n  return {\n    categoryList: categoryList\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(null, mapStateToProps)(Category)); //export default connect(state => ({cells: getCells(state)}))(Category)\n//export default Category\n\nvar _c;\n\n$RefreshReg$(_c, \"Category\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeS5qcz9jMGQ0Il0sIm5hbWVzIjpbIkNhdGVnb3J5IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsIlNldElzT3BlbiIsImFkZENhdGVnb3J5IiwiYmciLCJuYW1lIiwiY2VsbHMiLCJtYXAiLCJjZWxsIiwiaWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFZEMsTUFGYztBQUFBLE1BRU5DLFNBRk07O0FBSXJCRCxRQUFNLElBQUlGLEtBQUssQ0FBQ0ksV0FBTixDQUFrQkosS0FBbEIsQ0FBVjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRTtBQUFBLGlCQUFLRyxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFkO0FBQUEsU0FBL0I7QUFBd0QsaUJBQVMsdUdBQWdHRixLQUFLLENBQUNLLEVBQXRHLCtFQUNyREwsS0FBSyxDQUFDSyxFQUQrQyw0R0FBakU7QUFFQyxVQUFFLEVBQUMsTUFGSjtBQUVXLHlCQUFjLE1BRnpCO0FBRWdDLHlCQUFjLE1BRjlDO0FBQUEsd0JBRXVETCxLQUFLLENBQUNNLElBRjdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQWdCS0osTUFBTSxpQkFBSTtBQUFLLGVBQVMsRUFBQywrQ0FBZjtBQUFBLDZCQUNQO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLFlBQUksRUFBQyxNQUEzQjtBQUFrQyw0QkFBaUIsVUFBbkQ7QUFBOEQsMkJBQWdCLGNBQTlFO0FBQUEsa0JBQ0tGLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSw4QkFBSSxxRUFBQyw2Q0FBRDtBQUFvQixnQkFBSSxFQUFFQSxJQUFJLENBQUNILElBQS9CO0FBQXFDLGNBQUUsRUFBRU4sS0FBSyxDQUFDSztBQUEvQyxhQUFXSSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQUFwQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FwQ1NYLFE7O0tBQUFBLFE7O0FBc0NULElBQU1ZLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsYUFDRUEsS0FBSyxDQUFDQyxZQUFOLElBQXNCLEVBRHhCO0FBQUEsTUFDdEJDLFFBRHNCLFFBQ3RCQSxRQURzQjtBQUFBLE1BQ1pDLFVBRFksUUFDWkEsVUFEWTs7QUFFN0IsTUFBTUYsWUFBWSxHQUFHRSxVQUFVLEdBQUdBLFVBQVUsQ0FBQ1AsR0FBWCxDQUFlLFVBQUFGLElBQUk7QUFBQSxXQUFLUSxRQUFRLG1DQUFPQSxRQUFRLENBQUNSLElBQUQsQ0FBZjtBQUF1QkEsVUFBSSxFQUFKQTtBQUF2QixTQUErQixJQUE1QztBQUFBLEdBQW5CLENBQUgsR0FBMkUsSUFBMUc7QUFDQSxTQUFPO0FBQUNPLGdCQUFZLEVBQVpBO0FBQUQsR0FBUDtBQUNILENBSkQ7O0FBTWVHLDBIQUFPLENBQUMsSUFBRCxFQUFPTCxlQUFQLENBQVAsQ0FBK0JaLFFBQS9CLENBQWYsRSxDQUNBO0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGdldENlbGxzIH0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiXG5pbXBvcnQgeyBhZGRDYXRlZ29yeSB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCJcbmltcG9ydCB7IGFkZERheSB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCJcblxuZnVuY3Rpb24gQ2F0ZWdvcnkocHJvcHMpIHtcblxuICAgIGNvbnN0IFtpc09wZW4sIFNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGlzT3BlbiAmJiBwcm9wcy5hZGRDYXRlZ29yeShwcm9wcylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+IFNldElzT3BlbighaXNPcGVuKX0gY2xhc3NOYW1lPXtgaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctc20gcHgtNCBweS0yIGJnLSR7cHJvcHMuYmd9LTMwMCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcbiAgICAgICAgICAgICAgICAgaG92ZXI6YmctJHtwcm9wcy5iZ30tMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTEwMCBmb2N1czpyaW5nLWdyYXktMzAwYH1cbiAgICAgICAgICAgICAgICAgaWQ9XCJtb29kXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPiB7cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgey8qIERyb3Bkb3duIHBhbmVsLCBzaG93L2hpZGUgYmFzZWQgb24gZHJvcGRvd24gc3RhdGUuXG5cbiAgICBFbnRlcmluZzogXCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXG4gICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgVG86IFwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgTGVhdmluZzogXCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxuICAgICAgRnJvbTogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIiAqL31cbiAgICAgICAgICAgIHtpc09wZW4gJiYgPGRpdiBjbGFzc05hbWU9XCJvcmlnaW4tdG9wLXJpZ2h0IGFic29sdXRlIHJpZ2h0LTAgbXQtMiB3LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTFcIiByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGFyaWEtbGFiZWxsZWRieT1cIm9wdGlvbnMtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2VsbHMubWFwKGNlbGwgPT4gPENlbGwga2V5PXtjZWxsLmlkfSBuYW1lPXtjZWxsLm5hbWV9IGJnPXtwcm9wcy5iZ30vPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuLy8gICAgIGNvbnN0IHtjZWxsLCBjZWxsc30gPSBzdGF0ZS5jZWxsc0xpc3QgfHwge31cbi8vICAgICBjb25zdCBjZWxsc0xpc3QgPSBjZWxscyA/IGNlbGxzLm1hcChuYW1lID0+IChjZWxsID8gey4uLmNlbGxbbmFtZV0sIG5hbWV9IDogbnVsbCkpIDogbnVsbFxuLy8gICAgIHJldHVybiB7Y2VsbHNMaXN0fVxuLy8gfVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gICAgY29uc3Qge2NhdGVnb3J5LCBjYXRlZ29yaWVzfSA9IHN0YXRlLmNhdGVnb3J5TGlzdCB8fCB7fVxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGNhdGVnb3JpZXMgPyBjYXRlZ29yaWVzLm1hcChuYW1lID0+IChjYXRlZ29yeSA/IHsuLi5jYXRlZ29yeVtuYW1lXSwgbmFtZX0gOiBudWxsKSkgOiBudWxsXG4gICAgcmV0dXJuIHtjYXRlZ29yeUxpc3R9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwU3RhdGVUb1Byb3BzKShDYXRlZ29yeSlcbi8vZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoe2NlbGxzOiBnZXRDZWxscyhzdGF0ZSl9KSkoQ2F0ZWdvcnkpXG5cbi8vZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Category.js\n");

/***/ })

})