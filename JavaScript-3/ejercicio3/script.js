/* Crear los siguientes juegos:
- Triki
- Ahorcado */

// Ahorcado

// Array con las capitales del mundo
let palabras = ["Nasau", "Bridgetown", "Belmopan", "Sucre", "Brasilia", "Ottawa", "Santiago", "Bogota", "Habana", "Roseau", "Quito", "Washington", "Georgetown", "Tegucigalpa", "Kingston", "Managua", "Asuncion", "Lima", "Caracas", "Montevideo"];

// String vacio para la palabra random seleccionada abajo
let palabra = "";

let maxIntentos = 6;
let erorres = 0;
let adivinadas = [];
let statusPalabra = null;

// Propiedad function que genera un numero 
function palabraRandom() {

    palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
};

function generarButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letra =>
        `
        <button
          class="botonesLetras"
          id='` + letra + `'
          onClick="posibleAdivinar('` + letra + `')"
        >
          ` + letra + `
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

// function actualizarAhorcado() {
//     document.getElementById('ImagenAhorcado').src = './images/' + errores + '.jpg';
// }

function juegoGanado() {
    if (statusPalabra === palabra) {
        document.getElementById('teclado').innerHTML = 'You Won!!!';
    }
}

function juegoPerdido() {
    if (errrores === maxIntentos) {
        document.getElementById('teclaOprimida').innerHTML = `La palabra era: ${palabra}`;
        document.getElementById('teclado').innerHTML = 'Perdiste!!!';
    }
}

function palabraAdivinada() {
    statusPalabra = palabra.split('').map(letra => (adivinadas.indexOf(letra) >= 0 ? letra : " _ ")).join('');

    document.getElementById('teclaOprimida').innerHTML = statusPalabra;
}

function updateErrores() {
    document.getElementById('errores').innerHTML = errores;
}

function reset() {
    errores = 0;
    adivinadas = [];
    document.getElementById('ImagenAhorcado').src = './images/0.jpg';

    palabraRandom();
    palabraAdivinada();
    updateErrores();
    generarButtons();
}

document.getElementById('maxIntentos').innerHTML = maxIntentos;

palabraRandom();

generarButtons();

palabraAdivinada();