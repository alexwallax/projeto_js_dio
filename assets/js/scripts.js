var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

var blocos = document.getElementsByClassName("bloco");

for (let i = 0; i < blocos.length; i++) {
    blocos[i].addEventListener("mouseover", aplicarEstilo); //quando o mouse passar por cima do elemento, aplica o estilo
    blocos[i].addEventListener("mouseout", removerEstilo); //quando o mouse sai do elemento, aplica o estilo
}

function aplicarEstilo(obj) {
    obj.target.style.border = "5px solid black";
    obj.target.style.background = "Yellow";

}

function removerEstilo(obj) {
    obj.target.style.border = "1px solid white";
    obj.target.style.background = "Chocolate";
}