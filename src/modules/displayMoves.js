export function moveKnightImg(id) {
    document.querySelector("img").remove();

    let knight = document.createElement("img");
    knight.src = "../src/assets/knight.jpg";
    document.getElementById(`${id}`).append(knight);
}