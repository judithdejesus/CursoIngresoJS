function Mostrar()
{
	var numero1;
	var numero2;
	var resta;
	var suma;

	numero1=parseInt(prompt("Ingrese el primer numero"));
	numero2=parseInt(prompt("Ingrese el segundo numero"));

	if(numero1==numero2){
		alert(numero1+numero2);
	}
	if(numero1>numero2){
		resta=numero1-numero2;
	} else{
		suma=numero1+numero2;
	}
	if (suma>10){
		alert("La suma es "+suma+" y supero al 10");
	}
}
