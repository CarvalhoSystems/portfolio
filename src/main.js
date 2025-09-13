// Variantes salvas 
const inicio = document.querySelector("#inicio");
const especialidades = document.querySelector("#especialidades");
const sobre = document.querySelector("#sobre");
const projetos = document.querySelector("#projetos");
const contato = document.querySelector("#contato");




//botão de contato do menu

const botaoContato = document.querySelector(".contact-button");

botaoContato.addEventListener("click",() =>{
    e.preventDefault();
  contato.scrollIntoView({
    behavior: "smooth",
  });
});


// ação dos botões da pagina 
inicio.addEventListener("click",() =>{
    window.location.href = "index.html";
});

especialidades.addEventListener("click",() =>{
    window.location.href = "especialidades.html";
});

sobre.addEventListener("click",() =>{
    window.location.href = "sobre.html";
});

projetos.addEventListener("click",() =>{
    window.location.href = "projetos.html";
});



