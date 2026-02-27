const esperar = (ms, valor) =>
  new Promise(resolve => setTimeout(() => resolve(valor), ms));

async function main() {
  const inicio = Date.now();

  const [x, y, z] = await Promise.all([
    esperar(1000, "A"),
    esperar(1000, "B"),
    esperar(1000, "C"),

    // const resultados = await Promise.allSettled([p1(), p2(), p3()]);
  ]);

  console.log(x, y, z);
  console.log("Tempo:", Date.now() - inicio, "ms"); // ~1000ms (não ~3000ms)
}

main();

// executar varias Promises em paralelo (Promise.all) senao teria de esperar as tres
// detalhe importante: Promise.all falha logo se uma Promise rejeitar.
// se for para esperar por todas mesmo com erros, usa-se Promise.allSettled:
