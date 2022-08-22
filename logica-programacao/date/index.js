
//const data = new Date(2019, 3, 20, 15, 14, 27); // a, m, d, h, M, s, ms
/*
const data = new Date('2022-08-22 8:55:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //Mês Começado do Zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now());
*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${dia} ${hora}:${min}:${seg}`
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)