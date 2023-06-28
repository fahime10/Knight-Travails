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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gameController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameController.js */ \"./src/modules/gameController.js\");\n\r\n\r\n(0,_modules_gameController_js__WEBPACK_IMPORTED_MODULE_0__.gameStart)();\n\n//# sourceURL=webpack://knight-travails/./src/index.js?");

/***/ }),

/***/ "./src/modules/chessSquare.js":
/*!************************************!*\
  !*** ./src/modules/chessSquare.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chessSquare: () => (/* binding */ chessSquare),\n/* harmony export */   squareRegistry: () => (/* binding */ squareRegistry)\n/* harmony export */ });\nconst squareRegistry = new Map();\r\n\r\nconst chessSquare = (x, y) => {\r\n    const xPos = x;\r\n    const yPos = y;\r\n    let predecessor;\r\n\r\n    // Array used to determine possile coordinate positions\r\n    // and useful to avoid undefined values (out of the board)\r\n    const arrayKnightMoves = [\r\n        [1, 2], [1, -2],\r\n        [2, 1], [2, -1],\r\n        [-1, 2], [-1, -2],\r\n        [-2, 1], [-2, -1]\r\n    ];\r\n\r\n    const getPredecessor = () => predecessor;\r\n\r\n    const setPredecessor = (newPredecessor) => {\r\n        predecessor = predecessor || newPredecessor;\r\n    }\r\n\r\n    // Function to assign a coordinate name\r\n    const name = () => `${x},${y}`;\r\n\r\n    // Function to determine possible moves\r\n    const possibleKnightMoves = () => {\r\n        return arrayKnightMoves\r\n            .map((offset) => newSquareFrom(offset[0], offset[1]))\r\n            .filter((square) => square !== undefined);\r\n    }\r\n\r\n    const newSquareFrom = (xOffs, yOffs) => {\r\n        const [newX, newY] = [xPos + xOffs, yPos + yOffs];\r\n\r\n        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {\r\n            return chessSquare(newX, newY);\r\n        }\r\n    }\r\n\r\n    if (squareRegistry.has(name())) {\r\n        return squareRegistry.get(name());\r\n    } else {\r\n        const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves }\r\n        squareRegistry.set(name(), newSquare);\r\n        return newSquare;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://knight-travails/./src/modules/chessSquare.js?");

/***/ }),

/***/ "./src/modules/displayMoves.js":
/*!*************************************!*\
  !*** ./src/modules/displayMoves.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moveKnightImg: () => (/* binding */ moveKnightImg)\n/* harmony export */ });\nfunction moveKnightImg(id) {\r\n    document.querySelector(\"img\").remove();\r\n\r\n    let knight = document.createElement(\"img\");\r\n    knight.src = \"../src/assets/knight.jpg\";\r\n    document.getElementById(`${id}`).append(knight);\r\n}\n\n//# sourceURL=webpack://knight-travails/./src/modules/displayMoves.js?");

/***/ }),

