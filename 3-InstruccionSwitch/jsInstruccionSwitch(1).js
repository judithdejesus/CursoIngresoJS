function mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	console.log(mesDelAño);
	switch (mesDelAño)
	{
		case "Enero":
			alert ("Que comiencen bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!")
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!!");
			break;
	}

	//EJEMPLO
/*switch (mes)
{
	case "Febrero":
		alert("verano");
		break;
	case "enero":
		alert("verano");
		break;
}
*/



}//FIN DE LA FUNCIÓN