/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var numero;
var numerosPares;

var contadorDivisible;
var numerosPrimos;

 
function NumerosPares () 
    {    
    var contador=0;
    numero=document.getElementById("numero").value;
    numero=parseInt(numero);
    while(isNaN(numero) || numero < 1)
    {   
        numero =prompt("Ingrese Numero positivo");
        numero=parseInt (numero);
        } 
 
    while (contador<numero){
        contador ++;
        if (contador % 2 ==0){
        numerosPares =alert("su numero es " + contador);
        }   
    }
    
    

    }
function NumerosImpares ()
    {
        var contador=0;
        var contadorImpares=0;
       numero= document.getElementById("numero").value;
       numero=parseInt(numero);
    while (isNaN(numero) || numero <1)
    {
        numero = prompt("Ingrese Numero positivo")
        numero=parseInt(numero);
    }
   while (contador <numero){
       contador ++;
       if (contador %2 !=0){
           NumerosImpares=alert("Los numeros Impares son "+ contador);
       }

  
    }
}

function NumerosDivisibles ()
{
    var contador=1;
    
   numero= document.getElementById("numero").value;
   numero=parseInt(numero);
while (isNaN(numero) || numero <1)
{
    numero = prompt("Ingrese Numero positivo")
    numero=parseInt(numero);
    contadorDivisible=parseInt(numero);
}
while (contador <=100){
    contador ++;
   if (numero % contador==0){
       contadorDivisible ++;

       NumerosDivisibles=alert("Los numeros Divisibles son "+ contador);
   }

   }
}
function VerificarPrimo ()
{
   numero= document.getElementById("numero").value;
   numero=parseInt(numero);
   while (isNaN(numero) || numero <1)
{
    numero = prompt("Ingrese Numero positivo")
    numero=parseInt(numero);
    
    
    }
    
    if ( numero % 2 ==0 ){
        numero=parseInt(numero);
        numero = alert(numero +" es numero primo");
    }else{
        numero = alert(numero + "no Es numero primo");
    }
    }
    
        
    

    










