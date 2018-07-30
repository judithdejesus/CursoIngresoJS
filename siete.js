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

	contador=0;
	contadorMenores=0;
	contadorMayores=0;

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
	}
	document.write("La cantidad de mayores de edad son: "+contadorMayores);
	document.write("La cantidad de menores de edad son: "+contadorMenores);
}
