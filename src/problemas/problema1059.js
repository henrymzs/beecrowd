/*
Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.
*/

// Solução inicial
for (let i = 1; i <= 100; i++) {
    if ((i % 2 === 0)) {
        console.log(`numero par ${i}`);
    } 
}

/* Solução mais legivel e menos verbosa 
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}
*/