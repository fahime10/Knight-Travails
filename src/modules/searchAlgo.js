import { squareRegistry, chessSquare } from "./chessSquare.js";
import { moveKnightImg } from "./displayMoves.js";

//Breadth first search
export function knightMoves(start, end) {
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

    let result = "";

    if ((path.length - 1) < 2) {
        console.log(`The shortest path was ${path.length - 1} move!`);
        result += `<p>The shortest path was ${path.length - 1} move!</p>`;
    } else {
        console.log(`The shortest path was ${path.length - 1} moves!`);
        result += `<p>The shortest path was ${path.length - 1} moves!</p>`;
    }
    
    result += "<p>The moves were:<p>";
    console.log("The moves were:");
    path.forEach((square) => {
        setTimeout(() => {
            moveKnightImg(square.name())}, 
            1000);
        result += `<p>[${square.name()}]</p>`;
    });

    return result;
}