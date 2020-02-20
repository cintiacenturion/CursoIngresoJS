function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño){

case "Enero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
case "Julio":
case"Agosto":
case"Septiembre":
case "Octubre":
case"Noviembre":
case "Diciembre":
alert ("Este mes tiene 30 o mas días");
 break;

case "Febrero":
alert("Este mes no tiene mas de 29 días");
break;
	
	



}
}//FIN DE LA FUNCIÓN