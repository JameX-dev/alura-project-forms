import { valida } from "./validaciones.js";
console.log("si ves esto di Hola \ndecidi dejar los log por si quisieran ver los tipos de errores que se dan al introducir los campos de una forma erronea \nsolo para devs guink guink")

const inputs = document.querySelectorAll("input")

inputs.forEach((input) => {
    input.addEventListener("blur", (input) =>{
        valida(input.target)
    })
})