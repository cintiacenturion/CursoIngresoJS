function mostrar()
{
 var numeroUno = prompt("Ingrese un numero");
 var numeroDos = prompt ("Ingrese otro numero");
 var suma;
 var resta;
 numeroUno = parseInt(numeroUno);
 numeroDos = parseInt(numeroDos);
 
  if (numeroUno == numeroDos){
      alert(" Los numero son " + numeroUno +" y " + numeroDos);
    }if (numeroUno > numeroDos){
     resta = numeroUno - numeroDos;
     alert (" El resultado de la resta es " + resta);
     } else {
         suma = numeroUno + numeroDos;
           alert("El resultado de la Suma es " + suma);
     } if (suma > 10){
         alert("La suma es " + suma + " y supero los 10")
     }
 }
