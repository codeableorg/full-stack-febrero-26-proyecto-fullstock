function Contador(valorInicial) {
  // crear un objeto
  const contador = {};
  // configurar objeto
  if (valorInicial === undefined) {
    contador.valor = 0;
  } else {
    contador.valor = valorInicial;
  }
  // retornar objeto
  return contador;
}

const contador = Contador(10);
const contador2 = Contador();
