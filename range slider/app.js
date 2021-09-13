const circle = document.querySelector(".circle");
const percentColor = document.querySelector(".percent-color");
const rangeSlide = document.querySelector(".range-slide");
const number = document.querySelector(".number");

rangeSlide.addEventListener("click", (e) => {
    let percent = e.offsetX / rangeSlide.offsetWidth * 100;
    circle.style.left = `${percent}%`;
    percentColor.style.width = `${percent}%`;
    number.style.left = `${percent}%`;
    number.textContent = Math.floor(percent);
});

let mouseDown = false;
rangeSlide.addEventListener("mousedown", () => {
    mouseDown = true;
});
rangeSlide.addEventListener("mousemove", (e) => {
    if(!mouseDown) return;
    let percent = e.offsetX / rangeSlide.offsetWidth * 100;
    circle.style.left = `${percent}%`;
    percentColor.style.width = `${percent}%`;
    number.style.left = `${percent}%`;
    number.textContent = Math.ceil(percent);
});
rangeSlide.addEventListener("mouseup", () => {
    mouseDown = false;
});
