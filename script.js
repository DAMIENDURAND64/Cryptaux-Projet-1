
const button = document.getElementById("buttonSend");



button.addEventListener("click", function () {
    const name = document.getElementById("inputName");
    const yourName = name.value;
    alert(`Hey ${yourName}, we will get back to you shortly !!!`)
});






let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('ul');


link.addEventListener('click', function(def) {
    def.preventDefault()
    burger.classList.toggle('open')
    ul.classList.toggle('open')
})
