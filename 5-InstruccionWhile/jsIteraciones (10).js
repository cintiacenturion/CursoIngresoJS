function mostrar()
{

	
	//declarar contadores y variables 
	var contador=0;
	var respuesta ="si";
	var suma=true;//ver
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
		var numero = prompt("Desea continuar?");
		numero = parseInt(numero);
	
		while (isNaN(numero))
		 {
			numero = prompt("error: Ingrese un numero valido");
		
			numero = parseInt(numero);
		 }
		 //punto 1
           if (numero<0){ 
			 sumaDeNegativos += numero;
			 contadorNegativo ++;
			  
			}else if (numero > 0){
               //punto2//
			   sumaDePositivos = sumaDePositivos + numero;
			   contadorPositivos ++; // punto 3
			    }
			     else{ // *cero*//
	             contadorCero ++;
                 }
                 //punto 6//
	             if (numero % 2==0){
	  
		         contadorPares ++;
	             }
	              respuesta = confirm("Desea continuar?"); 
				 }//FIN WHILE
 //punto 7//
      promedioDePositivos = sumaDePositivos / contadorPositivos;

 //punto 8//

      promedioDeNegativos = sumaDeNegativos /contadorNegativo;

//punto9//
     diferenciasPositivosYnegativos = sumaDePositivos - sumaDeNegativos;
	
    
    document.write("Suma de Negativos: " + sumaDeNegativos + "<br>");//1
	document.write("Suma de los Positivos: " + sumaDePositivos + "<br>"); //2
	document.write("Cantidad de positivos: " + contadorPositivos + "<br>"); //3
	document.write("Cantidad de Negativos: " + contadorNegativo + "<br>");//4
	document.write("Cantidad de ceros: " + contadorCero + "<br>");//5
	document.write("Cantidad de numeros pares: " + contadorPares + "<br>" );//6
	document.write("Promedio de positivos: " + promedioDePositivos + "<br>" );//7
	document.write("Promedio de negativos: " + promedioDeNegativos +"<br>");//8
	document.write("Diferencia de Positivos y Negativos: " + diferenciasPositivosYnegativos + "<br>" );//9
	}

	