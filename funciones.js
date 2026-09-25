//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

let ingresos;
let egresos;
let valorDisponible;
let valorInteres;
let TotalPagar;
let valorCuotaMes;
let meses;

function calcularDisponible(ingresos, egresos){
    valorDisponible = Math.round((ingresos - egresos)*100) / 100 ;

    if(valorDisponible < 0){
    return 0;

    }
        return valorDisponible;
}

function calcularCapacidadPago(montoDisponible){

    return montoDisponible * 0.50;

}

function calcularInteresSimple(monto,tasa,plazoAnios){
   
    return valorInteres = (plazoAnios * monto * (tasa) /100 );

}

function calcularTotalPagar(monto, valorInteres){
    
    return TotalPagar = monto + valorInteres + 100;
}

function calcularCuotaMensual(TotalPagar, plazoAnios){

    meses = plazoAnios *12;
    return valorCuotaMes= TotalPagar / meses; 

}