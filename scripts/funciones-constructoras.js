// const abc = {}; // literal
// const xyz = new Object(); // funcion constructora

// let animal = {};

// animal.nombre = "Leo";
// animal.energia = 10;

// animal.comer = function (cantidad) {
//   console.log(`${this.nombre} está comiendo.`);
//   this.energia += cantidad;
// };
// animal.dormir = function (tiempo) {
//   console.log(`${this.nombre} está durmiendo.`);
//   this.energia += tiempo;
// };
// animal.jugar = function (tiempo) {
//   console.log(`${this.nombre} está jugando.`);
//   this.energia -= tiempo;
// };

// let lazy = {};

// lazy.nombre = "Lazy";
// lazy.energia = 7;

// lazy.comer = animal.comer;
// lazy.dormir = animal.dormir;
// lazy.jugar = animal.jugar;

// let elefante = {};

// elefante.nombre = "Dumbo";
// elefante.energia = 15;

// elefante.comer = animal.comer;
// elefante.dormir = animal.dormir;
// elefante.jugar = animal.jugar;

// const metodosAnimal = {
//   comer(cantidad) {
//     console.log(`${this.nombre} está comiendo.`);
//     this.energia += cantidad;
//   },
//   dormir(tiempo) {
//     console.log(`${this.nombre} está durmiendo.`);
//     this.energia += tiempo;
//   },
//   jugar(tiempo) {
//     console.log(`${this.nombre} está jugando.`);
//     this.energia -= tiempo;
//   },
// };

// Creacion de una funcion constructora
function Animal(nombre, energia) {
  // crear un nuevo objeto (animal)
  const animal = Object.create(Animal.prototype);

  // configuramos el objeto
  animal.nombre = nombre;
  animal.energia = energia;

  // entregar dicho objeto
  return animal;
}

Animal.prototype.comer = function (cantidad) {
  console.log(`${this.nombre} está comiendo.`);
  this.energia += cantidad;
};
Animal.prototype.dormir = function (tiempo) {
  console.log(`${this.nombre} está durmiendo.`);
  this.energia += tiempo;
};
Animal.prototype.jugar = function (tiempo) {
  console.log(`${this.nombre} está jugando.`);
  this.energia -= tiempo;
};

// Instanciación Funcional
// Instancia: objeto
const burro = Animal("Burro", 8);
const leon = Animal("Leo", 10);
const jirafa = Animal("Lazy", 7);

// const xyz = new Object();

leon.comer(4);
leon.dormir(5);
leon.jugar(1);
