/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var descuento;
	var importefinal;

	importe=document.getElementById('importe').value;
	importe=parseInt(importe);

	descuento=(25*importe)/100;
	importefinal=importe-descuento;
	document.getElementById('resultado').value=importefinal;

}
