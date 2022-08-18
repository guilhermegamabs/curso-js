const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)} <br />`;
texto.innerHTML += `${numero} é NaN? ${Number.isNaN(numero)} <br />`;
texto.innerHTML += `Arredodando para cima: ${Math.ceil(numero)} <br />`;
texto.innerHTML += `Arredodando para baixo: ${Math.floor(numero)} <br />`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;