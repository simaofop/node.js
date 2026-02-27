function obterUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ nome: "Jessica", idade: 20 });
    }, 1000);
  });
}

obterUser()
  .then(user => console.log(user));

// simula a busca de um utilizador de forma assíncrona e depois mostra os dados.
// a function nao retorna o utilizador imediatamente, retorna algo que vai conter o utilizador no futuro.
// apos 1s a promise resolve com um objeto: { nome: "Ana", idade: 21 }
// .then(user => ...) recebe o objeto resolvido.
// no caso isto simula um pedido a API