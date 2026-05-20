function beca(){

    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);
    let mensaje = "";

    if(edad > 18){
        if(promedio >= 9){
            mensaje = "Beca de $2000";
        }else if(promedio >= 7.5){
            mensaje = "Beca de $1000";
        }else if(promedio >= 6){
            mensaje = "Beca de $500";
        }else{
            mensaje = "Carta de invitación";
        }
    }else{

        if(promedio >= 9){
            mensaje = "Beca de $3000";
        }else if(promedio >= 8){
            mensaje = "Beca de $2000";
        }else if(promedio >= 6){
            mensaje = "Beca de $100";
        }else{
            mensaje = "Carta de invitación";
        }
    }

    document.getElementById("resultado").innerHTML = mensaje;
}