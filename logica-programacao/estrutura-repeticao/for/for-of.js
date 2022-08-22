const nome = ['Luiz', 'Otávio', 'Henrique'];
//Para Array todos os tipos de for funcionam
//Para objetos(não funciona o for of)
for (let valor of nome) {
    console.log(valor);
}

console.log('####');

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('####');

for (let i in nome) {
    console.log(nome[i]);
}

console.log('####');

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

