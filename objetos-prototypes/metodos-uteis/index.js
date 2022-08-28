
/*const outraCoisa = {
    ...produto,
    material: 'porcelana'
};
*/

/* Outra forma:
const outraCoisa = Object.assign({}, produto, {material: 'porcelana'});
*/
/*
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
//ele retorna as propriedades:
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
*/

const produto = {nome: 'Caneca', preco: 1.8, material: 'porcelana'};
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}