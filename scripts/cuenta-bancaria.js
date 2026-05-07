// Utiliza getters y setters para asegurarte de que el saldo siempre se "muestre" con un signo de dólar por delante y nunca pueda tener un valor menor a 0.

const cuentaBancaria = {
  // propiedades:
  saldoActual: 1000,
  // metodos:
  get saldo() {
    return `$${this.saldoActual}`;
  },
  set saldo(nuevoSaldo) {
    if (nuevoSaldo < 0) return;

    this.saldoActual = nuevoSaldo;
  },
};

// console.log(cuentaBancaria.saldo);
// cuentaBancaria.saldo = 550;
// console.log(cuentaBancaria.saldo);
console.log(cuentaBancaria.saldo); // "$1000"
cuentaBancaria.saldo = 80;
console.log(cuentaBancaria.saldo); // "$80"
cuentaBancaria.saldo = -100; // no tiene efecto
console.log(cuentaBancaria.saldo); // "$80"
