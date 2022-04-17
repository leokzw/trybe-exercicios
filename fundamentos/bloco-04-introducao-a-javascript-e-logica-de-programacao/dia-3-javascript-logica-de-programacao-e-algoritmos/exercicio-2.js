// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
let invertedWord = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
    invertedWord += word[i];
}

console.log(invertedWord);

/* Solução do gabarito:

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord); */