/*
Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal. */

//let valores = lines[0].split(" ");
let codigo = 2; //parseInt(valores[0]);
let quantidade = 3; //parseInt(valores[1]);

let preco = 0;

if (codigo === 1) {
    preco = quantidade * 4.00;
} else if (codigo === 2) {
    preco = quantidade * 4.50;
} else if (codigo === 3) {
    preco = quantidade * 5.00;
} else if (codigo === 4) {
    preco = quantidade * 2.00;
} else {
    preco = quantidade * 1.50;
}

console.log(`Total: R$ ${preco.toFixed(2)}`);
