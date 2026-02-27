class Pessoa {
  constructor(nome = "Desconhecido") {
    this.nome = nome;
  }
}

const a = new Pessoa();
const b = new Pessoa("Jessica");

console.log(a.nome);
console.log(b.nome);

// Neste caso quando instaciado um novo objeto se tiver vazio atribui-se "Desconhecido"