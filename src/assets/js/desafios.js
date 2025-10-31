// Exercício 1: Cálculo do IMC
document.getElementById("ex01").addEventListener("click", function () {
  let peso = Number(prompt("Digite seu peso em kg:"));
  let altura = Number(prompt("Digite sua altura em metros:"));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, digite valores válidos!");
    return;
  }

  const calcular_imc = (p, a) => p / (a * a);
  const imc = calcular_imc(peso, altura);

  alert(
    `Seu IMC é: ${imc.toFixed(
      2
    )}\n\nClassificação:\nAbaixo de 18,5: Magreza\n18,5 a 24,9: Normal\n25 a 29,9: Sobrepeso\n30 a 34,9: Obesidade Grau I\n35 a 39,9: Obesidade Grau II\nAcima de 40: Obesidade Grau III`
  );
});

// Exercício 2: Cálculo do Raio de um Círculo
document.getElementById("ex02").addEventListener("click", function () {
  let area = Number(prompt("Digite a área do círculo:"));

  if (isNaN(area) || area <= 0) {
    alert("Por favor, digite uma área válida!");
    return;
  }

  const raio_circulo = (a) => Math.sqrt(a / Math.PI);
  const raio = raio_circulo(area);

  alert(`Para uma área de ${area}, o raio do círculo é: ${raio.toFixed(2)}`);
});

// Exercício 3: Cálculo do Volume de um Cilindro
document.getElementById("ex03").addEventListener("click", function () {
  let raio = Number(prompt("Digite o raio da base do cilindro:"));
  let altura = Number(prompt("Digite a altura do cilindro:"));

  if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
    alert("Por favor, digite valores válidos!");
    return;
  }

  const volume_cilindro = (r, h) => Math.PI * r * r * h;
  const volume = volume_cilindro(raio, altura);

  alert(`O volume do cilindro é: ${volume.toFixed(2)}`);
});

// Exercício 4: Cálculo da Área de um Quadrado
document.getElementById("ex04").addEventListener("click", function () {
  let lado = Number(prompt("Digite o lado do quadrado:"));

  if (isNaN(lado) || lado <= 0) {
    alert("Por favor, digite um valor válido!");
    return;
  }

  const area_quadrado = (l) => l * l;
  const area = area_quadrado(lado);

  alert(`A área do quadrado é: ${area}`);
});
