console.log("Interface v2.0 carregada com sucesso!");

const backToTopButton = document.getElementById("back-to-top");
const revealElements = document.querySelectorAll(".reveal");
let numbersAnimated = false; // Garante que a animação ocorra apenas uma vez

function toggleBackToTop() {
  if (!backToTopButton) return;
  backToTopButton.classList.toggle("show", window.scrollY > 320);
}

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85; // Ajuste leve para melhor timing

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      element.classList.add("is-visible");

      // Inicia o contador apenas se ainda não foi executado
      if (element.classList.contains("hero-content") && !numbersAnimated) {
        numbersAnimated = true;
        animateNumbers();
      }
    }
  });
}

function animateNumbers() {
  const numbers = document.querySelectorAll(".metric-number");

  const updateValues = () => {
    let finished = true;
    numbers.forEach((num) => {
      const target = +num.getAttribute("data-target");
      const current = +num.innerText;
      const increment = target / 40; // Suavidade da subida

      if (current < target) {
        num.innerText = Math.ceil(current + increment);
        finished = false;
      } else {
        num.innerText = target;
      }
    });

    if (!finished) {
      requestAnimationFrame(updateValues);
    }
  };

  updateValues();
}

// Uso de throttle ou passive listener para melhor performance de scroll
window.addEventListener(
  "scroll",
  () => {
    toggleBackToTop();
    revealOnScroll();
  },
  { passive: true },
);

if (backToTopButton) {
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Estado inicial
toggleBackToTop();
revealOnScroll();
// Fim Estado inicial
