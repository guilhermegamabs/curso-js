//Função construtora -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados:
    const ID = 123456;
    const metodoInterno = function() {

    };
    
    //Atributos ou métodos públicos (this):
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}
//New -> cria um objeto vázio, faz o this apontar para o objeto sendo utilizado e já retorna p objeto
const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Guilherme', 'Gama');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();