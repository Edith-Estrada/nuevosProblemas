function calcularBono(){

    let a = parseInt(document.getElementById("antiguedad").value);
    let bono;

    if(a >= 1 && a <= 5){
        bono = a * 100;
    }else{
        bono = 1000;
    }

    document.getElementById("resultado").innerHTML =
        "El bono es: $" + bono;
}