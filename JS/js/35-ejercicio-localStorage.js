'use strict'

// Formulario que nos permita añadir pelicuas
// Capturamos el evento submit

var forumlario= document.querySelector("#formularioPeliculas")
// Usamos el evento Listener para agarrar el evento submit 
forumlario.addEventListener('submit',function(){
    // Agarramos el ID del input y lo guardamos en la variable titulo
    var titulo = document.querySelector("#agregarPelicula").value
    // Guardamos la variable en el localStorage
    localStorage.setItem(titulo, titulo)
})

var forumlarioBorrar= document.querySelector("#formularioBorrarPelicula")
forumlarioBorrar.addEventListener('submit',function(){
    var titulo = document.querySelector("#borrarPelicula").value
    localStorage.removeItem(titulo)
})


// Recorremos los elemntos del localstorage y lo mostramos
var ul = document.querySelector("#formularioPeliculas")
for(var index in localStorage){

    console.log(localStorage[index])
    
    if(typeof localStorage[index]=='string'){
        var li = document.createElement("li");
        li.append(localStorage[index])
        ul.append(li)
    }
    
}