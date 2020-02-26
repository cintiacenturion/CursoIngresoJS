function mostrar()
{

	
	var contador=0;
	var acumulador=0;
	var interaciones = 5;


	while(contador < interaciones)
	{
		var numero =NaN;

		while (isNaN(numero))
		{
			numero =prompt("Ingrese un numero");
			numero = parseInt(numero);
		}
		contador ++;
		acumulador += numero;

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN