const love = document.querySelector(".love");
const number = document.querySelector(".number");
let count = 0;
love.addEventListener("dblclick", (e) => {
    const heart = document.createElement("span");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    heart.style.top = `${e.offsetY}px`;
    heart.style.left = `${e.offsetX}px`;
    love.appendChild(heart);
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
    number.textContent = ++count;
});