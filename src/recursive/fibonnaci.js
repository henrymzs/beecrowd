function fibonacciIterative(number) {
    if (number <= 1) {
        return 0;
    }
    if (number <= 2) {
        // Os primeiros números da sequencia são F(1) = 1 e F(2) = 1, como já sabemos isso, não precisamos calcular nada e retornamos 1; 
        return 1; 
    }
    let fibNMinus2 = 0; // Representa F(n-2), inicialmente 0 (F(0) = 0);
    let fibMinus1 = 1; // Representa F(n-1), inicialmente 1 (F(1) = 1);
    let fibN; // Guardará o resultado final, mas ainda não foi definido;
    for (let i = 2; i <= number; i++) {
        fibN = fibMinus1 + fibNMinus2;
        fibNMinus2 = fibMinus1; // Recebe o valor de fibNMinus1 (deslocamente para trás);
        fibMinus1 = fibN; // Recebe o valor de fibN (novo último número calculado);
    }
    return fibN
}
console.log('função interativa:', fibonnaci(10));


function fibonacciRecursive(number) {
    if (number < 1) {
        return 0;
    }
    if (number <= 2) {
        return 1;
    }
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2); // função se repete até atingir os casos base (F(1) ou F(2)), retornando os valores e somando-os;
}
console.log('função recursiva:', fibonacciRecursive(10));

