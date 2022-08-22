// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaouSUARIO = 9999;
const nivelUsuario = pontuacaouSUARIO >= 1000 ? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);

console.log(nivelUsuario);


