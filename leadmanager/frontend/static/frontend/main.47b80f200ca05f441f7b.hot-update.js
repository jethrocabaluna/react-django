webpackHotUpdate("main",{

/***/ "./leadmanager/frontend/src/actions/leads.js":
/*!***************************************************!*\
  !*** ./leadmanager/frontend/src/actions/leads.js ***!
  \***************************************************/
/*! exports provided: getLeads, deleteLead, addLead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLeads\", function() { return getLeads; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteLead\", function() { return deleteLead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLead\", function() { return addLead; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./leadmanager/frontend/src/actions/types.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n// import { useContext } from 'react'\n\n // import { LeadsContext } from '../reducers/leads';\n\nvar getLeads = function getLeads(dispatch) {\n  // const { leadsDispatch } = useContext(LeadsContext)\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/leads').then(function (res) {\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_LEADS\"],\n      payload: res.data\n    });\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\nvar deleteLead = function deleteLead(dispatch, id) {\n  // const { leadsDispatch } = useContext(LeadsContext)\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a[\"delete\"](\"/api/leads/\".concat(id)).then(function (res) {\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_LEAD\"],\n      payload: id\n    });\n  })[\"catch\"](function (err) {\n    return console.log(err);\n  });\n};\nvar addLead = function addLead(dispatch, newLead, errorsDispatch) {\n  // const { leadsDispatch } = useContext(LeadsContext)\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/leads/', newLead).then(function (res) {\n    dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__[\"ADD_LEAD\"],\n      payload: res.data\n    });\n  })[\"catch\"](function (err) {\n    if (errorsDispatch) {\n      var errors = {\n        msg: err.response.data,\n        status: err.response.status\n      };\n      errorsDispatch({\n        type: GET_ERRORS,\n        payload: errors\n      });\n    } else {\n      console.log(err);\n    }\n  });\n};\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getLeads, \"getLeads\", \"C:\\\\Users\\\\Jethro\\\\Development\\\\django-projects\\\\lead_manager\\\\leadmanager\\\\frontend\\\\src\\\\actions\\\\leads.js\");\n  reactHotLoader.register(deleteLead, \"deleteLead\", \"C:\\\\Users\\\\Jethro\\\\Development\\\\django-projects\\\\lead_manager\\\\leadmanager\\\\frontend\\\\src\\\\actions\\\\leads.js\");\n  reactHotLoader.register(addLead, \"addLead\", \"C:\\\\Users\\\\Jethro\\\\Development\\\\django-projects\\\\lead_manager\\\\leadmanager\\\\frontend\\\\src\\\\actions\\\\leads.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./leadmanager/frontend/src/actions/leads.js?");

/***/ })

})