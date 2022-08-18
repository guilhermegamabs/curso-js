const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`Minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();


/*Primeiro modo de criar objeto, não recomendado:
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 5
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);
*/


/*
//                     Parâmetros 
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

//                             Argumentos
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Miranda', 32);
const pessoa3 = criaPessoa('João', 'Oliveira', 55);
const pessoa4 = criaPessoa('Junior', 'Carvalho', 35);
const pessoa5 = criaPessoa('Jean', 'Moreira', 27);

console.log(pessoa1.nome, pessoa2.nome);
*/