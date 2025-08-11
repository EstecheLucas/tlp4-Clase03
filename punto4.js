const toUpperOriginal = String.prototype.toUpperCase;

String.prototype.toUpperCase = function () {
  return "ESTO ESTÁ PROHIBIDO";
};
const texto = "esto debería estar en mayúsculas";
console.log("Texto original:", texto);
console.log("Texto con toUpperCase():", texto.toUpperCase()); 

