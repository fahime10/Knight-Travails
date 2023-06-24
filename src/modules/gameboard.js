export function createGameBoard() {
    let board = "";
    
    for (let i = 0; i < 4; i++) {
        board += startWhiteCell();
        board += startBlackCell();
    }

    document.querySelector('#gameboard').innerHTML = board;
}

function startWhiteCell(board) {
    let cells = "";
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            cells += "<div class=white-cell></div>";
        } else {
            cells += "<div class=black-cell></div>";
        }
    }

    return cells;
}

function startBlackCell(board) {
    let cells = "";
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            cells += "<div class=black-cell></div>";
        } else {
            cells += "<div class=white-cell></div>";
        }
    }

    return cells;
}