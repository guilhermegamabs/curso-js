// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

//instância
const pessoa1 = new Pessoa('Luiz', 'O.'); //<-Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <-Pessoa = Função Construtora

const data = new Date();
console.dir(pessoa1);
console.dir(data);