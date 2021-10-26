var alunos = ['Alex', 'Joao', 'Anna'];

console.log(alunos);

alunos.shift();//remove um elemento do início do array. Após a remoção ele é reindexado (1 passa a ser 0 e etc), além disso o tamanho do array é atualizado.

console.log(alunos);
console.log(alunos.length);