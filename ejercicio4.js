// [2, 3, 6, 2]

function multiplicar(numeros) {
    return numeros.reduce((acumulador, valorActual) => {
        return acumulador * valorActual;
    }, 1);
}

console.log(multiplicar([2, 3, 6, 2]));

function quitarVocales(frase) {
    let letras = frase.split('');
    letras = letras.filter((letra) => {
        // si la letra es vocal => devuelvo false
        if ('aeiouáéíóú'.includes(letra)) {
            return false;
        }

        // si no es vocal => devuelvo true
        return true;
    });

    return letras.join('');
}

console.log(quitarVocales('Hola Me LLamo Raúl'));

function ordernarNombres(nombres) {

    nombres.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    });
    return nombres;
}

console.log(ordernarNombres(["Pepe", "Juan", "Pablo", "Alberto"]));