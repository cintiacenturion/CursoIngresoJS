function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var max;
	var min;
	var primeraVez = true;

	while(respuesta !="no")
	{
		var numero = prompt("Desea continuar");
		
	   
		numero = parseInt(numero);
	
		while (isNaN(numero))
		
		{
			numero = prompt("error: Ingrese un numero valido");
		
			numero = parseInt(numero);
		
		
		}
		if (primeraVez)
		{
			primeraVez = false;
			max = numero;
			min = numero;
		}
		 else
		 {
			 if (numero > max)
			 {
			  mix =numero;
			 }
			 
			 if (numero< min)
			 {
				 min = numero;
			 }
		 }
		 respuesta = confirm("desea continuar?");
		
		}
	}
       
	}




//FIN DE LA FUNCIÓN