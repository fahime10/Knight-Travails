/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameboard.js */ \"./src/modules/gameboard.js\");\n\r\n\r\n(0,_modules_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)();\n\n//# sourceURL=webpack://knight-travails/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameBoard: () => (/* binding */ createGameBoard)\n/* harmony export */ });\nfunction createGameBoard() {\r\n    let board = \"\";\r\n    let defaultLocation = [0,0];\r\n    \r\n    board += startBlackCell(7);\r\n    board += startWhiteCell(6);\r\n    board += startBlackCell(5);\r\n    board += startWhiteCell(4);\r\n    board += startBlackCell(3);\r\n    board += startWhiteCell(2);\r\n    board += startBlackCell(1);\r\n    board += startWhiteCell(0);\r\n\r\n    let coordArray = fillCoordArray();\r\n\r\n    document.querySelector('#gameboard').innerHTML = board;\r\n    placeKnightInitialPos(defaultLocation);\r\n    console.log(`Knight's position [${defaultLocation}]`);\r\n}\r\n\r\nfunction startWhiteCell(index) {\r\n    let cells = \"\";\r\n    for (let i = 0; i < 8; i++) {\r\n        if (i % 2 === 0) {\r\n            cells += `<div class=\"white-cell\" id=\"${[index, i]}\"></div>`;\r\n        } else {\r\n            cells += `<div class=\"black-cell\" id=\"${[index, i]}\"></div>`;\r\n        }\r\n    }\r\n\r\n    return cells;\r\n}\r\n\r\nfunction startBlackCell(index) {\r\n    let cells = \"\";\r\n    for (let i = 0; i < 8; i++) {\r\n        if (i % 2 === 0) {\r\n            cells += `<div class=\"black-cell\" id=\"${[index, i]}\"></div>`;\r\n        } else {\r\n            cells += `<div class=\"white-cell\" id=\"${[index, i]}\"></div>`;\r\n        }\r\n    }\r\n\r\n    return cells;\r\n}\r\n\r\nfunction fillCoordArray() {\r\n    let coordArray = [];\r\n    for (let i = 0; i < 8; i++) {\r\n        for (let j = 0; j < 8; j++) {\r\n            coordArray.push([i, j]);\r\n        }\r\n    }\r\n    return coordArray;\r\n}\r\n\r\nfunction placeKnightInitialPos(defaultLocation) {\r\n    let knight = document.createElement(\"img\");\r\n    knight.src = \"../src/assets/knight.jpg\";\r\n\r\n    document.getElementById(`${defaultLocation}`).append(knight);\r\n}\n\n//# sourceURL=webpack://knight-travails/./src/modules/gameboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;