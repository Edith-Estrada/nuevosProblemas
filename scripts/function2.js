function calcularSueldo(){

    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);

    let sueldo;

    if(horas <= 40){
        sueldo = horas * pago;
    }else{
        sueldo = (40 * pago) + ((horas - 40) * pago * 2);
    }

    document.getElementById("resultado").innerHTML =
        "Sueldo semanal: $" + sueldo;
}