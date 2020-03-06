webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
var _jsxFileName = "/Users/benwalker/projects/github/the-asterisk-lounge/src/pages/Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => ({
  list: {
    backgroundColor: theme.palette.secondary.main
  },
  buttons: {
    textAlign: "center"
  },
  image: {
    backgroundImage: "url(./logo.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center"
  }
}));

function buttons(classes) {
  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_6___default.a, {
    clientId: "472983817080-fdu8q9rhdr5bdnp8v68p0eaq4u7e6lgh.apps.googleusercontent.com",
    buttonText: "Login with Google",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })));
}

const responseGoogle = response => {
  console.log(response); // first one
  // 1064855146728-dhtpjoavv0bohmus2aovdlvljk55ap42.apps.googleusercontent.com
  // second one
  // secret: 4m4EqqJqIoifGpKpoDGYDdCH
};

function LoginPage() {
  const classes = useStyles();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    menu: buttons(classes),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: "90vh",
    className: classes.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })));
}

/***/ })

})
//# sourceMappingURL=login.js.4f1a362e4d43356f77ae.hot-update.js.map