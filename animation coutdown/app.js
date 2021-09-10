const btn = document.querySelector("button");
const time = document.querySelector(".time");
const go = document.querySelector(".go");

let count;



btn.addEventListener("click", () => {
    go.textContent = "GET READY"
    btn.style.opacity = 0;
    btn.style.pointerEvents = "none";
    count = 4;
    var countDown = setInterval(counter, 1000);

    function counter() {
        if (count < 0) {
            go.textContent = "GO";
            btn.style.opacity = 1;
            btn.style.pointerEvents = "all";
            time.textContent = 5;
            clearInterval(countDown);
            return;
        }
        time.textContent = count;
        time.classList.add("time-active");
        time.addEventListener("animationend", () => {
            time.classList.remove("time-active");
        });
        count--;
    }
});