/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. 
Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
Entrada
O arquivo de entrada contém três valores inteiros.
Saída
 */
let A = 217; //parseInt(lines[0]);
let B = 14; //parseInt(lines[1]);
let C = 6; //parseInt(lines[2]);

let maiorAB = (A + B + Math.abs(A - B)) / 2;
let maiorABC = (maiorAB + C + Math.abs(maiorAB - C)) / 2;

console.log(`${maiorABC} eh o maior`);