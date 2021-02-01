module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_initAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/initAuth */ \"./utils/initAuth.js\");\n\n\nObject(_utils_initAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst handler = async (req, res) => {\n  try {\n    console.log(\"login setCookie\");\n    await Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__[\"setAuthCookies\"])(req, res);\n  } catch (e) {\n    console.log(\"login error\", e);\n    return res.status(500).json({\n      error: \"unexpected error.\"\n    });\n  }\n\n  return res.status(200).json({\n    success: true\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbG9naW4uanM/MDM4NCJdLCJuYW1lcyI6WyJpbml0QXV0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic2V0QXV0aENvb2tpZXMiLCJlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwic3VjY2VzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLCtEQUFROztBQUVSLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDaEMsTUFBSTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLFVBQU1DLHlFQUFjLENBQUNKLEdBQUQsRUFBTUMsR0FBTixDQUFwQjtBQUVILEdBSkQsQ0FJRSxPQUFPSSxDQUFQLEVBQVU7QUFDUkgsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkUsQ0FBM0I7QUFDQSxXQUFPSixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFyQixDQUFQO0FBQ0g7O0FBQ0QsU0FBT1AsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsV0FBTyxFQUFFO0FBQVgsR0FBckIsQ0FBUDtBQUNILENBVkQ7O0FBV2VWLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0QXV0aENvb2tpZXMgfSBmcm9tIFwibmV4dC1maXJlYmFzZS1hdXRoXCJcbmltcG9ydCBpbml0QXV0aCBmcm9tIFwiLi4vLi4vdXRpbHMvaW5pdEF1dGhcIlxuXG5pbml0QXV0aCgpXG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIHNldENvb2tpZVwiKVxuICAgICAgICBhd2FpdCBzZXRBdXRoQ29va2llcyhyZXEsIHJlcylcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGVycm9yXCIsIGUpXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcInVuZXhwZWN0ZWQgZXJyb3IuXCJ9KVxuICAgIH1cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pXG59XG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ }),

