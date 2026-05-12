// function saludar(nombre = "mundo") {
//   console.log("Hola " + nombre);
// }

// saludar("André");
// saludar();

// setTimeout(saludar, 3000, "Jimmy");
// setTimeout(saludar, 3000);

// const timer2 = setTimeout(() => saludar("André"), 2000);
// console.log(timerId);
// console.log(timer2);

// const timerId = setTimeout(() => saludar("Jimmy"), 5000);

// clearTimeout(timerId);

// let contador = 0;

// function imprimirContador() {
//   console.log(contador);
//   contador++;
// }

// const intervalId = setInterval(imprimirContador, 1000);

// clearInterval(intervalId);

// setTimeout(() => clearInterval(intervalId), 10000);

console.log("Antes de la planificación");

setTimeout(() => console.log("Tarea programada"), 0);

console.log("Después de la planificación");

console.log("Mucho después de la planificación");
