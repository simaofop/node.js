function obterUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error("Falhou a buscar user"));
      resolve({ nome: "Ana", idade: 21 });
    }, 1000);
  });
}

async function main() {
  try {
    const user = await obterUser();
    console.log("OK:", user);
  } catch (erro) {
    console.log("ERRO:", erro.message ?? erro);
  } finally {
    console.log("Sempre executa (cleanup)");
  }
}

main();

// try - serve para codigo que pode falhar
// catch - trata o erro
// finally - executa sempre (fechar recursos, esconder loading, etc.)

// neste caso se for reject o try faz o catch se for resolve faz o try
// finally ira sempre ser executado