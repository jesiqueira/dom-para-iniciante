const animais = document.getElementById('animais')

// console.log(animais.innerText);

const primeiraUl = document.querySelector('ul')
// console.log(primeiraUl);


const linkInterno = document.querySelector('[href^="#"]')
// console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img')
// console.log(animaisImg[1]);

const gridSectionHtml = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section')

// console.log(gridSectionHtml);
// console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(item);
})


const arrayGrid = Array.from(gridSectionHtml)


arrayGrid.forEach(function(item){
    console.log(item);
})