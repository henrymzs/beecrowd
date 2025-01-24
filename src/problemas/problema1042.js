/*
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
*/

let inputArray = lines.shift().split(' ');
let newArr = inputArray.map(x => parseInt(x)); 
let arr = [...newArr].sort((a, b) => a - b); 

console.log(`${arr[0]}`);
console.log(`${arr[1]}`);
console.log(`${arr[2]}`);
console.log("");
console.log(`${newArr[0]}`);
console.log(`${newArr[1]}`);
console.log(`${newArr[2]}`);