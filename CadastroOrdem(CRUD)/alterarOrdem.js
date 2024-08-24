const readline = require('readline-sync');
const fs = require('fs');

const alterarOrdem = async (cronograma) => {
    const verOrdem = require ('./verOrdem');
    const ordens = await verOrdem.objOrdens(cronograma);

    await verOrdem.mostrarOrdens(ordens);

    let n = ordens.length;

    if (n >= 1) {
        let opcao = readline.questionInt("\nselecione uma opção para alterar os status da ordem");

        while (opcao < 1 || opcao > n + 1) {
            console.log("OPÇÃO INVALIDA");
            let opcao = readline.questionInt("\nselecione uma opção para continuar")

        }
        ordens[opcao-1].status = ordens[opcao-1].status === 0 ? 1 : 0;

        const ordemJSON = JSON.stringify(ordens);

        try {
            fs.writeFileSync(cronograma, ordemJSON);
            console.log("ordem ALTERADA com sucesso");
            
        } catch (err) {
            console.log("ERRO ao ALTERADA a ordem",err);
            
        }
    }
}
module.exports = alterarOrdem;