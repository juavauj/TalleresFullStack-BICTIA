/* 1. Cinco cajeros realizan su jornada laboral de 8 horas diarias. Al trabajar 80 días el
supermercado desea hacerles saber lo siguiente:
- Total de ventas de todos los cajeros
- Quién fue el cajero que vendió más (total de ventas de un solo cajero)
- En qué día se vendió más y quién fue el cajero responsable de ese día
- Mostrar el cajero que menos ventas hizo el día 60
- Mostrar el mejor y el peor cajero del día 30 */




// Objeto que encapsula todo el ejercicio
let cajeros = {
    // Propiedad Array con los 5 cajeros, sus respectivas ganancias y la suma total.
    totalCajeros: [
        { cajero: 1, totalGanancias: [], sumaTotal: 0 },
        { cajero: 2, totalGanancias: [], sumaTotal: 0 },
        { cajero: 3, totalGanancias: [], sumaTotal: 0 },
        { cajero: 4, totalGanancias: [], sumaTotal: 0 },
        { cajero: 5, totalGanancias: [], sumaTotal: 0 },
    ],

    // Propiedad para el total de todos los cajeros
    total: 0,

    // Propiedad function para generar 80 numeros random para los 5 cajeros
    total80dias: function() {
        // Loop con el total de cajeros - 1 para evitar errores
        for (i = 0; i <= this.totalCajeros.length - 1; i++) {
            // Loop para 80 días
            for (j = 1; j <= 80; j++) {
                let numeroRandomDia = function() {
                    // Un rango de 1 a 30.
                    let min = 1;
                    let max = 30;
                    // Formula número random + 3000 simulando un precio cercano a los pesos colombianos.
                    return Math.floor(Math.random() * (max - min) + 1) * 3000;
                };
                // Push de numeros random a propiedad totalCajeros con su respectivo cajero y sus respectivas ganancias
                this.totalCajeros[i].totalGanancias.push(numeroRandomDia())
            };
        };
    },


    // Total ventas de todos los cajeros

    // Propiedad function para la suma total de todas las ganancias de los cajeros 
    sumaTotalCajeros: function() {
        for (i = 0; i <= this.totalCajeros.length - 1; i++) {
            // Éste loop toma los 80 días y realiza cada vez una suma con el anterior resultado de la suma
            for (x = 0; x <= 79; x++) {
                this.totalCajeros[i].sumaTotal += this.totalCajeros[i].totalGanancias[x];
            }
            this.total += this.totalCajeros[i].sumaTotal
        };
    },


    // Quién fue el cajero que vendió más (total de ventas de un solo cajero)

    // Propiedad function para el cajero con mayores ventas
    cajeroGanador: function() {
        let sumasTotales = [];
        for (i = 0; i <= this.totalCajeros.length - 1; i++) {
            sumasTotales.push(this.totalCajeros[i].sumaTotal);
        };
        console.log(sumasTotales);
        let mayor = Math.max(...sumasTotales);
        let posicion = sumasTotales.indexOf(mayor) + 1;

        console.log(`El cajero #${posicion} fue el que vendió más con un total de $${mayor}.`);
    },

    // En qué día se vendió más y quién fue el cajero responsable de ese día

    diaMenoresMayoresVentas: function() {

        let cajeroConMayorVentaDia = [];

        let arrayDiaMayoresVentas = [];

        for (i = 0; i <= 79; i++) {

            // simplificar esto en la medida de lo posible
            arrayDiaMayoresVentas.push(this.totalCajeros[0].totalGanancias[i] + this.totalCajeros[1].totalGanancias[i] + this.totalCajeros[2].totalGanancias[i] + this.totalCajeros[3].totalGanancias[i] + this.totalCajeros[4].totalGanancias[i]);
        }

        let mayor = Math.max(...arrayDiaMayoresVentas);
        let posicionDia = arrayDiaMayoresVentas.indexOf(mayor);

        for (i = 0; i <= this.totalCajeros.length - 1; i++) {
            cajeroConMayorVentaDia.push(this.totalCajeros[i].totalGanancias[posicionDia]);
        }

        let mayorCajero = Math.max(...cajeroConMayorVentaDia);

        let mayorCajeroPosicion = cajeroConMayorVentaDia.indexOf(mayorCajero) + 1;

        console.log(`El día de mayores ventas fue el ${posicionDia}. El cajero #${mayorCajeroPosicion} realizó las mayores ventas con $${this.totalCajeros[mayorCajeroPosicion - 1].totalGanancias[posicionDia]} de un total de $${mayor}.`);

    },

    // Mostrar el cajero que menos ventas hizo el día 60

    menorVentasCajero60: function() {
        let arrayMenosVentas60 = [];

        for (i = 0; i <= this.totalCajeros.length - 1; i++) {
            arrayMenosVentas60.push(this.totalCajeros[i].totalGanancias[59]);
        }

        let menosVentas60 = Math.min(...arrayMenosVentas60);
        let posicionMenosVentas60 = arrayMenosVentas60.indexOf(menosVentas60) + 1;

        console.log(`El cajero con menores ventas en el día 60 fue el #${posicionMenosVentas60} con $${menosVentas60}`);

    },

    // Mostrar el mejor y el peor cajero del día 30

    mejorYPeorCajero30: function() {
        let arrayMenosVentas30 = [];
        let arrayMasVentas30 = [];

        for (i = 0; i <= this.totalCajeros.length - 1; i++) {
            arrayMenosVentas30.push(this.totalCajeros[i].totalGanancias[29]);
        }

        for (i = 0; i <= this.totalCajeros.length - 1; i++) {
            arrayMasVentas30.push(this.totalCajeros[i].totalGanancias[29]);
        }

        let menosVentas30 = Math.min(...arrayMenosVentas30);
        let posicionMenosVentas30 = arrayMenosVentas30.indexOf(menosVentas30) + 1;

        let masVentas30 = Math.max(...arrayMasVentas30);
        let posicionMasVentas30 = arrayMasVentas30.indexOf(masVentas30) + 1;

        console.log(`El mejor cajero del día 30 fue el #${posicionMasVentas30} con $${masVentas30} y el peor fue el #${posicionMenosVentas30} con $${menosVentas30}`);

    }










}