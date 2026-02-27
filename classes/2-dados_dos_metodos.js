class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("Olá, eu sou " + this.nome);
  }
}

const p = new Pessoa("Jessica");
const p2 = new Pessoa("Simao");

p.falar();
p2.falar();

// Depois de criar um objeto dentro da class podemos usar dados de outros metodos como falar() usa o nome de constructor(). 