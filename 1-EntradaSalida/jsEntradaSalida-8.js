/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    
    
    var numeroDividendo;
    var numeroDivisor;
    var resto;
    var division;
    

    numeroDividendo = document.getElementById("numeroDividendo"). value;
    numeroDividendo = parseInt(numeroDividendo);
    numeroDivisor = document.getElementById("numeroDivisor").value;
    numeroDivisor = parseInt(numeroDivisor);
    
    
    division = numeroDividendo/ numeroDivisor
    resto = numeroDividendo - division * numeroDivisor; 



    alert("El resto es " + resto);




}
