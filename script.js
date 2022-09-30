const button = document.getElementById("buttonSend");



button.addEventListener("click", function () {
    const name = document.getElementById("inputName");
    const yourName = name.value;
    alert(`Hey ${yourName}, we will get back to you shortly !!!`)
});
