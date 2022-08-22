//                 0       1       2
//For in -> Lê os índices ou chaves do objeto.


const pessoas = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoas) {
    console.log(chave, pessoas[chave]);
}

/*
const chave = 'nome';
console.log(pessoas[chave]);
*/

/*
const frutas = ['Pêra', 'Maçã', 'Uva'];
for (let i in frutas) {
    console.log(frutas[i]);
}
*/

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
*/