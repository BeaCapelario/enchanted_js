// Exercício 1 - Calcular Imposto de Renda (Faixas)
document.getElementById("ex01").addEventListener("click", calcularImpostoRenda);
function calcularImpostoRenda() {
  let salario = parseFloat(prompt("Digite o salário bruto:"));
  let imposto = 0;

  if (salario <= 2112.00) {
    imposto = 0;
  } else if (salario <= 2826.65) {
    imposto = (salario * 0.075) - 158.40;
  } else if (salario <= 3751.05) {
    imposto = (salario * 0.15) - 370.40;
  } else if (salario <= 4664.68) {
    imposto = (salario * 0.225) - 651.73;
  } else {
    imposto = (salario * 0.275) - 884.96;
  }

  imposto = Math.max(imposto, 0);
  alert(`Imposto de Renda: R$ ${imposto.toFixed(2)}`);

  return imposto;
}

// Exercício 2 - Calcular INSS
document.getElementById("ex02").addEventListener("click", calcularINSS);
function calcularINSS() {
  let salario = parseFloat(prompt("Digite o salário bruto:"));
  let inss = 0;

  if (salario <= 1412.00) {
    inss = salario * 0.075;
  } else if (salario <= 2666.68) {
    inss = (1412.00 * 0.075) + ((salario - 1412.00) * 0.09);
  } else if (salario <= 4000.03) {
    inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((salario - 2666.68) * 0.12);
  } else if (salario <= 7786.02) {
    inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((salario - 4000.03) * 0.14);
  } else {
    inss = (1412.00 * 0.075) + ((2666.68 - 1412.00) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((7786.02 - 4000.03) * 0.14);
  }

  alert(`Valor do INSS: R$ ${inss.toFixed(2)}`);

  return inss;
}

// Exercício 3 - Calcular Juros Compostos
document.getElementById("ex03").addEventListener("click", calcularJurosCompostos);
function calcularJurosCompostos() {
  let capital = parseFloat(prompt("Digite o capital inicial:"));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):")) / 100;
  let tempo = parseInt(prompt("Digite o tempo em meses:"));
  
  let montante = capital * Math.pow(1 + taxa, tempo);
  let juros = montante - capital;

  alert(`Juros Compostos: R$ ${juros.toFixed(2)}`);

  return juros;
}

// Exercício 4 - Simular Financiamento
document.getElementById("ex04").addEventListener("click", simularFinanciamento);
function simularFinanciamento() {
  let valor = parseFloat(prompt("Digite o valor do financiamento:"));
  let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):")) / 100;
  let parcelas = parseInt(prompt("Digite o número de parcelas:"));
  
  let prestacao = valor * (taxa * Math.pow(1 + taxa, parcelas)) / (Math.pow(1 + taxa, parcelas) - 1);

  alert(`Valor da Parcela: R$ ${prestacao.toFixed(2)}`);

  return prestacao;
}