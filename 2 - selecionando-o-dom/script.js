//Retorne no cosole todas as imagens do site

const imagens = document.getElementsByTagName('img')
const img  = document.querySelectorAll('img')
console.log(img);


//Retorne no console apenas as imagens que começaram com a palavras imagem

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagensAnimais);

//Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('a[href^="#"]')
console.log(linksInterno);

//Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2);

//selecione o último p do site
const paragrafo = document.querySelectorAll('p')
console.log(paragrafo[paragrafo.length - 1]);