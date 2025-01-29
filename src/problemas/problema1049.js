/*
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  
Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.
*/

let palavraUm = "vertebrado"; //lines.shift(); 
let palavraDois = "mamifero"; //lines.shift();
let palavraTres = "onivoro"; //lines.shift(); 

if (palavraUm === "vertebrado") {
    if (palavraDois === "ave") {
        if (palavraTres === "carnivoro") {
            console.log("aguia");
        } else {
            console.log("pomba");
        }
    } else { 
        if (palavraTres === "onivoro") {
            console.log("homem");
        } else {
            console.log("vaca");
        }
    }
} else { 
    if (palavraDois === "inseto") {
        if (palavraTres === "hematofago") {
            console.log("pulga");
        } else {
            console.log("lagarta");
        }
    } else { 
        if (palavraTres === "hematofago") {
            console.log("sanguessuga");
        } else {
            console.log("minhoca");
        }
    }
}
