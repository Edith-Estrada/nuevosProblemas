function calcularCosto(){

    let alumnos = parseInt(document.getElementById("alumnos").value);
    let costo;
    if(alumnos > 100){
        costo = 20;
    }else if(alumnos >= 50){
        costo = 35;
    }else if(alumnos >= 20){
        costo = 40;
    }else{
        costo = 70;
    }

    document.getElementById("resultado").innerHTML =
        "Costo por alumno: $" + costo;
}