function calcular(){

    let plan = document.getElementById("plan").value;
    let edad = parseInt(document.getElementById("edad").value);
    let alcohol = document.getElementById("alcohol").value;
    let lentes = document.getElementById("lentes").value;
    let enfermedad = document.getElementById("enfermedad").value;
    let base = (plan == "A") ? 1200 : 950;
    let total = base;

    if(alcohol == "si"){
        total += base * 0.10;
    }
    if(lentes == "si"){
        total += base * 0.05;
    }
    if(enfermedad == "si"){
        total += base * 0.05;
    }
    if(edad > 40){
        total += base * 0.20;
    }else{
        total += base * 0.10;
    }

    document.getElementById("resultado").innerHTML =
        "Costo de la póliza: $" + total;
}