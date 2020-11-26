var numero = 444;
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "Es muy buen curso";

// CONVERTIR A STRING
var dato = numero.toString();
    // CONVERTIR A MINUSCULAS
    dato = texto1.toLocaleLowerCase();
    // CONVERTIR A MAYUSCULAS
    dato = texto2.toUpperCase();

// Calcular longitud
var nombre = "Santos";
console.log(nombre.lenght);

// Concatenar (Unir textos)
var textoTotal = texto1+""+texto2;
var textoTotal = texto1.concat(""+texto2);

console.log(textoTotal);