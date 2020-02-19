function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta)
	{
		var numero = prompt("Desea continuar");
	
   
	numero = parseInt(numero);


while (isNaN(numero))
{
	numero = prompt("error: Ingrese un numero valido");

    numero = parseInt(numero);


}
if (numero>=0)
{
	positivo = positivo + numero;
}
else
 {
	 negativo *= numero;
 }
 respuesta = confirm ("desea continuar?");

}




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN