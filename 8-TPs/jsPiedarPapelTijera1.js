/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var random;
var max;
var min;


max=4;
min=1;

function comenzar()
{

eleccionMaquina=Math.floor(Math.random()* (4-1)) + 1;
console.log(eleccionMaquina);
  


}//FIN DE LA FUNCIÓN
function piedra(){
 if (eleccionMaquina==1) 
     {
	 alert("empata");
	 }


}//FIN DE LA FUNCIÓN
function papel(){
	if (eleccionMaquina==2){
		alert("pierde");
	}
 
 }

  
 
//FIN DE LA FUNCIÓN
function tijera(){
	if (eleccionMaquina==3){
		alert("gana");
	}
}

	

//FIN DE LA FUNCIÓN