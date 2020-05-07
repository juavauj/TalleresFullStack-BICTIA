/* Crear los siguientes juegos:
- Triki
- Ahorcado */

// Ahorcado

// Array con las capitales del mundo
let palabras = ["nasau", "bridgetown", "belmopan", "sucre", "brasilia", "ottawa", "santiago", "bogota", "habana", "roseau", "quito", "washington", "georgetown", "tegucigalpa", "kingston", "managua", "asuncion", "lima", "caracas", "montevideo"];

// String vacio para la palabra random seleccionada abajo
let palabra = "";

let maxIntentos = 6;
let erorres = 0;
let adivinadas = [];
let statusPalabra = null;

// Propiedad function que genera un numero 
function palabraRandom() {

    palabra = palabras[Math.floor(Math.random() * palabras.length)];
};

function generarButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter + `'
          onClick="posibleAdivinar('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');

    document.getElementById('teclado').innerHTML = buttonsHTML;
};

function posibleAdivinar(letraEscogida) {
    adivinadas.indexOf(letraEscogida) === -1 ? adivinadas.push(letraEscogida) : null;
    document.getElementById(letraEscogida).setAttribute('disabled', true);

    if (palabra.indexOf(letraEscogida) >= 0) {
        palabraAdivinada();
        juegoGanado();
    } else if (palabra.indexOf(letraEscogida) === -1) {
        errores++;
        updateErrores();
        juegoPerdido();
        actualizarAhorcado();
    }
};

function actualizarAhorcado() {
    document.getElementById('imagenAhorcado').src = 'img/' + errores + '.png';
}

function juegoGanado() {
    if (statusPalabra === palabra) {
        document.getElementById('teclado').innerHTML = 'Ganaste!!!';
    }
}

function juegoPerdido() {
    if (errores === maxIntentos) {
        document.getElementById('teclaOprimida').innerHTML = `La capital era: ${palabra}`;
        document.getElementById('teclado').innerHTML = 'Perdiste!!!';
    }
}

function palabraAdivinada() {
    statusPalabra = palabra.split('').map(letra => (adivinadas.indexOf(letra) >= 0 ? letra : " _ ")).join('');

    document.getElementById('teclaOprimida').innerHTML = statusPalabra;
}

function updateErrores() {
    document.getElementById('fallidos').innerHTML = errores;
}

function reset() {
    errores = 0;
    adivinadas = [];
    document.getElementById('imagenAhorcado').src = 'img/0.png';

    palabraRandom();
    palabraAdivinada();
    updateErrores();
    generarButtons();
}

document.getElementById('maxIntentos').innerHTML = maxIntentos;

palabraRandom();
palabraAdivinada();
updateErrores();
generarButtons();