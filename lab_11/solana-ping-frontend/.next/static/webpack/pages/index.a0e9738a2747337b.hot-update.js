"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PingButton.tsx":
/*!***********************************!*\
  !*** ./components/PingButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PingButton: function() { return /* binding */ PingButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/PingButton.module.css */ \"./styles/PingButton.module.css\");\n/* harmony import */ var _styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PingButton = ()=>{\n    _s();\n    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection)();\n    const { publicKey, sendTransaction } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();\n    const onClick = ()=>{\n        if (!connection || !publicKey) {\n            console.log(\"Not connected!\");\n            return;\n        }\n        const programId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(\"ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa\");\n        const programDataAccount = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(\"Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod\");\n        const tx = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction().add(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.TransactionInstruction({\n            keys: [\n                {\n                    pubkey: programDataAccount,\n                    isSigner: false,\n                    isWritable: true\n                }\n            ],\n            programId: programId\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().buttonContainer),\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_styles_PingButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),\n            children: \"Ping!\"\n        }, void 0, false, {\n            fileName: \"/Users/mfs/forge/crypto/solana-training/lab_11/solana-ping-frontend/components/PingButton.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mfs/forge/crypto/solana-training/lab_11/solana-ping-frontend/components/PingButton.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PingButton, \"nuT7ctT3oQyaLcmcqayfsnFPiOI=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet\n    ];\n});\n_c = PingButton;\nvar _c;\n$RefreshReg$(_c, \"PingButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BpbmdCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNxRDtBQUN3QztBQUNyQjtBQUdqRSxNQUFNTSxhQUFpQjs7SUFDNUIsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0gsMkVBQWFBO0lBQ3BDLE1BQU0sRUFBRUksU0FBUyxFQUFFQyxlQUFlLEVBQUUsR0FBR0osdUVBQVNBO0lBRWhELE1BQU1LLFVBQVU7UUFDZCxJQUFJLENBQUNILGNBQWMsQ0FBQ0MsV0FBVztZQUM3QkcsUUFBUUMsR0FBRyxDQUFDO1lBQ1o7UUFDRjtRQUVBLE1BQU1DLFlBQVksSUFBSVosc0RBQVNBLENBQzdCO1FBRUYsTUFBTWEscUJBQXFCLElBQUliLHNEQUFTQSxDQUN0QztRQUdGLE1BQU1jLEtBQUssSUFBSWIsd0RBQVdBLEdBQUdjLEdBQUcsQ0FDOUIsSUFBSWIsbUVBQXNCQSxDQUFDO1lBQ3pCYyxNQUFNO2dCQUFDO29CQUFDQyxRQUFRSjtvQkFBb0JLLFVBQVU7b0JBQU9DLFlBQVk7Z0JBQUk7YUFBRTtZQUN2RVAsV0FBV0E7UUFDYjtJQUdKO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVd0QixzRkFBc0I7UUFBRVUsU0FBU0E7a0JBQy9DLDRFQUFDYztZQUFPRixXQUFXdEIsNkVBQWE7c0JBQUU7Ozs7Ozs7Ozs7O0FBR3hDLEVBQUU7R0EvQldNOztRQUNZRix1RUFBYUE7UUFDR0MsbUVBQVNBOzs7S0FGckNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGluZ0J1dHRvbi50c3g/NTlhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9QaW5nQnV0dG9uLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24sIFB1YmxpY0tleSwgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uSW5zdHJ1Y3Rpb24gfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiwgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7IGlzU2lnbmVyIH0gZnJvbSBcIkBtZXRhcGxleC1mb3VuZGF0aW9uL2pzXCI7XG5cbmV4cG9ydCBjb25zdCBQaW5nQnV0dG9uOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gIGNvbnN0IHsgcHVibGljS2V5LCBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVdhbGxldCgpO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFjb25uZWN0aW9uIHx8ICFwdWJsaWNLZXkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm90IGNvbm5lY3RlZCFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3JhbUlkID0gbmV3IFB1YmxpY0tleShcbiAgICAgIFwiQ2hUMUIzOVdLTFM4cVVya0x2RkRYTWhFSjRGMVhaendVTkhVdDRBVTlhVmFcIixcbiAgICApO1xuICAgIGNvbnN0IHByb2dyYW1EYXRhQWNjb3VudCA9IG5ldyBQdWJsaWNLZXkoXG4gICAgICBcIkFoOUs3ZFE4RUhhWnFjQXNnQlc4dzM3eU4yZUF5M2tvRm1VbjR4M0NKdG9kXCIsXG4gICAgKTtcblxuICAgIGNvbnN0IHR4ID0gbmV3IFRyYW5zYWN0aW9uKCkuYWRkKFxuICAgICAgbmV3IFRyYW5zYWN0aW9uSW5zdHJ1Y3Rpb24oe1xuICAgICAgICBrZXlzOiBbe3B1YmtleTogcHJvZ3JhbURhdGFBY2NvdW50LCBpc1NpZ25lcjogZmFsc2UsIGlzV3JpdGFibGU6IHRydWV9XSxcbiAgICAgICAgcHJvZ3JhbUlkOiBwcm9ncmFtSWQsXG4gICAgICB9KVxuICAgIClcbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQ29udGFpbmVyfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5QaW5nITwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQdWJsaWNLZXkiLCJUcmFuc2FjdGlvbiIsIlRyYW5zYWN0aW9uSW5zdHJ1Y3Rpb24iLCJ1c2VDb25uZWN0aW9uIiwidXNlV2FsbGV0IiwiUGluZ0J1dHRvbiIsImNvbm5lY3Rpb24iLCJwdWJsaWNLZXkiLCJzZW5kVHJhbnNhY3Rpb24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInByb2dyYW1JZCIsInByb2dyYW1EYXRhQWNjb3VudCIsInR4IiwiYWRkIiwia2V5cyIsInB1YmtleSIsImlzU2lnbmVyIiwiaXNXcml0YWJsZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PingButton.tsx\n"));

/***/ })

});