const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Algo correu mal");                      // indica que a indica que a operacao falhou
  }, 1000);
});

p.catch(erro => {                                   // .catch(...) executa quando a promise e rejeitada. recebe o valor passado ao reject:
  console.log(erro);
});