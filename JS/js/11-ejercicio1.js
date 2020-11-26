'use strict'
/*Programa que pida dos numeros y que nos diga cual es el mayor, el menor o si son iguales*/

var numero1= prompt("Ingrese un numero: ");
var numero2= prompt("Ingrese otro numero");

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1= prompt("Ingrese un numero: ");
    numero2= prompt("Ingrese otro numero");
}

if(numero1>numero2){
    alert("El numero 1 es mayor")
}

if(numero2 > numero1){
    alert("El numero 2 es menor"+numero2)
}

if(numero1==numero2){
    alert("Son iguales")
}