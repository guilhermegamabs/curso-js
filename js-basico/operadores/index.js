/*
Aritméticos 
    +  Adição / Concatenação ( - / * )
    ** Potenciação
    % Resto da Divisão

    Precedência:
    () > ** > * / % > + -

    Incremento = ++
    Decremento = --

    Operadores de atribuição:
    *=
    +=
    -=
    **=


let contador = 4;
const passo = 2
contador *= passo; // contador = contador * passo
console.log(contador);
*/

let num1 = 10;
let num2 = Number('5.2');
let num3 = parseInt('8');
let num4 = parseFloat('7.5');

num1 += 5; //15
num2 *= 2; //10.4
num3 -= 3; //4.5

console.log((num1 + num2) / num3 + num4)
