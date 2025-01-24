/*
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.
*/

//let valores = lines.shift().split(' ');
let A = 6.0; //parseFloat(valores[0]);
let B = 4.0; //parseFloat(valores[1]);
let C = 2.1; //parseFloat(valores[2]);
let AB = A + B;
let AC = A + C;
let CB = C + B; 
if (AB > C && AC > B && CB > A) {
    let perimetro = (A + B + C).toFixed(1);
    console.log(`Perimetro = ${perimetro}`);
} else {
    let areaTrapezio = (((A + B) * C)/2).toFixed(1);
    console.log(`Area = ${areaTrapezio}`);    
}