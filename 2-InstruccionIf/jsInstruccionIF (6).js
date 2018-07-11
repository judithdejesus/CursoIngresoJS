function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

if (edad<15)
{
	alert("Es niño");
}
else {
	if (edad>=18)
	{
		alert("Es adulto");
	}
	else 
	{
		alert("Es adolescente");
	}
}



}//FIN DE LA FUNCIÓN