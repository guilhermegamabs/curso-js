// Map vai alterar os valores do array
//Dobre os números
/* Exemplo:
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);
*/


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];

const nomePessoa = pessoas.map(obj => obj.nome);
console.log(nomePessoa);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
    //criando um novo objeto para não modificar o array original
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(comIds);

console.log(pessoas);


