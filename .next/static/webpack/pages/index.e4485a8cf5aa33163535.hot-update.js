webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/chartOptions.js":
/*!*********************************!*\
  !*** ./helpers/chartOptions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return chartOptions; });\nfunction chartOptions(categoryColor) {\n  function getColor(categoryColor) {\n    var chartColor = \"\";\n\n    if (categoryColor === \"yellow\") {\n      chartColor = \"#FCD34D\";\n    } else if (categoryColor === \"red\") {\n      chartColor = \"#FCA5A5\";\n    } else if (categoryColor === \"pink\") {\n      chartColor = \"#F9A8D4\";\n    } else if (categoryColor === \"purple\") {\n      chartColor = \"#C4B5FD\";\n    } else if (categoryColor === \"indigo\") {\n      chartColor = \"#A5B4FC\";\n    } else if (categoryColor === \"blue\") {\n      chartColor = \"#93C5FD\";\n    } else if (categoryColor === \"green\") {\n      chartColor = \"#6EE7B7\";\n    } else if (categoryColor === \"gray\") {\n      chartColor = \"#D1D5DB\";\n    }\n  }\n\n  var options = {\n    chart: {\n      toolbar: {\n        show: false\n      }\n    },\n    legend: {\n      show: true\n    },\n    dataLabels: {\n      enabled: false\n    },\n    plotOptions: {\n      heatmap: {\n        radius: 100,\n        colorScale: {\n          ranges: [{\n            from: 0,\n            to: 0,\n            color: \"#F9FAFB\"\n          }, {\n            from: 1,\n            to: 2,\n            color: \"#FDE68A\"\n          }]\n        }\n      }\n    }\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGFydE9wdGlvbnMuanM/ZmRmMiJdLCJuYW1lcyI6WyJjaGFydE9wdGlvbnMiLCJjYXRlZ29yeUNvbG9yIiwiZ2V0Q29sb3IiLCJjaGFydENvbG9yIiwib3B0aW9ucyIsImNoYXJ0IiwidG9vbGJhciIsInNob3ciLCJsZWdlbmQiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInBsb3RPcHRpb25zIiwiaGVhdG1hcCIsInJhZGl1cyIsImNvbG9yU2NhbGUiLCJyYW5nZXMiLCJmcm9tIiwidG8iLCJjb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLGFBQXRCLEVBQXFDO0FBRWhELFdBQVNDLFFBQVQsQ0FBa0JELGFBQWxCLEVBQWlDO0FBQzdCLFFBQUlFLFVBQVUsR0FBRyxFQUFqQjs7QUFDQSxRQUFJRixhQUFhLEtBQUssUUFBdEIsRUFBZ0M7QUFDNUJFLGdCQUFVLEdBQUcsU0FBYjtBQUNILEtBRkQsTUFFTyxJQUFJRixhQUFhLEtBQUssS0FBdEIsRUFBNkI7QUFDaENFLGdCQUFVLEdBQUcsU0FBYjtBQUNILEtBRk0sTUFFQSxJQUFJRixhQUFhLEtBQUssTUFBdEIsRUFBOEI7QUFDakNFLGdCQUFVLEdBQUcsU0FBYjtBQUNILEtBRk0sTUFFQSxJQUFJRixhQUFhLEtBQUssUUFBdEIsRUFBZ0M7QUFDbkNFLGdCQUFVLEdBQUcsU0FBYjtBQUNILEtBRk0sTUFFQSxJQUFJRixhQUFhLEtBQUssUUFBdEIsRUFBZ0M7QUFDbkNFLGdCQUFVLEdBQUcsU0FBYjtBQUNILEtBRk0sTUFFQSxJQUFJRixhQUFhLEtBQUssTUFBdEIsRUFBOEI7QUFDakNFLGdCQUFVLEdBQUcsU0FBYjtBQUNILEtBRk0sTUFFQSxJQUFJRixhQUFhLEtBQUssT0FBdEIsRUFBK0I7QUFDbENFLGdCQUFVLEdBQUcsU0FBYjtBQUNILEtBRk0sTUFFQSxJQUFJRixhQUFhLEtBQUssTUFBdEIsRUFBOEI7QUFDakNFLGdCQUFVLEdBQUcsU0FBYjtBQUNIO0FBQ0o7O0FBRUQsTUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFNBQUssRUFBRTtBQUNIQyxhQUFPLEVBQUU7QUFDTEMsWUFBSSxFQUFFO0FBREQ7QUFETixLQURLO0FBTVpDLFVBQU0sRUFBRTtBQUNKRCxVQUFJLEVBQUU7QUFERixLQU5JO0FBU1pFLGNBQVUsRUFBRTtBQUNSQyxhQUFPLEVBQUU7QUFERCxLQVRBO0FBWVpDLGVBQVcsRUFBRTtBQUNUQyxhQUFPLEVBQUU7QUFDTEMsY0FBTSxFQUFFLEdBREg7QUFFTEMsa0JBQVUsRUFBRTtBQUNSQyxnQkFBTSxFQUFFLENBQUM7QUFDTEMsZ0JBQUksRUFBRSxDQUREO0FBRUxDLGNBQUUsRUFBRSxDQUZDO0FBR0xDLGlCQUFLLEVBQUU7QUFIRixXQUFELEVBSUw7QUFDQ0YsZ0JBQUksRUFBRSxDQURQO0FBRUNDLGNBQUUsRUFBRSxDQUZMO0FBR0NDLGlCQUFLLEVBQUU7QUFIUixXQUpLO0FBREE7QUFGUDtBQURBO0FBWkQsR0FBaEI7QUE2QkgiLCJmaWxlIjoiLi9oZWxwZXJzL2NoYXJ0T3B0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXJ0T3B0aW9ucyhjYXRlZ29yeUNvbG9yKSB7XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3IoY2F0ZWdvcnlDb2xvcikge1xuICAgICAgICBsZXQgY2hhcnRDb2xvciA9IFwiXCJcbiAgICAgICAgaWYgKGNhdGVnb3J5Q29sb3IgPT09IFwieWVsbG93XCIpIHtcbiAgICAgICAgICAgIGNoYXJ0Q29sb3IgPSBcIiNGQ0QzNERcIlxuICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5Q29sb3IgPT09IFwicmVkXCIpIHtcbiAgICAgICAgICAgIGNoYXJ0Q29sb3IgPSBcIiNGQ0E1QTVcIlxuICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5Q29sb3IgPT09IFwicGlua1wiKSB7XG4gICAgICAgICAgICBjaGFydENvbG9yID0gXCIjRjlBOEQ0XCJcbiAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcInB1cnBsZVwiKSB7XG4gICAgICAgICAgICBjaGFydENvbG9yID0gXCIjQzRCNUZEXCJcbiAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcImluZGlnb1wiKSB7XG4gICAgICAgICAgICBjaGFydENvbG9yID0gXCIjQTVCNEZDXCJcbiAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcImJsdWVcIikge1xuICAgICAgICAgICAgY2hhcnRDb2xvciA9IFwiIzkzQzVGRFwiXG4gICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnlDb2xvciA9PT0gXCJncmVlblwiKSB7XG4gICAgICAgICAgICBjaGFydENvbG9yID0gXCIjNkVFN0I3XCJcbiAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcImdyYXlcIikge1xuICAgICAgICAgICAgY2hhcnRDb2xvciA9IFwiI0QxRDVEQlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgIGhlYXRtYXA6IHtcbiAgICAgICAgICAgICAgICByYWRpdXM6IDEwMCxcbiAgICAgICAgICAgICAgICBjb2xvclNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNGOUZBRkJcIlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjRkRFNjhBXCJcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/chartOptions.js\n");

/***/ })

})