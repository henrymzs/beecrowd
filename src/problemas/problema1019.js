/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/
let tempo = 140153; //parseInt(lines[0]);
let horas = parseInt(tempo/3600);
let minutos = parseInt((tempo%3600)/60);
let segundos = parseInt(tempo%60);
console.log(`${horas}:${minutos}:${segundos}`);

