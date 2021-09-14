window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            cards.forEach(card => {
                card.classList.remove("large");
            });
            cards[index].classList.add("large");
        });
    });
});