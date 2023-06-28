const squareRegistry = new Map();

const chessSquare = (x, y) => {
    const xPos = x;
    const yPos = y;
    let predecessor;

    // Array used to determine possile coordinate positions
    // and useful to avoid undefined values (out of the board)
    const arrayKnightMoves = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ];

    const getPredecessor = () => predecessor;

    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor;
    }

    // Function to assign a coordinate name
    const name = () => `${x},${y}`;

    // Function to determine possible moves
    const possibleKnightMoves = () => {
        return arrayKnightMoves
            .map((offset) => newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined);
    }

    const newSquareFrom = (xOffs, yOffs) => {
        const [newX, newY] = [xPos + xOffs, yPos + yOffs];

        if (0 <= newX && newX < 8 && 0 <= newY && newY < 8) {
            return chessSquare(newX, newY);
        }
    }

    if (squareRegistry.has(name())) {
        return squareRegistry.get(name());
    } else {
        const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves }
        squareRegistry.set(name(), newSquare);
        return newSquare;
    }
}

export { squareRegistry, chessSquare };