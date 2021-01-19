webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Category.js":
/*!********************************!*\
  !*** ./components/Category.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"./components/Cell.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/selectors */ \"./redux/selectors.js\");\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ \"./redux/actions.js\");\n/* harmony import */ var _helpers_todayDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/todayDate */ \"./helpers/todayDate.js\");\n\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/Category.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar selectCategories = function selectCategories(state) {\n  return state.categories;\n};\n\nfunction Category(props) {\n  _s();\n\n  var _this = this;\n\n  var Categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(selectCategories);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isOpen = _useState[0],\n      SetIsOpen = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  function HandleClick() {\n    SetIsOpen(!isOpen);\n  }\n\n  function CellSelected(cellName, selected) {\n    dispatch(selected ? Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__[\"addCell\"])(Object(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), props.name, cellName) : Object(_redux_actions__WEBPACK_IMPORTED_MODULE_5__[\"removeCell\"])(Object(_helpers_todayDate__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), props.name, cellName));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative inline-block text-left\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: HandleClick,\n        className: \"inline-flex justify-center w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-\".concat(props.bg, \"-300 text-lg font-medium text-gray-700\\n                 hover:bg-\").concat(props.bg, \"-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300\"),\n        id: props.id,\n        \"aria-haspopup\": \"true\",\n        \"aria-expanded\": \"true\",\n        children: [\" \", props.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"origin-top-right absolute right-0 mt-2 w-auto\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"py-1\",\n        role: \"menu\",\n        \"aria-orientation\": \"vertical\",\n        \"aria-labelledby\": \"options-menu\",\n        children: props.cells.map(function (cell) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: props.id,\n            name: cell.name,\n            bg: props.bg,\n            selected: CellSelected\n          }, cell.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 46\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 24\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Category, \"EfsiKGKAbHreqn4XKWX7sFNeRvY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n});\n\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\n\nvar _c;\n\n$RefreshReg$(_c, \"Category\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXRlZ29yeS5qcz9jMGQ0Il0sIm5hbWVzIjpbInNlbGVjdENhdGVnb3JpZXMiLCJzdGF0ZSIsImNhdGVnb3JpZXMiLCJDYXRlZ29yeSIsInByb3BzIiwiQ2F0ZWdvcmllcyIsInVzZVNlbGVjdG9yIiwidXNlU3RhdGUiLCJpc09wZW4iLCJTZXRJc09wZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiSGFuZGxlQ2xpY2siLCJDZWxsU2VsZWN0ZWQiLCJjZWxsTmFtZSIsInNlbGVjdGVkIiwiYWRkQ2VsbCIsImdldERhdGUiLCJuYW1lIiwicmVtb3ZlQ2VsbCIsImJnIiwiaWQiLCJjZWxscyIsIm1hcCIsImNlbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxVQUFWO0FBQUEsQ0FBOUI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFFckIsTUFBTUMsVUFBVSxHQUFHQywrREFBVyxDQUFDTixnQkFBRCxDQUE5Qjs7QUFGcUIsa0JBR09PLHNEQUFRLENBQUMsS0FBRCxDQUhmO0FBQUEsTUFHZEMsTUFIYztBQUFBLE1BR05DLFNBSE07O0FBSXJCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsV0FBU0MsV0FBVCxHQUF1QjtBQUNuQkgsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNIOztBQUVELFdBQVNLLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN0Q0wsWUFBUSxDQUFDSyxRQUFRLEdBQUdDLDhEQUFPLENBQUNDLGtFQUFPLEVBQVIsRUFBWWIsS0FBSyxDQUFDYyxJQUFsQixFQUF3QkosUUFBeEIsQ0FBVixHQUE4Q0ssaUVBQVUsQ0FBQ0Ysa0VBQU8sRUFBUixFQUFZYixLQUFLLENBQUNjLElBQWxCLEVBQXdCSixRQUF4QixDQUFqRSxDQUFSO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFRixXQUEvQjtBQUE0QyxpQkFBUyx1R0FBZ0dSLEtBQUssQ0FBQ2dCLEVBQXRHLCtFQUN6Q2hCLEtBQUssQ0FBQ2dCLEVBRG1DLDRHQUFyRDtBQUVDLFVBQUUsRUFBRWhCLEtBQUssQ0FBQ2lCLEVBRlg7QUFFZSx5QkFBYyxNQUY3QjtBQUVvQyx5QkFBYyxNQUZsRDtBQUFBLHdCQUUyRGpCLEtBQUssQ0FBQ2MsSUFGakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBZ0JLVixNQUFNLGlCQUFJO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsNkJBQ1A7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsWUFBSSxFQUFDLE1BQTNCO0FBQWtDLDRCQUFpQixVQUFuRDtBQUE4RCwyQkFBZ0IsY0FBOUU7QUFBQSxrQkFDS0osS0FBSyxDQUFDa0IsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSw4QkFBSSxxRUFBQyw2Q0FBRDtBQUFvQixjQUFFLEVBQUVwQixLQUFLLENBQUNpQixFQUE5QjtBQUFrQyxnQkFBSSxFQUFFRyxJQUFJLENBQUNOLElBQTdDO0FBQW1ELGNBQUUsRUFBRWQsS0FBSyxDQUFDZ0IsRUFBN0Q7QUFBaUUsb0JBQVEsRUFBRVA7QUFBM0UsYUFBV1csSUFBSSxDQUFDSCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFKO0FBQUEsU0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDs7R0F0Q1FsQixRO1VBRWNHLHVELEVBRUZLLHVEOzs7S0FKWlIsUTtBQXdDTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IGdldENlbGxzIH0gZnJvbSBcIi4uL3JlZHV4L3NlbGVjdG9yc1wiXG5pbXBvcnQgeyBhZGRDZWxsLCByZW1vdmVDZWxsIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IGdldERhdGUgZnJvbSBcIi4uL2hlbHBlcnMvdG9kYXlEYXRlXCJcblxuXG5jb25zdCBzZWxlY3RDYXRlZ29yaWVzID0gc3RhdGUgPT4gc3RhdGUuY2F0ZWdvcmllc1xuXG5mdW5jdGlvbiBDYXRlZ29yeShwcm9wcykge1xuXG4gICAgY29uc3QgQ2F0ZWdvcmllcyA9IHVzZVNlbGVjdG9yKHNlbGVjdENhdGVnb3JpZXMpXG4gICAgY29uc3QgW2lzT3BlbiwgU2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgZnVuY3Rpb24gSGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIFNldElzT3BlbighaXNPcGVuKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBDZWxsU2VsZWN0ZWQoY2VsbE5hbWUsIHNlbGVjdGVkKSB7XG4gICAgICAgIGRpc3BhdGNoKHNlbGVjdGVkID8gYWRkQ2VsbChnZXREYXRlKCksIHByb3BzLm5hbWUsIGNlbGxOYW1lKSA6IHJlbW92ZUNlbGwoZ2V0RGF0ZSgpLCBwcm9wcy5uYW1lLCBjZWxsTmFtZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e0hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1zbSBweC00IHB5LTIgYmctJHtwcm9wcy5iZ30tMzAwIHRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFxuICAgICAgICAgICAgICAgICBob3ZlcjpiZy0ke3Byb3BzLmJnfS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktMTAwIGZvY3VzOnJpbmctZ3JheS0zMDBgfVxuICAgICAgICAgICAgICAgICBpZD17cHJvcHMuaWR9IGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cInRydWVcIj4ge3Byb3BzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgIHsvKiBEcm9wZG93biBwYW5lbCwgc2hvdy9oaWRlIGJhc2VkIG9uIGRyb3Bkb3duIHN0YXRlLlxuXG4gICAgRW50ZXJpbmc6IFwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxuICAgICAgRnJvbTogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgIFRvOiBcInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgIExlYXZpbmc6IFwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1XCJcbiAgICAgIEZyb206IFwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICBUbzogXCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCIgKi99XG4gICAgICAgICAgICB7aXNPcGVuICYmIDxkaXYgY2xhc3NOYW1lPVwib3JpZ2luLXRvcC1yaWdodCBhYnNvbHV0ZSByaWdodC0wIG10LTIgdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xXCIgcm9sZT1cIm1lbnVcIiBhcmlhLW9yaWVudGF0aW9uPVwidmVydGljYWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJvcHRpb25zLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNlbGxzLm1hcChjZWxsID0+IDxDZWxsIGtleT17Y2VsbC5pZH0gaWQ9e3Byb3BzLmlkfSBuYW1lPXtjZWxsLm5hbWV9IGJnPXtwcm9wcy5iZ30gc2VsZWN0ZWQ9e0NlbGxTZWxlY3RlZH0gLz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Category.js\n");

/***/ })

})