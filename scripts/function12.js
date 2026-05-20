function calcularSueldo(){

    let h = parseInt(document.getElementById("horas").value);
    let p = parseFloat(document.getElementById("pago").value);
    let sueldo = 0;

    if(h > 50){
        document.getElementById("resultado").innerHTML =
            "No está permitido trabajar más de 50 horas";
        return;
    }
    if(h <= 40){
        sueldo = h * p;
    }else if(h <= 45){
        sueldo = (40 * p) + ((h - 40) * p * 2);
    }else{
        sueldo = (40 * p) + (5 * p * 2) + ((h - 45) * p * 3);
    }

    document.getElementById("resultado").innerHTML =
        "Sueldo semanal: $" + sueldo;
}