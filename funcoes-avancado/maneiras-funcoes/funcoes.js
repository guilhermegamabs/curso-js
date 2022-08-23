//Declaração de função (Function Hoisting)
//Pode chamar a função antes mesmo de ser criada.
falaOi();

function falaOi() {
    console.log('Oi');
};

//First-class objects(Objetos de Primeira Classe)
//Pode tratar as funções como dado.
// Function Expression: 
const souUmDado = function() {
    console.log('Sou um dado.');
};

souUmDado();

// Arrow Function:
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
};

funcaoArrow();

// Dentro de um objeto:
const obj = {
    falar() { 
        console.log('Estou falando...');
    }
};

obj.falar();