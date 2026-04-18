const decirHola = function () {
  console.log("¡Hola!");
};

// decirHola();

// const persona = {
//   nombre: "Luis",
//   edad: 26,
//   adulto: true,
//   trabajo: null,
//   mascota: { tipo: "perro", nombre: "Firulais" },
//   saludar: decirHola,
// };

// persona.saludar();

const persona = {
  nombre: "Luis",
  edad: 26,
  adulto: true,
  trabajo: null,
  mascota: { tipo: "perro", nombre: "Firulais" },
  saludar: function () {
    console.log("¡Hola!");
    decirHola();
  },
  responderNombre: function () {
    return "Luis";
  },
};

persona.saludar();
const nombre = persona.responderNombre();

// const pokemon = {
//   especie: "Pikachu",
//   saludar: function () {
//     console.log("Pikachu saluda");
//   },
// };

// const pokemon = {
//   especie: "Pikachu",
//   saludar() {
//     console.log("Pika pikaaa!!");
//   },
// };

// console.log(pokemon.especie);
// pokemon.saludar();

// function volarAvion() {
/* implementación... */
// }

// function volarAve() {
/* implementación... */
// }

// const ave = {
// ...otras propiedades de ave
//   volar() {
/* implementación... */
//   },
// };

// const avion = {
// ...otras propiedades de avion
//   volar() {
/* implementación... */
//   },
// };

// ave.volar();
// avion.volar();
