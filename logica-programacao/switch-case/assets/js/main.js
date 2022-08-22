
const h1 = document.querySelector('.container h1');
const data = new Date();

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return diasSemana[diaSemana];
}

function criaDate(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}`+
        `de ${data.getFullYear()}` +
        `${zeroAEsquerda(data.getHours())}:${zecroAEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = criaDate(data);


/*
const h1 = document.querySelector('.container h1');
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
*/