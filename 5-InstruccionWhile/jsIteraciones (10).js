function mostrar()
{

	var numero;
	var positivo=0;
	var negativo=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero;
	var resto;
	var contadorPar=0;
	var promedioPositivo=0;
	var promedioNegativo=0;
	var diferencia=0;


	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
		numero=prompt("Ingrese numeros");
		numero=parseInt(numero);

		resto=(numero % 2);
		if (resto == 0){
			contadorPar++;
		}

		if (numero>0){
			positivo=positivo+numero;
			contadorPositivo++;
		} 
		if (numero<0){
			negativo=negativo+numero;
			contadorNegativo++;
		}
		if (numero == 0){
			contadorCero++;
		}

	}
	promedioPositivo=positivo/contadorPositivo;
	promedioNegativo=negativo/contadorNegativo;
	diferencia=positivo-negativo;



}//FIN DE LA FUNCIÓN