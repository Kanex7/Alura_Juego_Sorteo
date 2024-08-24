let intentos = 0;
let numeroSecreto = 0;
let numberList = [];
let numberMax = 10;



function agregarTexto (elemento, texto) {
    let elementoAModificar = document.querySelector(elemento);
    elementoAModificar.innerHTML = texto;
    return;
}

function intentoUser() {
    let nroUser = parseInt(document.getElementById('numberUser').value);

    if (nroUser == numeroSecreto) {
        agregarTexto('p', `Ganaste! Lo lograste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
        document.getElementById("intentar").setAttribute('disabled', true);
    } else {
        if (nroUser>numeroSecreto) {
            agregarTexto('p', "Ese no es, el nro es menor");
        } else {
            agregarTexto('p', "Ese no es, el nro es mayor");
        }
        intentos++;
        cleanBox();
    }
    return;
}

function cleanBox(){
    document.querySelector('#numberUser').value = '';
} 

function secretNumber() {
    let generatedNumber = Math.floor(Math.random()*numberMax)+1;
    console.log(generatedNumber);
    console.log(numberList);
    if (numberList.length == numberMax){
        agregarTexto('p', "Ya no quedan numeros posibles");
        document.getElementById("intentar").setAttribute('disabled', true);
    } else {
        if (numberList.includes(generatedNumber)) {
            return secretNumber();
        } else {
            numberList.push(generatedNumber);
            return generatedNumber;
        }

    }

}

function newGame(){
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById("intentar").removeAttribute('disabled');
    cleanBox();
    start();
    //document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function start() {
    agregarTexto('h1', "The Secret Number");
    agregarTexto('p', `Pick a number 1-${numberMax}`);
    numeroSecreto = secretNumber();
    intentos = 1;
}

start();


/*
//ANTES
let titulo = document.querySelector('h1');
titulo.innerHTML = "The Secret Number";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Pick a number 1-10";
*/