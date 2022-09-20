const express = require('express');
const app = express();


//ESSE É UM GET NA PÁGINA /
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name"nome">
    <button>Enviar</button>
    </form>
    `);
});

//ESSE É UM POST NA PÁGINA /
app.post('/', (req, res) => {
    res.send('Recebi o formulário')
});

//ESSE É UM GET NA PÁGINA /CONTATO
app.get('/contato',  (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});