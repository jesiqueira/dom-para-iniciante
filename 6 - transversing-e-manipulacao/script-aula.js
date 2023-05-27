// const h1 = document.querySelector("h1");
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// h1.outerHTML = '<p>Novo Titulo com tag p não h1</p>'

//Transversing -> Como navegar pelo DOM, utilizando suas propriedades e métodos

// const lista = document.querySelector('.animais-lista')
// console.log(lista);

// console.log(lista.parentElement); //pai
// console.log(lista.parentElement.parentElement);//pao do pai
// console.log(lista.previousElementSibling);//elemento acima
// console.log(lista.nextElementSibling);//elemento abaixo

// console.log(lista.children);//HTMLCollection com os filhos
// console.log(lista.children[0]);//primeiro filho
// console.log(lista.children[--lista.children.length]); //ultimo filho

// console.log(lista.querySelectorAll('li'));//todos os LI's
// console.log(lista.querySelector('li:last-child')); //ultimo filho

//Manipulando Elementos
//E possível mover elementos no dom com métodos de Node.
// const lista = document.querySelector(".animais-lista");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");

// contato.appendChild(lista)//Move a lista para o final de contato
// contato.insertBefore(lista, titulo) //insere a lista antes de titulo
// contato.removeChild(titulo) //remove titilo de contato
// contato.replaceChildren(lista, titulo)

// Novos Elementos
//Podemos criar novos elementos com o método createElement()

const animais = document.querySelector(".animais");

const novoH1 = document.createElement("h1");
novoH1.innerHTML = "Novo Titulo";
novoH1.classList.add("titulo");

animais.appendChild(novoH1)