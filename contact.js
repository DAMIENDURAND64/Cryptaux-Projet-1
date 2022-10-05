// Nav and burger menu

let link = document.getElementById("link");
let burger = document.getElementById("burger");
let ul = document.querySelector("ul");

link.addEventListener("click", function (def) {
  def.preventDefault();
  burger.classList.toggle("open");
  ul.classList.toggle("open");
});

// Contact them

const button = document.getElementById("buttonSend");
const inputName = document.getElementById("inputName");
const inputEmail = document.getElementById("inputEmail")
const chooseTopic = document.getElementById("chooseTopic")


button.addEventListener("click", function () {
  if ()
  const name = document.getElementById("inputName");
  const yourName = name.value;
  alert(`Hey ${yourName}, we will get back to you shortly !!!`);
});


