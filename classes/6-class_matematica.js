class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(2, 3));

// static faz com o método pertença à classe e não aos objetos.
// chamado Matematica.soma(2, 3);
// chamado diretamente pela classe e nao precisa criar objeto
// const m = new Matematica();
// m.soma(2, 3); // ERRO