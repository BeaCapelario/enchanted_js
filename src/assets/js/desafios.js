// Exercício 1 - Cálculo do IMC
document.getElementById("ex01").addEventListener("click", calculoIMC);
function calculoIMC() {
  let peso = prompt("Digite seu peso:");
  let altura = prompt("Digite sua altura:");
  let imc = peso / (altura * altura);

  alert(`"Seu IMC é:" ${imc.toFixed(2)}`);

  return imc;
}

// Exercício 2 - Calculo do Raio de um Círculo
document.getElementById("ex02").addEventListener("click", raioCirculo);
function raioCirculo() {
  let area = prompt("Digite a área do círculo:");
  let raio = Math.sqrt(area / Math.PI);
  alert(`O raio do círculo é: ${raio.toFixed(2)}`);

  return raio;
}

// Exercício 3 - Calculo do Volume do Cilindro
document.getElementById("ex03").addEventListener("click", volumeCilindro);
function volumeCilindro() {
  let raio = parseFloat(prompt("Digite o raio da base do cilindro:"));
  let altura = parseFloat(prompt("Digite a altura do cilindro:"));
  let volume = Math.PI * Math.pow(raio, 2) * altura;
  alert(`O volume do cilindro é: ${volume.toFixed(2)}`);

  return volume;
}

// Exercício 4 - Cálculo da Area de um Quadrado
document.getElementById("ex04").addEventListener("click", areaQuadrado);
function areaQuadrado() {
  let lado = prompt("Digite o tamanho do lado do quadrado:");
  let area = lado * lado;

  alert(`'A área do quadrado é:' ${area.toFixed(2)}`);

  return area;
}
