class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Guilherme';
const sobrenome = 'Gama';
// Outro meio de exportar
module.exports = {
    nome, sobrenome, Pessoa
};

/*
Meios de exportar:
module.exports.nome = 'Guilherme';
exports.Pessoa = Pessoa;
this.sobrenome = 'Qualquer coisa que eu quiser';
*/

/*
Primeiro exemplo:
const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

//console.log(module);


module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;


// Atalho:
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
// N mt usado o this nesse caso
this.qualquerCoisa = 'O que eu quiser exportar';
//console.log(module.exports);
*/