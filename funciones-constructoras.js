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

const metodosAnimal = {
  comer(cantidad) {
    console.log(`${this.nombre} está comiendo.`);
    this.energia += cantidad;
  },
  dormir(tiempo) {
    console.log(`${this.nombre} está durmiendo.`);
    this.energia += tiempo;
  },
  jugar(tiempo) {
    console.log(`${this.nombre} está jugando.`);
    this.energia -= tiempo;
  },
};

// Creacion de una funcion constructora
function Animal(nombre, energia) {
  // crear un nuevo objeto (animal)
  const animal = {};
  // configuramos el objeto
  animal.nombre = nombre;
  animal.energia = energia;

  animal.comer = metodosAnimal.comer;
  animal.dormir = metodosAnimal.dormir;
  animal.jugar = metodosAnimal.jugar;

  // entregar dicho objeto
  return animal;
}

// Instanciación Funcional
// Instancia: objeto
const burro = Animal("Burro", 8);
const leon = Animal("Leo", 10);
const jirafa = Animal("Lazy", 7);

leon.comer(4);
leon.dormir(5);
leon.jugar(1);
jirafa.dormir(8);
jirafa.comer(5);
jirafa.jugar(3);
burro.jugar(2);
burro.dormir(8);
burro.comer(7);
