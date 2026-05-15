const regex = /hola/gi;

// console.log(infoRegex); // arreglo o null

// console.log(
//   regex.exec("hola, esta es mi primera hola prueba para encontrar patrones"),
// );
// console.log(
//   regex.exec("hola, esta es mi primera hola prueba para encontrar patrones"),
// );

// match

// console.log(
//   "Hola, esta es mi primera hola prueba para encontrar patrones hOLa".match(
//     regex,
//   ),
// );

// replace

// console.log(
//   "Hola, esta es mi primera hola prueba para encontrar patrones hOLa".replace(
//     regex,
//     "MUNDO",
//   ),
// );

// split
const lista = "manzana, pera,   platano,  mango,         fresa,naranja";
const frutas = lista.split(/,\s*/);
console.log(frutas);
