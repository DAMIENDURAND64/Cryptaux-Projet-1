// Nav and burger menu

let link = document.getElementById("link");
let burger = document.getElementById("burger");
let ul = document.querySelector("ul");

link.addEventListener("click", function (def) {
  def.preventDefault();
  burger.classList.toggle("open");
  ul.classList.toggle("open");
});

// LIVE-CRYPTO - Declaration variables

let displayBitcoin = document.getElementById("bitcoin-container-click");
let logoBitcoin = document.getElementById("bitcoin-logo-on-graph");
let graphBitcoin = document.getElementById("bitcoin-image-graph");
let colorValueBitcoin = document.getElementById("bitcoin-color-value");

let displayEthereum = document.getElementById("ethereum-container-click");
let logoEthereum = document.getElementById("ethereum-logo-on-graph");
let graphEthereum = document.getElementById("ethereum-image-graph");
let colorValueEthereum = document.getElementById("ethereum-color-value");

let displayRipple = document.getElementById("ripple-container-click");
let logoRipple = document.getElementById("ripple-logo-on-graph");
let graphRipple = document.getElementById("ripple-image-graph");
let colorValueRipple = document.getElementById("ripple-color-value");

let displayLitecoin = document.getElementById("litecoin-container-click");
let logoLitecoin = document.getElementById("litecoin-logo-on-graph");
let graphLitecoin = document.getElementById("litecoin-image-graph");
let colorValueLitecoin = document.getElementById("litecoin-color-value");

let displayStellar = document.getElementById("stellar-container-click");
let logoStellar = document.getElementById("stellar-logo-on-graph");
let graphStellar = document.getElementById("stellar-image-graph");
let colorValueStellar = document.getElementById("stellar-color-value");

let displayCardano = document.getElementById("cardano-container-click");
let logoCardano = document.getElementById("cardano-logo-on-graph");
let graphCardano = document.getElementById("cardano-image-graph");
let colorValueCardano = document.getElementById("cardano-color-value");

// LIVE-CRYPTO - Events on click

displayBitcoin.addEventListener("click", function (def) {
  logoBitcoin.classList.toggle("name-unrevealed-container");
  graphBitcoin.classList.toggle("image-unselected-graph");
  displayBitcoin.classList.toggle("crypto-bloc-unselected");
  colorValueBitcoin.classList.toggle("positive-evolution");
});

displayEthereum.addEventListener("click", function (def) {
  logoEthereum.classList.toggle("name-revealed-container");
  logoEthereum.classList.toggle("name-unrevealed-container");
  graphEthereum.classList.toggle("image-selected-graph");
  graphEthereum.classList.toggle("image-unselected-graph");
  displayEthereum.classList.toggle("crypto-bloc-selected");
  displayEthereum.classList.toggle("crypto-bloc-unselected");
  colorValueEthereum.classList.toggle("positive-evolution");
});

displayRipple.addEventListener("click", function (def) {
  logoRipple.classList.toggle("name-revealed-container");
  logoRipple.classList.toggle("name-unrevealed-container");
  graphRipple.classList.toggle("image-selected-graph");
  graphRipple.classList.toggle("image-unselected-graph");
  displayRipple.classList.toggle("crypto-bloc-selected");
  displayRipple.classList.toggle("crypto-bloc-unselected");
  colorValueRipple.classList.toggle("negative-evolution");
});

displayLitecoin.addEventListener("click", function (def) {
  logoLitecoin.classList.toggle("name-revealed-container");
  logoLitecoin.classList.toggle("name-unrevealed-container");
  graphLitecoin.classList.toggle("image-selected-graph");
  graphLitecoin.classList.toggle("image-unselected-graph");
  displayLitecoin.classList.toggle("crypto-bloc-selected");
  displayLitecoin.classList.toggle("crypto-bloc-unselected");
  colorValueLitecoin.classList.toggle("negative-evolution");
});

displayStellar.addEventListener("click", function (def) {
  logoStellar.classList.toggle("name-revealed-container");
  logoStellar.classList.toggle("name-unrevealed-container");
  graphStellar.classList.toggle("image-selected-graph");
  graphStellar.classList.toggle("image-unselected-graph");
  displayStellar.classList.toggle("crypto-bloc-selected");
  displayStellar.classList.toggle("crypto-bloc-unselected");
  colorValueStellar.classList.toggle("negative-evolution");
});
displayCardano.addEventListener("click", function (def) {
  logoCardano.classList.toggle("name-revealed-container");
  logoCardano.classList.toggle("name-unrevealed-container");
  graphCardano.classList.toggle("image-selected-graph");
  graphCardano.classList.toggle("image-unselected-graph");
  displayCardano.classList.toggle("crypto-bloc-selected");
  displayCardano.classList.toggle("crypto-bloc-unselected");
  colorValueCardano.classList.toggle("positive-evolution");
});

// Test function to reduce js

// function showBitcoin(cryptoNameMaj, cryptoNameMin) {
//     let displaycryptoNameMaj = 'cryptoNameMin-container-click';
//     console.log(displaycryptoNameMaj)
//     let logocryptoNameMaj = document.getElementById('cryptoNameMin-logo-on-graph');
//     let graphcryptoNameMaj = document.getElementById('cryptoNameMin-image-graph');
//     let colorValuecryptoNameMaj = document.getElementById('cryptoNameMin-color-value');
// }

// console.log(showBitcoin(Bitcoin, bitcoin))

// FOOTER

const buttonSubscribe = document.getElementById("buttonSubscribe");
const emailAddress = document.getElementById("emailAddress");

buttonSubscribe.addEventListener("click", function () {
  if (emailAddress.value) {
    return alert("Congrats you subscribe !!!");
  }

  return alert("Sorry is not a valid adress ...");
});
console.log(buttonSubscribe);
