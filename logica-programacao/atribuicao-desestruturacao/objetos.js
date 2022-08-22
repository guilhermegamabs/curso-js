

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição vi Desestruturação

const {nome, ...resto} = pessoa;
console.log(nome, resto);





//                seria esse valor r caso n existisse
//const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
//console.log(r, numero, endereco);

//const { endereco: { rua, numero }, endereco } = pessoa;
//console.log(rua, numero, endereco);

//const { nome: teste = '', sobrenome, idade } = pessoa;
//console.log(teste, sobrenome);