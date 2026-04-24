let mentirilla = {
  sabor: "amargo",
};

let torta = {
  __proto__: mentirilla, // 1
};

// torta.__proto__ = mentirilla; // 2

// Object.setPrototypeOf(torta, mentirilla); // 3

console.log(torta === mentirilla);
console.log(torta.sabor === mentirilla.sabor);
console.log(
  torta.hasOwnProperty("sabor") === mentirilla.hasOwnProperty("sabor"),
);
