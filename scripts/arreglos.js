// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numeros.forEach((numero) => console.log(numero * 2));

// console.log(numeros);

// function imprimirDoble(numero) {
//   console.log(numero * 2);
// }

// imprimirDoble(numeros[0]);
// imprimirDoble(numeros[1]);
// imprimirDoble(numeros[2]);
// imprimirDoble(numeros[3]);
// imprimirDoble(numeros[4]);
// imprimirDoble(numeros[5]);
// imprimirDoble(numeros[6]);
// imprimirDoble(numeros[7]);
// imprimirDoble(numeros[8]);
// imprimirDoble(numeros[9]);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const duplicados = nums.map((numero) => numero * 2);

// function duplicar(numero) {
//   return numero * 2;
// }

// console.log(nums);
// console.log(duplicados);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter((numero) => numero % 2 === 0);
const impares = numeros.filter((numero) => numero % 2 === 1);

// console.log(pares);
// console.log(impares);
// console.log(numeros);

const usuarios = [
  { id: 4638252, nombre: "Ana", apellido: "Rodriguez" }, // 0
  { id: 4735263, nombre: "Ana", apellido: "Rodriguez" }, // 1
  { id: 9588363, nombre: "Luis" }, // 2
  { id: 9476272, nombre: "Maria" }, // 3
  { id: 5, nombre: "Julio" }, // 4
  { id: 6, nombre: "Laura" }, // 5
  { id: 7, nombre: "Ana" }, // 6
];

const usuario = usuarios.find((u) => u.nombre === "Julio");
console.log(usuario);

const index = usuarios.findIndex((u) => u.id === 6);
console.log(index);
