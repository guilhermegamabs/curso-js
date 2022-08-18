/*
Primeiro modo de criar função:
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma();
console.log(resultado);

console.log(soma(2, 2));
*/
/*
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
*/

//Outro tipo de função:
const raiz = n => n ** 0.5;
console.log(raiz(9));
