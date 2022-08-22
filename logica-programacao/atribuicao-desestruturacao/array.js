// ... rest, ... spread
//const numeros = [252, 3252, 5734, 132, 342, 283, 9345, 467, 2432];

//const [primeiroNumero, segundoNumero, terceiroNumero] = numeros;
//console.log(primeiroNumero, segundoNumero, terceiroNumero);

//Pular valores:
//const [um, , tres, ,cinco] = numeros;
//console.log(um, tres, cinco);


//Lista Índices:      0          1           2
//Índices:         0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]);
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);



//Fazer isso acima por desestruturação (mais difícil):
//const [, [,,seis]] = numeros;
//console.log(seis);

/*
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//Lado Esquero - Desestruturação / Lado Direito - Array
const letras = [b, c, a];
[a, b, c] = letras
console.log(a, b, c);
*/