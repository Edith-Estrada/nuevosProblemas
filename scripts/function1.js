function verificarVoto() {
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = document.getElementById("resultado");
    if (isNaN(edad)) {
        resultado.innerHTML = "Por favor ingrese una edad válida.";
        resultado.style.color = "orange";
        return;
    }

    if (edad >= 18) {
        resultado.innerHTML = "Es mayor de edad y sí puede votar.";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Es menor de edad y no puede votar.";
        resultado.style.color = "red";
    }
}