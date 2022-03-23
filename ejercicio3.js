function pedirFecha() {
    const fechaString = prompt("Introduce tu fecha de nacimiento:");
    const fechaNacimiento = new Date(fechaString);

    if (JSON.stringify(fechaNacimiento) === "null") {
        alert("La fecha introducida no es correcta.");
    } else {
        const fechaActual = new Date();
        const edad = (fechaActual - fechaNacimiento) / (1000 * 3600 * 24 * 365);

        if (edad >= 18) {
            alert('Eres mayor de edad');
        }
        else {
            const diasHastaMayoriaEdad = (18 - edad) * 365;
            alert(`Te quedan ${diasHastaMayoriaEdad.toFixed(0)} días para la mayoría de edad`);
        }
    }
}

pedirFecha();