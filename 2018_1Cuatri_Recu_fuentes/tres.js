function Mostrar()
{
var precio;
var porcentaje;
var descuento;
var preciofinal;
var iva;

precio=prompt("Ingrese el precio");
porcentaje=prompt("Ingrese el porcentaje de descuento");

descuento=(precio*porcentaje)/100;
preciofinal=precio-descuento;
iva=(preciofinal*21)/100;

alert("El descuento es de: "+descuento+" y el preciofinal seria de: "+preciofinal+" y el iva es de: "+iva);
document.getElementById('elPrecioFinal').value=preciofinal+iva;

}
