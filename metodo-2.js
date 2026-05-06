// function FakeString(string) {
//   this.length = 0;
//   this.primitiveValue = string;

//   for (const caracter of string) {
//     this[this.length] = caracter;
//     this.length++;
//   }
// }

// let escuela = "codeable";
// const fakeEscuela = new FakeString("codeable");

const nombres = ["Danilo", "André", "Daniel", "Jimmy"];

for (const nombre of nombres) {
  if (nombre.includes("Dan")) {
    console.log(nombre);
  }
}
