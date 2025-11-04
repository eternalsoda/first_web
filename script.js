const titulo = document.getElementById("titulo");

console.log(titulo);

titulo.addEventListener("click", () => {
    console.log("click");
    titulo.innerText = "Welcome";
})