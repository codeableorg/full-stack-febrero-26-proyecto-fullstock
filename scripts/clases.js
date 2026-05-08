class Animal {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }
  // metodos de instancia
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
  // metodos estaticos
  static animalesEnPeligro() {
    console.log("Vaquita marina");
    console.log("Rinoceronte de Java");
    console.log("Gorila de montaña");
  }
}

const leo = new Animal("Leo", 7);

leo.comer(8);
leo.dormir(5);
leo.jugar(10);

// Animal.animalesEnPeligro();
// Animal.prototype.dormir(10);

// for (const key in leo) {
//   console.log(key);
// }
