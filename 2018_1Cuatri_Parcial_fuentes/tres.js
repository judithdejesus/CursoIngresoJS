function Mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese el precio");
	porcentaje=prompt("Ingrese el porcentaje de descuento");

	descuento=(precio*porcentaje)/100;
	preciofinal=precio-descuento;
	document.getElementById('elPrecioFinal').value=preciofinal;
}
