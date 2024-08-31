const readline = require("readline-sync");

let materia = readline.question('Digite a materia:');
let qtd = readline.questionFloat('Digite a qtd de notas:');
let notas = [];

for(let i=0; i<qtd;i++){
    let novaNota = readline.questionFloat('digite a nota:');
    notas.push(novaNota);
}
let media = notas.reduce((acc, crr) => acc + crr, 0) / notas.length;

console.log('materia:',materia);
console.log('media:',media);
