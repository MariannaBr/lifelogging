webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/initFirebase.js":
/*!*******************************!*\
  !*** ./utils/initFirebase.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/analytics */ \"./node_modules/firebase/analytics/dist/index.esm.js\");\n/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/functions */ \"./node_modules/firebase/functions/dist/index.esm.js\");\n\n\n\n\n\nvar firebaseConfig = {\n  apiKey: \"AIzaSyD61dFVqFCDh029N8Rr_PQjhJg5xAFOcRk\",\n  authDomain: \"lifelogging-20c8a.firebaseapp.com\",\n  projectId: \"lifelogging-20c8a\",\n  storageBucket: \"lifelogging-20c8a.appspot.com\",\n  messagingSenderId: \"111948075126\",\n  appId: \"1:111948075126:web:318b732adea514f32a0f57\",\n  measurementId: \"G-TRMZ4QPD92\"\n};\n\nif (!firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apps.length) {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaW5pdEZpcmViYXNlLmpzPzZjYjEiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLGNBQWMsR0FBRztBQUNuQkMsUUFBTSxFQUFFLHlDQURXO0FBRW5CQyxZQUFVLEVBQUUsbUNBRk87QUFHbkJDLFdBQVMsRUFBRSxtQkFIUTtBQUluQkMsZUFBYSxFQUFFLCtCQUpJO0FBS25CQyxtQkFBaUIsRUFBRSxjQUxBO0FBTW5CQyxPQUFLLEVBQUUsMkNBTlk7QUFPbkJDLGVBQWEsRUFBRTtBQVBJLENBQXZCOztBQVVFLElBQUksQ0FBQ0Msb0RBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkYsc0RBQVEsQ0FBQ0csYUFBVCxDQUF1QlgsY0FBdkI7QUFDRDs7QUFHY1EsbUhBQWYiLCJmaWxlIjoiLi91dGlscy9pbml0RmlyZWJhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXG5pbXBvcnQgJ2ZpcmViYXNlL2FuYWx5dGljcydcbmltcG9ydCAnZmlyZWJhc2UvZnVuY3Rpb25zJ1xuXG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lENjFkRlZxRkNEaDAyOU44UnJfUFFqaEpnNXhBRk9jUmtcIixcbiAgICBhdXRoRG9tYWluOiBcImxpZmVsb2dnaW5nLTIwYzhhLmZpcmViYXNlYXBwLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJsaWZlbG9nZ2luZy0yMGM4YVwiLFxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwibGlmZWxvZ2dpbmctMjBjOGEuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMTE5NDgwNzUxMjZcIixcbiAgICBhcHBJZDogXCIxOjExMTk0ODA3NTEyNjp3ZWI6MzE4YjczMmFkZWE1MTRmMzJhMGY1N1wiLFxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1UUk1aNFFQRDkyXCJcbiAgfVxuICBcbiAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpXG4gIH1cbiAgXG5cbiAgZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/initFirebase.js\n");

/***/ })

})