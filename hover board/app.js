const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
for(let i = 0; i < 500; i++) {
    const container = document.querySelector(".container");
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}
const boxs = document.querySelectorAll(".box");
boxs.forEach(box => {
    box.addEventListener("mousemove", () => {
        let x = Math.floor(Math.random() * 5);
        box.style.background = colors[x];
        box.style.boxShadow = `0 0 5px ${colors[x]}`;
        
    });
    box.addEventListener("mouseout", () => {
        box.style.background = `rgb(29, 29, 29)`;
        box.style.boxShadow = `0 0 5px rgb(29, 29, 29)`;
    });
});