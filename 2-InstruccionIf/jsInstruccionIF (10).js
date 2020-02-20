function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var max;
var random;
var min;

max=11;
min=1;

random= Math.floor(Math.random()* (max-min)) + min;
console.log(random);

if (random < 4)
{
	console.log( "Nota  " + random + " Vamos La proxima se puede");
}
 
  else

  if (random > 8)
  {
  	console.log("Nota " + random + " Excelente")
  }
  
   else
   {
    console.log ("Nota " + random + " Aprobo")
   }





}//FIN DE LA FUNCIÓN