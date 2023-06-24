import { createGameBoard } from "./modules/gameboard.js";

createGameBoard();

function gameStart() {
    let knight = document.createElement("img");
    knight.src = "../src/assets/knight.jpg";

    document.getElementById("0,0").append(knight);
}

gameStart();