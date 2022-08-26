// Factory Functions / Constructor Functions


// Constructor Functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Object.freeze(this);
    //return this; // {}
}
// New vai criar um objeto vázio, e atrelar o this dentro do objeto {} <- this -> this
// p1 = (ENDERECOMEMORIA) -> 'Valor' - 
//p1.ENEDERECOMEMORIA = {nome: 'Outra coisa}; - certo
// p2 = (NOVOENDERECOMEMORIA) -> 'Valor' - errado
const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1); // ele faz com que não possa mudar o valor
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Guilherme', 'Gama');
console.log(p1);


/* Factory Functions
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
};

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);
*/

//Funciona com construtores tbm:
/* Exemplo 2:
const pessoa1 = new Object();
pessoa1.nome = 'Guilherme';
pessoa1.sobrenome = 'Gama';
pessoa1.idade = 17;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
//delete pessoa1.nome;
//pessoa1.falarNome();
//console.log(pessoa1.getDataNascimento());
*/

//Exemplo 1:
/*
const pessoa = {
    nome: 'Luiz', //nome é a chave e Luiz é o valor
    sobrenome: 'Otávio'
};
*/
//console.log(pessoa.nome); 
//console.log(pessoa.sobrenome);

/* Mesma coisa:
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
*/