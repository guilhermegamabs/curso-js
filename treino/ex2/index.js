//Faça um programa que entre com cinco números e imprima o quadrado de cada número.

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    function recebeEventoForm(e) {
        e.preventDefault();
        const  numero1 = document.querySelector('.cnumero1');
        const  numero2 = document.querySelector('.cnumero2');
        const  numero3 = document.querySelector('.cnumero3');
        const  numero4 = document.querySelector('.cnumero4');
        const  numero5 = document.querySelector('.cnumero5');

        const dn1 = Number(numero1.value) * numero1.value;
        resultado.innerHTML += `<p>${dn1}</p>`
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();