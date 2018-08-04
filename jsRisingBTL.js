/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadocivil;
 var sueldobruto;
 var legajo;
 var nacionalidad;
 var contador;

 //inicializo
 contador=0;

//analizo
while(contador<1){
 	edad=prompt("Ingrese la edad");
 	edad=parseInt(edad);
 		while (edad<18 || edad>90){
 			edad=prompt("Error. Ingrese la edad");
 			edad=parseInt(edad);
 		}
 	document.getElementById('Edad').value=edad;
 	sexo=prompt("Ingrese el sexo. m:Masculino, f:Femenino");
 		while (sexo == "M"|| sexo=="F"){
 			sexo=prompt("Error. Ingrese el sexo. m:Masculino, f:Femenino");
 		}
 		switch(sexo){
 			case "f":
 			sexo="Femenino";
 			break;
 			case "m":
 			sexo="Masculino";
 			break;
 		}
 	document.getElementById('Sexo').value=sexo;
 	estadocivil=prompt("Ingrese el estado civil. 1:solteros, 2:casados, 3:divorciado, 4:viudo");
 	estadocivil=parseInt(estadocivil);
 		while (!(estadocivil==1 || estadocivil==2 || estadocivil==3 || estadocivil==4)){
 			estadocivil=prompt("Error. Ingrese el estado civil. 1:Soltere, 2:Casade, 3:Divorciade, 4:Viude");
 			estadocivil=parseInt(estadocivil);
 		}
 		switch(estadocivil){
 			case 1:
 			estadocivil="Soltere";
 			break;
 			case 2:
 			estadocivil="Casade";
 			break;
 			case 3:
 			estadocivil="Divorciade";
 			break;
 			case 4:
 			estadocivil="Viude";
 			break;
 		}
 	document.getElementById('EstadoCivil').value=estadocivil;
 	sueldobruto=prompt("Ingrese el sueldo bruto");
 	//sueldobruto=parseFloat(sueldobruto);
 		if (sueldobruto<"8000"){
 			sueldobruto=prompt("Error. Ingrese el sueldo bruto");
 			//sueldobruto=parseFloat(sueldobruto);
 		}
 	document.getElementById('Sueldo').value=sueldobruto;
 	legajo=prompt("Ingrese el numero de legajo");
 	slegajo=parseInt(legajo);
 		while (legajo<1000){
 			legajo=prompt("Error. Ingrese el numero de legajo");
 			legajo=parseInt(legajo);
 		}
 	document.getElementById('Legajo').value=legajo;
 	nacionalidad=prompt("Ingrese la nacionalidad. A: Argentinos, E: Extranjeros, N: Nacionalizados");
 	//nacionalidad=nacionalidad.toLowerCase();
 		while (!(nacionalidad=="A" || nacionalidad=="E" || nacionalidad=="N")){
 			nacionalidad=prompt("Error. Ingrese la nacionalidad. A: Argentine, E: Extranjere, N: Nacionalizade");
 			//nacionalidad=nacionalidad.toLowerCase();
 		}
 		switch (nacionalidad){
 			case "A":
 			nacionalidad="Argentine";
 			break;
 			case "E":
 			nacionalidad="Extrajere";
 			break;
 			case "N":
 			nacionalidad="Nacionalizade";
 			break;
 		}
 	document.getElementById('Nacionalidad').value=nacionalidad;
 	contador++;
}

}
