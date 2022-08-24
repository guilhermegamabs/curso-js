// IIFE -> Immediately Invokd Function Expression

(function(idade, peso, altura) {
    
    const sobrenome = 'Gama';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Guilherme'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

const nome = 'Qualquer coisa';