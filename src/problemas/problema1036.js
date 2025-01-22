/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. 
Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular".
 Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. 
 Imprima sempre o final de linha após cada mensagem.
*/

//let valores = lines[0].split(" ");
let a = 0.0; //parseFloat(valores[0]);
let b = 20.0; //parseFloat(valores[1]);
let c = 5.0; //parseFloat(valores[2]);

let quadradoB = b * b;
let delta = quadradoB - 4 * a * c;

if (a === 0 || delta < 0) {
    console.log("Impossivel calcular");
} else {
    let raizDelta = Math.sqrt(delta); 
    let a2 = 2 * a;

    let raiz1 = (-b + raizDelta) / a2;
    let raiz2 = (-b - raizDelta) / a2;

    console.log(`R1 = ${raiz1.toFixed(5)}`);
    console.log(`R2 = ${raiz2.toFixed(5)}`);
}
