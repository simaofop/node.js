//  Class

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("Olá");
  }
}

const p = new Pessoa("Jessica");
const p2 = new Pessoa("Simao");

p.falar();
console.log(p.nome);
console.log(p2.nome);

// Pessoa - class
// constructor() - metodo especial (pois quando se cria um objeto o constructor e logo chamado)
// falar() - metodo funcao
// p e p2 - objetos
// p.nome - propriedade do objeto
// Quando se cria uma pessoa nova o contructor vai ser logo chamado.