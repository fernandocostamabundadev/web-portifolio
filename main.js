// 1. MENU HAMBÚRGUER RESPONSIVO
const menuToggle = document.createElement("div");
menuToggle.className = "menu-toggle";
menuToggle.innerHTML = "☰";
document.querySelector(".header").appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("show");
});

// 2. DARK MODE TOGGLE
const darkToggle = document.createElement("button");
darkToggle.textContent = "🌓";
darkToggle.className = "dark-toggle";
document.querySelector(".header").appendChild(darkToggle)

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// 3. SCROLL SPY (ativa menu conforme rolagem)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// 4. Mantém tema salvo ao recarregar
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
