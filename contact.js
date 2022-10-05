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
const inputEmail = document.getElementById("inputEmail");
const chooseTopic = document.getElementById("chooseTopic");
const inputMessage = document.getElementById("inputMessage");
const firstName = document.getElementById("inputName");
const inputReturn = document.querySelector(".inputReturn")


button.addEventListener("click", function () {
const yourEmail = inputEmail.value;
const yourTopic = chooseTopic.value;
const yourMessage = inputMessage.value;
const yourName = firstName.value;

if ( yourName === ""){
  firstName.style.border="solid 1px red"
  return alert `Please give us your name`
  }
  firstName.style.border=""
if (yourEmail === ""){
  inputEmail.style.border="solid 1px red"
  return alert `Please give us your Email address`
}
inputEmail.style.border = ""
if (yourTopic === ""){
  chooseTopic.style.border="solid 1px red"
  return alert `Please give us your Topic`
}
chooseTopic.style.border= ""

if (yourMessage === ""){
  inputMessage.style.border="solid 1px red"
  return alert `Please tell us what you need`
}
inputMessage.style.border =""

alert(`hey ${yourName} we will get back to you !!!`)

inputEmail.value = ""
inputMessage.value = ""
chooseTopic.value = ""
firstName.value = ""


return 
});

