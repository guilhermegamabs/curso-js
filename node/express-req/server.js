const express = require('express');
const app = express();

// Isso acima é o que precisa p carregar o express!
//           param   querystring
// /profiles/12345?campanha=googleads&nome_camapanha=seila

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

// o interregaçõa faz com que esse parâmetro seja opcional
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    //res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

// Porta 3000
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});
