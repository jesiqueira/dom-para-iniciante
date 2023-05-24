//Mostre no console cada parágrafo do site
const paragrafo = document.querySelectorAll('p')
// console.log(paragrafo);

//mostre o texto dos parágrafos no console


paragrafo.forEach((item) =>  console.log(item.innerText))