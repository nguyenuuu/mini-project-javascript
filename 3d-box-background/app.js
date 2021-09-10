
const boxes = document.querySelector(".boxes");
function createBox() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`;
            boxes.appendChild(box);
        }
    }
}
createBox();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    boxes.classList.toggle("big");
    const box = document.querySelectorAll(".box");
    for(let i = 0; i < box.length; i++) {
        box[i].classList.toggle("box-active");
    }
});