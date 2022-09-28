//  Calcule a média de diversas notas digitadas pelo usuário.

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nota1 = form.querySelector('.inota1');
        const nota2 = form.querySelector('.inota2');
        const nota3 = form.querySelector('.inota3');
        const nota4 = form.querySelector('.inota4');
       
        const soma = Number(nota1.value) + Number(nota2.value) + Number(nota3.value) + Number(nota4.value);
        const media = soma / 4;
        resultado.innerHTML += `<p>${media}</p>`
        
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();