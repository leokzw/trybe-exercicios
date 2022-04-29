/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
***** */

let x = 5;
let y = "";

for (let i = 0; i < x; i += 1) {
    y += "*";
    console.log(y);
}

/* Resolução do gabarito:

let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    console.log(inputLine);
    inputLine = inputLine + symbol;
}; */