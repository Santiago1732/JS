'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado")

var formulario = document.querySelector("#idFormulario")
var box_dashed = document.querySelector(".dashed") 
    formulario.addEventListener('submit', function(){

        
        box_dashed.style.display ="none"

        var nombre = document.querySelector("#idNombre").value;
        var apellido = document.querySelector("#idApellido").value;
        var edad = document.querySelector("#idEdad").value;

        box_dashed.style.display ="block";
        console.log(nombre,apellido,edad);

    return false;

    })
})
