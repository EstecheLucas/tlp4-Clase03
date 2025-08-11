class CuentaBancaria2 {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo >= 0) {
      this.#saldo = nuevoSaldo;
    } else {
      console.log("El saldo no puede ser negativo.");
    }
  }

  depositar(monto) {
    this.#saldo += monto;
  }

  extraer(monto) {
    if (monto <= this.#saldo) {
      this.#saldo -= monto;
    } else {
      console.log("Fondos insuficientes");
    }
  }

  consultarSaldo() {
    console.log(`(2) Saldo actual: $${this.#saldo}`);
  }
}

const cuenta2 = new CuentaBancaria2("Lucas", 1000);
console.log(`Titular: ${cuenta2.titular}`);
cuenta2.consultarSaldo();                 

cuenta2.depositar(500);
cuenta2.consultarSaldo();                 

cuenta2.extraer(300);
cuenta2.consultarSaldo();                 

console.log(`Saldo actual (getter): $${cuenta2.saldo}`);

cuenta2.saldo = -100;                    
console.log(`Intento saldo negativo: $${cuenta2.saldo}`); 