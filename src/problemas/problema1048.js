/*
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

Salário	Percentual de Reajuste
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Acima de 2000.00

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.
*/

let salario = 2000.00; //parseFloat(lines.shift());
let reajuste;
let novoSalario;
let percentual;

if (salario <= 400.00) {
    percentual = 0.15;
} else if (salario <= 800.00) {
    percentual = 0.12;
} else if (salario <= 1200.00) {
    percentual = 0.10;
} else if (salario <= 2000.00) {
    percentual = 0.07;
} else {
    percentual = 0.04;
}

reajuste = salario * percentual;
novoSalario = salario + reajuste;

console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${Math.round(percentual * 100)} %`);