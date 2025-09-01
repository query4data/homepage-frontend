document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const themeLink = document.getElementById("theme-link");
  const icon = toggleBtn.querySelector("i");

  const switchTheme = () => {
    const theme = themeLink.getAttribute("href");

    if (isDarkTheme(theme)) {
      themeLink.setAttribute("href", "css/light.css");
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      themeLink.setAttribute("href", "css/dark.css");
      icon.classList.replace("fa-sun", "fa-moon");
    }
  };

  // Adiciona evento de clique no botão para alternar o tema
  toggleBtn.addEventListener("click", switchTheme);

  const currentTheme = themeLink.getAttribute("href");
  if (currentTheme.includes("light")) {
    icon.classList.replace("fa-moon", "fa-sun"); // Caso o tema inicial seja claro
  } else {
    icon.classList.replace("fa-sun", "fa-moon"); // Caso o tema inicial seja escuro
  }
});

const isDarkTheme = (theme) => theme.includes("dark");
