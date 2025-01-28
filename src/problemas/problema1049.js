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
