const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
bars.addEventListener("click", () => {
    bars.classList.toggle("bars-active");
    menu.classList.toggle("menu-hidden");
    navLinks.classList.toggle("nav-links-hidden");
});