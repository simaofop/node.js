new Promise(resolve => {
  resolve(5);
})
.then(x => x * 2)
.then(x => x + 1)
.then(resultado => console.log(resultado));

// cria uma promise ja resolvida e encadeia varios .then(), passando o resultado de um para o outro.
// cada .then() recebe o resultado do anterior.