let parrafo = document.querySelector("#P");
console.log(parrafo)
let btn1 = document.querySelector("#btnOcultar");

function ocultarParrafo(){
    parrafo.style.display ="none";
}
btn1.onclick = ocultarParrafo

let btn2 = document.querySelector("#btnMostrar");

function mostrarParrafo(){
    parrafo.style.display ="block";
}
btn2.onclick = mostrarParrafo

let btn3 = document.querySelector("#btnColor");

function colorParrafo(){
    parrafo.style.color = "black";
}
btn3.onclick = colorParrafo

let btn4 = document.querySelector("#btnFondo");

function fondoParrafo(){
    parrafo.style.backgroundColor = "white";
}
btn4.onclick = fondoParrafo