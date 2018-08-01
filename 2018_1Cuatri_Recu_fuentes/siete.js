/*
Ingreso:
Maria f 15
Jose m 33
Pepe m 81

mostrar:
cantidad 
1. mayores de edad 
2. menores de edad 
3. mujeres
4. hombres
5. nombre del mayor edad
6. nombre del menor edad
7. nombre de menor edad hombre

*/
function Mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var contador;
	var contadorMayores;
	var contadorMenores;
	var contadorFemenino;
	var contadorMasculino;
	var edadDelMayor;
	var edadDelMenor;
	var mayorDeEdad;
	var menorDeEdad;
	var edadMasculinoMenor;
	var nombreMasculinoMenor;
	var flag;

	//inicializo las variables
	contador=0;
	flag=0;
	contadorMenores=0;
	contadorMayores=0;
	contadorFemenino=0;
	contadorMasculino=0;
	edadDelMayor=0;
	edadDelMenor=0;
	edadMasculinoMenor=0;
	nombreMasculinoMenor="No se ingreso ningun hombre";

	while (contador<3){
		nombre=prompt("Ingrese el nombre");

		sexo=prompt("Ingrese el sexo");
			while(sexo != "f" && sexo != "m"){
				sexo=prompt("Ingrese el sexo");
			}

		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
			while (edad>100 || edad<0){
				edad=prompt("Ingrese la edad");
				edad=parseInt(edad);
			}

			//analisis
				if (edad>18){
					contadorMayores++;
				}else {
					contadorMenores++;
				}


				if (sexo=="f"){
					contadorFemenino++;
				} else{
					contadorMasculino++;
				}

				if (flag==0){
					edadDelMayor=edad;
					edadDelMenor=edad;
					flag=1;
				}

				if (edad>edadDelMayor){
					mayorDeEdad=nombre;
				}

				if (edad<=edadDelMenor){
					menorDeEdad=nombre;
				}

				if (sexo=="m"&&(contadorMasculino==1 ||edad<edadMasculinoMenor)){
					nombreMasculinoMenor=nombre;
					edadMasculinoMenor=edad;
				}
		contador++;

	}
	document.write("La cantidad de mayores de edad son: "+contadorMayores+"<br>");
	document.write("La cantidad de menores de edad son: "+contadorMenores+"<br>");
	document.write("La cantidad de mujeres son: "+contadorFemenino+"<br>");
	document.write("La cantidad de hombres son: "+contadorMasculino+"<br>");
	document.write("El mayor de edad es: "+mayorDeEdad+"<br>");
	document.write("El menor de edad es: "+menorDeEdad+"<br>");
	document.write("El hombre menor es: "+nombreMasculinoMenor+"<br>");
}
