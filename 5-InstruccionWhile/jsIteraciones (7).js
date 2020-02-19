function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while ( respuesta == "si")
	{
	respuesta=prompt(" Ingresar un numero");
	
    acumulador=respuesta; 

	contador ++



	} 





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN