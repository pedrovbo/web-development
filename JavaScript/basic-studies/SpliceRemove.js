var alunos = ['Alex', 'Joao', 'Anna'];

console.log(alunos);

alunos.splice(2,1); //os parâmetros dados para a remoção pelo método splice são - primeiro número determina a quantidade de elementos que deseja eliminar, segundo número é o índice a partir do qual estes serão excluídos.
//variavel.splice(quantidade de elementos, índice onde iniciará a remoção)
console.log(alunos);
console.log(alunos.length);