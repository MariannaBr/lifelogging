webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/defaultDays.js":
/*!********************************!*\
  !*** ./helpers/defaultDays.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateDefaultDays; });\nfunction generateDefaultDays(firstDay, today) {\n  for (var defaultDays = [], dt = new Date(firstDay); dt <= today; dt.setDate(dt.getDate() + 1)) {\n    defaultDays.push(new Date(dt));\n  }\n\n  var days = defaultDays.map(function (day) {\n    return day.getFullYear().toString() + \"-\" + (day.getMonth() + 1 < 10 ? \"0\" : \"\" + (day.getMonth() + 1).toString()) + \"-\" + (day.getDate() < 10 ? \"0\" : \"\" + day.getDate().toString());\n  });\n  return days;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9kZWZhdWx0RGF5cy5qcz84MjQ5Il0sIm5hbWVzIjpbImdlbmVyYXRlRGVmYXVsdERheXMiLCJmaXJzdERheSIsInRvZGF5IiwiZGVmYXVsdERheXMiLCJkdCIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInB1c2giLCJkYXlzIiwibWFwIiwiZGF5IiwiZ2V0RnVsbFllYXIiLCJ0b1N0cmluZyIsImdldE1vbnRoIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQWUsU0FBU0EsbUJBQVQsQ0FBNkJDLFFBQTdCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUN6RCxPQUFLLElBQUlDLFdBQVcsR0FBQyxFQUFoQixFQUFvQkMsRUFBRSxHQUFDLElBQUlDLElBQUosQ0FBU0osUUFBVCxDQUE1QixFQUFnREcsRUFBRSxJQUFFRixLQUFwRCxFQUEyREUsRUFBRSxDQUFDRSxPQUFILENBQVdGLEVBQUUsQ0FBQ0csT0FBSCxLQUFhLENBQXhCLENBQTNELEVBQXVGO0FBQ25GSixlQUFXLENBQUNLLElBQVosQ0FBaUIsSUFBSUgsSUFBSixDQUFTRCxFQUFULENBQWpCO0FBQ0g7O0FBQ0QsTUFBTUssSUFBSSxHQUFHTixXQUFXLENBQUNPLEdBQVosQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVVBLEdBQUcsQ0FBQ0MsV0FBSixFQUFELENBQW9CQyxRQUFwQixLQUFpQyxHQUFqQyxJQUF5Q0YsR0FBRyxDQUFDRyxRQUFKLEtBQWUsQ0FBaEIsR0FBcUIsRUFBckIsR0FBMEIsR0FBMUIsR0FBZ0MsS0FBSyxDQUFDSCxHQUFHLENBQUNHLFFBQUosS0FBZSxDQUFoQixFQUFtQkQsUUFBbkIsRUFBN0UsSUFBOEcsR0FBOUcsSUFBc0hGLEdBQUcsQ0FBQ0osT0FBSixLQUFnQixFQUFoQixHQUFxQixHQUFyQixHQUEyQixLQUFNSSxHQUFHLENBQUNKLE9BQUosRUFBRCxDQUFnQk0sUUFBaEIsRUFBdEosQ0FBVDtBQUFBLEdBQWhCLENBQWI7QUFDQSxTQUFPSixJQUFQO0FBQ0giLCJmaWxlIjoiLi9oZWxwZXJzL2RlZmF1bHREYXlzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZURlZmF1bHREYXlzKGZpcnN0RGF5LCB0b2RheSkge1xuICAgIGZvciAodmFyIGRlZmF1bHREYXlzPVtdLCBkdD1uZXcgRGF0ZShmaXJzdERheSk7IGR0PD10b2RheTsgZHQuc2V0RGF0ZShkdC5nZXREYXRlKCkrMSkpIHtcbiAgICAgICAgZGVmYXVsdERheXMucHVzaChuZXcgRGF0ZShkdCkpXG4gICAgfVxuICAgIGNvbnN0IGRheXMgPSBkZWZhdWx0RGF5cy5tYXAoKGRheSkgPT4gKGRheS5nZXRGdWxsWWVhcigpKS50b1N0cmluZygpICsgXCItXCIgKyAoKGRheS5nZXRNb250aCgpKzEpIDwgMTAgPyBcIjBcIiA6IFwiXCIgKyAoZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKSkgKyBcIi1cIiArICgoZGF5LmdldERhdGUoKSA8IDEwID8gXCIwXCIgOiBcIlwiICsgKGRheS5nZXREYXRlKCkpLnRvU3RyaW5nKCkpKSlcbiAgICByZXR1cm4gZGF5c1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/defaultDays.js\n");

/***/ })

})