function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	
	
	while (respuesta)
	{
	respuesta=prompt(" Ingresar un numero");
	
	acumulador=parseInt(acumulador);
	contador = parseInt(contador);

    contador ++;	
	acumulador+=respuesta; 
    }

	
	

 document.getElementById('suma').value= acumulador;
 document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN