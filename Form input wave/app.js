const inputEmail = document.querySelector(".email input");
const inputPassword = document.querySelector(".password input");
const labelEmail = document.querySelector(".email label");
const labelPassword = document.querySelector(".password label");
const elementsLabelEmail = document.querySelectorAll(".email label span");
const elementsLabelPassword = document.querySelectorAll(".password label span");

inputEmail.addEventListener("focus", () => {
    labelEmail.classList.add("active");
    elementsLabelEmail.forEach((elementLabelEmail, index) => {
        elementLabelEmail.style.transitionDelay = `${0.4 / elementsLabelEmail.length * index}s`;
    });
});
inputEmail.addEventListener("blur", () => {
    if(inputEmail.value !== "") return;
    labelEmail.classList.remove("active");
});

inputPassword.addEventListener("focus", () => {
    labelPassword.classList.add("active");
    elementsLabelPassword.forEach((elementLabelPassword, index) => {
        elementLabelPassword.style.transitionDelay = `${0.4 / elementsLabelPassword.length * index}s`;
    });
});
inputPassword.addEventListener("blur", () => {
    if(inputPassword.value !== "") return;
    labelPassword.classList.remove("active");
});