class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

let p = new Pessoa("Jessica");

console.log("Objeto criado:", p);

p = null;   // perde a referencia

console.log("Referencia removida");

// Garbage Collection (GC) e um mecanismo automático de gestão de memória utilizado 
// por linguagens de programacao para libertar memória que ja nao esta a ser utilizada pelo programa.

// neste caso depois do objeto passar a null o GC vai limpar esse espaco automaticamente