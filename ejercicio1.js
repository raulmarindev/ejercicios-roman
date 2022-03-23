function devolverDiaSemana(numDia) {
    switch (numDia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "valor erróneo";
    }
    //console.log(numDia);
}

function devolverNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generar10DiasAleatorios() {
    for (let i = 0; i < 7; i++) {
        const numero = devolverNumeroAleatorio(1, 7);
        const nombreDia = devolverDiaSemana(numero);
        console.log(nombreDia);
    }
}