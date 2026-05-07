function Animal(nombre, energia) {
  // configuramos el objeto
  this.nombre = nombre;
  this.energia = energia;
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

const leon = new Animal("Leo", 10);
// const elefante = Animal("Elefante", 100); // undefined

leon.comer(4);
leon.dormir(5);
leon.jugar(1);
