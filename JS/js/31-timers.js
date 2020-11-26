'use strict'

function intervalo(){
    window.addEventListener('load',function(){

        // TIMERS
        // SET INTERVAL
        // Nos permite ejecutar una función de callback cada x segundos
    
        var tiempo = setInterval(function(){
            console.log("SET INTERVAL EJECTUADO");
            var encabezado = document.querySelector("div");
        
    
        if(encabezado.style.fontSize==("50px")){
            encabezado.style.fontSize=("30px")
        }else{
            encabezado.style.fontSize=("50px")
            }
        },2000)
    })
        return tiempo;
    }

 var tiempo = intervalo();

var stop = document.querySelector("#stop");

stop.addEventListener("click", function(){
    alert("Has parado el intervalo en bucle")
    clearInterval(tiempo);
})

var start = document.querySelector("#start");
    start.addEventListener("Click", function(){
alert("Has iniciado el intervalo en bucle");
        intervalo()
    });





