import { createGameBoard } from "./gameboard.js";
import { knightMoves } from "./searchAlgo.js";

export function gameStart() {
    createGameBoard();
    let location = [0,0];

    let coord = "";

    document.querySelectorAll(".black-cell").forEach((cell) => {
        cell.addEventListener("click", () => {
            coord = cell.id.split(",").map(function(item) {
                return parseInt(item, 10);
            });
            move();
        });
    });

    document.querySelectorAll(".white-cell").forEach((cell) => {
        cell.addEventListener("click", () => {
            coord = cell.id.split(",").map(function(item) {
                return parseInt(item, 10);
            });
            move();
        });
    });

    function move() {
        knightMoves(location, coord);
        location = coord;
    }
}