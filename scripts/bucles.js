// for
// una iteracion es cada una de las veces que se ejecuta el bloque de codigo
// mientras i sea menor a 5
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
// let i = 10;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// console.log(`Valor de i: ${i}`);

// do while
// let i = 10;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// console.log("Fin del programa");

// Bucle 'for-of'

// const numerosPares = [2, 4, 6, 8, 10, 12, 14, 16];

// for (const numero of numerosPares) {
//   console.log(numero);
// }

// const mensaje = "Hola mundo!";

// for (const char of mensaje) {
//   console.log(char);
// }

// Bucle 'for-in'

const persona = {
  nombre: "Angélica",
  edad: 30,
  profesion: "Desarrolladora",
};

for (const prueba in persona) {
  // console.log(persona.prueba);
  console.log(persona[prueba]);
}
