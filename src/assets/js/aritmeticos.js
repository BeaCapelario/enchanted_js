document.getElementById('ex01').addEventListener('click', function () {
    let num1 = Number(prompt("Insira o 1º número:"));
    let num2 = Number(prompt("Insira o 2º número:"));

    let soma = num1 + num2;
    let sub = num1 - num2;
    let multi = num1 * num2;
    let divisao = num1 / num2;

    alert(`O resultado da soma é: ${soma}`);
    alert(`O resultado da subtração é: ${sub}`);
    alert(`O resultado da multiplicação é: ${multi}`);
    alert(`O resultado da divisão é: ${divisao}`);
});

document.getElementById('ex02').addEventListener('click', function () {
    let nota1 = Number(prompt("Inisra a 1ª nota:"))
    let nota2 = Number(prompt("Inisra a 2ª nota:"))
    let nota3 = Number(prompt("Inisra a 3ª nota:"))

    let soma = nota1 + nota2 + nota3
    let media = soma / 3

    alert(`A média do aluno é: ${media}`)

});

document.getElementById('ex03').addEventListener('click', function () {
    largura = Number(prompt("Insira a medida da largura da parede:"))
    altura = Number(prompt("Insira a medida da altura da parede:"))

    let area = largura * altura;
    let litros_tinta = area / 2;

    alert(`A quantidade necessária para pintar a parede é: ${litros_tinta} litros`)

});

document.getElementById('ex04').addEventListener('click', function () {
    num1 = Number(prompt("Insira o 1º número:"))
    num2 = Number(prompt("Insira o 2º número:"))

    let diferenca = num2 - num1

    alert(`A diferenças entre os números é ${diferenca}`)
});

document.getElementById('ex05').addEventListener('click', function () {
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

if (nota2 !== 0 && nota1 % nota2 === 0) {
    alert(`${nota1} é múltiplo de ${nota2}`);
} else if (nota2 === 0) {
    alert("Não é possível dividir por zero!");
} else {
    alert(`${nota1} não é múltiplo de ${nota2}`);
}

});

document.getElementById('ex06').addEventListener('click', function () {
    celsius = Number(prompt("Insira a temperatura em Celsius"))

    conversao = ((celsius * 9 / 5) + 32)

    alert(`A temperatura em Fahrenheit é ${conversao} °F`)
});

document.getElementById('ex07').addEventListener('click', function () {
    base = Number(prompt("Insira o valor da base:"))
    altura = Number(prompt("Insira o valor da altura:"))

    calculoArea = base * altura

    alert(`A area do retangulo é: ${calculoArea}`)
});

