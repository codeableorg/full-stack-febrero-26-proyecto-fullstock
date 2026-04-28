class Animal {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }
  comer(cantidad) {
    console.log(`${this.nombre} está comiendo.`);
    this.energia += cantidad;
  }
  dormir(tiempo) {
    console.log(`${this.nombre} está durmiendo.`);
    this.energia += tiempo;
  }
  jugar(tiempo) {
    console.log(`${this.nombre} está jugando.`);
    this.energia -= tiempo;
  }
}

const leo = new Animal("Leo", 7);

leon.comer(4);
leon.dormir(5);
leon.jugar(1);
