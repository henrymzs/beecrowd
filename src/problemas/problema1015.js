/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais, segundo a fórmula:

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, considerando 4 casas decimais.
*/
let eixoP1 = [2.5, -0.4]; //lines[0].split(' ').map(parseFloat);
let [x1, y1] = [eixoP1[0], eixoP1[1]];
let eixoP2 = [-12.2, 7.0]; //lines[1].split(' ').map(parseFloat);
let [x2, y2] = [eixoP2[0], eixoP2[1]];
let distancia = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2),2).toFixed(4);
console.log(distancia);