// Nav and burger menu

let link = document.getElementById("link");
let burger = document.getElementById("burger");
let drawer = document.querySelector(".drawer-menu");

link.addEventListener("click", function (def) {
  def.preventDefault();
  burger.classList.toggle("open");
  drawer.classList.toggle("open-drawer");
});

// Carousel ABOUT THEM

// // FOOTER

const buttonSubscribe = document.getElementById("buttonSubscribe");
const emailAddress = document.getElementById("emailAddress");

buttonSubscribe.addEventListener("click", function () {
  if (emailAddress.value) {
    return alert("Congrats you subscribe !!!");
  }

  return alert("Sorry is not a valid adress ...");
});
