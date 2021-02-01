module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FirebaseAuth.js":
/*!************************************!*\
  !*** ./components/FirebaseAuth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/components/FirebaseAuth.js\";\n\n\n\n\nconst firebaseAuthConfig = {\n  signInFlow: 'popup',\n  signInOptions: [{\n    provider: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth.EmailAuthProvider.PROVIDER_ID,\n    requireDisplayName: false\n  }, {\n    provider: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth.GoogleAuthProvider.PROVIDER_ID,\n    requireDisplayName: true\n  }],\n  signInSuccessUrl: '/user',\n  credentialHelper: 'none',\n  callbacks: {\n    // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl\n    signInSuccessWithAuthResult: () => // Don't automatically redirect. We handle redirecting based on\n    // auth state in withAuthComponent.js.\n    false\n  }\n};\n\nconst FirebaseAuth = () => {\n  const {\n    0: renderAuth,\n    1: setRenderAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (false) {}\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: renderAuth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      uiConfig: firebaseAuthConfig,\n      firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }, undefined) : null\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirebaseAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZpcmViYXNlQXV0aC5qcz8wNjYwIl0sIm5hbWVzIjpbImZpcmViYXNlQXV0aENvbmZpZyIsInNpZ25JbkZsb3ciLCJzaWduSW5PcHRpb25zIiwicHJvdmlkZXIiLCJmaXJlYmFzZSIsImF1dGgiLCJFbWFpbEF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwicmVxdWlyZURpc3BsYXlOYW1lIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluU3VjY2Vzc1VybCIsImNyZWRlbnRpYWxIZWxwZXIiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQiLCJGaXJlYmFzZUF1dGgiLCJyZW5kZXJBdXRoIiwic2V0UmVuZGVyQXV0aCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxrQkFBa0IsR0FBRztBQUN2QkMsWUFBVSxFQUFFLE9BRFc7QUFFdkJDLGVBQWEsRUFBRSxDQUNYO0FBQ0lDLFlBQVEsRUFBRUMsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxpQkFBZCxDQUFnQ0MsV0FEOUM7QUFFSUMsc0JBQWtCLEVBQUU7QUFGeEIsR0FEVyxFQUtYO0FBQ0lMLFlBQVEsRUFBRUMsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjSSxrQkFBZCxDQUFpQ0YsV0FEL0M7QUFFSUMsc0JBQWtCLEVBQUU7QUFGeEIsR0FMVyxDQUZRO0FBWXZCRSxrQkFBZ0IsRUFBRSxPQVpLO0FBYXZCQyxrQkFBZ0IsRUFBRSxNQWJLO0FBY3ZCQyxXQUFTLEVBQUU7QUFDUDtBQUNBQywrQkFBMkIsRUFBRSxNQUM3QjtBQUNBO0FBQ0E7QUFMTztBQWRZLENBQTNCOztBQXVCQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN2QixRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDWixlQUFvQyxFQUVuQztBQUNKLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFLQSxzQkFDSTtBQUFBLGNBQ0tILFVBQVUsZ0JBQ1AscUVBQUMsMEVBQUQ7QUFDSSxjQUFRLEVBQUVmLGtCQURkO0FBRUksa0JBQVksRUFBRUksbURBQVEsQ0FBQ0MsSUFBVDtBQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPLEdBS1A7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFVSCxDQWpCRDs7QUFrQmVTLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GaXJlYmFzZUF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3R5bGVkRmlyZWJhc2VBdXRoIGZyb20gJ3JlYWN0LWZpcmViYXNldWkvU3R5bGVkRmlyZWJhc2VBdXRoJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcblxuY29uc3QgZmlyZWJhc2VBdXRoQ29uZmlnID0ge1xuICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXG4gICAgc2lnbkluT3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlcjogZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZXI6IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgcmVxdWlyZURpc3BsYXlOYW1lOiB0cnVlXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNpZ25JblN1Y2Nlc3NVcmw6ICcvdXNlcicsXG4gICAgY3JlZGVudGlhbEhlbHBlcjogJ25vbmUnLFxuICAgIGNhbGxiYWNrczoge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2V1aS13ZWIjc2lnbmluc3VjY2Vzc3dpdGhhdXRocmVzdWx0YXV0aHJlc3VsdC1yZWRpcmVjdHVybFxuICAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6ICgpID0+XG4gICAgICAgIC8vIERvbid0IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3QuIFdlIGhhbmRsZSByZWRpcmVjdGluZyBiYXNlZCBvblxuICAgICAgICAvLyBhdXRoIHN0YXRlIGluIHdpdGhBdXRoQ29tcG9uZW50LmpzLlxuICAgICAgICBmYWxzZSxcbiAgICB9LFxufVxuXG5jb25zdCBGaXJlYmFzZUF1dGggPSAoKSA9PiB7XG4gICAgY29uc3QgW3JlbmRlckF1dGgsIHNldFJlbmRlckF1dGhdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgc2V0UmVuZGVyQXV0aCh0cnVlKVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtyZW5kZXJBdXRoID8gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRGaXJlYmFzZUF1dGhcbiAgICAgICAgICAgICAgICAgICAgdWlDb25maWc9e2ZpcmViYXNlQXV0aENvbmZpZ31cbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2VBdXRoPXtmaXJlYmFzZS5hdXRoKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBGaXJlYmFzZUF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FirebaseAuth.js\n");

/***/ }),

