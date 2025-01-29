/*
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.
*/

//let valores = lines.shift().split(' ');
let A = 25; //parseInt(valores[0]);
let B = 6; //parseInt(valores[1]);

if (A % B === 0 || B % A === 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}
