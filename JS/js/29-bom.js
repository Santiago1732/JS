// BOM - Browser object model

window.addEventListener('load', function(){

var bg = document.querySelector("#idButton");
console.log(bg);

// Eventos:

// Focus
// CUANDO HACES CLICK AL BOTON
var input = document.querySelector("#campo_nombre")
input.addEventListener('focus', function(){
    console.log("Estas dentro del INNER")
});

// CUANDO SALIS DEL FORMULARIO
// BLUR
var input = document.querySelector("#campo_nombre")
input.addEventListener('blur', function(){
    console.log("BLUR")
});

// KEYDOWN
var input = document.querySelector("#campo_nombre")
input.addEventListener('keydown', function(){
    console.log("KEYDOWN")
});

// KEYPRESS
var input = document.querySelector("#campo_nombre")
input.addEventListener('keypress', function(){
    console.log("LETRA", String.fromCharCode(event.keyKode))

    })
});


