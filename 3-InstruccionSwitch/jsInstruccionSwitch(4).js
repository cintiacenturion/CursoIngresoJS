function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
    

	switch(mesDelAño)
	{
     case "Enero":
     case "Marzo":
     case "Julio":
     case "Agosto":
     case "Octubre":
     case "Diciembre":
     alert("Este mes tiene 31 días");
     break;

     case "Abril":
     case "Mayo":
     case "Junio":
     case "Septiembre":
     case "Noviembre":
     alert("Este mes tiene 30 días");
     break;
    
    
    case "Febrero":
    alert("Este mes tiene 29 días");


	}



}//FIN DE LA FUNCIÓN