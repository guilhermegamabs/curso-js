const path = require('path');
const { Pessoa } = require('./mode1');
const p1 = new Pessoa('Guilherme');
console.log(p1);




/*
Primeiro exemplo:
// Exportando:
//const mod1 = require('./mode1');
// Pode exportar algo específico tbm
const falaNome = require('./mode1').falaNome;
//const mod1 = require('./mode1');
//console.log(mod1);
// Por meio de desusturação:
const {nome, sobrenome, falaNome} = require('./mode1');
console.log(falaNome());
console.log(nome, sobrenome);
*/