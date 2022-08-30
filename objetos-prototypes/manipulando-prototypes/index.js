
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};
//Literal
const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

//p1.desconto(100);
//p1.aumento(100);
//console.log(p1);

//p2.aumento(10);
//console.log(p2);

const p3 = Object.create(Produto.prototype,/*esse objeto aq é opcional, n precisaria colocar: */ {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10);
console.log(p3);

/*
//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //_proto_: Object.prototype
};

const objB = {
    chaveB: 'B'
    //_proto_: objA
};

const objC = new Object();
objC.chaveC = 'C';


//conseguir acessar o objA pelo objB:
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objB.chaveA);
console.log(objC.chaveB);
*/