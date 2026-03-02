async function exemplo(db) {
  await db.connect();

  console.log("Ligado à BD");

  await db.close();   // obrigatório
}

// Exemplo conceptual com base de dados
// GC nao fecha sockets, ficheiros, DB connections automaticamente.