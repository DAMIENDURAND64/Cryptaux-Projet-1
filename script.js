let displayBitcoin = document.getElementById('bitcoin-container-click');
let logoBitcoin = document.getElementById('bitcoin-logo-on-graph')
let graphBitcoin = document.getElementById('bitcoin-image-graph')
let choosingBlocBitcoin = document.getElementById('bitcoin-container-click')

displayBitcoin.addEventListener('click', function (def) {
    logoBitcoin.classList.toggle('name-revealed-container');
    logoBitcoin.classList.toggle('name-unrevealed-container');
    graphBitcoin.classList.toggle('image-selected-graph');
    graphBitcoin.classList.toggle('image-unselected-graph');

})
