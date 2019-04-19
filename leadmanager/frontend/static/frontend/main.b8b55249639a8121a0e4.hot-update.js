webpackHotUpdate("main",{

/***/ "./leadmanager/frontend/src/components/layout/Alerts.jsx":
/*!***************************************************************!*\
  !*** ./leadmanager/frontend/src/components/layout/Alerts.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alert */ \"./node_modules/react-alert/dist/esm/react-alert.js\");\n/* harmony import */ var _reducers_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/errors */ \"./leadmanager/frontend/src/reducers/errors.jsx\");\n/* harmony import */ var _helpers_usePrevious__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/usePrevious */ \"./leadmanager/frontend/src/helpers/usePrevious.jsx\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\nvar Alerts = function Alerts(props) {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_reducers_errors__WEBPACK_IMPORTED_MODULE_2__[\"ErrorsContext\"]),\n      errorsState = _useContext.errorsState;\n\n  var prevErrors = Object(_helpers_usePrevious__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(errorsState);\n  console.log(JSON.stringify(errorsState) === JSON.stringify(prevErrors));\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (prevErrors !== errorsState) {\n      console.log('error');\n\n      if (errorsState.msg.name) {\n        console.log('name error');\n        props.alert.error('Name is required');\n      }\n\n      if (errorsState.msg.email) {\n        console.log('email error');\n        props.alert.error('Email is required');\n      }\n    }\n  }, errorsState);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null);\n};\n\nvar _default = Object(react_alert__WEBPACK_IMPORTED_MODULE_1__[\"withAlert\"])()(Alerts);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Alerts, \"Alerts\", \"C:\\\\Users\\\\Jethro\\\\Development\\\\django-projects\\\\lead_manager\\\\leadmanager\\\\frontend\\\\src\\\\components\\\\layout\\\\Alerts.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Jethro\\\\Development\\\\django-projects\\\\lead_manager\\\\leadmanager\\\\frontend\\\\src\\\\components\\\\layout\\\\Alerts.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./leadmanager/frontend/src/components/layout/Alerts.jsx?");

/***/ })

})