/***/ "./src/modules/gameController.js":
/*!***************************************!*\
  !*** ./src/modules/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameStart: () => (/* binding */ gameStart)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _searchAlgo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchAlgo.js */ \"./src/modules/searchAlgo.js\");\n\r\n\r\n\r\nfunction gameStart() {\r\n    (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)();\r\n    let location = [0,0];\r\n\r\n    let coord = \"\";\r\n    let path = \"\";\r\n\r\n    document.querySelectorAll(\".black-cell\").forEach((cell) => {\r\n        cell.addEventListener(\"click\", () => {\r\n            coord = cell.id.split(\",\").map(function(item) {\r\n                return parseInt(item, 10);\r\n            });\r\n            move();;\r\n        });\r\n    });\r\n\r\n    document.querySelectorAll(\".white-cell\").forEach((cell) => {\r\n        cell.addEventListener(\"click\", () => {\r\n            coord = cell.id.split(\",\").map(function(item) {\r\n                return parseInt(item, 10);\r\n            });\r\n            move();\r\n        });\r\n    });\r\n\r\n    function move() {\r\n        path = (0,_searchAlgo_js__WEBPACK_IMPORTED_MODULE_1__.knightMoves)(location, coord);\r\n        location = coord;\r\n        document.querySelector(\"#path\").innerHTML = path;\r\n    }\r\n}\n\n//# sourceURL=webpack://knight-travails/./src/modules/gameController.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameBoard: () => (/* binding */ createGameBoard)\n/* harmony export */ });\nfunction createGameBoard() {\r\n    let board = \"\";\r\n    let defaultLocation = [0,0];\r\n    \r\n    board += startBlackCell(7);\r\n    board += startWhiteCell(6);\r\n    board += startBlackCell(5);\r\n    board += startWhiteCell(4);\r\n    board += startBlackCell(3);\r\n    board += startWhiteCell(2);\r\n    board += startBlackCell(1);\r\n    board += startWhiteCell(0);\r\n\r\n    document.querySelector('#gameboard').innerHTML = board;\r\n\r\n    placeKnightInitialPos(defaultLocation);\r\n    console.log(`Knight's position [${defaultLocation}]`);\r\n}\r\n\r\nfunction startWhiteCell(index) {\r\n    let cells = \"\";\r\n    for (let i = 0; i < 8; i++) {\r\n        if (i % 2 === 0) {\r\n            cells += `<div class=\"white-cell\" id=\"${[index, i]}\"></div>`;\r\n        } else {\r\n            cells += `<div class=\"black-cell\" id=\"${[index, i]}\"></div>`;\r\n        }\r\n    }\r\n\r\n    return cells;\r\n}\r\n\r\nfunction startBlackCell(index) {\r\n    let cells = \"\";\r\n    for (let i = 0; i < 8; i++) {\r\n        if (i % 2 === 0) {\r\n            cells += `<div class=\"black-cell\" id=\"${[index, i]}\"></div>`;\r\n        } else {\r\n            cells += `<div class=\"white-cell\" id=\"${[index, i]}\"></div>`;\r\n        }\r\n    }\r\n\r\n    return cells;\r\n}\r\n\r\nfunction placeKnightInitialPos(defaultLocation) {\r\n    let knight = document.createElement(\"img\");\r\n    knight.src = \"../src/assets/knight.jpg\";\r\n\r\n    document.getElementById(`${defaultLocation}`).append(knight);\r\n}\n\n//# sourceURL=webpack://knight-travails/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/searchAlgo.js":
/*!***********************************!*\
  !*** ./src/modules/searchAlgo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knightMoves: () => (/* binding */ knightMoves)\n/* harmony export */ });\n/* harmony import */ var _chessSquare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chessSquare.js */ \"./src/modules/chessSquare.js\");\n/* harmony import */ var _displayMoves_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMoves.js */ \"./src/modules/displayMoves.js\");\n\r\n\r\n\r\n//Breadth first search\r\nfunction knightMoves(start, end) {\r\n    _chessSquare_js__WEBPACK_IMPORTED_MODULE_0__.squareRegistry.clear();\r\n\r\n    const origin = (0,_chessSquare_js__WEBPACK_IMPORTED_MODULE_0__.chessSquare)(...start);\r\n    const target = (0,_chessSquare_js__WEBPACK_IMPORTED_MODULE_0__.chessSquare)(...end);\r\n\r\n    const queue = [origin];\r\n    while (!queue.includes(target)) {\r\n        const currentSquare = queue.shift();\r\n\r\n        const enqueueList = currentSquare.possibleKnightMoves();\r\n        enqueueList.forEach((square) => square.setPredecessor(currentSquare));\r\n        queue.push(...enqueueList);\r\n    }\r\n\r\n    const path = [target];\r\n    while (!path.includes(origin)) {\r\n        const prevSquare = path[0].getPredecessor();\r\n        path.unshift(prevSquare);\r\n    }\r\n\r\n    let result = \"\";\r\n\r\n    if ((path.length - 1) < 2) {\r\n        console.log(`The shortest path was ${path.length - 1} move!`);\r\n        result += `<p>The shortest path was ${path.length - 1} move!</p>`;\r\n    } else {\r\n        console.log(`The shortest path was ${path.length - 1} moves!`);\r\n        result += `<p>The shortest path was ${path.length - 1} moves!</p>`;\r\n    }\r\n    \r\n    result += \"<p>The moves were:<p>\";\r\n    console.log(\"The moves were:\");\r\n    path.forEach((square) => {\r\n        setTimeout(() => {\r\n            (0,_displayMoves_js__WEBPACK_IMPORTED_MODULE_1__.moveKnightImg)(square.name())}, \r\n            1000);\r\n        result += `<p>[${square.name()}]</p>`;\r\n        console.log(`[${square.name()}]`);\r\n    });\r\n\r\n    return result;\r\n}\n\n//# sourceURL=webpack://knight-travails/./src/modules/searchAlgo.js?");

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