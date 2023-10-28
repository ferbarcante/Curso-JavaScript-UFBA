// Elementos HTML
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");

// Variável do contador
let contador = 0;

// Funções para manipular o contador
function increment() {
    contador++;
    counterElement.textContent = contador;
}

function decrement() {
    contador--;
    counterElement.textContent = contador;
}

function reset() {
    contador = 0;
    counterElement.textContent = contador;
}

// Event Listeners
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);