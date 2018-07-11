function Mostrar()
{
//tomo la edad  
/*
&& and,y
! not,no
|| or, o
*/
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
/*
if(edad>=13 && edad<=17)
{
	alert("Es adolescente");
}
*/

if (!(edad<13 || edad>17))
{
	alert("Es adolescente");
}



}//FIN DE LA FUNCIÓN