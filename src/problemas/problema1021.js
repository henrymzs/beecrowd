/*
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. 
A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. 
As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01.
 A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
*/
let valor = 400; //parseFloat(lines[0]) * 100; // converte para centavos e evita problemas de ponto flutuante
const notas = [10000, 5000, 2000, 1000, 500, 200];
const moedas = [100, 50, 25, 10, 5, 1];
console.log("NOTAS:");
for (let nota of notas) {
    const quantidade = Math.floor(valor / nota);
    console.log(`${quantidade} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
    valor %= nota;
}
console.log("MOEDAS:");
for (let moeda of moedas) {
    const quantidade = Math.floor(valor / moeda);
    console.log(`${quantidade} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
    valor %= moeda;
}