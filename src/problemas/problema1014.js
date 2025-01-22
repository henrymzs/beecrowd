/*
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".
*/
let distanciaX = 4554; //parseInt(lines[0]);
let valorY = 464.6; //parseFloat(lines[1]);
let consumoMedio = (distanciaX/valorY).toFixed(3);
console.log(`${consumoMedio} km/l`);