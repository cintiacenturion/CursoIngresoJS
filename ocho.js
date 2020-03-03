function mostrar()
{
var respuesta;
var letra;
var numero;
var cantidadPares=0;
var cantidadImpares=0;
var cantidadCeros=0;
var contadorPositivos;
var acumuladorPositivos=0;
var acumuladorNegativos=0;
var primeraVez=true;
var numeroMinimo;
var numeroMaximo;
var letraMinima;
var letraMaxima;
var promedio;

do{
    while (isNaN (numero)|| numero< - 100 ||numero > 100 );{
        numero =prompt("Ingrese Numero");
        numero =parseInt(numero);
    }

    while(isNaN(letra)){
        letra = prompt("ingrese una letra");

    }
    if (numero % 2==0){ //punto a es par.
     cantidadPares ++;
    }else if (numero !=0){
     // punto B. cantidad impares
       cantidadImpares ++;
    }else{
        //punto c.
        cantidadCeros ++;
    }
    if (numero >0){
        // punto d.
        acumuladorPositivos += numero;
        contadorPositivos ++;
    }else if (numero < 0){
        acumuladorNefativo += numero;
    }
    if(primeraVez){
        primeraVez= false;
        numeroMaximo =numero;
        numeroMinimo =numero;

        letraMaxima =letra;
        letraMinima = letra;

    }else{
        if(numero > numeroMaximo){
            numeroMaximo = numero;
            letraMinima =letra;
        }
    }
    
    
    

    respuesta = confirm("DESEA CONTINUAR?");

}while (respuesta);
document.write("cantidad de pares" + cantidadPares +"<br>");
document.write("cantidad de impares" + cantidadImpares + "<br>");
document.write("cantidad de cero" + cantidadCeros + "<br>");
if(contadorPositivos ==0){
    promedio=0;


}
}
