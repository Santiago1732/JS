'use strict'

// IF
// Si A es igual a B hace algo

var edad1 = 30;
var edad2 = 50;

// OPERADORES RELACIONALES

/*
Mayor:>
Menor:<
Menor o igual: <=
Mayor o igual: >=
Igual: ==
Distintio: !=
*/


/*
// Si pasa esto
if(edad1>edad2){
    // Ejecuta esto
    console.log("La edad 1 es mayor es mayor a la 2");
}else{
    console.log("La edad 2 es mayor que la 1");
}
*/

var nombre= "Santiago";
var edad=50;

if(edad>=18){
    console.log(nombre +" es mayor de edad"+" porque tiene "+edad+" años");
    console.log("Ademas, es Milenial");

    if(edad==33){
        console.log("Es un joven");
    }else if(edad==50){
        console.log("Es un señor");
    }

}else{
    console.log(nombre +" es menor de edad"+" porque tiene "+edad+ "años");
    console.log("Ademas, es centenial");
}


var year =1997;
// NEGACION:
if(year != 2016){
    console.log("El año es realmente:" +year);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la epoca actual");
}else{
    console.log("Estamos en la epoca post moderna");
}

if(year<20004){
    console.log("Estamos en la epoca vieja");
}



// OR
if(year == 2008 || year == 2018){
    console.log("El año termina en 8");
}




