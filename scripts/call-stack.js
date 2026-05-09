// declaracion
// function saludar() {
//   console.log("Se ejecuta saludar..."); // 3er llamado
// }

// function sumar(a, b) {
//   //   return a + b;
//   const suma = a + b;
//   return suma;
// }

// console.log("Primer console.log"); // 1er llamado

// saludar(); // 2do llamado

// const resultado = sumar(3, 4); // 4to llamado

// console.log(resultado); // 5to llamado

function prepararPocionMortifago() {
  console.log("Preparando la poción para los Mortífagos"); // 9
  añadirIngrediente("Lagrima de basilisco"); // 10
}

function prepararPocionAuror() {
  console.log("Preparando la poción para los Aurors"); // 3
  añadirIngrediente("Pluma de fénix"); // 4
  prepararPocionMortifago(); // 8
  añadirIngrediente("Escama de dragón"); // 14
}

function añadirIngrediente(ingrediente) {
  console.log("Añadiendo " + ingrediente); // 5 - 11 - 15
  realizarHechizo(); // 6 - 12
}

function realizarHechizo() {
  console.log("Pronunciando hechizo para mezclar ingredientes"); // 7 - 13 - 16
}

console.log("Inicio de la preparación de pociones"); // 1
prepararPocionAuror(); // 2
console.log("Final de la preparación de pociones"); // 17
