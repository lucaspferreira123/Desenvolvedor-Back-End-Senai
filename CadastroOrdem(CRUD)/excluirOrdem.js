const readline = require('readline-sync');
const fs = require('fs');

const excluirOrdem = async (cronograma) => {
    const visualizar = require ('./verOrdem');
    const ordens = await visualizar.objOrdens(cronograma);

    await visualizar.mostrarOrdens(ordens);

    let n = ordens.length;

    if (n >= 1) {
        let opcao = readline.questionInt("\nselecione uma opção para excluir");

        while (opcao < 1 || opcao > n + 1) {
            console.log("OPÇÃO INVALIDA");
            let opcao = readline.questionInt("\nselecione uma opção para continuar")
        }

        ordens.splice(opcao - 1,1);

        const ordemJSON = JSON.stringify(ordens.filter(Boolean));

        try {
            fs.writeFileSync(cronograma, ordemJSON);
            console.log("tarefa excluir com sucesso");
            
        } catch (err) {
            console.log("erro ao excluir a tarefa",err);    
        }
    }
}
module.exports = excluirOrdem;