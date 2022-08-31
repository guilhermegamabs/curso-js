class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    sacar(valor) {
        if(valor > this.saldo) {
            console.log(`Saldo insuficiente: R$${this.saldo}`);
            return;
        }

        this.saldo -= valor;
        this.verSaldo();
    }

    depositar(valor) {
        this.saldo += valor;
        this.verSaldo();
    }

    verSaldo() {
        console.log(`Ag/c: ${this.agencia}/${this.conta}` +
        `Saldo: R$${this.saldo.toFixed(2)}`
        );
    }
}

class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo, limite) {
        super(agencia, conta, saldo);
        this.limite = limite;
    }

    sacar(valor) {
        if(valor > (this.saldo + this.limite)) {
            console.log(`Saldop insuficiente: R$${this.saldo}`);
            return;
        }

        this.saldo -= valor;
        this.verSaldo();
    }
}

class ContaPoupanca extends Conta {
    constructor(agencia, conta, saldo) {
        super(agencia, conta, saldo);
    }
}

const contaCorrente = new ContaCorrente(0001, 2062, 3000, 200);
contaCorrente.depositar(1000);
contaCorrente.sacar(2000);
contaCorrente.sacar(2500);
console.log(contaCorrente);

const contaPoupanca = new ContaPoupanca(0002, 2063, 5000);
contaPoupanca.depositar(2000);
contaPoupanca.sacar(3000);
contaPoupanca.sacar(5000);
console.log(contaPoupanca);

const conta1 = new Conta(0003, 2064, 8000);
conta1.depositar(2000);
conta1.sacar(3000);
conta1.sacar(5000);
console.log(conta1);