// defineProperty - defineProperties
function Produto(nome, preco, estoque) {



    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false,  // se pode alterar
        configurable: true // se pode ser configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true,  // se pode alterar
            configurable: true // se pode ser configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true,  // se pode alterar
            configurable: true // se pode ser configurável
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//p1.estoque = 500;
//delete p1.estoque; // não deleta por causa do configurable false

console.log(p1);
//console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}