// IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

//num1 = ((num1 * 100) + (num2 * 100)) / 100;
//num1 = ((num1 * 100) + (num2 * 100)) / 100;
//num1 = ((num1 * 100) + (num2 * 100)) / 100;


num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);
//console.log(typeof num1);
//console.log(num1.toString(2));
//console.log(num1.toFixed(2)); muda a casa decimal
//console.log(Number.isInteger(num1)); vê se é um número inteiro
//let temp = num1 * 'Olá';
//console.log(Number.isNaN(temp));

