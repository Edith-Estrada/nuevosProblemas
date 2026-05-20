function verRegalo(){

    let dinero = parseFloat(document.getElementById("dinero").value);
    let regalo;

    if(dinero <= 10){
        regalo = "Tarjeta";
    }else if(dinero <= 100){
        regalo = "Chocolates";
    }else if(dinero <= 250){
        regalo = "Flores";
    }else{
        regalo = "Anillo";
    }

    document.getElementById("resultado").innerHTML =
        "Puede comprar: " + regalo;
}