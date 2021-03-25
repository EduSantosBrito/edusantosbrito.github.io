webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Languages/style.tsx":
/*!****************************************!*\
  !*** ./components/Languages/style.tsx ***!
  \****************************************/
/*! exports provided: LanguagesContainer, CardsContainer, HorizontalScrollContainer, LanguageIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguagesContainer\", function() { return LanguagesContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardsContainer\", function() { return CardsContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HorizontalScrollContainer\", function() { return HorizontalScrollContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LanguageIcon\", function() { return LanguageIcon; });\n/* harmony import */ var _home_brito_Documents_OpenSource_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject4() {\n  var data = Object(_home_brito_Documents_OpenSource_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 15%;\\n    position: absolute;\\n    right: 8px;\\n    bottom: 8px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_home_brito_Documents_OpenSource_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    flex-wrap: nowrap;\\n    overflow-x: auto;\\n    overflow-y: hidden;\\n\\n    -ms-overflow-style: none;\\n    scrollbar-width: none;\\n    &::-webkit-scrollbar {\\n        display: none;\\n    }\\n\\n    @media (min-width: \", \") {\\n        display: grid;\\n        grid-auto-columns: minmax(200px, auto);\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_home_brito_Documents_OpenSource_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    display: grid;\\n    grid-template-columns: 16px 1fr 16px;\\n\\n    &::before {\\n        content: '';\\n    }\\n    &::after {\\n        content: '';\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_home_brito_Documents_OpenSource_portfolio_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar LanguagesContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject());\nvar CardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section(_templateObject2());\nvar HorizontalScrollContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3(), function (_ref) {\n  var theme = _ref.theme;\n  return theme.breakpoints.sm;\n});\nvar LanguageIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject4());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5ndWFnZXMvc3R5bGUudHN4PzJkOWUiXSwibmFtZXMiOlsiTGFuZ3VhZ2VzQ29udGFpbmVyIiwic3R5bGVkIiwic2VjdGlvbiIsIkNhcmRzQ29udGFpbmVyIiwiSG9yaXpvbnRhbFNjcm9sbENvbnRhaW5lciIsImRpdiIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJzbSIsIkxhbmd1YWdlSWNvbiIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUdDLHlEQUFNLENBQUNDLE9BQVYsbUJBQXhCO0FBUUEsSUFBTUMsY0FBYyxHQUFHRix5REFBTSxDQUFDQyxPQUFWLG9CQUFwQjtBQWVBLElBQU1FLHlCQUF5QixHQUFHSCx5REFBTSxDQUFDSSxHQUFWLHFCQVliO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBK0NBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsRUFBakU7QUFBQSxDQVphLENBQS9CO0FBa0JBLElBQU1DLFlBQVksR0FBR1IseURBQU0sQ0FBQ1MsR0FBVixvQkFBbEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmd1YWdlcy9zdHlsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaXRoVGhlbWUgfSBmcm9tICdzaGFyZWQvd2l0aFRoZW1lJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VzQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2FyZHNDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCAxZnIgMTZweDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbmA7XG5cbnR5cGUgSG9yaXpvbnRhbFNjcm9sbENvbnRhaW5lclByb3BzID0gV2l0aFRoZW1lO1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbFNjcm9sbENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SG9yaXpvbnRhbFNjcm9sbENvbnRhaW5lclByb3BzPmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHsgdGhlbWUgfTogSG9yaXpvbnRhbFNjcm9sbENvbnRhaW5lclByb3BzKSA9PiB0aGVtZS5icmVha3BvaW50cy5zbX0pIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgYXV0byk7XG4gICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExhbmd1YWdlSWNvbiA9IHN0eWxlZC5pbWdgXG4gICAgd2lkdGg6IDE1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDhweDtcbiAgICBib3R0b206IDhweDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Languages/style.tsx\n");

/***/ })

})