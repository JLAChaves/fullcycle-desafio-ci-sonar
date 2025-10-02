function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

function multiplica(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Divisão por zero não é permitida");
  return a / b;
}

function media(numeros) {
  if (!numeros.length) return 0;
  return numeros.reduce((acc, n) => acc + n, 0) / numeros.length;
}

module.exports = { soma, subtrai, multiplica, divide, media };
