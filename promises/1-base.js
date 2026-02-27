//  Promisses 

const p = new Promise((resolve, reject) => {        // cria uma promise nova. a função recebe dois parametros especiais: resolve - indica sucesso; resolve - indica sucesso
  setTimeout(() => {                                // setTimeout - espera 1000 ms (1 segundo)
    resolve("Terminou!");                           // depois chama resolve("Terminou!")
  }, 1000);
});

p.then(resultado => {                               // .then(...) executa quando a promise resolve.
  console.log(resultado);
});

// uma promise representa o resultado futuro de uma operacao assincrona.
// promise e quase um resultado que ainda não está pronto
// muito importante: o codigo continua a executar enquanto a operação ocorre.

// estados de uma promise
// pending - ainda a executar
// fulfilled - terminou com sucesso
// rejected - terminou com erro
