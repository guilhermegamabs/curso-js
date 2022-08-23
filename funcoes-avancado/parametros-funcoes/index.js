// o rest (...) tem que ser o último parâmetro
const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
    
conta('+', 1, 20, 30, 40, 50);


/*
// o rest (...) tem que ser o último parâmetro
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador /= numero;
       if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
*/

/*Via desestruturação de arrays:
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Luiz Otávio', 'Miranda', 30]);
*/

/*Via desestruturação de objetos:
function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome:'Luiz', sobrenome:'Otávio', idade:20};
funcao(WebGLVertexArrayObject);
*/

/*
function funcao() {
    //Argumentos que sustenta todos os argumentos enviados
    console.log(arguments);
}

funcao('Valor');

Exemplo:


function funcao() {
    let total = 0;
    for(let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcao(1, 2, 3, 4, 5);
*/