function calcularFactorial(numero) {
    if (numero === 1) {
        return 1;
    }

    return numero * calcularFactorial(numero - 1);
}

let numero;
do {
    // lanzar un prompt que pida al usuario un número
    numero = prompt("Introduce un número para calcular su factorial");
    numero = parseInt(numero);

    // mientras número no válido volver a pedir 
} while (isNaN(numero));

// llamar a una función recursiva que escriba en la consola el producto factorial del número
let factorial = calcularFactorial(numero);
alert("El factorial es :" + factorial);