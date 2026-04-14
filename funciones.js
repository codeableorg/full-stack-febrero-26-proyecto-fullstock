// Las Funciones son Valores

// const nombre = "André";
// let anio = 2026;
// let mayorEdad = true;
// const usuario = {};

// creacion de la funcion
const obtenerSiete = function () {
  return 7;
};

// let nombreUsuario = nombre;
let conseguirNumero = obtenerSiete;

// ejecucion de la funcion
// llamamos a una funcion
// const siete = obtenerSiete();
// console.log(siete);

// {} se llama "bloque de codigo"
// Declaracion de funcion
function darLaBienvenida() {
  const escuela = "Codeable";
  const nombreUsuario = "André";
  const mensaje = `Hola, ${nombreUsuario}! Bienvenido a ${escuela}`;
  console.log(mensaje);
}

// Expresion de funcion
const saludar = function () {
  const escuela = "Codeable";
  const nombreUsuario = "André";
  const mensaje = `Hola, ${nombreUsuario}! Bienvenido a ${escuela}`;
  console.log(mensaje);
};

// saludar();
// darLaBienvenida();

// function saludar() {
//   console.log("¡Hola, mundo!");
// }

// saludar = "Otro valor";
// console.log(saludar); // "Otro valor"

function mostrarMensaje() {
  let mensaje = "Soy una variable local";
  console.log(mensaje);
}

// mostrarMensaje(); // Soy una variable local
// console.log(mensaje); // Error: mensaje no está definido

// Varibles EXTERNA!
let mensajeExterno = "Soy una variable externa";

function mostrarMensajeExterno() {
  console.log(mensajeExterno);
}

// mostrarMensajeExterno(); // Soy una variable externa

let nombre = "Sebastian";

function saludarJuan() {
  let nombre = "Juan";
  console.log("Hola" + " " + nombre);
}

saludarJuan(); // "Hola Juan"
console.log(nombre); // "Sebastian"
