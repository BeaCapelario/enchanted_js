document.getElementById('ex01').addEventListener('click', function () {
    nota1 = Number(prompt("Insira a 1ª nota:"))
    nota2 = Number(prompt("Insira a 2ª nota:"))

    let media = ((nota1 + nota2) / 2)

    if (media > 6) {
        alert(`A média é: ${media}. Está acima da média`)
    } else {
        alert(`A média é: ${media}. Não está acima da média`)
    }

    if (nota1 % 2 == 0) {
        alert("Nota 1 é par")
    } else {
        alert("Nota 1 é ímpar")
    }

    if (nota2 % 2 == 0) {
        alert("Nota 2 é par")
    } else {
        alert("Nota 2 é ímpar")
    }
});

document.getElementById('ex02').addEventListener('click', function () {
    peso = Number(prompt("Digite seu peso:"))
    altura = Number(prompt("Digite sua altura:"))

    let calculo = peso / (altura * altura)

    if (calculo < 18.5) {
        alert(`Seu IMC é ${calculo}. Você está abaixo do peso`)
    } else if (calculo > 18.5 && calculo < 24.9) {
        alert(`Seu IMC é ${calculo}. Você está com o peso normal`)
    } else if (calculo > 25 && calculo < 29.9) {
        alert(`Seu IMC é ${calculo}. Você está em sobrepeso`)
    } else if (calculo > 30 && calculo < 34.9) {
        alert(`Seu IMC é ${calculo}. Você está em Obesidade Grau I`)
    } else if (calculo > 35 && calculo < 39.9) {
        alert(`Seu IMC é ${calculo}. Você está em Obesidade Grau II `)
    } else {
        alert(`Seu IMC é ${calculo}. Você está Obesidade Grau III`)
    }
});

document.getElementById('ex03').addEventListener('click', function () {
    ano = prompt("Insira o ano desejado:")

    if (ano % 4 == 0 || ano % 400 == 0) {
        alert("O ano é bissexto!")
    } else {
        alert("O ano não é bissexto!")
    }
});

document.getElementById('ex04').addEventListener('click', function () {
    moedaReal = Number(prompt("Digite o valor a ser convertido:"))

    conversaoEuro = (moedaReal * 0.16)

    alert(`O valor em real é: R$ ${moedaReal}`)
    alert(`O valor convertido em euro é: € ${conversaoEuro}`)
});