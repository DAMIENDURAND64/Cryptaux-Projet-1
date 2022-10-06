// Nav and burger menu

let link = document.getElementById("link");
let burger = document.getElementById("burger");
let ul = document.querySelector("ul");

link.addEventListener("click", function (def) {
  def.preventDefault();
  burger.classList.toggle("open");
  ul.classList.toggle("open");
});

// Carousel about them

// FOOTER

const buttonSubscribe = document.getElementById("buttonSubscribe");

buttonSubscribe.addEventListener("click", function () {
  alert("Congrats you subscribe !!!");
});
