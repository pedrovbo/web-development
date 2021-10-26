var alunos = ['Alex', 'Joao', 'Anna'];

console.log(alunos);

alunos[alunos.length] = 'Maria';

console.log(alunos);

//array.splice(posiçaõ, 0, novo_elemento, novo_elemento,...);
alunos.splice(3, 1, 'Gabriel'); //aqui, onde está o '1', permitem dois métodos, 0 ou 1, 0 falso, 1 verdadeiro, onde se for falso haverá a manutenção dos dados do índice do array, porém se verdadeiro aquele valor contido no índice será substituído

console.log(alunos);

alunos.splice(3, 0, 'Yuri'); //método 0, logo o valor acrescentado só irá "afastar" o valor contido anteriormente naquele índice, para o índice seguinte

console.log(alunos);

alunos.splice(5, 0, 'Herick');//neste caso como o índice indicado '5' não possuía nenhum valor, 'Herick' simplesmente será acrescentado ao array sem nenhuma modificação

console.log(alunos);