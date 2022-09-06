const express = require('express');
const app = express();
const routes = require('./routes'); 
const path = require('path');

app.use(express.urlencoded({ extended: true }));

//Caminho relativo: app.set('views', './src/views);
app.set('views', path.resolve(__dirname, 'src', 'views'));
//                  engine(tem várias) ejs é mais próximo de html
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000');
});