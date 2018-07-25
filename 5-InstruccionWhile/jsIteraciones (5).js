function mostrar()
{

var sexo = prompt("ingrese f ó m .");
//sexo=sexo.toLowerCase(); PARA PASAR LETRAS DE MAYUSCULAS A MINISCULAS

while (!(sexo =="f" || sexo == "m" || sexo == "F" || sexo == "M")){
	sexo = prompt("ingrese f ó m .");
	//sexo=sexo.toLowerCase();

}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN