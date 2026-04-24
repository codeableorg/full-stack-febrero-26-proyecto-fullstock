// Las Funciones son Valores

// const nombre = "André";
// let anio = 2026;
// let mayorEdad = true;
// const usuario = {};

// creacion de la funcion
// const obtenerSiete = function () {
//   return 7;
// };

// let nombreUsuario = nombre;
// let conseguirNumero = obtenerSiete;

// ejecucion de la funcion
// llamamos a una funcion
// const siete = obtenerSiete();
// console.log(siete);

// {} se llama "bloque de codigo"
// Declaracion de funcion
// function darLaBienvenida() {
//   const escuela = "Codeable";
//   const nombreUsuario = "André";
//   const mensaje = `Hola, ${nombreUsuario}! Bienvenido a ${escuela}`;
//   console.log(mensaje);
// }

// Expresion de funcion
// const saludar = function () {
//   const escuela = "Codeable";
//   const nombreUsuario = "André";
//   const mensaje = `Hola, ${nombreUsuario}! Bienvenido a ${escuela}`;
//   console.log(mensaje);
// };

// saludar();
// darLaBienvenida();

// function saludar() {
//   console.log("¡Hola, mundo!");
// }

// saludar = "Otro valor";
// console.log(saludar); // "Otro valor"

// function mostrarMensaje() {
//   let mensaje = "Soy una variable local";
//   console.log(mensaje);
// }

// mostrarMensaje(); // Soy una variable local
// console.log(mensaje); // Error: mensaje no está definido

// Varibles EXTERNA!
// let mensajeExterno = "Soy una variable externa";

// function mostrarMensajeExterno() {
//   console.log(mensajeExterno);
// }

// mostrarMensajeExterno(); // Soy una variable externa

// let nombre = "Sebastian";

// function saludarJuan() {
//   let nombre = "Juan";
//   console.log("Hola" + " " + nombre);
// }

// saludarJuan(); // "Hola Juan"
// console.log(nombre); // "Sebastian"

function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// // saludar();
// saludar("Carlos");
// saludar("Jimmy");
// saludar("André");
// saludar("Daniel");
// saludar();

let nombre = "Harry";

function saludar(nombre) {
  let edad = 20;
  console.log("¡Hola, " + nombre + "!");
}

// saludar("Carlos");
// console.log(nombre);

function crearUsuario(nombre, telefono, pais = "PE", edad = null) {
  console.log(nombre, edad, telefono, pais);

  const user = {
    firstName: nombre,
    phoneNumber: telefono,
    country: pais,
    age: edad,
  };

  return user;
}

// const usuario = crearUsuario("André", "987997755", "PE", 33);
// crearUsuario("Luis", 30, "983427759", "AR");
// crearUsuario("María", "987113324", "CO", 27);
// crearUsuario("José", "999666333");
// crearUsuario("André", "999666333", "UR");

function sumar(a, b) {
  const suma = a + b;
  return suma;
}

// const numero = sumar(5, 3);
// console.log(numero);

function crearSaludo(nombre) {
  return "Hola " + nombre + ". Qué gusto verte";

  console.log("Ojalá me devuelvas el libro que te presté"); // No se ejecuta
  return "Quiero mi libro!!!!"; // No se ejecuta
}

const mensaje = crearSaludo("André");
console.log(mensaje);
