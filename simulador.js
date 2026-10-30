//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
 
let  ingresos = parseFloat(document.getElementById("txtIngresos").value);
let  egresos = parseFloat(document.getElementById("txtEgresos").value);

let valorDisponible = calcularDisponible(ingresos, egresos);
document.getElementById("lblDisponibleValor").innerText = valorDisponible;

let capacidadPago = calcularCapacidadPago(valorDisponible);
document.getElementById("lblCapacidadValor").innerText = capacidadPago;

let  monto = parseInt(document.getElementById("txtMonto").value);
let  tasa = parseInt(document.getElementById("txtTasaInteres").value);
let  plazoAnios = parseInt(document.getElementById("txtPlazo").value);

let valorInteres = calcularInteresSimple(monto,tasa,plazoAnios);
document.getElementById("lblInteresValor").innerText = valorInteres;

let TotalPagar = calcularTotalPagar(monto, valorInteres);
document.getElementById("lblTotalValor").innerText = TotalPagar;

let valorCuotaMes = calcularCuotaMensual(TotalPagar, plazoAnios);
document.getElementById("lblCuotaValor").innerText = valorCuotaMes.toFixed(2);

let estadoCredito = aprobarCredito(capacidadPago,valorCuotaMes);

if(estadoCredito == true) {
    document.getElementById("spnEstadoCredito").innerText = "CREDITO APROBADO";
    }    else   {
    document.getElementById("spnEstadoCredito").innerText = "CREDITO RECHAZADO";
    }
       
}
