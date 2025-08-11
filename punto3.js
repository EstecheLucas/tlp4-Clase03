String.prototype.concatenarPalabra = function (palabra) {
  return `${this.toString()} ${palabra}`;
};
const prueba = "Saldo";
const resultado = prueba.concatenarPalabra("insuficiente");
console.log(`Resultado: "${resultado}"`);
