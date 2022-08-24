//Factory Function (Função Fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura,

        peso: peso,

        get imc () {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Guilherme', 'Gama', 1.79, 86);
p1.nomeCompleto = 'Luiz Otávio Miranda';
console.log(p1.nomeCompleto);
console.log(p1.sobrenome);
console.log(p1.fala());
