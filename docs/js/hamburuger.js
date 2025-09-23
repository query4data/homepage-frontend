const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Opcional: fecha ao clicar em um link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    mobileMenu.classList.remove("open");
  }
});
