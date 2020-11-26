// Funciones.
// Una funcion es us una agrupacion reutilizable de un conjunto de instrucciones.

// Definir una funcion

function porPantalla(numero1,numero2){
    document.write("*************************"+"<br/>")
    document.write("Suma: "+(numero1+numero2)+"<br/>");
    document.write("Resta:"+(numero1-numero2)+"<br/>");
    document.write("Multiplicaición:"+(numero1*numero2)+"<br/>");
    document.write("Division:"+(numero1/numero2)+"<br/>");
    document.write("*************************"+"<br/>")
}

function porConsola(numero1,numero2){
    console.log("*************************")
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta:"+(numero1-numero2));
    console.log("Multiplicaición:"+(numero1*numero2));
    console.log("Division:"+(numero1/numero2));
    console.log("*************************")
}

function calculadora(numero1,numero2,mostrar=false){
    if(mostrar==false){
        porPantalla(numero1,numero2);
    }else{
        porConsola(numero1,numero2);
    }
}

// Invocar o llamar a la funcion
calculadora(10,5)
calculadora(13,25,true)
