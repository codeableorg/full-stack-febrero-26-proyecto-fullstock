// const luis = {
//   nombre: "Luis",
//   edad: 26,
//   adulto: true,
//   trabajo: null,
//   mascota: { tipo: "perro", nombre: "Firulais" },
//   saludar: function () {
//     console.log("¡Hola!");
//   },
//   responderNombre: function () {
//     return "Luis";
//   },
// };

// luis.saludar();
// const nombre = luis.responderNombre();

// const simon = {
//   nombre: "Simon",
//   apellido: "Grau",
//   obtenerNombreCompleto() {
//     return this.nombre + " " + this.apellido;
//     //       "Simon" + " " + "Grau"
//   },
// };

function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
}

const persona1 = {
  nombre: "Simon",
  saludar: saludar,
};

const persona2 = {
  nombre: "Micaela",
  saludar: saludar,
};

persona1.saludar();
persona2.saludar();
saludar();

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
