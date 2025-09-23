const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const modalButtons = document.querySelectorAll(".modal-btn-primary");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.modal;
    const modal = document.getElementById(id);
    modal.classList.remove("modal-hidden");
    modal.classList.add("show");
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal-close")
    ) {
      modal.classList.remove("show");
      modal.classList.add("modal-hidden");
    }
  });
});

modalButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    modals.forEach((modal) => {
      modal.classList.remove("show");
      modal.classList.add("modal-hidden");
    });

    // Rola suavemente até a seção de contato
    const contato = document.querySelector("#contato");
    contato.scrollIntoView({ behavior: "smooth" });

    // Atualiza a URL com a âncora
    history.pushState(null, "", "#contato");
  });
});
