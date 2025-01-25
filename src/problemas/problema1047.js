/*
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

Entrada
Quatro números inteiros representando a hora de início e fim do jogo.

Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .
*/

//let [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines.shift().split(' ').map(Number);
let horaInicial = 7;
let minutoInicial = 8;
let horaFinal = 9;
let minutoFinal = 10;
let totalInicial = horaInicial * 60 + minutoInicial;
let totalFinal = horaFinal * 60 + minutoFinal;

let duracaoMinutos;

if (totalFinal > totalInicial) {
    duracaoMinutos = totalFinal - totalInicial;
} else {
    duracaoMinutos = (1440 - totalInicial) + totalFinal; // Considerar ciclo de 24 horas
}

let horas = Math.floor(duracaoMinutos / 60);
let minutos = duracaoMinutos % 60;

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
