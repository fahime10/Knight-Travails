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

    let coordArray = fillCoordArray();

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

function fillCoordArray() {
    let coordArray = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            coordArray.push([i, j]);
        }
    }
    return coordArray;
}

function placeKnightInitialPos(defaultLocation) {
    let knight = document.createElement("img");
    knight.src = "../src/assets/knight.jpg";

    document.getElementById(`${defaultLocation}`).append(knight);
}