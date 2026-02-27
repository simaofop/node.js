class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("Olá");
  }
}

class Aluno extends Pessoa {
  estudar() {
    console.log(this.nome + " esta a  estudar...");
  }
}

const a = new Aluno("Jessica");

a.falar();
a.estudar();

// extends e usado para que a class Aluno herde os metodos da class Pessoa