// Variáveis salvas
const inicioLink = document.querySelector('a[href="#inicio"]');
const especialidadesLink = document.querySelector('a[href="#especialidades"]');
const sobreLink = document.querySelector('a[href="#sobre"]');
const projetosLink = document.querySelector('a[href="#projetos"]');
const contatoLink = document.querySelector('a[href="#contato"]');

//botão de contato do menu
/*
const botaoContato = document.querySelector(".contact-button");

botaoContato.addEventListener("click", () => {
  e.preventDefault();
  contato.scrollIntoView({
    behavior: "smooth",
  });
});
*/

// ação dos botões da pagina
// O comportamento padrão dos links de âncora já faz a rolagem.
// O código abaixo seria para navegar para outras páginas, o que não parece ser o caso aqui.
// Se a intenção for rolagem suave, o CSS `scroll-behavior: smooth;` no `html` é mais simples.
// Por enquanto, vou comentar para evitar comportamento inesperado.
/*
inicioLink.addEventListener("click", () => {
  // window.location.href = "index.html";
});

especialidadesLink.addEventListener("click", () => {
  // window.location.href = "especialidades.html";
});

sobreLink.addEventListener("click", () => {
  // window.location.href = "sobre.html";
});

projetosLink.addEventListener("click", () => {
  // window.location.href = "projetos.html";
});
*/

// --- CÓDIGO DO BOTÃO "VOLTAR AO TOPO" ---
const backToTopButton = document.getElementById("back-to-top");

// Função que mostra ou esconde o botão
function toggleBackToTop() {
  // Define a altura de rolagem para mostrar o botão (ex: após 300px)
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
    setTimeout(() => (backToTopButton.style.opacity = "1"), 10);
  } else {
    backToTopButton.style.opacity = "0";
    setTimeout(() => (backToTopButton.style.display = "none"), 300); // Corresponde à transição do CSS
  }
}

// Evento de rolagem (scroll)
window.addEventListener("scroll", toggleBackToTop);

// Evento de clique para rolar suavemente para o topo
backToTopButton.addEventListener("click", function (e) {
  e.preventDefault(); // Impede o comportamento padrão de link
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Rolagem suave
  });
});
