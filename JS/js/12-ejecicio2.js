/*Utilizando un bucle mostra la media y la suma de los numeros introducidos por el usuario, 
hasta que introduzcamos un numero negativo y en ese caso se mostraría el resultado*/

var suma = 0;
var contador=0;

do{
    var num1= parseInt(prompt("Ingrese un numero: ", 0));
    console.log(contador++)
    
    suma = suma+num1;
    console.log(suma);

}while(num1>=0)