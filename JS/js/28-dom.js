'use strict'

// DOM: Arbol de etiquetas y elementos que componen una web
// Podemos modificar el HTML de una pagina sin problema
// Seleccionar elementos diferentes de una pagina y manipularlos como queremos

// Ejemplo
// Nos manejamos con una ID del Div con un document()

/* 
   <div id="miCaja">Hoal soy una caja</div>
   <div id="santosID">Santos</div>
   <div id="documento">DocumentoSsSsSs</div>
*/


document.getElementById("miCaja")

// Podemos guardarlo en una variable

var santos = document.getElementById("santosID")


// Podemos capturar el HTML que tiene ese div

// var elemento = document.getElementById("elemento").innerHTML;
// console.log(elemento);

// Podemos cambiar el valor HTMl
elemento.innerHTML="Texto CAMBIADO";
console.log(elemento);

// Cambiar estilo
santos.style.background="red";
santos.style.padding="25px"
santos.style.fontSize="30px"

function cambiarColor(color){
    santos.style.background = color;
}

// Qwery selector es lo mismo pero mas elegantee
// var santos = document.querySelector("#santosID")

// Conseguir elemntos por su etiqueta y como conseguir elementos por su clase css
// Todos los divs

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs)

// Hará un array de elements "div"
// HTMLCollection { 0: div#miCaja, 1: div#santosID, 2: div#elemento, 3: div, 4: div, 5: div, 6: div, length: 7, … }

// Modificar uno de esos elementos
var contenidoElemento2 = todosLosDivs[2].textContent;
// console.log(contenidoElemento2);
// contenidoElemento2.innerHTML("Otro texto para el contenido 2");
// console.log(contenidoElemento2)


