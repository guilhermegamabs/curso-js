const verdadeira = true;

// Let tem escopo de bloco {... bloco}
// Var só tem escopo de função

/*Escopo de Bloco:
let nome = 'Luiz' //criando
var nome2 = 'Luiz'; //criando


if (verdadeira) {
    let nome = 'Otávio'; //criando
    var nome2 = 'Rogério'; //redeclarando

    if(verdadeira) {
        let nome = 'Outra coisa'
        var nome2 = 'Otávio' //Redeclarada  
    }
}

console.log(nome, nome2);
*/
/*
//Escopo de Função:
var sobrenome = 'Miranda';

function faloOi() {
    var nome = 'Luiz';
    console.log(nome + ' ' + sobrenome);
    if (verdadeira) {
        let nome = 'Carlos'
        console.log(nome);
    }
    //console.log(nome); errado
    console.log(sobrenome); //certo
}
//console.log(nome); é errado
faloOi();
*/

console.log(sobrenome);

var sobrenome = 'Miranda';