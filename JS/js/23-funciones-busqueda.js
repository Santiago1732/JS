var numero = 444;
var texto1 = "Bienvenido al curso de Javascript";
var texto2 = "Es muy buen curso";

/*var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda = texto1.search("curso");
console.log(busqueda);*/

var busqueda = texto1.match(/curso/gi);
console.log(busqueda);