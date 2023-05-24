const menu = document.querySelector(".menu");
menu.classList.add("Ativo");
menu.classList.toggle("Azul");
console.log(menu.classList);

if (menu.classList.contains("Azul")) {
  console.log("Contém azul");
}

const img = document.querySelector("img");

const srcImg = img.getAttribute("alt");

img.setAttribute('alt', 'É uma rapasa')

const possuiAlt = img.hasAttribute('alt')

console.log(possuiAlt)

console.log(srcImg)