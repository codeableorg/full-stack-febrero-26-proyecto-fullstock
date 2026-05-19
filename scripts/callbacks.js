const users = [
  {
    email: "pepe@mail.com",
    password: "supersecret",
    name: "Pepe",
    githubUsername: "pepe-20",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
];

// proceso asincrono
function getUser(email, password) {
  setTimeout(() => {
    // validando las credenciales
    const user = users.find((u) => u.email === email);
    if (!user || user.password !== password) {
      throw new Error("Credenciales invalidas");
    }

    // obteniendo la informacion del usuario
    return user;
  }, 2000);
}

const userEmail = prompt("Ingrese su correo:"); // "ana@mail.com"
const userPassword = prompt("Ingrese su contraseña:"); // "letmein"

const user = getUser(userEmail, userPassword);
console.log("¡Bienvenid@ " + user.name + "!");
