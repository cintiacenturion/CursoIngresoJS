function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var suma=true;
	var sumaPositivos=0;
	var SumaNegativos=0;
	var contadorPositivos= 0;
	var contadorNegativo=0;
	var contadorCero=0;
	var contadorPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciasPositivosYNegativos;



	while(respuesta!="no")
	{
		var numero = prompt("Desea continuar");
		
	   
		numero = parseInt(numero);
	
		while (isNaN(numero))
	 

	while (isNaN(numero))
	{
		numero = prompt("error: Ingrese un numero valido");
	
		numero = parseInt(numero);
	
	
	}

      if (numero>0){ 
      //punto 2 

	  sumaPositivos += numero;
	  
	  

	  //punto 3
	  
	  contadorPositivo ++;
	 
	  
    }

      else if (numero < 0)
     {
	  //punto1//
	  sumaNegativos += numero;

	 }
	 


	  else // *cero*//
	  {
      contardorCero ++ 

	  }
        //punto 6//
	  if (numero % 2==0)
	  {
		  contadorPositivos ++ 
	  }
	  
	 
} 


//FIN DE LA FUNCIÓN

//punto 7//
promedioDePositivos =sumaPositivos/contadorPositivos;

//punto 8//

promedioDeNegativos = sumaNegativos /contadorPositivos;

//punto9//
diferenciasPositivosYnegativos = sumaPositivos  - sumaNegativos;

document.write("Promedio de positivos: " + promedioDePositivos+ "<br>" );
document.write("promedio de negativos: " + promedioDePositivos +"<br>")
document.write("Diferencia de Positivos y negativos " + diferenciaPositivosYnegativos + "<br>" )
}