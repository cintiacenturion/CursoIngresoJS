function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta ="si";
	var suma=true;
	var sumaDePositivos=0;
	var sumaDeNegativos=0;
	var contadorPositivos= 0;
	var contadorNegativo=0;
	var contadorCero=0;
	var contadorPares=0;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferenciasPositivosYNegativos;
    
	while(respuesta)
	{
		var numero = prompt("Desea continuar");
		numero = parseInt(numero);
	
		while (isNaN(numero))
		
		{
			numero = prompt("error: Ingrese un numero valido");
		
			numero = parseInt(numero);
		}

	


	  if (numero>0)
	  { 
      //punto 2 

	  sumaDePositivos += numero;
	  

	  //punto 3
	  
	  contadorPositivos ++;
	  
	  
    }

      else if (numero < 0)
     {
	  //punto1//
	  sumaDeNegativos += numero;

	  contadorNegativo ++;

	 }
	 


	  else // *cero*//
	  {
      contadorCero ++;

	  }
        //punto 6//
	  if (numero % 2==0)
	  {
		  contadorPositivos ++ 
	  }
	  
 respuesta = confirm("Desea continuar?");
//FIN DE LA FUNCIÓN

//punto 7//
      promedioDePositivos =sumaDePositivos / contadorPositivos;

//punto 8//

      promedioDeNegativos = sumaDeNegativos /contadorNegativo;

//punto9//
     diferenciasPositivosYnegativos = sumaDePositivos - sumaDeNegativos;
	}
    document.write("Promedio de positivos: " + promedioDePositivos + "<br>" );
    document.write("Promedio de negativos: " + promedioDePositivos +"<br>");
    document.write("Diferencia de Positivos y Negativos " + diferenciasPositivosYnegativos + "<br>" );
    document.write("Suma de Negativos " + sumaDeNegativos + "<br>");
	document.write("Suma de los Positivos " + sumaDePositivos + "<br>");
	document.write("Cantidad de positivos " + contadorPositivos + "<br>");
	document.write("Cantidad de Negativos " + contadorNegativo + "<br>");
	document.write("Cantidad de ceros " + contadorCero + "<br>");
	}