/***/ "./pages/auth.js":
/*!***********************!*\
  !*** ./pages/auth.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FirebaseAuth */ \"./components/FirebaseAuth.js\");\n\nvar _jsxFileName = \"/home/mana/c/lifelogging/pages/auth.js\";\n\n\n\nconst Auth = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n  className: \"justify-content-center\",\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined)\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 5,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_1__[\"withAuthUser\"])({\n  whenAuthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_1__[\"AuthAction\"].REDIRECT_TO_APP,\n  whenUnauthedBeforeInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_1__[\"AuthAction\"].RETURN_NULL,\n  whenUnauthedAfterInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_1__[\"AuthAction\"].RENDER\n})(Auth));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoLmpzP2NhNGUiXSwibmFtZXMiOlsiQXV0aCIsIndpdGhBdXRoVXNlciIsIndoZW5BdXRoZWQiLCJBdXRoQWN0aW9uIiwiUkVESVJFQ1RfVE9fQVBQIiwid2hlblVuYXV0aGVkQmVmb3JlSW5pdCIsIlJFVFVSTl9OVUxMIiwid2hlblVuYXV0aGVkQWZ0ZXJJbml0IiwiUkVOREVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLG1CQUNUO0FBQUssV0FBUyxFQUFDLHdCQUFmO0FBQUEseUJBQ0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFLZUMsc0lBQVksQ0FBQztBQUN4QkMsWUFBVSxFQUFFQyw2REFBVSxDQUFDQyxlQURDO0FBRXhCQyx3QkFBc0IsRUFBRUYsNkRBQVUsQ0FBQ0csV0FGWDtBQUd4QkMsdUJBQXFCLEVBQUVKLDZEQUFVLENBQUNLO0FBSFYsQ0FBRCxDQUFaLENBSVpSLElBSlksQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoQXV0aFVzZXIsIEF1dGhBY3Rpb24gfSBmcm9tIFwibmV4dC1maXJlYmFzZS1hdXRoXCJcbmltcG9ydCBGaXJlYmFzZUF1dGggZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlyZWJhc2VBdXRoXCJcblxuY29uc3QgQXV0aCA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPEZpcmViYXNlQXV0aCAvPlxuICAgIDwvZGl2PlxuKVxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGhVc2VyKHtcbiAgICB3aGVuQXV0aGVkOiBBdXRoQWN0aW9uLlJFRElSRUNUX1RPX0FQUCxcbiAgICB3aGVuVW5hdXRoZWRCZWZvcmVJbml0OiBBdXRoQWN0aW9uLlJFVFVSTl9OVUxMLFxuICAgIHdoZW5VbmF1dGhlZEFmdGVySW5pdDogQXV0aEFjdGlvbi5SRU5ERVIsXG59KShBdXRoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth.js\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-firebase-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWZpcmViYXNlLWF1dGhcIj9jMjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtZmlyZWJhc2UtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZmlyZWJhc2UtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-firebase-auth\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-firebaseui/StyledFirebaseAuth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiPzcyOTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZmlyZWJhc2V1aS9TdHlsZWRGaXJlYmFzZUF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1maXJlYmFzZXVpL1N0eWxlZEZpcmViYXNlQXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-firebaseui/StyledFirebaseAuth\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });