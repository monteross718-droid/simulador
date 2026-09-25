//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
 
let  ingresos = parseFloat(document.getElementById("txtIngresos").value);
let  egresos = parseFloat(document.getElementById("txtEgresos").value);

let valorDisponible = calcularDisponible(ingresos, egresos);
document.getElementById("lblDisponibleValor").innerText = valorDisponible;

let capacidadPago = calcularCapacidadPago(valorDisponible);
document.getElementById("lblCapacidadValor").innerText = capacidadPago;

let  monto = parseInt(document.getElementById("txtMonto").value);
let  tasa = parseInt(document.getElementById("txtPlazo").value);
let  plazoAnios = parseInt(document.getElementById("txtTasaInteres").value);

let valorInteres = calcularInteresSimple(monto,tasa,plazoAnios);
document.getElementById("lblInteresValor").innerText = valorInteres;

}