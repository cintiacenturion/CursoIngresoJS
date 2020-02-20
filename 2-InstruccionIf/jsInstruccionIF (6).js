function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if ( edad < 13)
{
	alert("Niño");
}
 else

 	if (edad > 18)
 	{
 		alert ("MAYOR");
 	}
      else
         {
         	alert ("ADOLESCENTE");
         }


}//FIN DE LA FUNCIÓN