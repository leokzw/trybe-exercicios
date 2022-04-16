let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let imparQtd = 0;

 for (let i = 0; i < numbers.length; i += 1) {
     if (numbers[i] % 2 !== 0) {
         imparQtd += 1;
     }
 }

 if (imparQtd > 0) {
    console.log("A quantidade de números ímpares é:" + " " + imparQtd);
 } else {
     console.log("nenhum valor ímpar encontrado");
 }