class DispositoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' Dispositivo já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
        }

        this.ligado = false;
    }
}

//Herdando de uma classe:
class Smartphone extends DispositoEletronico {
    constructor(nome, cor, modelo) {
        //Usar super p chamar tudo que foi feito no construtor do dispositivo eletronico
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar')
    }

    falaOi() {
        console.log('OI');
    }
}

const d1 = new DispositoEletronico('Smartphone');
const s1 = new Smartphone('iPhone', 'Preto', 'Galaxy S10');
const t1 = new Tablet('iPad', true);
/*
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
*/
console.log(d1);

s1.ligar();
console.log(s1);

t1.ligar();
t1.falaOi();
console.log(t1);