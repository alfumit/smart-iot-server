/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_index12_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_index12_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_index12_html__);


exports.get = async function(ctx, next) {
    ctx.body = __WEBPACK_IMPORTED_MODULE_0__public_index12_html__["default"];
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Line 114: Unexpected identifier\n    at ErrorHandler.constructError (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:3396:22)\n    at ErrorHandler.createError (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:3414:27)\n    at JSXParser.Parser.unexpectedTokenError (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:542:39)\n    at JSXParser.Parser.throwUnexpectedToken (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:552:21)\n    at JSXParser.Parser.consumeSemicolon (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:845:23)\n    at JSXParser.Parser.parseExpressionStatement (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:2080:15)\n    at JSXParser.Parser.parseStatement (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:2495:35)\n    at JSXParser.Parser.parseStatementListItem (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:1823:31)\n    at JSXParser.Parser.parseProgram (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:3061:29)\n    at Object.parse (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\node_modules\\esprima\\dist\\esprima.js:117:24)\n    at Object.parse (C:\\web projects\\smart-iot\\server\\node_modules\\recast\\lib\\parser.js:26:32)\n    at compile (C:\\web projects\\smart-iot\\server\\node_modules\\es6-templates\\lib\\index.js:41:20)\n    at Object.main (C:\\web projects\\smart-iot\\server\\node_modules\\html-es6-template-loader\\index.js:13:15)");

/***/ })
/******/ ]);