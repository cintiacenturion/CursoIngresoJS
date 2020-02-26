function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;
	
	
	while (respuesta)
	{
    contador ++;
	numeroIngresado=prompt(" Ingresar un numero");
	numeroIngresado=parseInt(numeroIngresado);
	
		while (isNaN(numeroIngresado))
		{
			numeroIngresado=prompt("Error,no ingreso un numero");
			numeroIngresado=parseInt(numeroIngresado);
		}
	 acumulador=acumulador + numeroIngresado;
	 respuesta= prompt("Ingrese SI para continuar");
    }

	
	

 document.getElementById('suma').value= acumulador;
 document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN