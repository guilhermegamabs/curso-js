/*
Primitivos(imutáveis) - String, Number, Boolean, Undefined, Null, (BigInt), (Symbol) - Valores copiados


Referência(mutável) - Array, Object, Function - Passados por referência
*/

/*
Imutáveis
let a = 'A';
let b = a; //Cópia
console.log(a, b);
a = 'B'
console.log(a, b); O b vai tar com valor 'A' 
*/

/*
Mutável
let a = [1,2,3];
let b = a;

console.log(a, b);

a.push(4);
console.log(a, b); //o b vai receber o valor 'A' tbm
*/