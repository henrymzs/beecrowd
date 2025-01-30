/*

Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.
*/
let numerosPositivos = 0;

for (let i = 0; i < 6; i++) {
    let valor = Number(lines.shift()); 
    if (valor > 0) {  
        numerosPositivos++;
    }
}

console.log(`${numerosPositivos} valores positivos`);