// const sumar = (a, b) => a + b;

// console.log(sumar(-1, 5));
// console.log(sumar(10, 5));
// console.log(sumar(9, 1));

// const saludar = (nombre) => {
//   const mensaje = `Bienvenido, ${nombre}`;
//   console.log(mensaje);
// };

// saludar("Daniel");
// saludar("Gustavo");
// saludar("Jimmy");

// let saluda = () => console.log("¡Hola!");

// let operar = (operacion, a, b) => {
//   switch (operacion) {
//     case "suma":
//       return a + b;
//     case "resta":
//       return a - b;
//     case "multiplicacion":
//       return a * b;
//     case "division":
//       return a / b;
//     default:
//       return "Operacion invalida";
//   }
// };

// console.log(operar("multiplicacion", 10, 4));
// console.log(operar("resta", 10, 4));
// console.log(operar("division", 10, 4));
// console.log(operar("suma", 10, 4));
// console.log(operar("potencia", 10, 4));

// const escuela = {
//   nombre: "Codeable",
//   imprimirSaludo: () => console.log("Hola Mundo!"),
//   mostrarNombre: function () {
//     console.log(this);
//   },
// };

// escuela.imprimirSaludo();
// escuela.mostrarNombre();

// function saludar(nombre, x, y, z, a = null) {
//   console.log(arguments.length);
//   console.log(arguments["0"]);
//   console.log(arguments["1"]);
//   console.log(arguments["2"]);
//   console.log(arguments["3"]);
//   console.log(arguments["4"]);
//   console.log(arguments["5"]);
//   console.log(arguments["6"]);
//   console.log(arguments["7"]);
//   const mensaje = `Bienvenido, ${nombre}`;
//   console.log(mensaje);
// }

// console.log(saludar.name);
// console.log(saludar.length);

// saludar("Jorge", 99, true, null, "Codeable", 2026, "A", false);

// function saludar() {
//   console.log(`¡Hola! Mi nombre es ${this.nombre}.`);
// }

// saludar.call({ nombre: "Luis" });

// const saludo = saludar.bind({ nombre: "Juan" });
// saludo();

// const usuario = {
//   nombre: "André",
//   saludar: saludar,
// };

// usuario.saludar();
// saludar();

// function presentar(titulo, ciudad) {
//   console.log(`${titulo} ${this.nombre}, de ${ciudad}.`);
// }

// presentar.apply({ nombre: "Mario" }, ["Sr.", "Lima"]);

// presentar.call({ nombre: "Luis" }, "Sr.", "Lima");
// const presentar2 = presentar.bind({ nombre: "Luis" });
// presentar2("Sr.", "Lima");
// presentar2("Sr.", "Lima");
// presentar2("Sr.", "Lima");

// Parametro 'Rest'

function ejemplo(a, b, c = 0, ...args) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(args);
  console.log(args[0]);
  console.log(args[1]);
}

// ejemplo(10, 20, 30, 40, 50, 60, 70, 80, 90);

function sumarTodos(...numeros) {
  console.log(numeros);
  let result = 0;

  for (let i = 0; i < numeros.length; i++) {
    result += numeros[i];
    // result = result + numeros[i];
  }

  return result;
}

// console.log(sumarTodos(1, 2, 3));
// console.log(sumarTodos(10, 20, 30, 40, 50));

// Operador 'Spread'

// const usuario1 = { nombre: "Juan", apellido: "Perez" };
// const nuevoUsuario = { pais: "Mexico", ciudad: "Guadalajara", ...usuario1 };

// const usuario2 = { ...usuario1 };
// usuario1.pais = "Mexico";
// usuario1.ciudad = "Guadalajara";

// const numeros = [1, 2, 3];
// const numerosHasta10 = [...numeros, 4, 5, 6, 7, 8, 9, 10];

const numeros = [20, 30];
const suma = (a, b) => a + b;

console.log(suma(...numeros));
// console.log(suma(numeros[0], numeros[1]));
