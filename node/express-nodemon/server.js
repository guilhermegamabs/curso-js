// Express é um micro firework

const express = require('express');
const app = express();
// Isso acima é o que precisa p carregar o express!

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET    PUT   DELETE          

// Agora para usar:
// Sobre as rotas:
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Um get na página sobre /sobre

// rota da página inicial, função
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

// Porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});
