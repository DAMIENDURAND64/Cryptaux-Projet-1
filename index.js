// // Nav and burger menu

let link = document.getElementById("link");
let burger = document.getElementById("burger");
let drawer = document.querySelector(".drawer-menu");

link.addEventListener("click", function (def) {
  def.preventDefault();
  burger.classList.toggle("open");
  drawer.classList.toggle("open-drawer");
});

// LIVE-CRYPTO

// for color of numbs
const gridCryptoDiv = document.querySelectorAll(".crypto-bloc");

const allParagraphGridCrypto = Array.from(gridCryptoDiv).map(
  (div) => div.lastElementChild
);

function valueColoration(p) {
  if (p.innerText.includes("-")) {
    p.classList.add("negative-evolution");
  }
  if (p.innerText.includes("+")) {
    p.classList.add("positive-evolution");
  }
}

allParagraphGridCrypto.forEach((p) => valueColoration(p));

// for selecting the crypto

const displayGraph = document.querySelectorAll(".single-crypto-container");
let index = 0;

gridCryptoDiv.forEach((selector) => {
  selector.addEventListener("click", () => {
    if (selector.classList.contains("active-crypto-button")) {
      return;
    } else {
      selector.classList.add("active-crypto-button");
    }

    index = selector.getAttribute("data-anim");

    for (i = 0; i < gridCryptoDiv.length; i++) {
      if (gridCryptoDiv[i].getAttribute("data-anim") != index) {
        gridCryptoDiv[i].classList.remove("active-crypto-button");
      }
    }

    for (j = 0; j < displayGraph.length; j++) {
      if (displayGraph[j].getAttribute("data-anim") == index) {
        displayGraph[j].classList.add("active-crypto-contenu");
      } else {
        displayGraph[j].classList.remove("active-crypto-contenu");
      }
    }
  });
});

// // FOOTER

const buttonSubscribe = document.getElementById("buttonSubscribe");
const emailAddress = document.getElementById("emailAddress");

buttonSubscribe.addEventListener("click", function () {
  if (emailAddress.value) {
    return alert("Congrats you subscribe !!!");
  }

  return alert("Sorry is not a valid adress ...");
});
