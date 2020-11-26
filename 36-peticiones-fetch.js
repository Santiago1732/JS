/*Fetch es un metodo que nos permite hacer peticiones AJAX mucho mas facil.
Petción AJAX, es un a llamada a un servicio REST, a un API REST o a un backend que nos devuelve un resultado y podemos hacer lo que queramos con ese resultado

Vamos a hacer ese metodo fetch para conseguir resultados desde un servicio externo, api externo o backend.*/

'use strict'

// Api restt/backend es un servicio que nos devuelve datos en JSON
/*Puede recibir peticiones por post,put,get,delete (metodos http) y es un servicio que recibe una infromación y nos devuelve otra info en JSON
Tambien van a a guardar info en base de datos*/

// Fetch(sustituo del ajax) y peticiones a servicios / apis rest

// Nada mas cargue la pagina, hacemos una peticion ajax utilizano fetch al url de usuarios

var div_usuarios = document.querySelector('#usuarios');

var usuarios = []

// PROMESA
fetch('https://reqres.in/api/users?page=1')
    // CON EL THEN, RECOJEMOS DATOS Y LO CONVIERTE A JSON
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios)

    usuarios.map((user, i) => {
         let nombre = document.createElement('h2')
         
         nombre.innerHTML = i + user.first_name +" "+ user.last_name;
    
        div_usuarios.appendChild(nombre);
       
        document.querySelector(".loading").style.display = "none"

        })
    })
