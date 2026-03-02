const fs = require("fs");

const stream = fs.createWriteStream("./garbage/teste.txt");

stream.write("Ola\n");

stream.end();

console.log("Ficheiro fechado manualmente");

// se nao chamar .end(), o recurso pode ficar aberto.