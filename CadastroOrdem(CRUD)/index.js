// PASSO A PASSO PARA IMPORTAR O JSON NO TERMINAL
// npm init -y
// npm install readline-sync
// npm install filesystem

const readline = require("readline-sync");
const fs = require("fs");

const percursoOrdem = './listaOrdem.json';

const adcionarOrdem = require('./adicionarOrdem.js');
const verOrdem = require('./verOrdem.js');
const alterarOrdem = require('./alterarOrdem.js');
const excluirOrdem = require('./excluirOrdem.js');



const criarOrdem = async (cronograma) => {
    if (!fs.existsSync(cronograma)) { 
        try {
            fs.writeFileSync(cronograma, "[]")
        } catch (err) {
            console.error("Erro ao criar o arquivo:", err);
        }
    }
}
const ExibirMenuOrdens = async () => {
    console.log("______________________________________________");
    const opcao = readline.questionInt(" 1- Criar Ordem;\n 2- Ver Ordem;\n 3- Alterar Ordem;\n 4- Excluir Ordem;\n\n Escolha uma opção:");
    console.log("______________________________________________");

    switch (opcao) {
        case 1:
            await adcionarOrdem(percursoOrdem, verOrdem.objOrdens(percursoOrdem));
            break;
        case 2:
            await verOrdem.mostrarOrdens(verOrdem.objOrdens(percursoOrdem));
            break;
        case 3:
            await alterarOrdem(percursoOrdem);
            break;
        case 4:
            await excluirOrdem(percursoOrdem);
            break;
        case 5:
            return false;
            break;
        default:
            console.log("Opção inválida");
}


    return true;

};
const MenuPrincipal = async ()=>{
    let mostrar = true;
    while(mostrar){
        mostrar = await ExibirMenuOrdens();
    }
}
const main = async () =>{
    await criarOrdem(percursoOrdem);
    await MenuPrincipal();
}
main();
