/*Com fetch:
fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElemtnosNaPagina(json));
*/
//Com axios:

axios('pessoas.json')
    .then(resposta => carregaElemtnosNaPagina(resposta.data));
    
function carregaElemtnosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoas of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoas.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoas.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoas.salario;
        tr.appendChild(td3);   

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}