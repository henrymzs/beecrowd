/*
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
*/
//let [horaInicio, horaFim] = lines.shift().split(' ').map(Number);
let horaInicio = 2;
let horaFim = 16;
let duracao;

if (horaInicio < horaFim) {
    duracao = horaFim - horaInicio;
} else if (horaInicio > horaFim) {
    duracao = (24 - horaInicio) + horaFim;
} else {
    duracao = 24;
}

console.log(`O jogo durou ${duracao} Hora(S)`);