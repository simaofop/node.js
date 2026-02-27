//Todos os ficheiros .js são considerados módulos e podem ser usados para organizar o código em partes reutilizáveis. 
// Para usar um módulo, usamos a função require().

const nomes = require('./2-nomes');
const sayHi = require('./3-funcao');

sayHi('Susana');
sayHi(nomes.nome1);
sayHi(nomes.nome2);