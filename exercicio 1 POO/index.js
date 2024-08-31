const readline = require("readline-sync");
const fs = require("fs");

class Pessoa {
    nome;
    idade;
    peso;
    altura;

    constructor(pNome, pIdade, pPeso, pAltura) {
        this.nome = pNome;
        this.idade = pIdade;
        this.peso = pPeso;
        this.altura = pAltura;
    }

    CalcularIMC() {
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }
}

function CriarPessoa() {
    let nomePessoa = readline.question('Digite seu nome: ');
    let idadePessoa = readline.questionFloat('Digite sua idade: ');
    let pesoPessoa = readline.questionFloat('Digite seu peso em quilos: ');
    let alturaPessoa = readline.questionFloat('Digite sua altura em metros: ');
    return new Pessoa(nomePessoa, idadePessoa, pesoPessoa, alturaPessoa);
}


let pessoa = CriarPessoa();


let imc = pessoa.CalcularIMC();

console.log('Seus dados pessoais:', pessoa);
console.log('Seu IMC é:', imc);
