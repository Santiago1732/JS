'use strict'
var edad = 70;
var imprime = "";

switch(edad){
    case 18: 
        imprime= "Acabas de cumplir 18 años";
        break
    case 25:
        imprime="Sos un adulto";
        break;
    case 40:
        imprime="Crisis de los 40";
        break;
    case 70:
        imprime = "Anciano";
        break;
    default:
        imprime = "Edad neutra";
        break;    
}

console.log(imprime);