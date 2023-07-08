// const inputNacimiento = document.querySelector("#birth")

// inputNacimiento.addEventListener("blur", (evento)=>{
//     validacionNacimiento(evento.target);
// })

export function valida(input) {
    const tiposDeInput = input.dataset.tipo;
    if (validadores[tiposDeInput]) {
        validadores[tiposDeInput](input)
    }


    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tiposDeInput, input);
    }
}

const tiposDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {

    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },

    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch:
          "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
      },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    },
    numero:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "el formato requerido es XXXXXXXXXX 10 numeros"
    },
    direccion:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "la direccion debe contener entre 4 a 40 caracteres"
    },
    ciudad:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "la ciudad debe contener entre 4 a 40 caracteres"
    },
    estado:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "el estado debe contener entre 4 a 40 caracteres"
    },

}

const validadores = {
    nacimiento: (input) => validarNacimiento(input)
}

function mostrarMensajeDeError(tiposDeInput, input) {
    let mensaje = ""
    tiposDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tiposDeInput, error)
            console.log(input.validity[error])
            console.log(mensajesDeError[tiposDeInput][error])
            mensaje = mensajesDeError[tiposDeInput][error];
        }
    })
    return mensaje
}
function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad"
    }
    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    console.log(diferenciaFechas <= fechaActual);
}