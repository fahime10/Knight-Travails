import { createGameBoard } from "./modules/gameboard.js";

createGameBoard();

let knight = document.createElement("img");
knight.src = "../src/assets/knight.jpg";

document.getElementById("0,0").append(knight);