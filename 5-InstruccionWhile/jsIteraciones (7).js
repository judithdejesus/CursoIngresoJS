function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	while (respuesta != "n"){
		contador=contador+1;
		numero=prompt("Ingrese numero #"+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		respuesta=prompt("Desea seguir ingresando numeros?");
	}
	promedio=acumulador/contador;

document.getElementById('suma').value="La suma es: "+acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN