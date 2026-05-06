// function multiplicar(num1, num2) {
//   return num1 * num2;
// }

// // HOF
function imprimirValores(a) {
  console.log(a);
  console.log(typeof a);
  console.log(a(7, 8)); // ejecutando el callback
}

// imprimirValores(multiplicar); // ejecucion de la HOF

// const b = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(b);
// console.log(typeof b);
// console.log(b(7, 8));

function crearMultiplicador(multiplicador) {
  return function (numero) {
    console.log(numero * multiplicador);
  };
}

const multiplicaPor5 = crearMultiplicador(5);
const multiplicaPor3 = crearMultiplicador(3);

// ¿Y si hacemos esto?:
let resultado = multiplicaPor3(5);
console.log(resultado); // ??
