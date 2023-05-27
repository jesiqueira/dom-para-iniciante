//Quando o usuário clicar nos links internos do site.
//adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma.
//Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');
// console.log(linksInternos);

function handleLink(event) {
  event.preventDefault();
  // event.target.classList.add("ativo");

  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  });

  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((links) => {
  links.addEventListener("click", handleLink);
});

//selecione todos os elementos do site começancdo a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function handleElemento(event) {
  // console.log(event.currentTarget);
  // event.currentTarget.remove()
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
});
// console.log(todosElementos);

//urtilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

//Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  // console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
