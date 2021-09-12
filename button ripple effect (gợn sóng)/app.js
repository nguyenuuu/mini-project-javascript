const button = document.querySelector("button");
function buttonEffect(button) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    var radius = Math.max(button.offsetWidth , button.offsetHeight);
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
    button.addEventListener("click", (e) => {
        circle.style.top = `${e.offsetY - radius / 2}px`;
        circle.style.left = `${e.offsetX - radius / 2}px`
        button.appendChild(circle);
    });
}
buttonEffect(button);