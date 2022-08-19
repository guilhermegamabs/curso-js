/*
Operadores de comparação
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a
== Igualdade (valor - não recomendável)******
=== Igualdade Estrita (valor e tipo)
!= Diferente (valor - não recomendável)******
!== Diferente Estrito (valor e tipo)
*/

const comp = 10 > 5;

const num1 = 10; //Number
const num2 = '10'; //String

console.log(comp); //true

console.log(10 >= 10); //true

console.log(10 < 9); //false

console.log(9 <= 9); //true

console.log(num1 === num2); //false checa tanto o valor quanto o tipo

console.log(num1 !== num2); //true checa tanto o valor quanto o tipo