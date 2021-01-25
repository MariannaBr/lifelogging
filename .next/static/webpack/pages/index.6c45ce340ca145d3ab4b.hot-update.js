webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/chartOptions.js":
/*!*********************************!*\
  !*** ./helpers/chartOptions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return chartOptions; });\nfunction chartOptions(categoryColor) {\n  var chartColor = \"\";\n\n  if (categoryColor === \"yellow\") {\n    chartColor = \"#FCD34D\";\n  } else if (categoryColor === \"red\") {\n    chartColor = \"#FCA5A5\";\n  } else if (categoryColor === \"pink\") {\n    chartColor = \"#F9A8D4\";\n  } else if (categoryColor === \"purple\") {\n    chartColor = \"#C4B5FD\";\n  } else if (categoryColor === \"indigo\") {\n    chartColor = \"#A5B4FC\";\n  } else if (categoryColor === \"blue\") {\n    chartColor = \"#93C5FD\";\n  } else if (categoryColor === \"green\") {\n    chartColor = \"#6EE7B7\";\n  } else if (categoryColor === \"gray\") {\n    chartColor = \"#D1D5DB\";\n  }\n\n  var options = {\n    chart: {\n      toolbar: {\n        show: false\n      }\n    },\n    legend: {\n      show: false\n    },\n    dataLabels: {\n      enabled: false\n    },\n    plotOptions: {\n      heatmap: {\n        radius: 100,\n        colorScale: {\n          ranges: [{\n            from: 0,\n            to: 0,\n            color: \"#F9FAFB\"\n          }, {\n            from: 1,\n            to: 2,\n            color: chartColor\n          }]\n        }\n      }\n    }\n  };\n  return options;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGFydE9wdGlvbnMuanM/ZmRmMiJdLCJuYW1lcyI6WyJjaGFydE9wdGlvbnMiLCJjYXRlZ29yeUNvbG9yIiwiY2hhcnRDb2xvciIsIm9wdGlvbnMiLCJjaGFydCIsInRvb2xiYXIiLCJzaG93IiwibGVnZW5kIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJwbG90T3B0aW9ucyIsImhlYXRtYXAiLCJyYWRpdXMiLCJjb2xvclNjYWxlIiwicmFuZ2VzIiwiZnJvbSIsInRvIiwiY29sb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZSxTQUFTQSxZQUFULENBQXNCQyxhQUF0QixFQUFxQztBQUVoRCxNQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsTUFBSUQsYUFBYSxLQUFLLFFBQXRCLEVBQWdDO0FBQzVCQyxjQUFVLEdBQUcsU0FBYjtBQUNILEdBRkQsTUFFTyxJQUFJRCxhQUFhLEtBQUssS0FBdEIsRUFBNkI7QUFDaENDLGNBQVUsR0FBRyxTQUFiO0FBQ0gsR0FGTSxNQUVBLElBQUlELGFBQWEsS0FBSyxNQUF0QixFQUE4QjtBQUNqQ0MsY0FBVSxHQUFHLFNBQWI7QUFDSCxHQUZNLE1BRUEsSUFBSUQsYUFBYSxLQUFLLFFBQXRCLEVBQWdDO0FBQ25DQyxjQUFVLEdBQUcsU0FBYjtBQUNILEdBRk0sTUFFQSxJQUFJRCxhQUFhLEtBQUssUUFBdEIsRUFBZ0M7QUFDbkNDLGNBQVUsR0FBRyxTQUFiO0FBQ0gsR0FGTSxNQUVBLElBQUlELGFBQWEsS0FBSyxNQUF0QixFQUE4QjtBQUNqQ0MsY0FBVSxHQUFHLFNBQWI7QUFDSCxHQUZNLE1BRUEsSUFBSUQsYUFBYSxLQUFLLE9BQXRCLEVBQStCO0FBQ2xDQyxjQUFVLEdBQUcsU0FBYjtBQUNILEdBRk0sTUFFQSxJQUFJRCxhQUFhLEtBQUssTUFBdEIsRUFBOEI7QUFDakNDLGNBQVUsR0FBRyxTQUFiO0FBQ0g7O0FBRUQsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFNBQUssRUFBRTtBQUNIQyxhQUFPLEVBQUU7QUFDTEMsWUFBSSxFQUFFO0FBREQ7QUFETixLQURLO0FBTVpDLFVBQU0sRUFBRTtBQUNKRCxVQUFJLEVBQUU7QUFERixLQU5JO0FBU1pFLGNBQVUsRUFBRTtBQUNSQyxhQUFPLEVBQUU7QUFERCxLQVRBO0FBWVpDLGVBQVcsRUFBRTtBQUNUQyxhQUFPLEVBQUU7QUFDTEMsY0FBTSxFQUFFLEdBREg7QUFFTEMsa0JBQVUsRUFBRTtBQUNSQyxnQkFBTSxFQUFFLENBQUM7QUFDTEMsZ0JBQUksRUFBRSxDQUREO0FBRUxDLGNBQUUsRUFBRSxDQUZDO0FBR0xDLGlCQUFLLEVBQUU7QUFIRixXQUFELEVBSUw7QUFDQ0YsZ0JBQUksRUFBRSxDQURQO0FBRUNDLGNBQUUsRUFBRSxDQUZMO0FBR0NDLGlCQUFLLEVBQUVmO0FBSFIsV0FKSztBQURBO0FBRlA7QUFEQTtBQVpELEdBQWhCO0FBNkJBLFNBQU9DLE9BQVA7QUFDSCIsImZpbGUiOiIuL2hlbHBlcnMvY2hhcnRPcHRpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhcnRPcHRpb25zKGNhdGVnb3J5Q29sb3IpIHtcbiAgICBcbiAgICBsZXQgY2hhcnRDb2xvciA9IFwiXCJcbiAgICBpZiAoY2F0ZWdvcnlDb2xvciA9PT0gXCJ5ZWxsb3dcIikge1xuICAgICAgICBjaGFydENvbG9yID0gXCIjRkNEMzREXCJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5Q29sb3IgPT09IFwicmVkXCIpIHtcbiAgICAgICAgY2hhcnRDb2xvciA9IFwiI0ZDQTVBNVwiXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcInBpbmtcIikge1xuICAgICAgICBjaGFydENvbG9yID0gXCIjRjlBOEQ0XCJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5Q29sb3IgPT09IFwicHVycGxlXCIpIHtcbiAgICAgICAgY2hhcnRDb2xvciA9IFwiI0M0QjVGRFwiXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcImluZGlnb1wiKSB7XG4gICAgICAgIGNoYXJ0Q29sb3IgPSBcIiNBNUI0RkNcIlxuICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnlDb2xvciA9PT0gXCJibHVlXCIpIHtcbiAgICAgICAgY2hhcnRDb2xvciA9IFwiIzkzQzVGRFwiXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcImdyZWVuXCIpIHtcbiAgICAgICAgY2hhcnRDb2xvciA9IFwiIzZFRTdCN1wiXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcImdyYXlcIikge1xuICAgICAgICBjaGFydENvbG9yID0gXCIjRDFENURCXCJcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgaGVhdG1hcDoge1xuICAgICAgICAgICAgICAgIHJhZGl1czogMTAwLFxuICAgICAgICAgICAgICAgIGNvbG9yU2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0Y5RkFGQlwiXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjaGFydENvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/chartOptions.js\n");

/***/ })

})