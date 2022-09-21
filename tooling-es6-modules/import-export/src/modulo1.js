export const nome = 'Guilherme';
export const sobrenome = 'Gama';
export const idade = 17;

export function soma(x, y) {
    return x + y;
}


export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

