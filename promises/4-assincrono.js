console.log("Inicio");

new Promise(resolve => {
  setTimeout(() => resolve("Fim da Promise"), 1000);        // cria a promise + agenda o timer
})
.then(msg => console.log(msg));

console.log("Continua...");

// mostra execucao assincrona em JavaScript
// o setTimeout executa - resolve ("Fim da Promise") e isso ativa o .then().

// basicamente o progama inicia imprime "Inicio" 
// depois entre na promisse que executa um setTiemout() que coloca a mensagem "Fim da Promise" na fila para ser executada daqui a 1s.
// o .then() e usado para continuar a executar o resto do codigo enquanto a mensagem nao e apresentada no ecra.