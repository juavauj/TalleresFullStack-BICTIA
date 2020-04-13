/* 2. Los números le cuestan a Pepe pero gracias a sus padres hoy los entiende mejor, el
problema ahora son los números romanos. Pepe necesita saber cómo se escriben estos
números. Ayuda a Pepe creando un algoritmo que le permita ingresar los números que el
desea saber (máximo hasta 1.000) y que el sistema le devuelva su equivalente en número
romano.
Ej1:
Ingresa un número: 10
El número romano es: X */

// Funcion para convertir números arábicos a romanos.
function equivalenteRomano(num) {
    // Variable objeto con los números romanos y sus respectivos equivalentes en números arábicos
    let equivalentes = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    // Variable vacia para ser utlizada más adelante
    let romano = '';

    // Loop for/in. la x recorrerá toda la variable objeto "equivalentes".
    for (let x in equivalentes) {
        //Condición con un tope para el valor ingresado por el usuario. De todos modos, es posible convertir los números mayores a 1000.
        if (num > 1000) {
            console.log('Ingresa un número menor a 1000.');
            return
        } else {
            while (num >= equivalentes[x]) { // Mientras se cumpla que el valor num ingresado por el usuario sea mayor a un value de equivalentes. Ej: num = 15 --> num > X. 
                romano += x; // Asignar a romano el value encontrado en la condición de arriba. Ej: Siguiendo el ejermplo de arriba. romano = X
                num -= equivalentes[x]; // Eliminamos el valor encontrado arriba. Ej: Si num = 15 y X es igual a 10 --> num sera igual a 5.
            } // Al terminar cada numero y su equivalente, el while vuelve a realizar su operación, pero con un nuevo valor en num. Todo esto hasta que num sea menor a cualquier value en equivalentes.
        }
    }
    console.log(romano); // Imprimimos en consola el número convertido.
}