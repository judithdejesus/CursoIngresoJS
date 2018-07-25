function mostrar()
{

	var contador=0;
	var acumulador=0;

	while (contador < 5){
		var numero = prompt(numero);
		numero=parseInt(numero);
		contador+=1;
		acumulador=numero+acumulador;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN