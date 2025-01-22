/*
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. 
As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. 
Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/
let notas = 503; //parseInt(lines[0]);
console.log(notas);
let notas100 = parseInt(notas/100);
notas = notas%100;
let notas50 = parseInt(notas/50);
notas = notas%50;
let notas20 = parseInt(notas/20);
notas = notas%20;
let notas10 = parseInt(notas/10);
notas = notas%10;
let notas5 =  parseInt(notas/5);
notas = notas%5;
let notas2 =  parseInt(notas/2);
notas = notas%2;
let notas1 =  parseInt(notas/1);
notas = notas%1;
console.log(`${notas100} nota(s) de R$ 100,00`);
console.log(`${notas50} nota(s) de R$ 50,00`);
console.log(`${notas20} nota(s) de R$ 20,00`);
console.log(`${notas10} nota(s) de R$ 10,00`);
console.log(`${notas5} nota(s) de R$ 5,00`);
console.log(`${notas2} nota(s) de R$ 2,00`);
console.log(`${notas1} nota(s) de R$ 1,00`);
