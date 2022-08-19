/*
&& -> true && true -> true
|| -> true || false -> true

FALSY
*false
0
" " ' ' ` `
null / undefined
NaN
*/

console.log(0 || false || null || 'Luiz Otávio' || true);

const corUsuario = 'vermelho';
const corPadrao = corUsuario  || 'preto';
console.log(corPadrao);