//Exercicio 1: Calculadora com arrow functions
const adicionar = (valor) => {
  document.getElementById("display").value += valor;
};

const limpar = () => {
  document.getElementById("display").value = "";
};

const calcular = () => {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Erro";
  }
};

// Exercício 2: Verificar idade para carteira
document.getElementById("ex02").addEventListener("click", function () {
  let idade = Number(prompt("Digite sua idade:"));

  if (isNaN(idade) || idade < 0) {
    alert(" Por favor, digite uma idade válida!");
    return;
  }

  if (idade >= 18) {
    alert(`Com ${idade} anos, você pode tirar carteira de motorista!`);
  } else {
    alert(`Com ${idade} anos, você não pode tirar carteira.`);
  }
});

// Exercício 3: Ordenar três números
document.getElementById("ex03").addEventListener("click", function () {
  let num1 = Number(prompt("Digite o primeiro número:"));
  let num2 = Number(prompt("Digite o segundo número:"));
  let num3 = Number(prompt("Digite o terceiro número:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, digite números válidos!");
    return;
  }

  // Coloca os números em um array e ordena
  const numeros = [num1, num2, num3];
  numeros.sort((a, b) => a - b);

  alert(`Números em ordem crescente: ${numeros.join(", ")}`);
});

// Exercício 4: Converter horas para minutos
document.getElementById("ex04").addEventListener("click", function () {
  let horas = Number(prompt("Digite as horas para converter em minutos:"));

  if (isNaN(horas) || horas < 0) {
    alert("Por favor, digite um valor válido!");
    return;
  }

  const minutos = horas * 60;
  alert(`${horas} hora(s) = ${minutos} minuto(s)`);
});

// Exercício 5: Calcular cédulas
document.getElementById("ex05").addEventListener("click", function () {
  let valor = Number(prompt("Digite o valor em R$ para calcular as cédulas:"));

  if (isNaN(valor) || valor < 0) {
    alert(" Por favor, digite um valor válido!");
    return;
  }

  let resto = valor;
  const cedulas = [200, 100, 50, 20, 10, 5, 1];
  const nomes = ["R$200", "R$100", "R$50", "R$20", "R$10", "R$5", "R$1"];
  let resultado = `Para o valor R$ ${valor}:\n\n`;

  for (let i = 0; i < cedulas.length; i++) {
    const quantidade = Math.floor(resto / cedulas[i]);
    if (quantidade > 0) {
      resultado += `${quantidade} cédula(s) de ${nomes[i]}\n`;
      resto = resto % cedulas[i];
    }
  }

  alert(resultado);
});

// Exercício 6: Calcular raiz quadrada
document.getElementById("ex06").addEventListener("click", function () {
  let numero = Number(
    prompt("Digite um número para calcular a raiz quadrada:")
  );

  if (isNaN(numero) || numero < 0) {
    alert("Por favor, digite um número válido (não negativo)!");
    return;
  }

  const raizQuadrada = Math.sqrt(numero);
  alert(`A raiz quadrada de ${numero} é ${raizQuadrada.toFixed(2)}`);
});
