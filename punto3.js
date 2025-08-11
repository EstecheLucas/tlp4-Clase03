String.prototype.concatenarPalabra = function (palabra) {
  return `${this.toString()} ${palabra}`;
};
const saludo = "Saldo";
const resultado = saludo.concatenarPalabra("insuficiente");
console.log(`Resultado: "${resultado}"`);
