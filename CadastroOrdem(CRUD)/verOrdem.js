const readline = require("readline-sync");
const fs = require("fs");

const controller = {

    objOrdens: async (cronograma) => {
        try {

            const conteudo = fs.readFileSync(cronograma, 'utf-8');

            const ordens = JSON.parse(conteudo);
            
            return ordens;

        } catch (err) {
            console.error('Erro ao processar as ordens:', err);
        }
    },

    mostrarOrdens: async (objOrdens) => { 
        const ordens = await objOrdens;

        let n = ordens.length;

        if (n >= 1) {
            let status = "";

            for (let i = 0; i <= n - 1; i++) {
                status = ordens[i].status === 0 ? "NÃO FINALIZADA " : "FINALIZADA ";
                console.log(`\n ID: ${i + 1} - ${ordens[i].nome}| ${ordens[i].tipo} | data para finalizar: ${ordens[i].data} |  ${status} `);
            }
        } else {
            console.error("Não temos ordens");

        }
    }
}

module.exports = controller;