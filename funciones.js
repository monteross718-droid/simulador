//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

let ingresos;
let egresos;
let valorDisponible;

function calcularDisponible(ingresos, egresos){
    valorDisponible = Math.round((ingresos - egresos)*100) / 100 ;

    if(valorDisponible < 0){
    return 0;

    }
        return valorDisponible;
}

