'use strict'

// Es una memoria que aparece mientras nevego
// Es una especie de sesión

// Comprobar si el navegador es compatible/Disponibilidad
if(typeof(Storage)!== 'undefined'){
    console.log("local storage disponible")
}else{
    console.log("incompatible con localstorage")
}

// Guardar datos en el localStorage
                    // clave      titulo
localStorage.setItem("titulo","ROCKY IV")
 
// Recuperar elemento y meterlo en mi pagina web (en una etiqueta)
document.querySelector("#peliculas").innerHTML = console.log(localStorage.getItem("titulo"));
 
// Guardar objetos
var usuario = {
    nombre:"Santiago",
    mail:"santioliveirasgo@gmail.com",
    web:"www.santos.com.ar"
}

// Guardar objetos: Pasar los objetos al localstorage
                                            // key  y le pasamos el objeto

                    // localStorage.setItem("usuario", usuario);

// Esto no se guarda, entonces tenemos que convertirlos a String a un numero
// Para eso existe un metodo llamado JSON

// localStorage.setItem("CLAVE", OBJETO);
localStorage.setItem("usuario",JSON.stringify(usuario));

// Esto sirve para enviar datos en una API

// RECUPERAR OBJETOS
// Si queremos recuperarlos, no podremos porque el objeto será un string
// console.log(localStorage.getItem("usuario"))
// {nombre: "Santiago", mail: "santioliveirasgo@gmail.com", web: "https://www.santos.com.ar"}

// Como convertir ese JSON String en un JSON "usable"??????
// hay un metodo llamado json.PARSE
var usuarioLocalStorage = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioLocalStorage);

document.querySelector("#peliculas").append(usuarioLocalStorage.nombre);

// Borrar elementos del localStorage
localStorage.removeItem("usuario");
// borrar todo
localStorage.clear;


