
function Mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie;

	base=prompt("Ingrese la base");
	altura=prompt("Ingrese la altura");

	perimetro=base*3;
	superficie=(base*altura)/2;

	alert("El perimetro es: "+perimetro+" y la superficie es: "+superficie);
}
