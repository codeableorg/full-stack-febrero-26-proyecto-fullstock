// const usuario = {
//   correo: "andre@mail.com",
//   contrasenia: "123456",
//   nombre: "André",
//   edad: 25,
//   cuentaVerificada: false,
// };

// const user = usuario;

// let pais = {
//   nombre: "Perú",
//   continente: "America",
//   habitantes: 32000000,
//   esDesarrollado: false,
// };

// usuario.contrasenia = "supersecret";
// // usuario.edad = "26";
// usuario.edad = usuario.edad + 1;
// usuario.edad = String(usuario.edad);

// console.log(usuario);
// console.log(usuario.correo);

// usuario.pais = "Perú";

let sherlock = {
  apellido: "Holmes",
  direccion: { ciudad: "Londres" },
};

let john = {
  apellido: "Watson",
  direccion: sherlock.direccion,
};

// console.log(sherlock.edad);
// ocurre la pelea
john.apellido = "Lennon";
// john.direccion.ciudad = "Nueva York";

john.direccion = { ciudad: "Nueva York" };

// console.log(sherlock);
let nombrePropiedad = prompt("¿Qué quieres saber?");
console.log(sherlock[nombrePropiedad]);
