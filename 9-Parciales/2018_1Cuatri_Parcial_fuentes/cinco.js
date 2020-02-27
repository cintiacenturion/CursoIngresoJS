function mostrar()
{
   
   var planetas=prompt("Ingrese un planeta del sistema solar");
   var dato = prompt ("Ingrese un planeta valido");

    switch (planetas){
         case "tierra":
         alert ("Acá vivimos");
         break;

         case "mercurio":
         case "Venus":
         case "Jupiter":
         alert ("Acá hace más calor");
         break;

         case "Saturno":
         case "Urano":
         case "Neptuno":
         alert("Acá hace más frio");
         break;
        }
     

}
