const luis = {
  nombre: "Luis",
  edad: 26,
  adulto: true,
  trabajo: null,
  mascota: { tipo: "perro", nombre: "Firulais" },
  saludar: function () {
    console.log("¡Hola!");
  },
  responderNombre: function () {
    return "Luis";
  },
};

// luis.saludar();
// const nombre = luis.responderNombre();

const simon = {
  nombre: "Simon",
  apellido: "Grau",
  obtenerNombreCompleto() {
    return this.nombre + " " + this.apellido;
    //       "Simon" + " " + "Grau"
  },
};

// function saludar() {
//   console.log(`Hola, mi nombre es ${this.nombre}`);
// }

// const persona1 = {
//   nombre: "Simon",
//   saludar: saludar,
// };

// const persona2 = {
//   nombre: "Micaela",
//   saludar: saludar,
// };

// persona1.saludar();
// persona2.saludar();
// saludar();

// console.log(this);

// const persona = {
//   nombre: "Simon",
//   imprimeThis() {
//     console.log(this);
//   },
//   imprimirNombre() {
//     console.log(this.nombre);
//   },
// };

// persona.imprimeThis();

// Programacion Orientada a Objetos (POO)
// Object Oriented Programming (OOP)

// function login() {
//   // codigo para iniciar sesion
// }

// login();

// const user = {
//   login: function () {
//     // codigo para iniciar sesion
//   },
// };

// user.login();

const persona = {
  nombre: "Simon",
  apellido: "Grau",
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
  set nombreCompleto(valor) {
    if (typeof valor !== "string") return;

    const partes = valor.split(" ");
    this.nombre = partes[0];
    this.apellido = partes[1];
  },
};

// let nombre = "André";
// let apellido = "Távara";

// setter
// function actualizarNombreCompleto(valor) {
//   if (typeof valor !== "string") return; // guard clause

//   const partes = valor.split(" ");
//   nombre = partes[0];
//   apellido = partes[1];
// }

// nombre = "Luis";
// apellido = "Grau";
// actualizarNombreCompleto("Luis Grau");
// actualizarNombreCompleto(99);
