
let anguloA = 38;
let anguloB = 60;
let anguloC = 82;

let somaDosAngulos = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosPositivos){
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
  console.log("Erro, ângulo inválido");
}