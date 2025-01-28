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