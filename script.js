const titulo = document.getElementById("titulo");

console.log(titulo);

let estadoInicial = true;
let posicionTexto = 0;
const textos = ["Unacceptable", "Hi", "Hello", "No", "Stop", "Go"];
const textoInicial = document.getElementById("textoInicial")

textoInicial.innerText = textos[posicionTexto];

textoInicial.addEventListener("click", () => {
    if (posicionTexto < textos.length - 1) {
    posicionTexto = posicionTexto + 1;
    } else {
    textoInicial.innerText = textos[posicionTexto];
    }
})

titulo.addEventListener("click", () => {
    console.log("click");
    if (estadoInicial === true) {
    titulo.innerText = "Conde Limonagrio";
    } else {
    titulo.innerText = "Welcome";
    }
    estadoInicial = !estadoInicial;
})