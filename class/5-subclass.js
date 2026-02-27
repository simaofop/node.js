class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("Olá");
  }
}

class Aluno extends Pessoa {
  constructor(nome, curso) {
    super(nome);
    this.curso = curso;
  }

  info() {
    console.log(this.nome + " - " + this.curso);
  }
}

const a = new Aluno("Jessica", "Enfermagem");
a.info();

// Aluno herda todos os metodos de Pessoa e o super e usado para chamar o constructor de Pessoa 
// Assim quando criado um novo objeto e chamado o constructor(nome, curso)