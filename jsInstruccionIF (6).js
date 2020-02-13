function mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if(edad >=13 && edad <=17 ){
    alert("Eres adolescente");
}
if (edad >= 18){
    alert("Eres adulto");
}
if (edad <=12){
    alert("Eres un niño");
}


}//FIN DE LA FUNCIÓN