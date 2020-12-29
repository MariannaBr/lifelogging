webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Category.js":
/*!********************************!*\
  !*** ./components/Category.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"./components/Cell.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Category.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Category(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      SetIsOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    \"class\": \"relative inline-block text-left\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: function onClick() {\n          return SetIsOpen(true);\n        },\n        className: \"inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-\".concat(props.bg, \"-300 text-lg font-medium text-gray-700\\n                 hover:bg-\").concat(props.bg, \"-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300\"),\n        id: \"mood\",\n        \"aria-haspopup\": \"true\",\n        \"aria-expanded\": \"true\",\n        children: [\" \", props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"origin-top-right absolute right-0 mt-2 w-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        \"class\": \"py-1\",\n        role: \"menu\",\n        \"aria-orientation\": \"vertical\",\n        \"aria-labelledby\": \"options-menu\",\n        children: props.cells.map(function (cell) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            name: cell.name,\n            bg: props.bg\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 46\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Category, \"SAjffNT0RooRBW+54jbLAXFyYSI=\");\n\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\n\nvar _c;\n\n$RefreshReg$(_c, \"Category\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeS5qcz9jMGQ0Il0sIm5hbWVzIjpbIkNhdGVnb3J5IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsIlNldElzT3BlbiIsImJnIiwibmFtZSIsImNlbGxzIiwibWFwIiwiY2VsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFZEMsTUFGYztBQUFBLE1BRU5DLFNBRk07O0FBS3JCLHNCQUNJO0FBQUssYUFBTSxpQ0FBWDtBQUFBLDRCQUNJO0FBQUEsNkJBQ0k7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUU7QUFBQSxpQkFBS0EsU0FBUyxDQUFDLElBQUQsQ0FBZDtBQUFBLFNBQS9CO0FBQXFELGlCQUFTLHVHQUFnR0gsS0FBSyxDQUFDSSxFQUF0RywrRUFDbERKLEtBQUssQ0FBQ0ksRUFENEMsNEdBQTlEO0FBRUMsVUFBRSxFQUFDLE1BRko7QUFFVyx5QkFBYyxNQUZ6QjtBQUVnQyx5QkFBYyxNQUY5QztBQUFBLHdCQUV1REosS0FBSyxDQUFDSyxJQUY3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFpQkk7QUFBSyxlQUFNLCtDQUFYO0FBQUEsNkJBQ0k7QUFBSyxpQkFBTSxNQUFYO0FBQWtCLFlBQUksRUFBQyxNQUF2QjtBQUE4Qiw0QkFBaUIsVUFBL0M7QUFBMEQsMkJBQWdCLGNBQTFFO0FBQUEsa0JBQ0tMLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSw4QkFBSSxxRUFBQyw2Q0FBRDtBQUFNLGdCQUFJLEVBQUVBLElBQUksQ0FBQ0gsSUFBakI7QUFBdUIsY0FBRSxFQUFFTCxLQUFLLENBQUNJO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUo7QUFBQSxTQUFwQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJIOztHQTlCUUwsUTs7S0FBQUEsUTtBQWdDTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiXG5cbmZ1bmN0aW9uIENhdGVnb3J5KHByb3BzKSB7XG5cbiAgICBjb25zdCBbaXNPcGVuLCBTZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT4gU2V0SXNPcGVuKHRydWUpfSBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC00IHB5LTIgYmctJHtwcm9wcy5iZ30tMzAwIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFxuICAgICAgICAgICAgICAgICBob3ZlcjpiZy0ke3Byb3BzLmJnfS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktMTAwIGZvY3VzOnJpbmctZ3JheS0zMDBgfVxuICAgICAgICAgICAgICAgICBpZD1cIm1vb2RcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCI+IHtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICB7LyogRHJvcGRvd24gcGFuZWwsIHNob3cvaGlkZSBiYXNlZCBvbiBkcm9wZG93biBzdGF0ZS5cblxuICAgIEVudGVyaW5nOiBcInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcbiAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcbiAgICBMZWF2aW5nOiBcInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXG4gICAgICBGcm9tOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgVG86IFwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiICovfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB5LTFcIiByb2xlPVwibWVudVwiIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIGFyaWEtbGFiZWxsZWRieT1cIm9wdGlvbnMtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2VsbHMubWFwKGNlbGwgPT4gPENlbGwgbmFtZT17Y2VsbC5uYW1lfSBiZz17cHJvcHMuYmd9Lz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Category.js\n");

/***/ })

})