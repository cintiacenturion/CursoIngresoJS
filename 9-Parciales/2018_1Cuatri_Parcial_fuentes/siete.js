function mostrar()
{
  var contador=0;
  var nota;
  var acumuladorSuma=0;
  var promedio;
  var miniNota;
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
     // acumuladorSuma
     acumuladorSuma += nota;
   // punto b. minimo
   if (contador ==1){
     miniNota = nota;

   }else if (nota < miniNota){
     miniNota =nota;
     miniSexo = sexo;

   }
   //punto c contador varones
   if (nota >= 6 && sexo =="m"){
     contadorVarones ++;
   }
  }
  // calculo
  promedio = acumuladorSuma /contador;
  
  alert ("Promedio "+ promedio);
  alert ( "LA NOTA MAS BAJA ES:  " + miniNota+ " el alumno es de sexo " + sexo );



}

    
      
      
     

     
       
       





    
  

  

  
