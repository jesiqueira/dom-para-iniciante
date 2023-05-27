// const img = document.querySelector("img");

// function callback(event) {
//   console.log(event);
// }
// img.addEventListener("click", callback);

const imgs = document.querySelectorAll("img");

function handleImg(event) {
  console.log(event.target);
  console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
