const backToTopButton = document.getElementById("back-to-top");
const revealElements = document.querySelectorAll(".reveal");

function toggleBackToTop() {
  if (!backToTopButton) return;
  backToTopButton.classList.toggle("show", window.scrollY > 320);
}

function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.9;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      element.classList.add("is-visible");
    }
  });
}

window.addEventListener("scroll", () => {
  toggleBackToTop();
  revealOnScroll();
});

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
