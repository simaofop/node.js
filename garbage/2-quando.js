let obj = { dados: new Array(1e6).fill(0) };

console.log("Grande objeto criado");

obj = null;

console.log("Referencia perdida — GC pode limpar depois");

// GC nao e imediato nem previsivel
// Não há forma normal de ver quando ocorre.
// O programa não indica quando a memória foi libertada.