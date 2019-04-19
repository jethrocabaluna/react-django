webpackHotUpdate("main",{

/***/ "./leadmanager/frontend/src/components/leads/Leads.jsx":
/*!*************************************************************!*\
  !*** ./leadmanager/frontend/src/components/leads/Leads.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_leads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/leads */ \"./leadmanager/frontend/src/actions/leads.js\");\n/* harmony import */ var _reducers_leads__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/leads */ \"./leadmanager/frontend/src/reducers/leads.jsx\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\nvar Leads = function Leads() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_reducers_leads__WEBPACK_IMPORTED_MODULE_3__[\"LeadsContext\"]),\n      leadsState = _useContext.leadsState;\n\n  var leads = leadsState.leads;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return function () {\n      Object(_actions_leads__WEBPACK_IMPORTED_MODULE_2__[\"getLeads\"])();\n    };\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Leads\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"ID\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Email\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Message\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, leads.map(function (lead) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n      key: lead.id\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, lead.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, lead.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, lead.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, lead.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      variant: \"contained\",\n      color: \"secondary\"\n    }, \"Button\")));\n  }))));\n};\n\nvar _default = Leads;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Leads, \"Leads\", \"C:\\\\Users\\\\Jethro\\\\Development\\\\django-projects\\\\lead_manager\\\\leadmanager\\\\frontend\\\\src\\\\components\\\\leads\\\\Leads.jsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Jethro\\\\Development\\\\django-projects\\\\lead_manager\\\\leadmanager\\\\frontend\\\\src\\\\components\\\\leads\\\\Leads.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./leadmanager/frontend/src/components/leads/Leads.jsx?");

/***/ })

})