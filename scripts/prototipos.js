let humano = {
  corazon: true,
};

let maryJean = {
  pelo: "rojo",
};

// maryJean.__proto__ = humano; // setter
Object.setPrototypeOf(maryJean, humano); // setter

// maryJean.__proto__; // getter
console.log(Object.getPrototypeOf(maryJean)); // getter

// maryJean.corazon = false;

// let personaje = {
//   universo: "Marvel",
// };

// humano.__proto__ = personaje;

// let peterParker = {
//   edad: 18,
//   universo: "La Tierra",
// };

// peterParker.__proto__ = humano;

// let obj = {};

// let unObjeto = {};
// unObjeto.__proto__ = null;

let spiderman = {
  superpoder: "Lanzar telarañas",
};

// spiderman.__proto__.identidad = "Peter Parker";
console.log(Object.getPrototypeOf(spiderman));

// let superman = {};
