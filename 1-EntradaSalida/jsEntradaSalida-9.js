/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var importe;
    var importeMasIva;
   
    importe="33";
    importe=parseInt(importe);
    impuesto=importe*21/100
    importeMasIva =importe+ impuesto;
    console.log("importe final: " + importeMasIva);

    
}
