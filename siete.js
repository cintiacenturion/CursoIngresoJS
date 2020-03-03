function mostrar()
{
  var contador;
  var nota;
  var acumuladorSuma=0;
  var proedio;
  var minNota;
  var miniSexo;
  var contadorVarones=0;

  
  while(contador < 5){
    contador ++;
    do {
      var nota = prompt("ingrese nota");
      nota =parseInt(nota);

    } while(isNaN(nota)|| nota < 0 || nota >10);
    do{
      var sexo =prompt("ingrese sexo");
    }while(sexo!= "m" && sexo!="f");
     // acumuladorSumaacumi
     acumulador += nota;
   // punto b. minimo
   if (contador ==1){
     niniNota = nota;

   }else if (nota < niniNota){
     miniNota =nota;
     miniSexo = sexo;

   }
   //punto c contador varones
   if (nota >= 6 && sexo =="m"){
     contadorVarones ++;
   }
  }
  // calculo
  promedio=acumuladorSuma /contador;
  alert ("Promedio "+ promedio);
  alert ("Minimo Nota " + miniNota);


}

