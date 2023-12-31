export function createGameBoard() {
    let board = "";
    let defaultLocation = [0,0];
    
    board += startBlackCell(7);
    board += startWhiteCell(6);
    board += startBlackCell(5);
    board += startWhiteCell(4);
    board += startBlackCell(3);
    board += startWhiteCell(2);
    board += startBlackCell(1);
    board += startWhiteCell(0);

    document.querySelector('#gameboard').innerHTML = board;

    placeKnightInitialPos(defaultLocation);
    console.log(`Knight's position [${defaultLocation}]`);
}

function startWhiteCell(index) {
    let cells = "";
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            cells += `<div class="white-cell" id="${[index, i]}"></div>`;
        } else {
            cells += `<div class="black-cell" id="${[index, i]}"></div>`;
        }
    }

    return cells;
}

function startBlackCell(index) {
    let cells = "";
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            cells += `<div class="black-cell" id="${[index, i]}"></div>`;
        } else {
            cells += `<div class="white-cell" id="${[index, i]}"></div>`;
        }
    }

    return cells;
}

function placeKnightInitialPos(defaultLocation) {
    let knight = document.createElement("img");
    knight.src = "../src/assets/knight.jpg";

    document.getElementById(`${defaultLocation}`).append(knight);
}