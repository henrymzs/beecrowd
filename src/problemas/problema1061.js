/*
Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, 
iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, 
uma vez que ele sabe quando inicia e quando termina o evento.

Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.

Entrada
Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar.
 Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. 
 Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.

Saída
Na saída, deve ser apresentada a duração do evento, no seguinte formato:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.
*/

// Simulando entrada do beecrowd
let lines = [
    "Dia 5",
    "08 : 12 : 23",
    "Dia 9",
    "06 : 13 : 23"
];

let diaInicio = parseInt(lines[0].split(" ")[1]); 
let [horaInicio, minutoInicio, segundoInicio] = lines[1].split(" : ").map(Number);
let diaFim = parseInt(lines[2].split(" ")[1]); 
let [horaFim, minutoFim, segundoFim] = lines[3].split(" : ").map(Number);

let inicioSegundos = diaInicio * 86400 + horaInicio * 3600 + minutoInicio * 60 + segundoInicio;
let fimSegundos = diaFim * 86400 + horaFim * 3600 + minutoFim * 60 + segundoFim;

let duracaoTotal = fimSegundos - inicioSegundos;

let dias = Math.floor(duracaoTotal / 86400);
duracaoTotal %= 86400;
let horas = Math.floor(duracaoTotal / 3600);
duracaoTotal %= 3600;
let minutos = Math.floor(duracaoTotal / 60);
let segundos = duracaoTotal % 60;

console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
