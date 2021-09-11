const textEffect = "We Love Programming!";
const speed = document.querySelector("#number");
const text = document.querySelector(".text h1");
let count = 0;
let prevSpeed = speed.value;
let currSpeed = prevSpeed;

let loop = setInterval(effect, 1000 / currSpeed);
function effect() {
    if(count >= textEffect.length) {
        count = 0;
        text.textContent = "";
    }
    text.textContent += textEffect[count];
    count++;
    // console.log(speed.value)
    currSpeed = speed.value;
    if(currSpeed !== prevSpeed) {
        clearInterval(loop);
        prevSpeed = currSpeed;
        loop = setInterval(effect, 1000 / currSpeed);
    }
}
