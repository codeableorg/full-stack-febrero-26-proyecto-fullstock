// let globalVar = 10;

// function testScope(a) {
//   let localVar = a + globalVar;
//   return localVar;
// }

// console.log(testScope(5));
// console.log(15); // ???

let numero = 5;

function modificarValor() {
  numero = 3;
  let numeroLocal = 10;
  return numeroLocal;
}

modificarValor();
console.log(numero); // ???
