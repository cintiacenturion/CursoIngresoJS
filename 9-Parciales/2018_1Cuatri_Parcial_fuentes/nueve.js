//Pedir los siguientes datos:
 //edad(mayores de 18)
 //sexo("f" o "m") y 
 //pasaje ("urbano", "nacional" o "internacional");
//a) El nombre del hombre con pasaje nacional más joven.
//b) El sexo y pasaje del pasajero/a más viejo.
//c) La cantidad de mujeres con pasaje urbano o nacional.
//d) El promedio de edad entre las mujeres.
//e) El promedio de edad entre los hombres con pasaje internacional.

function mostrar()
{


var edad;
var sexo;
var pasaje;

var promedioEdadMujeres;
var cantidadMujeres=0;
var promedioHombres;
var nombre;
var pasaje;
var contadorMujeres=0;


var primeraVezHombreNacional=false;
var edadMinH;
var nombreHombreJoven;
     
 var respuesta="si";
 while(respuesta !="no") {

 
    nombre = prompt("ingrese su nombre");
    var edad = prompt ("Ingese su edad");
            edad =parseInt(edad);
        while (isNaN(edad) || edad <0 || edad > 100);
             
        do {
            sexo =prompt("Ingrese su sexo");
         }while(sexo !="f" && sexo != "m");
               

         do {
             pasaje = prompt("Ingrese pasaje");
         }while (pasaje!="urbano" && pasaje !="nacional" && pasaje !="internacional");

         // calculos para asegurarse que sea hombre y pasaje nacional
         
         
          if (sexo=="m"&& pasaje=="nacional"){

         }
    
            if (primeraVezHombreNacional){
                primeraVezHombreNacional=false;
                edadMinH= edad;
                nombreHombreJoven= nombre;
            } else if (edad <edadMinH){
                edadMinH = edad;

            }else if (nombre<nombreHombreJoven){
                nombreHombreJoven= nombre;
            }

            }

        
            alert("Cantidad de mujeres "+ cantidadMujeres);
           alert ("hombre mas joven " + edadMinH);
           respuesta= prompt("continua?");

         
        }
         
         respuesta= prompt("continua?");
       
        
        
       
    

    
          



          
         
          
    
      
    

          
         

   


