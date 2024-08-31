const readlineSync = require("readline-sync");


function calcularDescontoINSS(salarioBruto) {
  let desconto;
  if (salarioBruto <= 1412.0) {
    desconto = salarioBruto * 0.075;
  } else if (salarioBruto <= 2666.68) {
    desconto = salarioBruto * 0.09 - 21.18;
  } else if (salarioBruto <= 4000.03) {
    desconto = salarioBruto * 0.12 - 101.18;
  } else if (salarioBruto <= 7786.02 ) {
    desconto = salarioBruto * 0.14 - 181.18;
  } else {
    desconto = 7786.02 * 0.14; 
  }

  return desconto;
}

function calcularDescontoIR(salarioBase) {
  let descontoIR;
  const faixa1 = 2112.00;
  const faixa2 = 2826.65;
  const faixa3 = 3751.05;
  const faixa4 = 4664.68;

  if (salarioBase <= faixa1) {
    descontoIR = 0;
  } else if (salarioBase <= faixa2) {
    descontoIR = (salarioBase - faixa1) * 0.075 - 158.40;
  } else if (salarioBase <= faixa3) {
    descontoIR = (salarioBase - faixa2) * 0.15 - 370.40;
  } else if (salarioBase <= faixa4) {
    descontoIR = (salarioBase - faixa3) * 0.225 - 651.73;
  } else {
    descontoIR = (salarioBase - faixa4) * 0.275 - 884.96;
  }

  return descontoIR;
}


function calcularSalarioLiquido(salarioBruto) {
  const descontoINSS = calcularDescontoINSS(salarioBruto);
  const salarioBase = salarioBruto - descontoINSS;
  const descontoIR = calcularDescontoIR(salarioBase);
  const salarioLiquido = salarioBase - descontoIR;

  return {
    salarioBruto,
    descontoINSS,
    salarioBase,
    descontoIR,
    salarioLiquido,
  };
}

const salarioBruto = readlineSync.questionFloat("Insira o salário do funcionario: ");

if (isNaN(salarioBruto) || salarioBruto <= 0) {
  console.log("Fornecer um valor válido para o salário do funcionario.");
} else {
  const resultado = calcularSalarioLiquido(salarioBruto);
  console.log(`salario cheio: R$ ${resultado.salarioBruto.toFixed(2)}`);
  console.log(`Desconto INSS: R$ ${resultado.descontoINSS.toFixed(2)}`);
  console.log(`Salário Base para IR: R$ ${resultado.salarioBase.toFixed(2)}`);
  console.log(`Desconto IR: R$ ${resultado.descontoIR.toFixed(2)}`);
  console.log(`Salário livre de Impostos: R$ ${resultado.salarioLiquido.toFixed(2)}`);
}


