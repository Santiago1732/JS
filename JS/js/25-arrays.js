'use strict'

// Arrays, Arreglos, Matrices
var nombre = "Santiago"
var nombre_completo = ["Santiago", "Oliveira"];
var lenguajes = new Array ("PHP","JS", "Go", "Java");

/*var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if(elemento >= nombre_completo.length){
    alert("Introduce el numero correcto menor que"+nombre_completo.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

// Forma tradicional
/*for(var i = 0; i<lenguajes.length; i++){
    document.write("<l1>"+lenguajes[i]+"</li>");
}*/

// Forma forEach
lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+"-"+elemento+"</l1>")
});

document.write("</ul>")