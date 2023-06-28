import { squareRegistry, chessSquare } from "./chess-square.js";

//Breadth first search
export const knightMoves = (start , end) => {
    squareRegistry.clear();

    const origin = chessSquare(...start);
    const target = chessSquare(...end);

    const queue = [origin];
    while (!queue.includes(target)) {
        const currentSquare = queue.shift();

        const enqueueList = currentSquare.possibleKnightMoves();
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }

    const path = [target];
    while (!path.includes(origin)) {
        const prevSquare = path[0].getPredecessor();
        path.unshift(prevSquare);
    }

    let squareCoord = [];
    path.forEach((square) => {
        squareCoord.push(square.name());
    });
}