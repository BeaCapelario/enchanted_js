document.getElementById('ex01').addEventListener('click', function () {
    idade = Number(prompt("Insira sua idade:"))

    if (idade >= 18) {
        alert("Maior de idade")
    } else {
        alert("Menor de idade")
    }
});

document.getElementById('ex02').addEventListener('click', function () {
    num = Number(prompt("Digite um número inteiro:"))

    if (num % 2 == 0) {
        alert("O número é par!")
    } else {
        alert("O número é ímpar!")
    }
});

document.getElementById('ex03').addEventListener('click', function () {
    num1 = Number(prompt("Insira o 1º número:"))
    num2 = Number(prompt("Insira o 2º número:"))

    if (num1 > num2) {
        alert("O 1º número é maior")
    } else if (num1 == num2) {
        alert("Os numeros são iguais!")
    } else {
        alert("o 2º número é maior")
    }
});

document.getElementById('ex04').addEventListener('click', function () {
    let senhaCorreta = "senha123"

    let senhaDigitada = prompt("Digite a senha:")

    if (senhaCorreta == senhaDigitada) {
        alert("Acesso Permitido!")
    } else {
        alert("Acesso Negado!")
    }
});

document.getElementById('ex05').addEventListener('click', function () {
    temp = prompt("Digite a temperatura:")

    if (temp < 18) {
        alert("Frio")
    } else if (temp >= 18 && temp <= 25) {
        alert("Agrádavel")
    } else {
        alert("Quente")
    }
});