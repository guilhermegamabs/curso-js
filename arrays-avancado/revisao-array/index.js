//Valor por Referência(refletem no msm lugar da memória)
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
//                  0         1        2      3          4
//const nomes = ['Eduardo', 'Maria', 'Joana', 'Pedro', 'Guilherme', 'Ana'];
//criar uma string em um array:
//const nome = 'Luiz Otávio Miranda';
//const nomes = nome.split(' ');

//um array se tornar uma string:
const nomes  = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');
console.log(nome);

//const novo = [nomes];  - reflete
//const novo = [...nomes]; - se usar o rest, ele não vai mais refletir na outra variável

//const novo = nomes.slice(1, 3); corta o array
//const novo = nomes.slice(1, -1); //funciona de trás p frente também
//const removido = nomes.pop();
//const removidoComeco = nomes.shift(); //remove o primeiro dado, e o índice 1 vira 0, e assim por diante
//nomes.push('Carlos'); - adiciona um novo valor no array (no final)
//nomes.unshift('Pedro'); - adiciona um novo valor no começo do array







//console.log(nomes.length); // - quantos valores tem o array
//nomes[1] = 'João';
//delete nomes[2];