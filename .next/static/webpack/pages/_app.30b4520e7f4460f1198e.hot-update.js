webpackHotUpdate_N_E("pages/_app",{

/***/ "./helpers/chartOptions.js":
/*!*********************************!*\
  !*** ./helpers/chartOptions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return chartOptions; });\nfunction chartOptions(categoryColor) {\n  var chartColor = \"\";\n\n  if (categoryColor === \"yellow\") {\n    chartColor = \"#FCD34D\";\n  } else if (categoryColor === \"red\") {\n    chartColor = \"#FCA5A5\";\n  } else if (categoryColor === \"pink\") {\n    chartColor = \"#F9A8D4\";\n  } else if (categoryColor === \"purple\") {\n    chartColor = \"#C4B5FD\";\n  } else if (categoryColor === \"indigo\") {\n    chartColor = \"#A5B4FC\";\n  } else if (categoryColor === \"blue\") {\n    chartColor = \"#93C5FD\";\n  } else if (categoryColor === \"green\") {\n    chartColor = \"#6EE7B7\";\n  } else if (categoryColor === \"gray\") {\n    chartColor = \"#D1D5DB\";\n  }\n\n  var options = {\n    chart: {\n      toolbar: {\n        show: false\n      }\n    },\n    legend: {\n      show: false\n    },\n    dataLabels: {\n      enabled: false\n    },\n    xaxis: {\n      labels: {\n        rotate: -45,\n        hideOverlappingLabels: true\n      }\n    },\n    yaxis: {\n      labels: {\n        style: {\n          colors: [chartColor],\n          fontSize: \"14px\"\n        }\n      }\n    },\n    plotOptions: {\n      heatmap: {\n        radius: 2,\n        colorScale: {\n          ranges: [{\n            from: 0,\n            to: 0,\n            color: \"#F9FAFB\"\n          }, {\n            from: 1,\n            to: 2,\n            color: chartColor\n          }]\n        }\n      }\n    }\n  };\n  return options;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9jaGFydE9wdGlvbnMuanM/ZmRmMiJdLCJuYW1lcyI6WyJjaGFydE9wdGlvbnMiLCJjYXRlZ29yeUNvbG9yIiwiY2hhcnRDb2xvciIsIm9wdGlvbnMiLCJjaGFydCIsInRvb2xiYXIiLCJzaG93IiwibGVnZW5kIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJ4YXhpcyIsImxhYmVscyIsInJvdGF0ZSIsImhpZGVPdmVybGFwcGluZ0xhYmVscyIsInlheGlzIiwic3R5bGUiLCJjb2xvcnMiLCJmb250U2l6ZSIsInBsb3RPcHRpb25zIiwiaGVhdG1hcCIsInJhZGl1cyIsImNvbG9yU2NhbGUiLCJyYW5nZXMiLCJmcm9tIiwidG8iLCJjb2xvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLGFBQXRCLEVBQXFDO0FBRWhELE1BQUlDLFVBQVUsR0FBRyxFQUFqQjs7QUFDQSxNQUFJRCxhQUFhLEtBQUssUUFBdEIsRUFBZ0M7QUFDNUJDLGNBQVUsR0FBRyxTQUFiO0FBQ0gsR0FGRCxNQUVPLElBQUlELGFBQWEsS0FBSyxLQUF0QixFQUE2QjtBQUNoQ0MsY0FBVSxHQUFHLFNBQWI7QUFDSCxHQUZNLE1BRUEsSUFBSUQsYUFBYSxLQUFLLE1BQXRCLEVBQThCO0FBQ2pDQyxjQUFVLEdBQUcsU0FBYjtBQUNILEdBRk0sTUFFQSxJQUFJRCxhQUFhLEtBQUssUUFBdEIsRUFBZ0M7QUFDbkNDLGNBQVUsR0FBRyxTQUFiO0FBQ0gsR0FGTSxNQUVBLElBQUlELGFBQWEsS0FBSyxRQUF0QixFQUFnQztBQUNuQ0MsY0FBVSxHQUFHLFNBQWI7QUFDSCxHQUZNLE1BRUEsSUFBSUQsYUFBYSxLQUFLLE1BQXRCLEVBQThCO0FBQ2pDQyxjQUFVLEdBQUcsU0FBYjtBQUNILEdBRk0sTUFFQSxJQUFJRCxhQUFhLEtBQUssT0FBdEIsRUFBK0I7QUFDbENDLGNBQVUsR0FBRyxTQUFiO0FBQ0gsR0FGTSxNQUVBLElBQUlELGFBQWEsS0FBSyxNQUF0QixFQUE4QjtBQUNqQ0MsY0FBVSxHQUFHLFNBQWI7QUFDSDs7QUFFRCxNQUFNQyxPQUFPLEdBQUc7QUFDWkMsU0FBSyxFQUFFO0FBQ0hDLGFBQU8sRUFBRTtBQUNMQyxZQUFJLEVBQUU7QUFERDtBQUROLEtBREs7QUFNWkMsVUFBTSxFQUFFO0FBQ0pELFVBQUksRUFBRTtBQURGLEtBTkk7QUFTWkUsY0FBVSxFQUFFO0FBQ1JDLGFBQU8sRUFBRTtBQURELEtBVEE7QUFZWkMsU0FBSyxFQUFFO0FBQ0hDLFlBQU0sRUFBRTtBQUNKQyxjQUFNLEVBQUUsQ0FBQyxFQURMO0FBRUpDLDZCQUFxQixFQUFFO0FBRm5CO0FBREwsS0FaSztBQWtCWkMsU0FBSyxFQUFFO0FBQ0hILFlBQU0sRUFBRTtBQUNKSSxhQUFLLEVBQUU7QUFDSEMsZ0JBQU0sRUFBRSxDQUFDZCxVQUFELENBREw7QUFFSGUsa0JBQVEsRUFBRTtBQUZQO0FBREg7QUFETCxLQWxCSztBQTBCWkMsZUFBVyxFQUFFO0FBQ1RDLGFBQU8sRUFBRTtBQUNMQyxjQUFNLEVBQUUsQ0FESDtBQUVMQyxrQkFBVSxFQUFFO0FBQ1JDLGdCQUFNLEVBQUUsQ0FBQztBQUNMQyxnQkFBSSxFQUFFLENBREQ7QUFFTEMsY0FBRSxFQUFFLENBRkM7QUFHTEMsaUJBQUssRUFBRTtBQUhGLFdBQUQsRUFJTDtBQUNDRixnQkFBSSxFQUFFLENBRFA7QUFFQ0MsY0FBRSxFQUFFLENBRkw7QUFHQ0MsaUJBQUssRUFBRXZCO0FBSFIsV0FKSztBQURBO0FBRlA7QUFEQTtBQTFCRCxHQUFoQjtBQTJDQSxTQUFPQyxPQUFQO0FBQ0giLCJmaWxlIjoiLi9oZWxwZXJzL2NoYXJ0T3B0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXJ0T3B0aW9ucyhjYXRlZ29yeUNvbG9yKSB7XG4gICAgXG4gICAgbGV0IGNoYXJ0Q29sb3IgPSBcIlwiXG4gICAgaWYgKGNhdGVnb3J5Q29sb3IgPT09IFwieWVsbG93XCIpIHtcbiAgICAgICAgY2hhcnRDb2xvciA9IFwiI0ZDRDM0RFwiXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcInJlZFwiKSB7XG4gICAgICAgIGNoYXJ0Q29sb3IgPSBcIiNGQ0E1QTVcIlxuICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnlDb2xvciA9PT0gXCJwaW5rXCIpIHtcbiAgICAgICAgY2hhcnRDb2xvciA9IFwiI0Y5QThENFwiXG4gICAgfSBlbHNlIGlmIChjYXRlZ29yeUNvbG9yID09PSBcInB1cnBsZVwiKSB7XG4gICAgICAgIGNoYXJ0Q29sb3IgPSBcIiNDNEI1RkRcIlxuICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnlDb2xvciA9PT0gXCJpbmRpZ29cIikge1xuICAgICAgICBjaGFydENvbG9yID0gXCIjQTVCNEZDXCJcbiAgICB9IGVsc2UgaWYgKGNhdGVnb3J5Q29sb3IgPT09IFwiYmx1ZVwiKSB7XG4gICAgICAgIGNoYXJ0Q29sb3IgPSBcIiM5M0M1RkRcIlxuICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnlDb2xvciA9PT0gXCJncmVlblwiKSB7XG4gICAgICAgIGNoYXJ0Q29sb3IgPSBcIiM2RUU3QjdcIlxuICAgIH0gZWxzZSBpZiAoY2F0ZWdvcnlDb2xvciA9PT0gXCJncmF5XCIpIHtcbiAgICAgICAgY2hhcnRDb2xvciA9IFwiI0QxRDVEQlwiXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICB0b29sYmFyOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogLTQ1LFxuICAgICAgICAgICAgICAgIGhpZGVPdmVybGFwcGluZ0xhYmVsczogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yczogW2NoYXJ0Q29sb3JdLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICBoZWF0bWFwOiB7XG4gICAgICAgICAgICAgICAgcmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgIGNvbG9yU2NhbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI0Y5RkFGQlwiXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjaGFydENvbG9yXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/chartOptions.js\n");

/***/ })

})