/***/ "./utils/initAuth.js":
/*!***************************!*\
  !*** ./utils/initAuth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__);\n //import * as admin from \"firebase-admin\"\n// var firebaseui = require('firebaseui')\n// var ui = new firebaseui.auth.AuthUI(firebase.auth())\n// var uiConfig = {\n//     callbacks: {\n//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {\n//         // User successfully signed in.\n//         // Return type determines whether we continue the redirect automatically\n//         // or whether we leave that to developer to handle.\n//         return true;\n//       },\n//       uiShown: function() {\n//         // The widget is rendered.\n//         // Hide the loader.\n//         document.getElementById('loader').style.display = 'none'\n//       }\n//     },\n//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.\n//     signInFlow: 'popup',\n//     signInSuccessUrl: '<url-to-redirect-to-on-success>',\n//     signInOptions: [\n//       // Leave the lines as is for the providers you want to offer your users.\n//       firebase.auth.EmailAuthProvider.PROVIDER_ID,\n//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,\n//     ],\n//     // Terms of service url.\n//     tosUrl: '<your-tos-url>',\n//     // Privacy policy url.\n//     privacyPolicyUrl: '<your-privacy-policy-url>'\n//   };\n// ui.start('#firebaseui-auth-container', uiConfig)\n// export default ui\n\nconst initAuth = () => {\n  Object(next_firebase_auth__WEBPACK_IMPORTED_MODULE_0__[\"init\"])({\n    debug: false,\n    authPageURL: '/auth',\n    appPageURL: '/',\n    loginAPIEndpoint: '/api/login',\n    // required\n    logoutAPIEndpoint: '/api/logout',\n    // required\n    firebaseAdminInitConfig: {\n      credential: {\n        projectId: 'lifelogging-20c8a',\n        clientEmail: 'lifelogging-20c8a@appspot.gserviceaccount.com',\n        // The private key must not be accesssible on the client side.\n        privateKey: process.env.FIREBASE_PRIVATE_KEY\n      },\n      databaseURL: \"https://lifelogging-20c8a-default-rtdb.europe-west1.firebasedatabase.app\"\n    },\n    firebaseClientInitConfig: {\n      apiKey: 'AIzaSyD61dFVqFCDh029N8Rr_PQjhJg5xAFOcRk',\n      // required\n      authDomain: 'lifelogging-20c8a.firebaseapp.com',\n      databaseURL: 'https://lifelogging-20c8a.firebaseio.com',\n      projectId: 'lifelogging-20c8a'\n    },\n    cookies: {\n      name: 'lifelogging',\n      // required\n      // Keys are required unless you set `signed` to `false`.\n      // The keys cannot be accessible on the client side.\n      keys: [process.env.COOKIE_SECRET_CURRENT, process.env.COOKIE_SECRET_PREVIOUS],\n      httpOnly: true,\n      maxAge: 12 * 60 * 60 * 24 * 1000,\n      // twelve days\n      overwrite: true,\n      path: '/',\n      sameSite: 'strict',\n      secure: false,\n      // set this to false in local (non-HTTPS) development\n      signed: false\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9pbml0QXV0aC5qcz84MzQ1Il0sIm5hbWVzIjpbImluaXRBdXRoIiwiaW5pdCIsImRlYnVnIiwiYXV0aFBhZ2VVUkwiLCJhcHBQYWdlVVJMIiwibG9naW5BUElFbmRwb2ludCIsImxvZ291dEFQSUVuZHBvaW50IiwiZmlyZWJhc2VBZG1pbkluaXRDb25maWciLCJjcmVkZW50aWFsIiwicHJvamVjdElkIiwiY2xpZW50RW1haWwiLCJwcml2YXRlS2V5IiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX1BSSVZBVEVfS0VZIiwiZGF0YWJhc2VVUkwiLCJmaXJlYmFzZUNsaWVudEluaXRDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiY29va2llcyIsIm5hbWUiLCJrZXlzIiwiQ09PS0lFX1NFQ1JFVF9DVVJSRU5UIiwiQ09PS0lFX1NFQ1JFVF9QUkVWSU9VUyIsImh0dHBPbmx5IiwibWF4QWdlIiwib3ZlcndyaXRlIiwicGF0aCIsInNhbWVTaXRlIiwic2VjdXJlIiwic2lnbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Q0FDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ25CQyxpRUFBSSxDQUFDO0FBQ0RDLFNBQUssRUFBRSxLQUROO0FBRURDLGVBQVcsRUFBRSxPQUZaO0FBR0RDLGNBQVUsRUFBRSxHQUhYO0FBSURDLG9CQUFnQixFQUFFLFlBSmpCO0FBSStCO0FBQ2hDQyxxQkFBaUIsRUFBRSxhQUxsQjtBQUtpQztBQUNsQ0MsMkJBQXVCLEVBQUU7QUFDckJDLGdCQUFVLEVBQUU7QUFDVkMsaUJBQVMsRUFBRSxtQkFERDtBQUVWQyxtQkFBVyxFQUFFLCtDQUZIO0FBR1Y7QUFDQUMsa0JBQVUsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBSmQsT0FEUztBQU9yQkMsaUJBQVcsRUFBRTtBQVBRLEtBTnhCO0FBZURDLDRCQUF3QixFQUFFO0FBQ3RCQyxZQUFNLEVBQUUseUNBRGM7QUFDNkI7QUFDbkRDLGdCQUFVLEVBQUUsbUNBRlU7QUFHdEJILGlCQUFXLEVBQUUsMENBSFM7QUFJdEJOLGVBQVMsRUFBRTtBQUpXLEtBZnpCO0FBcUJEVSxXQUFPLEVBQUU7QUFDTEMsVUFBSSxFQUFFLGFBREQ7QUFDZ0I7QUFDckI7QUFDQTtBQUNBQyxVQUFJLEVBQUUsQ0FDSlQsT0FBTyxDQUFDQyxHQUFSLENBQVlTLHFCQURSLEVBRUpWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxzQkFGUixDQUpEO0FBUUxDLGNBQVEsRUFBRSxJQVJMO0FBU0xDLFlBQU0sRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsRUFBZixHQUFvQixJQVR2QjtBQVM2QjtBQUNsQ0MsZUFBUyxFQUFFLElBVk47QUFXTEMsVUFBSSxFQUFFLEdBWEQ7QUFZTEMsY0FBUSxFQUFFLFFBWkw7QUFhTEMsWUFBTSxFQUFFLEtBYkg7QUFhVTtBQUNmQyxZQUFNLEVBQUU7QUFkSDtBQXJCUixHQUFELENBQUo7QUFzQ0gsQ0F2Q0Q7O0FBeUNlOUIsdUVBQWYiLCJmaWxlIjoiLi91dGlscy9pbml0QXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXQgfSBmcm9tIFwibmV4dC1maXJlYmFzZS1hdXRoXCJcbi8vaW1wb3J0ICogYXMgYWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCJcblxuLy8gdmFyIGZpcmViYXNldWkgPSByZXF1aXJlKCdmaXJlYmFzZXVpJylcblxuLy8gdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKVxuXG4vLyB2YXIgdWlDb25maWcgPSB7XG4vLyAgICAgY2FsbGJhY2tzOiB7XG4vLyAgICAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6IGZ1bmN0aW9uKGF1dGhSZXN1bHQsIHJlZGlyZWN0VXJsKSB7XG4vLyAgICAgICAgIC8vIFVzZXIgc3VjY2Vzc2Z1bGx5IHNpZ25lZCBpbi5cbi8vICAgICAgICAgLy8gUmV0dXJuIHR5cGUgZGV0ZXJtaW5lcyB3aGV0aGVyIHdlIGNvbnRpbnVlIHRoZSByZWRpcmVjdCBhdXRvbWF0aWNhbGx5XG4vLyAgICAgICAgIC8vIG9yIHdoZXRoZXIgd2UgbGVhdmUgdGhhdCB0byBkZXZlbG9wZXIgdG8gaGFuZGxlLlxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgIH0sXG4vLyAgICAgICB1aVNob3duOiBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cbi8vICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxuLy8gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuLy8gICAgICAgfVxuLy8gICAgIH0sXG4vLyAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxuLy8gICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXG4vLyAgICAgc2lnbkluU3VjY2Vzc1VybDogJzx1cmwtdG8tcmVkaXJlY3QtdG8tb24tc3VjY2Vzcz4nLFxuLy8gICAgIHNpZ25Jbk9wdGlvbnM6IFtcbi8vICAgICAgIC8vIExlYXZlIHRoZSBsaW5lcyBhcyBpcyBmb3IgdGhlIHByb3ZpZGVycyB5b3Ugd2FudCB0byBvZmZlciB5b3VyIHVzZXJzLlxuLy8gICAgICAgZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbi8vICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuLy8gICAgIF0sXG4vLyAgICAgLy8gVGVybXMgb2Ygc2VydmljZSB1cmwuXG4vLyAgICAgdG9zVXJsOiAnPHlvdXItdG9zLXVybD4nLFxuLy8gICAgIC8vIFByaXZhY3kgcG9saWN5IHVybC5cbi8vICAgICBwcml2YWN5UG9saWN5VXJsOiAnPHlvdXItcHJpdmFjeS1wb2xpY3ktdXJsPidcbi8vICAgfTtcblxuLy8gdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlDb25maWcpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IHVpXG5cbmNvbnN0IGluaXRBdXRoID0gKCkgPT4ge1xuICAgIGluaXQoe1xuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIGF1dGhQYWdlVVJMOiAnL2F1dGgnLFxuICAgICAgICBhcHBQYWdlVVJMOiAnLycsXG4gICAgICAgIGxvZ2luQVBJRW5kcG9pbnQ6ICcvYXBpL2xvZ2luJywgLy8gcmVxdWlyZWRcbiAgICAgICAgbG9nb3V0QVBJRW5kcG9pbnQ6ICcvYXBpL2xvZ291dCcsIC8vIHJlcXVpcmVkXG4gICAgICAgIGZpcmViYXNlQWRtaW5Jbml0Q29uZmlnOiB7XG4gICAgICAgICAgICBjcmVkZW50aWFsOiB7XG4gICAgICAgICAgICAgIHByb2plY3RJZDogJ2xpZmVsb2dnaW5nLTIwYzhhJyxcbiAgICAgICAgICAgICAgY2xpZW50RW1haWw6ICdsaWZlbG9nZ2luZy0yMGM4YUBhcHBzcG90LmdzZXJ2aWNlYWNjb3VudC5jb20nLFxuICAgICAgICAgICAgICAvLyBUaGUgcHJpdmF0ZSBrZXkgbXVzdCBub3QgYmUgYWNjZXNzc2libGUgb24gdGhlIGNsaWVudCBzaWRlLlxuICAgICAgICAgICAgICBwcml2YXRlS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9QUklWQVRFX0tFWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2xpZmVsb2dnaW5nLTIwYzhhLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcbiAgICAgICAgfSxcbiAgICAgICAgZmlyZWJhc2VDbGllbnRJbml0Q29uZmlnOiB7XG4gICAgICAgICAgICBhcGlLZXk6ICdBSXphU3lENjFkRlZxRkNEaDAyOU44UnJfUFFqaEpnNXhBRk9jUmsnLCAvLyByZXF1aXJlZFxuICAgICAgICAgICAgYXV0aERvbWFpbjogJ2xpZmVsb2dnaW5nLTIwYzhhLmZpcmViYXNlYXBwLmNvbScsXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vbGlmZWxvZ2dpbmctMjBjOGEuZmlyZWJhc2Vpby5jb20nLFxuICAgICAgICAgICAgcHJvamVjdElkOiAnbGlmZWxvZ2dpbmctMjBjOGEnLFxuICAgICAgICB9LFxuICAgICAgICBjb29raWVzOiB7XG4gICAgICAgICAgICBuYW1lOiAnbGlmZWxvZ2dpbmcnLCAvLyByZXF1aXJlZFxuICAgICAgICAgICAgLy8gS2V5cyBhcmUgcmVxdWlyZWQgdW5sZXNzIHlvdSBzZXQgYHNpZ25lZGAgdG8gYGZhbHNlYC5cbiAgICAgICAgICAgIC8vIFRoZSBrZXlzIGNhbm5vdCBiZSBhY2Nlc3NpYmxlIG9uIHRoZSBjbGllbnQgc2lkZS5cbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuQ09PS0lFX1NFQ1JFVF9DVVJSRU5ULFxuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5DT09LSUVfU0VDUkVUX1BSRVZJT1VTLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICAgICAgbWF4QWdlOiAxMiAqIDYwICogNjAgKiAyNCAqIDEwMDAsIC8vIHR3ZWx2ZSBkYXlzXG4gICAgICAgICAgICBvdmVyd3JpdGU6IHRydWUsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ3N0cmljdCcsXG4gICAgICAgICAgICBzZWN1cmU6IGZhbHNlLCAvLyBzZXQgdGhpcyB0byBmYWxzZSBpbiBsb2NhbCAobm9uLUhUVFBTKSBkZXZlbG9wbWVudFxuICAgICAgICAgICAgc2lnbmVkOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/initAuth.js\n");

/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-firebase-auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWZpcmViYXNlLWF1dGhcIj9jMjVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtZmlyZWJhc2UtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtZmlyZWJhc2UtYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-firebase-auth\n");

/***/ })

/******/ });