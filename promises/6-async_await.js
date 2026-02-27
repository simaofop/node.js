function obterUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ nome: "Jessica", idade: 20 });
    }, 1000);
  });
}

async function main() {                             // declara que a funcao pode usar await.
  const user = await obterUser();
  console.log(user);
  console.log("Depois de await.");
}

main();
console.log("Ola");

// simula a busca com async em vez de .then de um utilizador de forma assíncrona e depois mostra os dados.

// await obterUser() espera a promise resolver
// pausa apenas esta função (main())
// recebe o valor resolvido
// neste caso ola sera visto primeiro