// LA FUNCIÓN: Es el "Botón A" del control.
// No sabe quién lo está presionando, solo sabe que debe "Atacar".
function botonDeAtaque() {
  // Aqui implementa tu solucion
  console.log(this);
  //   console.log(this.nombre);
  //   console.log(this.fuerza);

  const mensaje = `${this.nombre} ataca con una fuerza de ${this.fuerza}!`;
  console.log(mensaje);
}

// PERSONAJE 1: Mario
const mario = {
  nombre: "Mario",
  fuerza: 10,
  atacar: botonDeAtaque, // Le asignamos el botón a Mario
};

// PERSONAJE 2: Bowser
const bowser = {
  nombre: "Bowser",
  fuerza: 50,
  atacar: botonDeAtaque, // Le asignamos el mismo botón a Bowser
};

// // ¡A JUGAR!
mario.atacar(); // Resultado: "Mario ataca con una fuerza de 10!"
bowser.atacar(); // Resultado: "Bowser ataca con una fuerza de 50!"

// PERSONAJE 1: Mario
// const mario = {
//   nombre: "Mario",
//   fuerza: 10,
//   atacar: function () {
//     console.log(`${this.nombre} ataca con una fuerza de ${this.fuerza}!`);
//   },
// };

// // PERSONAJE 2: Bowser
// const bowser = {
//   nombre: "Bowser",
//   fuerza: 50,
//   atacar: function () {
//     console.log(`${this.nombre} ataca con una fuerza de ${this.fuerza}!`);
//   },
// };

// // ¡A JUGAR!
// mario.atacar(); // Resultado: "Mario ataca con una fuerza de 10!"
// bowser.atacar(); // Resultado: "Bowser ataca con una fuerza de 50!"

// PENDIENTE:
// 4. Cuando un método necesita llamar a otro método del mismo objeto
