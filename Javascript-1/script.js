/* ---------------------------------------
1. Pepe desea saber cuál será su calificación final en la materia de Lógica de Programación y
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
- 55% promedio de tres parciales
- 30% Examen Final
- 15% Trabajo final
------------------------------------------ */

// let primerParcial = prompt('¿Cuál fue tu calificación de 0 a 5 en el primer parcial?');

// primerParcial = Number(primerParcial); //String a Number

// let segundoParcial = prompt('¿Cuál fue tu calificación de 0 a 5 en el segundo parcial?');

// segundoParcial = Number(segundoParcial); //String a Number

// let tercerParcial = prompt('¿Cuál fue tu calificación de 0 a 5 en el tercer parcial?');

// tercerParcial = Number(tercerParcial); //String a Number

// let promedioParciales = (primerParcial + segundoParcial + tercerParcial) / 3; // Promedio

// let porcentajeParciales = (promedioParciales * 3) / 8.25; // 55% promedio de tres parciales equivale a 8.25 de 15 si el estudiante obtiene 5 en todo. 

// let examenFinal = prompt('¿Cuál fue tu calificación de 0 a 5 en el examen final?')

// examenFinal = Number(examenFinal);

// let porcentajeExamenFinal = examenFinal / 4.5; // 30% Examen Final equivale a 4.5 de 15 si el estudiante obtiene 5 en todo. 


// let trabajoFinal = prompt('¿Cuál fue tu calificación de 0 a 5 en el trabajo final?');

// trabajoFinal = Number(trabajoFinal);

// let porcentajeTrabajoFinal = trabajoFinal / 2.5; // 15% Trabajo final equivale a 2.5 de 15 si el estudiante obtiene 5 en todo. 


// let promedioFinal = porcentajeParciales + porcentajeTrabajoFinal + porcentajeExamenFinal; // Suma total

// promedioFinal = promedioFinal.toFixed(2); // Redondear el resultado.

// alert(`Tu calificación final es: ${promedioFinal}`);


/* ---------------------------------------
2. Crear un algoritmo en el cual el usuario tenga que adivinar un número. Este número lo
creará el sistema al azar. El usuario tiene solo 10 intentos y el sistema debe mostrar si el
usuario está cerca o lejos de dar con el número programado por el sistema.
------------------------------------------ */

// const numMin = 1;

// const numMax = 50;  

// let numeroRandom = Math.floor(Math.random() * (numMax - numMin)) + numMin;

// alert(numeroRandom);

// for (i = 1; i <= 10; i++) {
//     let numeroUsuario = prompt(`Intento ${i} de 10.
// Adivina el número del 1 al 50: `);
//     numeroUsuario = Number(numeroUsuario);

//     let restaNumeros = Math.abs(numeroRandom - numeroUsuario);

//     if (numeroUsuario === numeroRandom) {
//         alert(`¡Adivinaste! El número es: ${numeroRandom}`);
//         i = 10;
//     } else if (restaNumeros <= 9) {
//         alert('Estás cerca.');
//     } else if (restaNumeros > 9) {
//         alert('Estás lejos.');
//     }
//     if ((i === 10) && (numeroRandom !== numeroUsuario)) {
//         alert(`Se acabaron los intentos, el número era ${numeroRandom}`);
//     }
// }


/* ---------------------------------------
3. Crear un algoritmo que pida x cantidad de números e indique el porcentaje de números
pares y el porcentaje de números impares.
------------------------------------------ */

// let numeroUsuario = prompt('Ingresa un numero: ');

// let numeroUsuario2 = Number(numeroUsuario);

// let conteoPar = 0;
// let conteoImpar = 0;

// while (numeroUsuario2 !== 0) {
//     conteoPar += numeroUsuario2 % 2 === 0;
//     conteoImpar += numeroUsuario2 % 2 === 1;
//     numeroUsuario2 = Math.floor(numeroUsuario2 / 10);
// }

// let porcentajeConteoPar = (conteoPar * 100) / numeroUsuario.length;

// porcentajeConteoPar = Math.round(porcentajeConteoPar);

// let porcentajeConteoImpar = (conteoImpar * 100) / numeroUsuario.length;

// porcentajeConteoImpar = Math.round(porcentajeConteoImpar);

// alert(`En el número ${numeroUsuario} hay ${porcentajeConteoPar}% de numeros pares y ${porcentajeConteoImpar}% de numeros impares.`);