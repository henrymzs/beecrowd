/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.

Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, 
sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/
const PI = 3.14159;
let valores = [12.7, 10.4, 15.2]; //lines[0].split(' ').map(parseFloat);
let [A, B, C] = [valores[0], valores[1], valores[2]];

let areaTriangulo = ((A * C)/2).toFixed(3);
let areaCirculo = (PI * Math.pow(C,2)).toFixed(3);
let areaTrapezio = (((A + B) * C)/2).toFixed(3);
let areaQuadrado = (Math.pow(B,2)).toFixed(3);
let areaRetangulo = (A * B).toFixed(3);

console.log("TRIANGULO: " + areaTriangulo);
console.log("CIRCULO: " + areaCirculo);
console.log("TRAPEZIO: " + areaTrapezio);
console.log("QUADRADO: " + areaQuadrado);
console.log("RETANGULO: " + areaRetangulo);