function mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	//var bandera=0;
	//declarar variables
	
	var respuesta='si';

	while(respuesta!='no'){
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		if (contador==1){
			maximo=numero;
			minimo=numero;
		}
	
		if (numero<minimo){
			minimo=numero;
		}
		if (numero>maximo){
			maximo=numero;
		}
	respuesta=prompt("Desea seguir ingresando numeros?");
	}
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN