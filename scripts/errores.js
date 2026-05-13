// console.log("Antes del saludo");

// try {
//   console.log(saludo); // lanza el error
//   // const objetoError = { message: "saludo is not defined" }
// } catch {
//   console.log("Algo salio mal. Vuelve a intentarlo.");
// }

// console.log("Después del saludo");

// console.log("Antes del saludo");

// try {
//   setTimeout(() => console.log(saludo), 1000); // <-- lanzará un error
// } catch (error) {
//   console.error("Se detectó un error");
// }

// console.log("Después del saludo");

// console.log("Antes del saludo");

// setTimeout(() => {
//   try {
//     console.log(saludo);
//   } catch (e) {
//     console.dir(e.message);
//     console.dir(e.name);
//     console.dir(e.stack);
//   }
// }, 1000);

// console.log("Después del saludo");

function saludar(nombre) {
  //   if (nombre !== undefined) {
  //     console.log("Hola " + nombre);
  //   } else {
  //     throw new Error("olvidaste el argumento ):");
  //   }

  try {
    if (nombre === undefined) {
      throw new Error("olvidaste el argumento ):");
    }
  } catch (error) {
    console.log(error.message);
  }

  console.log("Hola " + nombre);
}

saludar("Daniel");
saludar();

// console.log(edad);
