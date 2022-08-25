//                -5       -4       -3        -2         -1
//                0        1        2          3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice((índice), delete, elem1, elem2, elem3);
// pop:

//const removidos = nomes.splice(4, 1); - removendo apenas um valor
//const removidos = nomes.splice(3, 2); - removendo dois valores
//const removidos = nomes.splice(-2, 1); - removendo com valores negativos
//const removidos = nomes.splice(-2, Number.MAX_VALUE); - removde do -2 até o último valor do array
//const removidos = nomes.splice(3, 0, 'Luiz'); adicionando o valor no índice 3
//const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio'); // remove o valor no índice 3 e 4, e adicona esse novo valor no mesmo índice
//const removidos = nomes.splice(-1, 1);  - mesma coisa que o pop();
//const removidos = nomes.splice(0, 1); - mesma coisa que o shift();
//nomes.splice(nomes.length, 0, 'Luiz');  - mesma coisa que o push();
//nomes.splice(0, 0, 'Luiz', 'Otávio'); - mesma coisa que o unshift();
//console.log(nomes, removidos);
console.log(nomes);
