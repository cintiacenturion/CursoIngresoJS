function mostrar()
{
 var precio = prompt("Ingrese el precio");
 var descuento = prompt("Ingrese el porcentaje de descuento");
 var precioDescuento = precio * descuento / 100;

 document.getElementById("elPrecioFinal").value = precioDescuento;
 

}
