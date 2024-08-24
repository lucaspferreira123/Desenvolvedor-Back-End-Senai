const readline = require("readline-sync");
const fs = require("fs");

const adcionarOrdem = async (cronograma, listaOrdem) => {
    let ordens = await listaOrdem;
    let idOrdem = ordens.length + 1;
    let novaOrdem = {
        id: idOrdem,
        nome: readline.question('\nNome da Ordem:'),
        data: readline.question('\nData de Criação:'),
        tipo: readline.question('\nTipo da Ordem:'),
        status: 0 
    }
    ordens.push(novaOrdem);

    const ordemJSON = JSON.stringify(ordens);

    try{
        fs.writeFileSync(cronograma, ordemJSON);
        console.error("Ordem Cadastrada");
    }catch(err){
        console.error("Erro ao Cadastrar uma Ordem:",err);
    }

}

module.exports = adcionarOrdem;
