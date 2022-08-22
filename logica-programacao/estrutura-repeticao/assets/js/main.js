const resultado = document.querySelector('.container');
const div = document.createElement('div');
const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, //1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'} //3
];

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

resultado.appendChild(div);