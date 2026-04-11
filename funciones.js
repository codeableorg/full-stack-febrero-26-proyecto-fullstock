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

saludar();
darLaBienvenida();
