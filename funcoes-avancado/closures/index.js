//Closure é a capacidade(seguindo o exemplo), da function conseguir pegar o valor da sua mãe e do global

function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao);
