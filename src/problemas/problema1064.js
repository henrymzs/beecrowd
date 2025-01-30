/*
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, 
deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
*/

let numerosPositivos = 0;
let somaPositivos = 0;

for (let i = 0; i < 6; i++) {
    let valor = Number(lines.shift()); 
    if (valor > 0) {  
        numerosPositivos++;
        somaPositivos += valor;
    }
}
let media = (somaPositivos / numerosPositivos).toFixed(1);
console.log(`${numerosPositivos} valores positivos`);
console.log(media);
